import React from "react";

export const CodeManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>CodeManage | Manage</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Cupon Code</th>
            <th>Redeem Status</th>
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
            <td>prashant mehta</td>
            <td>AFUC-BARB-5F30-2367-32F8</td>
            <td>
              <span className='active'>Not used</span>
            </td>
            <td>
              <span className='active'>ACTIVE</span>
            </td>
            <td className='actions'>
              <i class='far fa-eye blue'></i>
              <i class='fas fa-trash red'></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
