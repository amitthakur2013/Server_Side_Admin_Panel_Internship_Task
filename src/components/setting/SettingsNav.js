import React from "react";
import { Link } from "react-router-dom";

export const SettingsNav = () => {
  return (
    <ul className='nav2'>
      <li>
        <Link to='/settings/mail/config'>Mail</Link>
      </li>
      <li>
        <Link to='/settings/sms/config'>SMS</Link>
      </li>
    </ul>
  );
};
