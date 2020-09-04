import React from "react";
import { Link, Route } from "react-router-dom";

export const MediaNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        Images <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/media/image/manage'>Manage</Link>
          </li>
          <li>
            <Link to='/media/image/add'>Add</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown-menu'>
        Banner <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/media/banner/manage'>Manage</Link>
          </li>
          <li>
            {" "}
            <Link to='/media/banner/add'>Add</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
