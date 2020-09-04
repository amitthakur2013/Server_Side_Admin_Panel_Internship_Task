import React,{useState} from "react";
import axios from 'axios';

export const AdminCreate = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [phoneNo,setPhoneNo]=useState("");
  const [status,setStatus]=useState("active");

  const create = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3124/api/admin/new", {
      name:username,
      email,
      password,
      confirmPassword,
      phoneNo,
      status
    });
    if (res.data._id){
      alert("Successfull!");
    }
    else{
      alert(res.data);
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setStatus("active");
    setPhoneNo("");
    console.log(res);
  };

  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>AdminCreate</h2>
      <form onSubmit={create}>
        <div className='form-element'>
          <label htmlFor=''>User Name</label>
          <input type='text' onChange={(e)=>setUsername(e.target.value)} value={username}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Email</label>
          <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Password</label>
          <input type='text' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
	<div className='form-element'>
          <label htmlFor=''>Confirm Password</label>
          <input type='text' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Mobile</label>
          <input type='text' onChange={(e)=>setPhoneNo(e.target.value)} value={phoneNo}/>
        </div>

        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id='' onChange={(e)=>setStatus(e.target.value)} value={status}>
		<option>active</option>
		<option>inactive</option>
	  </select>
	  
        </div>
        <div className='center'>
          <button className='blue-button' type="submit">Create</button>
          <button className='red-button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
