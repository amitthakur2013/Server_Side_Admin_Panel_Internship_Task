import React from "react";
import { Link } from "react-router-dom";

export const RatingNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        User Rating <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/rating'>Manage</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
