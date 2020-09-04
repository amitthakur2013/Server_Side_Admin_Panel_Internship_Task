import React from "react";

export const SMSConfig = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading'>SMS</h2>
      <form action=''>
        <div className='form-element'>
          <label htmlFor=''>Sms Username</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Sms Password</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Sms Api Key</label>
          <input type='text' />
        </div>
      </form>
    </div>
  );
};
