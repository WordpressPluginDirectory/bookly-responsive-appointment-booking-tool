<?php
namespace Bookly\Frontend\Modules\MobileStaffCabinet;

use Bookly\Lib;

class Ajax extends Lib\Base\Ajax
{
    /** @var Lib\Entities\Staff */
    protected static $staff;
    /** @var \WP_User */
    protected static $wp_user;
    /** @var string|null */
    protected static $role;

    /**
     * @inheritDoc
     */
    protected static function permissions()
    {
        return array( '_default' => 'anonymous' );
    }

    /**
     * Get resources
     */
    public static function mobileStaffCabinet()
    {
        $json = file_get_contents( 'php://input' );
        $data = json_decode( $json, true ) ?: array();
        $params = isset( $data['params'] ) ? $data['params'] : array();
        $response = new Response10( self::$role, $params );
        $action = array_key_exists( 'action', $data ) ? $data['action'] : null;
        if ( self::$role ) {
            if ( self::$role === Response10::ROLE_SUPERVISOR ) {
                $response->setWpUser( self::$wp_user );
            } elseif ( self::$role === Response10::ROLE_STAFF ) {
                $response->setStaff( self::$staff );
            }
            try {
                switch ( $data['resource'] ) {
                    case 'init':
                        $response->init();
                        break;
                    case 'customers':
                        $response->customers();
                        break;
                    case 'customer':
                        if ( $action == 'save' ) {
                            $response->saveCustomer();
                        }
                        break;
                    case 'appointments':
                        $response->appointments();
                        break;
                    case 'appointment':
                        if ( $action == 'save' ) {
                            $response->saveAppointment();
                        } elseif ( $action == 'delete' ) {
                            $response->deleteAppointment();
                        } else {
                            $response->appointment();
                        }
                        break;
                    case 'check-appointment-time':
                        $response->checkAppointmentTime();
                        break;
                    case 'slots':
                        $response->slots();
                        break;
                    case 'services':
                        $response->services();
                        break;
                    case 'staff-list':
                        $response->staffList();
                        break;
                    case 'notifications':
                        $response->sendNotifications();
                        break;
                    case 'attachments':
                        $response->deleteNotificationsAttachmentFiles();
                        break;
                    case 'settings':
                        $response->settings();
                        break;
                    default:
                        $response->setError( '400', 'UNKNOWN_REQUEST', 400 );
                }
            } catch ( ParameterException $e ) {
                $response->setError( '400', 'INVALID_PARAMETER', 400, array( $e->getParameter() => $e->getValue() ) );
            } catch ( BooklyException $e ) {
                $response->setError( '400', $e->getMessage(), 400 );
            } catch ( \Exception $e ) {
                $response->setError( '400', 'ERROR', 400 );
            }
        } else {
            $response->setError( '401', 'UNAUTHORIZED_REQUEST', 401 );
        }

        $response->render();
    }

    /**
     * @inheritDoc
     */
    protected static function hasAccess( $action )
    {
        $access_key = self::parameter( 'access_key' );
        if ( $access_key ) {
            /** @var Lib\Entities\Auth $auth */
            $auth = Lib\Entities\Auth::query()->where( 'token', $access_key )->findOne();
            if ( $auth ) {
                if ( $auth->getStaffId() ) {
                    // If staff ID is set, load the staff entity.
                    self::$staff = Lib\Entities\Staff::find( $auth->getStaffId() );
                    if ( self::$staff ) {
                        self::$role = 'staff';
                    }
                } elseif ( $auth->getWpUserId() ) {
                    self::$wp_user = get_user_by( 'id', $auth->getWpUserId() );
                    if ( user_can( $auth->getWpUserId(), 'manage_bookly' ) || user_can( $auth->getWpUserId(), 'manage_options' ) ) {
                        // is Bookly admin
                        self::$role = 'supervisor';
                    } elseif ( user_can( $auth->getWpUserId(), 'manage_bookly_appointments' ) ) {
                        self::$role = 'supervisor';
                    }
                }
            }
            if ( self::$role === null ) {
                $response = new Response10( self::$role, array() );
                $response->setError( '401', 'UNAUTHORIZED_REQUEST', 401 );
                $response->render();
            }
        }

        return true;
    }

    /**
     * Override parent method to exclude actions from CSRF token verification.
     *
     * @param string $action
     * @return bool
     */
    protected static function csrfTokenValid( $action = null )
    {
        return true;
    }
}