import React from "react";

export const DashboardNav = () => {
  return (
    <ul className='nav2'>
      <li className='dropdown-menu'>
        Menu <i class='fas fa-chevron-down'></i>
        <ul className='dropdown'>
          <li>item</li>
          <li>item</li>
        </ul>
      </li>
      <li>Dashboard nav</li>
    </ul>
  );
};
