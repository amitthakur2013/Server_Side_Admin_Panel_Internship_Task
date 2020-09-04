import React from "react";

export const CityTrash = () => {
  return (
    <div>
      <div className='item-trash '>
        <h2 className='item-heading-trash'>City Trash</h2>
        <div className='item-right-inner'>
          <table>
            <tr>
              <th>#</th>
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
            <tr>No results found</tr>
          </table>
        </div>
      </div>
    </div>
  );
};
