import React from "react";
import { Link, Route } from "react-router-dom";
import { MailConfig } from "./MailConfig";
import { MailTemplates } from "./MailTemplates";
import { SMSConfig } from "./SMSConfig";
import { SMSTemplates } from "./SMSTemplates";

export const SettingsMain = () => {
  return (
    <div className='item-content'>
      <h2>Settings</h2> <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Route path='/settings/mail/'>
            <Link to='/settings/mail/config' className='gray-button'>
              <i class='fas fa-cog'></i> Config
            </Link>
            <br />
            <Link to='/settings/mail/templates' className='gray-button'>
              <i class='fas fa-plus'></i>
              Templates
            </Link>
          </Route>
          <Route path='/settings/sms/'>
            <Link to='/settings/sms/config' className='gray-button'>
              <i class='fas fa-cog'></i> Config
            </Link>
            <br />
            <Link to='/settings/sms/templates' className='gray-button'>
              <i class='fas fa-plus'></i>
              Templates
            </Link>
          </Route>
          <br />
        </div>
        <div className='right-menu'>
          <Route path='/settings/mail/config'>
            <MailConfig />
          </Route>
          <Route path='/settings/mail/templates'>
            <MailTemplates />
          </Route>
          <Route path='/settings/sms/config'>
            <SMSConfig />
          </Route>
          <Route path='/settings/sms/templates'>
            <SMSTemplates />
          </Route>
        </div>
      </div>
    </div>
  );
};
