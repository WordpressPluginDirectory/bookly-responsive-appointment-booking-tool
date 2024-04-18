<?php
namespace Bookly\Backend\Modules\Diagnostics\Tools;

class AdvancedOptions extends Tool
{
    protected $slug = 'advanced-options';
    protected $hidden = true;

    protected $options = array(
        'bookly_advanced_slot_date_format',
    );

    public function __construct()
    {
        $this->title = 'Advanced options';
    }

    public function render()
    {
        return self::renderTemplate( '_advanced_options', array( 'options' => $this->options ), false );
    }

    /**
     * Apply option
     *
     * @return void
     */
    public function apply()
    {
        $option = self::parameter( 'option' );
        if ( in_array( $option, $this->options, true ) ) {
            update_option( $option, self::parameter( 'value' ) );
        }

        wp_send_json_success();
    }
}