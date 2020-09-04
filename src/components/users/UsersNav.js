import React from "react";
import { Link } from "react-router-dom";

export const UsersNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        Admin <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/users/admin/manage'>Manage</Link>
          </li>
          <li>
            <Link to='/users/admin/create'>create</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown-menu'>
        Merchant <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/users/merchant/manage'>Manage</Link>
          </li>
          <li>
            <Link to='/users/merchant/create'>Create</Link>
          </li>
          <li>
            <Link to='/users/merchant/enquiry'>Vendor Enquiry</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown-menu'>
        User <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            {" "}
            <Link to='/users/user/manage'>Manage</Link>
          </li>
          <li>
            <Link to='/users/user/create'>Create</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
