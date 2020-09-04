import React from "react";

export const ImageManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>ImageManage</h2>
      <table className='item-right-inner'>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
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
          <td></td>
          <td>
            <select name='' id=''></select>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <img src='/img/pizza.png' className='small-img' alt='' />
          </td>
          <td></td>
          <td>admin</td>
          <td>
            <span className='active'>Active</span>
          </td>
          <td className='actions'>
            <i class='far fa-eye blue'></i>
            <i class='fas fa-pencil-alt orange'></i>
            <i class='fas fa-trash red'></i>
          </td>
        </tr>
      </table>
    </div>
  );
};
