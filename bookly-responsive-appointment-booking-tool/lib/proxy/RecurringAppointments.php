<?php
namespace Bookly\Lib\Proxy;

use Bookly\Lib;

/**
 * @method static bool hideChildAppointments( bool $default, Lib\CartItem $cart_item ) If only first appointment in series needs to be paid hide next appointments.
 * @method static bool sendToStaff( bool $sent, Lib\Entities\Notification $notification, Lib\Notifications\Assets\Base\Codes $codes, Lib\Notifications\Assets\Base\Attachments $attachments, $reply_to, $queue )
 */
abstract class RecurringAppointments extends Lib\Base\Proxy
{

}