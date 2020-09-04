import React,{useState,useEffect} from "react";
import axios from 'axios';

export const AreaManage = () => {
  const [user,setUser]=useState([]);
  const [flag,setFlag]=useState(true);
  useEffect( ()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/area/all')
    setUser(data)
  })()

  },[flag]);

  function del(id){
    (async function(){
    await axios.delete(`http://localhost:3124/api/area/delete/${id}`);
    setFlag(!flag);
  })()
  }

  return (
    <div>
    {user ?
    <div className='item-manage'>
      <h2 className='item-heading'>Area Manage</h2>
      <table className='item-right-inner'>
        <tr>
          <th>#</th>
          <th>Area</th>
          <th>City</th>
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
          <td>
            <select name='' id=''></select>
          </td>
        </tr>
        {user.map((usr,ind)=>
        <tr>
          <td>{ind+1}</td>
          <td>{usr.areaName}</td>
          <td>{usr.parentCity.cityName}</td>
          <td>
            <span className='active'>{usr.status}</span>
          </td>
          <td className='actions'>
            <i class='far fa-eye blue'></i>
            <i class='fas fa-pencil-alt orange'></i>
            <button style={{"border":"none","background-color":"inherit"}} onClick={(e)=>{
              e.preventDefault();
              del(usr._id)}}><i  class='fas fa-trash red'></i>
            </button>
          </td>
        </tr>
        )}
      </table>
    </div>: <div> Loading ... </div>
  }
    </div>
  );
};
