import React from "react";

export const UserActivity = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>UserActivity </h2>
      <div className='form-element'>
        <input type='text' name='' id='' />
        <button className='blue-button'> Search</button>
        <button className='red-button'> Clear</button>
      </div>
      <div className='item-right-inner'>
        <div>
          User prashant mehta has placed New Order : AFUC-2008-BARB-0001
          <button className='blue-button'> Details</button>
          <span style={{ marginLeft: "20px" }}>09 Aug 2020 09:55 PM</span>
        </div>
      </div>
    </div>
  );
};
