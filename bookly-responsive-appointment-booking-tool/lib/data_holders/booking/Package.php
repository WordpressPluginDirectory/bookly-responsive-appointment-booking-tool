<?php
namespace Bookly\Lib\DataHolders\Booking;

use Bookly\Lib;

class Package extends Item
{
    protected $type = Item::TYPE_PACKAGE;
    /** @var \BooklyPackages\Lib\Entities\Package */
    protected $package;
    /** @var Lib\Entities\Service */
    protected $service;
    /** @var Lib\Entities\Staff */
    protected $staff;

    public function __construct( $package )
    {
        $this->package = $package;
    }

    /**
     * @return \BooklyPackages\Lib\Entities\Package
     */
    public function getPackage()
    {
        return $this->package;
    }

    public function getAppointment()
    {
        return null;
    }

    public function getCA()
    {
        return null;
    }

    public function getDeposit()
    {
        return null;
    }

    public function getExtras()
    {
        return array();
    }

    public function getService()
    {
        return  $this->getServiceItem();
    }

    public function getServiceDuration()
    {
        return $this->getServiceItem()->getDuration();
    }

    public function getServicePrice()
    {
        return $this->getServiceItem()->getPrice();
    }

    public function getStaff()
    {
        return $this->getStaffItem();
    }

    public function getTax()
    {

    }

    public function getServiceTax()
    {

    }

    public function getTotalEnd()
    {

    }

    public function getTotalPrice()
    {
        $this->getServiceItem()->getPrice();
    }

    public function getItems()
    {
        return array( $this->package );
    }

    public function setStatus( $status )
    {

    }

    /**
     * @return Lib\Entities\Service|null
     */
    protected function getServiceItem()
    {
        if ( $this->service === null ) {
            $this->service = Lib\Entities\Service::find( $this->package->getServiceId() );
        }

        return $this->service;
    }

    /**
     * @return Lib\Entities\Staff|null
     */
    protected function getStaffItem()
    {
        if ( $this->staff === null ) {
            $this->staff = Lib\Entities\Staff::find( $this->package->getStaffId() );
        }

        return $this->staff;
    }
}