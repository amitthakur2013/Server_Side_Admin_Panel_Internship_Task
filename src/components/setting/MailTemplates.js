import React from "react";

export const MailTemplates = () => {
  return (
    <div className='item-create'>
      <h2 className='item-heading'>Templates</h2>
      <table>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Mail Receiver</th>
          <th>Use For</th>
          <th>Status</th>
          <th>Actions</th>
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
        <tr>
          <td>1</td>
          <td>Signup</td>
          <td> parth.ivory@gmail.com</td>
          <td>Notify admin when signup user from the system</td>
          <td>
            {" "}
            <span className='active'>Active</span>
          </td>
        </tr>
      </table>
    </div>
  );
};
