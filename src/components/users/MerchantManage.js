import React,{useState,useEffect} from "react";
import axios from 'axios';

export const MerchantManage = () => {
  const [merchant,setMerchant]=useState([]);
  //const [flag,setFlag]=useState(true);
  useEffect( ()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/merchant/all')
    setMerchant(data)
  })()
  },[]);

  return (
    <div>
    {merchant ?
    <div className='item-manage'>
      <h2 className='item-heading'>MerchantManage </h2>
      <table>
        <tr>
          <th>#</th>

          <th>UserName</th>
          <th>Type</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Outlets</th>
          <th>Outlets</th>
          <th>Status </th>
          <th>Actions</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type='text' />
          </td>
          <td></td>
          <td>
            <input type='text' />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <select name='' id=''></select>
          </td>
        </tr>
        {merchant.map((mt,ind)=>
          <tr>
          <td>{ind+1}</td>
          <td>{mt.contactInfo.firstName+" "+mt.contactInfo.lastName}</td>
          <td>{mt.businessInfo.businessType}</td>
          <td>{mt.email}</td>
          <td>{mt.phoneNo}</td>
          <td>
            <span className='span-orange'>Login</span>
          </td>
          <td>
            <span className='active'>+ Add</span>
            <span className='span-orange'> List</span>
          </td>
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
          )}
        
      </table>
    </div>:<div>Loading...</div>
  }
    
    </div>
  );
};
