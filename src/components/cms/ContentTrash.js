import React from "react";

export const ContentTrash = () => {
  return (
    <div className='item-trash'>
      <h2 className='item-heading-trash'>ContentTrash | Trash</h2>
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
          <tr>
            <td>1</td>
            <td>The Grill Street</td>
            <td>
              <span className='span-trash'>In trash</span>
            </td>
          </tr>
        </table>
        No results found
      </div>
    </div>
  );
};