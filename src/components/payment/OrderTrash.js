import React from "react";

export const OrderTrash = () => {
  return (
    <div>
      <h2 className='item-heading-trash'>
        <i class='fas fa-trash'></i>order Trash
      </h2>
      <table>
        <tr>
          <th>#</th>
          <th>Order</th>
          <th>Total</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <input type='text' />
          </td>
        </tr>
      </table>
      No results found
    </div>
  );
};
