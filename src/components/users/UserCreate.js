import React from "react";

export const UserCreate = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>UserCreate</h2>
      <form action='' className='item-right-inner'>
        <div className='form-element'>
          <label htmlFor=''>User Name</label>
          <input type='text' />
        </div>

        <div className='form-element'>
          <label htmlFor=''>Email</label>
          <input type='text' />
        </div>

        <div className='form-element'>
          <label htmlFor=''>Password</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Mobile</label>
          <input type='text' />
        </div>

        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id=''></select>
        </div>
        <div className='center'>
          <button className='blue-button'>Create</button>
          <button className='red-button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
