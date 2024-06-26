import $ from 'jquery';
import {opt, laddaStart, scrollTo, booklyAjax, requestCancellable} from './shared.js';
import stepService from './service_step.js';
import stepExtras from './extras_step.js';
import stepRepeat from './repeat_step.js';
import stepCart from './cart_step.js';
import stepDetails from './details_step.js';
import Calendar from "../../../../../../../assets/js/frontend/components/Calendar.svelte";

/**
 * Time step.
 */
export default function stepTime(params, error_message) {
    if (opt[params.form_id].no_time || opt[params.form_id].skip_steps.time) {
        if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_extras) {
            stepExtras({form_id: params.form_id});
        } else if (!opt[params.form_id].skip_steps.cart) {
            stepCart({
                form_id: params.form_id,
                add_to_cart: true,
                from_step: (params && params.prev_step) ? params.prev_step : 'service'
            });
        } else {
            stepDetails({form_id: params.form_id, add_to_cart: true});
        }
        return;
    }
    var data = {
            action: 'bookly_render_time',
        },
        $container = opt[params.form_id].$container;
    if (opt[params.form_id].skip_steps.service && opt[params.form_id].use_client_time_zone) {
        // If Service step is skipped then we need to send time zone offset.
        data.time_zone = opt[params.form_id].timeZone;
        data.time_zone_offset = opt[params.form_id].timeZoneOffset;
    }
    $.extend(data, params);
    let columnizerObserver = false;
    let lastObserverTime = 0;
    let lastObserverWidth = 0;
    let loadedMonths = [];

    // Build slots html
    function prepareSlotsHtml(slots_data, selected_date) {
        var response = {};
        $.each(slots_data, function (group, group_slots) {

            var html = '<button class="bookly-day" value="' + group + '">' + group_slots.title + '</button>';
            $.each(group_slots.slots, function (id, slot) {
                html += '<button value="' + JSON.stringify(slot.data).replace(/"/g, '&quot;') + '" data-group="' + group + '" class="bookly-hour' + (slot.special_hour ? ' bookly-slot-in-special-hour' : '') + (slot.status == 'waiting-list' ? ' bookly-slot-in-waiting-list' : (slot.status == 'booked' ? ' booked' : '')) + '"' + (slot.status == 'booked' ? ' disabled' : '') + '>' +
                    '<span class="ladda-label bookly-time-main' + (slot.data[0][2] == selected_date ? ' bookly-bold' : '') + '">' +
                    '<i class="bookly-hour-icon"><span></span></i>' + slot.time_text + '</span>' +
                    '<span class="bookly-time-additional' + (slot.status == 'waiting-list' ? ' bookly-waiting-list' : '') + '"> ' + slot.additional_text + '</span>' +
                    '</button>'
            });
            response[group] = html;
        });

        return response;
    }

    let requestRenderTime = requestCancellable(),
        requestSessionSave = requestCancellable();

    requestRenderTime.booklyAjax({data})
        .then(response => {
            BooklyL10n.csrf_token = response.csrf_token;

            $container.html(response.html);
            var $columnizer_wrap = $('.bookly-columnizer-wrap', $container),
                $columnizer = $('.bookly-columnizer', $columnizer_wrap),
                $time_next_button = $('.bookly-time-next', $container),
                $time_prev_button = $('.bookly-time-prev', $container),
                $current_screen = null,
                slot_height = 36,
                column_width = response.time_slots_wide ? 205 : 127,
                column_class = response.time_slots_wide ? 'bookly-column bookly-column-wide' : 'bookly-column',
                columns = 0,
                screen_index = 0,
                has_more_slots = response.has_more_slots,
                show_calendar = response.show_calendar,
                is_rtl = response.is_rtl,
                $screens,
                slots_per_column,
                columns_per_screen,
                show_day_per_column = response.day_one_column,
                slots = prepareSlotsHtml(response.slots_data, response.selected_date),
                customJS = response.custom_js
            ;
            // 'BACK' button.
            $('.bookly-js-back-step', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                if (!opt[params.form_id].skip_steps.extras && !opt[params.form_id].no_extras) {
                    if (opt[params.form_id].step_extras == 'before_step_time') {
                        stepExtras({form_id: params.form_id});
                    } else {
                        stepService({form_id: params.form_id});
                    }
                } else {
                    stepService({form_id: params.form_id});
                }
            }).toggle(!opt[params.form_id].skip_steps.service || !opt[params.form_id].skip_steps.extras);

            $('.bookly-js-go-to-cart', $container).on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                laddaStart(this);
                stepCart({form_id: params.form_id, from_step: 'time'});
            });

            // Time zone switcher.
            $('.bookly-js-time-zone-switcher', $container).on('change', function (e) {
                opt[params.form_id].timeZone = this.value;
                opt[params.form_id].timeZoneOffset = undefined;
                showSpinner();
                requestRenderTime.cancel();
                if (columnizerObserver) {
                    columnizerObserver.disconnect();
                }
                stepTime({
                    form_id: params.form_id,
                    time_zone: opt[params.form_id].timeZone
                });
            });

            if (show_calendar) {
                let date = response.current_date ? (response.first_available_date ? response.first_available_date : response.current_date) : (response.selected_date ? response.selected_date.substring(0, 10) : $('.bookly-js-selected-date', $container).data('value'));
                loadedMonths.push(moment(date).month() + '-' + moment(date).year());
                let _cal = new Calendar({
                    target: $('.bookly-js-slot-calendar', $container).get(0),
                    props: {
                        datePicker: BooklyL10nGlobal.datePicker,
                        date: date,
                        startDate: new Date(date),
                        limits: {
                            start: response.date_min ? new Date(response.date_min[0], response.date_min[1], response.date_min[2]) : new Date(),
                            end: response.date_max ? new Date(response.date_max[0], response.date_max[1], response.date_max[2]) : false
                        },
                        holidays: response.disabled_days,
                        loadedMonths: loadedMonths,
                        loading: false,
                        border: true,
                    }
                });

                function calendarMonthChange(date) {
                    _cal.loading = true;
                    requestRenderTime.cancel();
                    stepTime({
                        form_id: params.form_id,
                        selected_date: date
                    });
                    showSpinner();
                }

                _cal.$on('change', function () {
                    if (moment(_cal.date).month() !== moment(date).month()) {
                        calendarMonthChange(_cal.date);
                    } else {
                        $columnizer.html(slots[_cal.date]).css('left', '0px');
                        columns = 0;
                        screen_index = 0;
                        $current_screen = null;
                        initSlots();
                        $time_prev_button.hide();
                        $time_next_button.toggle($screens.length != 1);
                    }
                });

                _cal.$on('month-change', function () {
                    calendarMonthChange(_cal.year + '-' + (_cal.month < 9 ? '0' + (_cal.month + 1) : _cal.month + 1) + '-01');
                });

                $columnizer.html(slots[date]);
            } else {
                // Insert all slots.
                var slots_data = '';
                $.each(slots, function (group, group_slots) {
                    slots_data += group_slots;
                });
                $columnizer.html(slots_data);
            }

            if (response.has_slots) {
                if (error_message) {
                    $container.find('.bookly-label-error').html(error_message);
                } else {
                    $container.find('.bookly-label-error').hide();
                }

                // Calculate number of slots per column.
                slots_per_column = parseInt($(window).height() / slot_height, 10);
                if (slots_per_column < 4) {
                    slots_per_column = 4;
                } else if (slots_per_column > 10) {
                    slots_per_column = 10;
                }
                var hammertime = $('.bookly-time-step', $container).hammer({swipe_velocity: 0.1});

                hammertime.on('swipeleft', function () {
                    if ($time_next_button.is(':visible')) {
                        $time_next_button.trigger('click');
                    }
                });

                hammertime.on('swiperight', function () {
                    if ($time_prev_button.is(':visible')) {
                        $time_prev_button.trigger('click');
                    }
                });

                $time_next_button.on('click', function (e) {
                    $time_prev_button.show();
                    if ($screens.eq(screen_index + 1).length) {
                        $columnizer.animate(
                            {left: (is_rtl ? '+' : '-') + (screen_index + 1) * $current_screen.width()},
                            {duration: 800}
                        );

                        $current_screen = $screens.eq(++screen_index);
                        $columnizer_wrap.animate(
                            {height: $current_screen.height()},
                            {duration: 800}
                        );

                        if (screen_index + 1 === $screens.length && !has_more_slots) {
                            $time_next_button.hide();
                        }
                    } else if (has_more_slots) {
                        // Do ajax request when there are more slots.
                        var $button = $('> button:last', $columnizer);
                        if ($button.length === 0) {
                            $button = $('.bookly-column:hidden:last > button:last', $columnizer);
                            if ($button.length === 0) {
                                $button = $('.bookly-column:last > button:last', $columnizer);
                            }
                        }

                        // Render Next Time
                        var data = {
                                action: 'bookly_render_next_time',
                                form_id: params.form_id,
                                last_slot: $button.val()
                            },
                            ladda = laddaStart(this);

                        booklyAjax({
                            type: 'POST',
                            data: data
                        }).then(response => {
                            if (response.has_slots) { // if there are available time
                                has_more_slots = response.has_more_slots;
                                var slots_data = '';
                                $.each(prepareSlotsHtml(response.slots_data, response.selected_date), function (group, group_slots) {
                                    slots_data += group_slots;
                                });
                                var $html = $(slots_data);
                                // The first slot is always a day slot.
                                // Check if such day slot already exists (this can happen
                                // because of time zone offset) and then remove the first slot.
                                var $first_day = $html.eq(0);
                                if ($('button.bookly-day[value="' + $first_day.attr('value') + '"]', $container).length) {
                                    $html = $html.not(':first');
                                }
                                $columnizer.append($html);
                                initSlots();
                                $time_next_button.trigger('click');
                            } else { // no available time
                                $time_next_button.hide();
                            }
                            ladda.stop();
                        }).catch(response => {
                            $time_next_button.hide();
                            ladda.stop();
                        });

                    }
                });

                $time_prev_button.on('click', function () {
                    $time_next_button.show();
                    $current_screen = $screens.eq(--screen_index);
                    $columnizer.animate(
                        {left: (is_rtl ? '+' : '-') + screen_index * $current_screen.width()},
                        {duration: 800}
                    );
                    $columnizer_wrap.animate(
                        {height: $current_screen.height()},
                        {duration: 800}
                    );
                    if (screen_index === 0) {
                        $time_prev_button.hide();
                    }
                });
            }
            scrollTo($container, params.form_id);

            function showSpinner() {
                $('.bookly-time-screen,.bookly-not-time-screen', $container).addClass('bookly-spin-overlay');
                var opts = {
                    lines: 11, // The number of lines to draw
                    length: 11, // The length of each line
                    width: 4,  // The line thickness
                    radius: 5   // The radius of the inner circle
                };
                if ($screens) {
                    new Spinner(opts).spin($screens.eq(screen_index).get(0));
                } else {
                    // Calendar not available month.
                    new Spinner(opts).spin($('.bookly-not-time-screen', $container).get(0));
                }
            }

            function initSlots() {
                var $buttons = $('> button', $columnizer),
                    slots_count = 0,
                    max_slots = 0,
                    $button,
                    $column,
                    $screen;

                if (show_day_per_column) {
                    /**
                     * Create columns for 'Show each day in one column' mode.
                     */
                    while ($buttons.length > 0) {
                        // Create column.
                        if ($buttons.eq(0).hasClass('bookly-day')) {
                            slots_count = 1;
                            $column = $('<div class="' + column_class + '" />');
                            $button = $($buttons.splice(0, 1));
                            $button.addClass('bookly-js-first-child');
                            $column.append($button);
                        } else {
                            slots_count++;
                            $button = $($buttons.splice(0, 1));
                            // If it is last slot in the column.
                            if (!$buttons.length || $buttons.eq(0).hasClass('bookly-day')) {
                                $button.addClass('bookly-last-child');
                                $column.append($button);
                                $columnizer.append($column);
                            } else {
                                $column.append($button);
                            }
                        }
                        // Calculate max number of slots.
                        if (slots_count > max_slots) {
                            max_slots = slots_count;
                        }
                    }
                } else {
                    /**
                     * Create columns for normal mode.
                     */
                    while (has_more_slots ? $buttons.length > slots_per_column : $buttons.length) {
                        $column = $('<div class="' + column_class + '" />');
                        max_slots = slots_per_column;
                        if (columns % columns_per_screen == 0 && !$buttons.eq(0).hasClass('bookly-day')) {
                            // If this is the first column of a screen and the first slot in this column is not day
                            // then put 1 slot less in this column because createScreens adds 1 more
                            // slot to such columns.
                            --max_slots;
                        }
                        for (var i = 0; i < max_slots; ++i) {
                            if (i + 1 == max_slots && $buttons.eq(0).hasClass('bookly-day')) {
                                // Skip the last slot if it is day.
                                break;
                            }
                            $button = $($buttons.splice(0, 1));
                            if (i == 0) {
                                $button.addClass('bookly-js-first-child');
                            } else if (i + 1 == max_slots) {
                                $button.addClass('bookly-last-child');
                            }
                            $column.append($button);
                        }
                        $columnizer.append($column);
                        ++columns;
                    }
                }
                /**
                 * Create screens.
                 */
                var $columns = $('> .bookly-column', $columnizer);

                while (has_more_slots ? $columns.length >= columns_per_screen : $columns.length) {
                    $screen = $('<div class="bookly-time-screen"/>');
                    for (var i = 0; i < columns_per_screen; ++i) {
                        $column = $($columns.splice(0, 1));
                        if (i == 0) {
                            $column.addClass('bookly-js-first-column');
                            var $first_slot = $column.find('.bookly-js-first-child');
                            // In the first column the first slot is time.
                            if (!$first_slot.hasClass('bookly-day')) {
                                var group = $first_slot.data('group'),
                                    $group_slot = $('button.bookly-day[value="' + group + '"]:last', $container);
                                // Copy group slot to the first column.
                                $column.prepend($group_slot.clone());
                            }
                        }
                        $screen.append($column);
                    }
                    $columnizer.append($screen);
                }
                $screens = $('.bookly-time-screen', $columnizer);
                if ($current_screen === null) {
                    $current_screen = $screens.eq(0);
                }

                $('button.bookly-time-skip', $container).off('click').on('click', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    laddaStart(this);
                    if (!opt[params.form_id].no_extras && opt[params.form_id].step_extras === 'after_step_time') {
                        stepExtras({form_id: params.form_id});
                    } else {
                        if (!opt[params.form_id].skip_steps.cart) {
                            stepCart({form_id: params.form_id, add_to_cart: true, from_step: 'time'});
                        } else {
                            stepDetails({form_id: params.form_id, add_to_cart: true});
                        }
                    }
                });

                // On click on a slot.
                $('button.bookly-hour', $container).off('click').on('click', function (e) {
                    requestSessionSave.cancel();
                    e.stopPropagation();
                    e.preventDefault();
                    var $this = $(this),
                        data = {
                            action: 'bookly_session_save',
                            form_id: params.form_id,
                            slots: this.value
                        };
                    $this.attr({'data-style': 'zoom-in', 'data-spinner-color': '#333', 'data-spinner-size': '40'});
                    laddaStart(this);

                    // Execute custom JavaScript
                    if (customJS) {
                        try {
                            $.globalEval(customJS.next_button);
                        } catch (e) {
                            // Do nothing
                        }
                    }

                    requestSessionSave.booklyAjax({
                        type: 'POST',
                        data: data
                    }).then(response => {
                        if (!opt[params.form_id].skip_steps.extras && opt[params.form_id].step_extras == 'after_step_time' && !opt[params.form_id].no_extras) {
                            stepExtras({form_id: params.form_id});
                        } else if (!opt[params.form_id].skip_steps.repeat && opt[params.form_id].recurrence_enabled) {
                            stepRepeat({form_id: params.form_id});
                        } else if (!opt[params.form_id].skip_steps.cart) {
                            stepCart({form_id: params.form_id, add_to_cart: true, from_step: 'time'});
                        } else {
                            stepDetails({form_id: params.form_id, add_to_cart: true});
                        }
                    });
                });

                // Columnizer width & height.
                $('.bookly-time-step', $container).width(columns_per_screen * column_width);
                $columnizer_wrap.height($current_screen.height());
            }

            function observeResizeColumnizer() {
                if ($('.bookly-time-step', $container).length > 0) {
                    let time = new Date().getTime();
                    if (time - lastObserverTime > 200) {
                        let formWidth = $columnizer_wrap.closest('.bookly-form').width();
                        if (formWidth !== lastObserverWidth) {
                            resizeColumnizer();
                            lastObserverWidth = formWidth;
                            lastObserverTime = time;
                        }
                    }
                } else {
                    columnizerObserver.disconnect();
                }
            }

            function resizeColumnizer() {
                $columnizer.html(slots_data).css('left', '0px');
                columns = 0;
                screen_index = 0;
                $current_screen = null;
                if (column_width > 0) {
                    let formWidth = $columnizer_wrap.closest('.bookly-form').width();
                    if (show_calendar) {
                        let calendarWidth = $('.bookly-js-slot-calendar', $container).width();
                        if (formWidth > calendarWidth + column_width + 24) {
                            columns_per_screen = parseInt((formWidth - calendarWidth - 24) / column_width, 10);
                        } else {
                            columns_per_screen = parseInt(formWidth / column_width, 10);
                        }
                    } else {
                        columns_per_screen = parseInt(formWidth / column_width, 10);
                    }
                }
                if (columns_per_screen > 10) {
                    columns_per_screen = 10;
                }
                columns_per_screen = Math.max(columns_per_screen, 1);

                initSlots();

                $time_prev_button.hide();

                if (!has_more_slots && $screens.length === 1) {
                    $time_next_button.hide();
                } else {
                    $time_next_button.show();
                }
            }

            if (typeof ResizeObserver === "undefined" || typeof ResizeObserver === undefined) {
                resizeColumnizer();
            } else {
                columnizerObserver = new ResizeObserver(observeResizeColumnizer);
                columnizerObserver.observe($container.get(0));
            }
        })
        .catch(response => {
            stepService({form_id: params.form_id});
        })
}