import React from "react";
import { Link } from "react-router-dom";

export const CouponsNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        Main <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/coupons/main/manage'>Manage</Link>
          </li>
          <li>
            <Link to='/coupons/main/create'>Create</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown-menu'>
        Templates <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/coupons/templates/menu/manage'>Menu</Link>
          </li>
          <li>
            <Link to='/coupons/templates/howtouse/manage'>How To Use</Link>
          </li>

          <li>
            <Link to='/coupons/templates/cancellation-policy/manage'>
              Cancellation policy
            </Link>
          </li>
          <li>
            <Link to='/coupons/templates/things-to-remember/manage'>
              Things to remember
            </Link>
          </li>
          <li>
            <Link to='/coupons/templates/refund-policy/manage'>
              Refund Policy
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to='/coupons/code/manage'>Code</Link>
      </li>
      <li>
        {" "}
        <Link to='/coupons/redeem-code/manage'>Redeem Code</Link>
      </li>
      <li>
        <Link to='/coupons/promotional-code/manage'>Promotional Code</Link>
      </li>
    </ul>
  );
};
