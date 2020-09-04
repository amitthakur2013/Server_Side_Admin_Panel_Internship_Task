import React from "react";
import CKEditor from "ckeditor4-react";
export const ContentCreate = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>ContentBlockCreate</h2>
      <form action=''>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Info</label>
          <CKEditor />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Is Default</label>
          <select name='' id=''></select>
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
