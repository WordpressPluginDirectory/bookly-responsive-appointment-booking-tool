<?php
namespace Bookly\Frontend\Modules\MobileStaffCabinet;

class BooklyException extends \Exception
{
    public function __construct( $message )
    {
        parent::__construct( get_option( 'bookly_dev' ) && $message ? $message : 'ERROR' );
    }
}