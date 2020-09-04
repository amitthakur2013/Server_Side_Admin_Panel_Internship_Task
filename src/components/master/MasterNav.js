import React from "react";
import { Link, Route } from "react-router-dom";

export const MasterNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        Location <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/master/location/state/manage'>State</Link>
          </li>
          <li>
            <Link to='/master/location/city/manage'>City</Link>
          </li>
          <li>
            <Link to='/master/location/area/manage'>Area</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown-menu'>
        Coupon <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/master/cupon/manage'>Category</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
