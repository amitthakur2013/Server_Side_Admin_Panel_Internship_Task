import React from "react";

export const RedeemCode = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>
        <i class='fas fa-cog'></i>Redeem code
      </h2>
      <div className='form-element'>
        <label htmlFor=''>Redeem Code</label>
        <input type='text' />
      </div>
      <div className='center'>
        <button className='grey-button'>Search</button>
        <button className='grey-button'>Clear</button>
      </div>
    </div>
  );
};
