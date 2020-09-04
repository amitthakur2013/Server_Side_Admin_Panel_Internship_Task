import React,{useState,useEffect} from "react";
import axios from 'axios';

export const Enquiry = () => {
  const [user,setUser]=useState([]);
  //const [flag,setFlag]=useState(true);
  useEffect( ()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/enquiry/all')
    setUser(data)
  })()
  },[]);

  return (
    <div className='item-manage'>
      <h2 className='item-heading'>Enquiry </h2>
      <table>
        <tr>
          <th>#</th>

          <th> Contact Person Name</th>
          <th> Contact Number</th>
          <th>Email</th>
          <th>Business Name</th>
          <th>More Info </th>
          <th> Date & Time </th>
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
            <input type='text' />
          </td>

          <td>
            <input type='text' />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {user.map((usr,ind)=>
        <tr>
          <td>{ind+1}</td>
          <td>{usr.name}</td>
          <td>{usr.phoneNo}</td>
          <td>{usr.email}</td>
          <td>{usr.businessName}</td>
          <td>{usr.moreInfo}</td>

          <td>
            {" "}
            <span className=''>{usr.createdOn}</span>
          </td>
        </tr>
        )}
      </table>
    </div>
  );
};
