import React,{useState} from "react";
import axios from 'axios';

export const StateCreate = () => {

  const [stateName,setStateName]=useState("");
  const [status,setStatus]=useState("active");

  const submitHandler=async (e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:3124/api/state/add", {
      stateName,
      status
    });
    if (res.data._id){
      alert("Successfull!");
    }
    else{
      alert(res.data);
    }
    setStateName("");
    setStatus("active");
    console.log(res);
  }

  return (
    <div className='item-create'>
      <h2 className='item-heading'>StateCreate</h2>
      <form action=''>
        <div className='form-element'>
          <label htmlFor=''>State</label>
          <input type='text' onChange={(e)=>setStateName(e.target.value)} value={stateName}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Notes</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id='' onChange={(e)=>setStatus(e.target.value)} value={status}>
            <option>active</option>
            <option>inactive</option>
          </select>
        </div>
        <div className='center'>
          <button onClick={(e) => submitHandler(e)} className='Next'>Create</button>
          <button className='Back'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
