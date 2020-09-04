import React from "react";
import { Link, Route } from "react-router-dom";

export const RatingMain = () => {
  return (
    <div className='item-content'>
      <h2>RatingMain</h2>
      <br />
      <div className='item-body'>
        <div className='left-menu'>
          <Link to='/rating/' className='gray-button'>
            <i class='fas fa-cog'></i> Manage
          </Link>
        </div>
        <div className='right-menu'>
          <div className='item-manage'>
            <h2 className='item-heading'>Manage</h2>
            <table>
              <tr>
                <th>#</th>
                <th>Merchant Name</th>
                <th>User Name</th>
                <th>Ratting</th>
                <th>Comment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>1 </td>
                <td>Barbeque Nation</td>
                <td>admin</td>
                <td>5/5</td>
                <td>fhjndkm</td>
                <td>Deactive</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
