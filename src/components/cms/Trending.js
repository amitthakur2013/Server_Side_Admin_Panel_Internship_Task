import React from "react";

export const Trending = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Trending</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <input type='text' />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img className='small-img' src='/img/pizza.png' alt='' />
            </td>
            <td>
              <span className=''>BBQ</span>
            </td>
            <td className='actions'>
              <select name='' id=''>
                <option value=''>1</option>
              </select>
              <button className='blue-button'>Insert</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
