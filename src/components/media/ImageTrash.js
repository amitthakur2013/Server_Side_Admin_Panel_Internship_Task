import React from "react";

export const ImageTrash = () => {
  return (
    <div className='item-trash'>
      <h2 className='item-heading-trash'>Image Trash</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>title</th>
            <th>Author</th>
            <th>Status</th>
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
            <td></td>
            <td>admin</td>
            <td>trash</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
