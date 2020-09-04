import React,{useState,useEffect} from "react";
import axios from 'axios';

export const OrderManage = () => {
  const [user,setUser]=useState([]);
  const [flag,setFlag]=useState(true);
  useEffect( ()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/orders/all')
    setUser(data)
  })()
  },[]);

  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Order Manage</h2>
      <table>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Order ID</th>
          <th>Code</th>
          <th>Status</th>
          <th> Quick Actions</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        {user.map((usr,ind)=>
          
        <tr>
          <td>{ind+1}</td>
          <td>{usr.customer ? usr.customer.name:""}</td>
          <td>{usr._id}</td>
          <td>{usr.redeemCode}</td>
          <td></td>
          <td>
            <span className='active'>{usr.status}</span>
          </td>
          <td>{usr.purchasedOn}</td>
          <td className='actions'>
            <i class='far fa-eye blue'></i>
            <i class='fas fa-trash red'></i>
          </td>
        </tr>
        )}
      </table>
    </div>
  );
};
