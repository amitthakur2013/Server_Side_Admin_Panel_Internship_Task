import React from "react";

export const PercentageManage = () => {
  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Percentage Manage</h2>
      <div>
        Show{" "}
        <select name='' id=''>
          <option value=''>10</option>
        </select>{" "}
        entries
        <input type='text' style={{ float: "right" }} />
        <label htmlFor='' style={{ float: "right" }}>
          Search
        </label>
      </div>
      <div>
        <table>
          <tr>
            <th>*</th>
            <th>Merchant</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>KFC</td>
            <td>
              <span className='orange-button'>View</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
