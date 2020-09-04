import React from "react";

export const UserManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>UserManage </h2>
      <table>
        <tr>
          <th>#</th>
          <th>UserName</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Activity</th>
          <th>Status</th>
          <th>Refer Code</th>
          <th>Reffer By</th>
          <th>Invite Code</th>
          <th>Last Login Ip</th>
          <th> Signup Ip </th>
          <th>Actions</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type='text' />
          </td>
          <td></td>
          <td>
            <input type='text' />
          </td>
          <td></td>
          <td></td>
          <td>
            <select name='' id=''></select>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>prashant mehta</td>
          <td>Male</td>
          <td>prm7earth@gmail.com</td>
          <td>123457996</td>
          <td>
            <span className='span-orange'>Activity</span>
          </td>
          <td>
            <span className='active'>ACTIVE</span>
          </td>
          <td>A4U4528</td>
          <td>--</td>
          <td>pm1</td>
          <td>106.209.240.101</td>
          <td> 203.194.104.91</td>

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
