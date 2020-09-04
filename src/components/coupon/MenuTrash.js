import React from "react";

export const MenuTrash = () => {
  return (
    <div className='item-trash'>
      <h2 className='item-heading-trash'>MenuTrash</h2>
      <div className='item-right-inner'>
        <table>
          <tr>
            <td># </td>
            <td>Title</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type='text' />
            </td>
          </tr>
        </table>
        No results found
      </div>
    </div>
  );
};
