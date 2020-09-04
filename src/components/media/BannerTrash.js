import React from "react";

export const BannerTrash = () => {
  return (
    <div className='item-trash'>
      <h2 className='item-heading-trash'>Banner Trash</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>title</th>
            <th>Display Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>
              <input type='text' />
            </td>
            <td>
              <input type='text' />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <img className='small-img' src='/img/pizza.png' alt='' />
            </td>
            <td>Banner 1</td>
            <td>The #one place to save money</td>
            <td>
              <span className='span-trash'>trash</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
