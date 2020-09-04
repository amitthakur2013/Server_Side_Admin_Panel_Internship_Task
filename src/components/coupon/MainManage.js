import React from "react";

export const MainManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>MainManage | Manage</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Merchant</th>
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
            <td>Menu</td>
            <td>BBQ</td>
            <td>
              <span className='active'>ACTIVE</span>
            </td>
            <td className='actions'>
              <i class='far fa-eye blue'></i>
              <i class='fas fa-pencil-alt orange'></i>
              <i class='fas fa-trash red'></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
