<?php
namespace Bookly\Backend\Modules\Dashboard;

use Bookly\Lib;

class Page extends Lib\Base\Component
{
    /**
     * Render page.
     */
    public static function render()
    {
        self::enqueueStyles( array(
            'alias' => array( 'bookly-backend-globals', ),
        ) );

        self::enqueueScripts( array(
            'module' => array( 'js/dashboard.js' => array( 'bookly-backend-globals', 'bookly-appointments-dashboard.js' ), ),
        ) );
        wp_localize_script( 'bookly-dashboard.js', 'BooklyL10n', array(
            'datePicker' => Lib\Utils\DateTime::datePickerOptions(),
            'dateRange' => Lib\Utils\DateTime::dateRangeOptions( array( 'lastMonth' => __( 'Last month', 'bookly' ), ) ),
            'based_on' => get_option( 'bookly_dashboard_based_on_appointment' ),
        ) );

        self::renderTemplate( 'index' );
    }
}