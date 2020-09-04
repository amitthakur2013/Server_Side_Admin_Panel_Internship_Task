import React from "react";

export const List = (props) => {
  console.log(props);
  const renderItems = () => {
    let count = 0;
    return props.items.map((item) => {
      count++;
      return (
        <tr>
          {" "}
          <td>{count}</td>
          <td>{item.title}</td>
          <td>{item.merchant}</td>
          <td>
            {" "}
            <span className='active'>Active</span>
          </td>
          <td className='actions'>
            <i class='far fa-eye blue'></i>
            <i class='fas fa-pencil-alt orange'></i>
            <i class='fas fa-trash red'></i>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className='table-parent'>
      {" "}
      <h2 className='item-heading'>
        <i class='fas fa-cog'></i>Manage
      </h2>
      <table>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Merchant</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type='text' name='' id='' />
          </td>
        </tr>
        {renderItems()}
      </table>
    </div>
  );
};
