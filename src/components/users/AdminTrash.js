import React from "react";

export const AdminTrash = () => {
  return (
    <div className='item-trash'>
      <h2 className='item-heading-trash'>AdminTrash Trash</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Status</th>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type='text' />
            </td>
            <td>
              <input type='text' />
            </td>
          </tr>
          <tr></tr>
        </table>
      </div>
    </div>
  );
};
