import React from "react";

export const AreaTrash = () => {
  return (
    <div>
      <div className='item-trash '>
        <h2 className='item-heading-trash'>Area Trash</h2>
        <div className='item-right-inner'>
          <table>
            <tr>
              <th>#</th>
              <th>Area</th>
              <th>City</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type='text' />
              </td>
              <td></td>
            </tr>
          </table>
          No results found
        </div>
      </div>
    </div>
  );
};
