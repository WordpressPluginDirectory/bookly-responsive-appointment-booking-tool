<?php
namespace Bookly\Backend\Modules\Settings;

use Bookly\Lib;

class Ajax extends Page
{
    /**
     * Ajax request for Holidays calendar
     */
    public static function settingsHoliday()
    {
        $interval = self::parameter( 'range', array() );
        $range = new Lib\Slots\Range( Lib\Slots\DatePoint::fromStr( $interval[0] ), Lib\Slots\DatePoint::fromStr( $interval[1] )->modify( 1 ) );
        if ( self::parameter( 'holiday' ) == 'true' ) {
            $repeat = (int) ( self::parameter( 'repeat' ) == 'true' );
            $employees = Lib\Entities\Staff::query()->whereNot( 'visibility', 'archive' )->fetchArray();
            $holidays = Lib\Entities\Holiday::query()
                ->whereBetween( 'date', $range->start()->value()->format( 'Y-m-d' ), $range->end()->value()->format( 'Y-m-d' ) )
                ->where( 'staff_id', null )
                ->indexBy( 'date' )
                ->find();
            $staff_holidays = Lib\Entities\Holiday::query( 'h' )
                ->select( 'CONCAT(h.staff_id, \'-\', h.date) AS s_d, h.*' )
                ->whereBetween( 'date', $interval[0], $interval[1] )
                ->whereNot( 'staff_id', null )
                ->indexBy( 's_d' )
                ->find();

            foreach ( $range->split( DAY_IN_SECONDS ) as $r ) {
                $day = $r->start()->value()->format( 'Y-m-d' );
                if ( array_key_exists( $day, $holidays ) ) {
                    $holiday = $holidays[ $day ];
                } else {
                    $holiday = new Lib\Entities\Holiday();
                }
                $holiday
                    ->setDate( $day )
                    ->setRepeatEvent( $repeat )
                    ->save();
                foreach ( $employees as $employee ) {
                    $key = $employee['id'] . '-' . $day;
                    if ( array_key_exists( $key, $staff_holidays ) ) {
                        $staff_holiday = $staff_holidays[ $key ];
                    } else {
                        $staff_holiday = new Lib\Entities\Holiday();
                    }
                    $staff_holiday
                        ->setDate( $day )
                        ->setRepeatEvent( $repeat )
                        ->setStaffId( $employee['id'] )
                        ->setParent( $holiday )
                        ->save();
                }
            }
        } else {
            $ids = Lib\Entities\Holiday::query( 'h' )
                ->whereRaw( 'CONVERT(DATE_FORMAT(h.date, \'1%%m%%d\'),UNSIGNED INTEGER) BETWEEN %d AND %d', array( $range->start()->value()->format( '1md' ), $range->end()->value()->format( '1md' ) ) )
                ->where( 'staff_id', null )
                ->fetchCol( 'id' );
            Lib\Entities\Holiday::query()
                ->delete()
                ->whereIn( 'id', $ids )
                ->whereIn( 'parent_id', $ids, 'OR' )
                ->execute();
        }

        wp_send_json_success( self::_getHolidays() );
    }


    public static function sendSmtpTest()
    {
        ob_start();
        $status = Lib\Utils\Mail::sendSmtp(
            self::parameter( 'to' ),
            'Test subject',
            'Test message',
            array(
                'is_html' => Lib\Config::sendEmailAsHtml(),
                'from' => array(
                    'email' => get_option( 'bookly_email_sender' ),
                    'name' => get_option( 'bookly_email_sender_name' ),
                ),
            ),
            array(),
            self::parameter( 'host' ),
            self::parameter( 'port' ),
            self::parameter( 'user' ),
            self::parameter( 'password' ),
            self::parameter( 'secure' ),
            4
        );
        $result = ob_get_clean();

        wp_send_json_success( array( 'result' => $result, 'status' => $status ) );
    }
}