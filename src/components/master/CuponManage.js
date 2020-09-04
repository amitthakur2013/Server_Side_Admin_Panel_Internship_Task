import React from "react";

export const CuponManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Cupon Category Manage</h2>
      <table className='item-right-inner'>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Child Category</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
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
          <td>Colaba</td>
          <td>
            <span className='active'>Add</span>
            <span className='list'>List</span>
          </td>
          <td>
            <span className='active'>active</span>
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
