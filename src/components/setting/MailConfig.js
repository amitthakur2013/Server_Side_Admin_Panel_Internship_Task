import React from "react";

export const MailConfig = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>MAIL SMTP CONFIG</h2>
      <form action='' className='config-form mail-form'>
        <div className='form-element'>
          <label htmlFor=''>Smtp Host</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Smtp Username</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Smtp Password</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Mail Sender</label>
          <input type='text' />
          <br />
          <p className='form-note'>
            Note: From this email address all mail will be sent
          </p>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Mail Sender Name</label>
          <input type='text' />
          <p className='form-note'>Note: Name of the mail sender</p>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Mail Receiver</label>
          <input type='text' />
          <p className='form-note'>
            Note : From this email address all mail will be received
          </p>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Mail Receiver Name</label>
          <input type='text' />
          <p className='form-note'>Note : Name of the mail receiver</p>
        </div>
        <button className='blue-button'>Submit</button>
      </form>
    </div>
  );
};
