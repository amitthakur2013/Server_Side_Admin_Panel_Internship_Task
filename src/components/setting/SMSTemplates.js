import React from "react";

export const SMSTemplates = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading'>SMS Template</h2>
      <table>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Use For</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type='text' />
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Purchase Coupon</td>
          <td> User purchase coupon</td>
          <td>
            {" "}
            <span className='active'>Active</span>
          </td>
        </tr>
      </table>
    </div>
  );
};
