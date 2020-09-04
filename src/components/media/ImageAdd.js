import React from "react";

export const ImageAdd = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>ImageAdd</h2>
      <form action='' className='item-right-inner'>
        <div className='form-element'>
          <label htmlFor=''>Config</label>
          <select name='' id=''></select>
        </div>
        <div>
          <br />
          <table style={{ width: "500px", marginLeft: "320px" }}>
            <tr>
              <th>Image</th>
              <th>Width(px)</th>
              <th>Height(px)</th>
            </tr>
            <tr>
              <td>Category Image</td>
              <td>512</td>
              <td>512</td>
            </tr>
            <tr>
              <td>Home - Banner</td>
              <td>2000</td>
              <td>422</td>
            </tr>
            <tr>
              <td>Merchant Cover Image</td>
              <td>400</td>
              <td>300</td>
            </tr>
            <tr>
              <td>Merchant Banner</td>
              <td>1200</td>
              <td>500</td>
            </tr>
            <a href='https://picresize.com/' target='_blank'>
              Edit Image Diemension
            </a>
          </table>
        </div>
        <br />
        <div className='form-element'>
          <label htmlFor=''>Logo</label>
          <input type='file' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Alt Text</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Caption</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Description</label>
          <input type='text' />
        </div>
        <div className='center'>
          <button className='blue-button'>Create</button>
          <button className='red-button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
