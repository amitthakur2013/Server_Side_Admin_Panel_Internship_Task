import React from "react";

export const MainTrash = () => {
  return (
    <div className='item-trash'>
      <h2 className='item-heading-trash'>MainTrash</h2>

      <div className='item-right-inner'>
        <table>
          <tr>
            <td># </td>
            <td>Title</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type='text' />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>The Grill Street</td>
            <td></td>
            <td>
              <span className='span-trash'>In trash</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
