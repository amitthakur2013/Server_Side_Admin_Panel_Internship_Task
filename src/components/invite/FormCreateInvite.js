import React,{useState} from "react";
import axios from 'axios';

export const FormCreateInvite = () => {
  const [code,setCode]=useState("");
  const [validTill,setValidTill]=useState("");
  const [from,setFrom]=useState({name:"",phoneNo:""});
  const [to,setTo]=useState("");
  const [status,setStatus]=useState("active");

  const submitHandler=async(e) => {
    if (code==="" || validTill==="" || from.name==="" || from.phoneNo === "" || to ==="" ) return alert("Fill out All fields");
    e.preventDefault();
   try{
      await axios.post('http://localhost:3124/api/invitecode/new',{
        code,
        validTill,
        from,
        status,
        "for":to
      })
      .then((res)=>{
        alert("success");
        console.log(res)})
      .catch((err)=>console.log(err));
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='item-create'>
      <h2 className='item-heading'>
        <i class='fas fa-cog'></i> Create
      </h2>
      <div className='item-right-inner'>
        <h1>Create Invite Code</h1>
        <form action=''>
          <div className='form-element'>
            <label htmlFor=''> Invite Code</label>
            <input type='text' onChange={(e)=>setCode(e.target.value)} required/>
          </div>
          <div className='form-element'>
            <label htmlFor=''> Valid Till</label>
            <input type='Date' onChange={(e)=>setValidTill(e.target.value)} required/>
          </div>
          <div className='form-element'>
            <label htmlFor=''>From Name</label>
            <input type='text' onChange={(e)=>setFrom({...from,
              name:e.target.value})} required/>
          </div>
          <div className='form-element'>
            <label htmlFor=''>From Mobile</label>
            <input type='text' onChange={(e)=>setFrom({...from,
              phoneNo:e.target.value})} required/>
          </div>
          <div className='form-element'>
            <label htmlFor=''>To Mobile</label>
            <input type='text' onChange={(e)=>setTo(e.target.value)} required/>
          </div>
          <div className='form-element'>
            <label htmlFor=''>Status</label>
            <select onChange={(e)=>setStatus(e.target.value)}>
              <option>active</option>
              <option>inactive</option>
            </select>
          </div><br/>
          <div  className='form-element'>
            <button type="submit" style={{marginLeft:"320px"}} onClick={(e) => submitHandler(e)}>Create</button>
          </div>

        </form>
      </div>
    </div>
  );
};
