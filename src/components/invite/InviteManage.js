import React,{useState,useEffect} from "react";
import axios from 'axios';

export const InviteManage = () => {
  /*const renderItems = () => {
    let count = 0;
    return props.items.map((item) => {
      count++;
      return (
        <tr>
          {" "}
          <td>{count}</td>
          <td>{item.name}</td>
          <td>{item.number}</td>
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
  };*/
  const [user,setUser]=useState([]);
  useEffect( ()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/invitecode/all')
    setUser(data)
  })()
  });
  return (
    <div className='item-manage table-parent'>
      {" "}
      <h2 className='item-heading'>
        <i class='fas fa-cog'></i>Manage
      </h2>
      <table>
        <tr>
          <th>#</th>
          <th>Invite Code</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>

        <tr>
          <td></td>
          <td>
            <input type='text' name='' id='' />
          </td>
          <td>
            <input type='text' name='' id='' />
          </td>
        </tr>
        {user.map((usr,ind)=>
          <tr>
            <td></td>
            <td>
              {usr.code}
            </td>
            <td>
              {usr.from.phoneNo}
            </td>
            <td>
              <span className='active'>{usr.status}</span>
            </td>
          </tr>
        )}
        
      </table>
    </div>
  );
};
