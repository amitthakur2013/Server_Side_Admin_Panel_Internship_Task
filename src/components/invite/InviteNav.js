import React from "react";
import { Link } from "react-router-dom";

export const InviteNav = () => {
  return (
    <ul className='nav2'>
      <li>
        <Link to='/invitecode/manage'>Invite Code</Link>
      </li>
    </ul>
  );
};
