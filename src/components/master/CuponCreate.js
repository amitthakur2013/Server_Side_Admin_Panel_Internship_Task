import React from "react";

export const CuponCreate = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>CuponCreate</h2>
      <form action=''>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Icon</label>
          <input type='file' />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Display Order</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Notes</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <input type='text' />
        </div>
      </form>
    </div>
  );
};
