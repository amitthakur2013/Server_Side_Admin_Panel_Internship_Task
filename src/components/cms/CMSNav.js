import React from "react";
import { Link } from "react-router-dom";

export const CMSNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        Home <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/cms/home/trending'>Trending</Link>
          </li>
          <li>
            <Link to='/cms/home/popular'>Popular</Link>
          </li>
          <li>
            <Link to='/cms/home/things-to-do'>Things to do</Link>
          </li>
        </ul>
      </li>
      <li className='dropdown-menu'>
        Site Content <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>
            <Link to='/cms/content/manage'>Content</Link>
          </li>
          <li>
            <Link to='/cms/content-block/manage'>Content Block</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};
