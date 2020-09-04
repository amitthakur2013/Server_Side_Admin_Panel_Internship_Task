import React,{useState, useEffect} from "react";
import axios from 'axios';

export const CityCreate = () => {

  const [stateName,setStateName]=useState("");
  const [cityName,setCityName]=useState("");
  const [status,setStatus]=useState("active");
  const [states,setStates]=useState([])

  useEffect(()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/state/all')
    setStates(data)
     })()
  },[])

  const submitHandler=async (e)=>{
    e.preventDefault();
    if(stateName === "Select") return alert("Pls Select State");
    const res = await axios.post("http://localhost:3124/api/city/add", {
      stateName,
      cityName,
      status
    });
    if (res.data._id){
      alert("Successfull!");
    }
    else{
      alert(res.data);
    }
    setStateName("");
    setCityName("");
    setStatus("active");
    console.log(res);
  }

  return (
    <div>
      <div className='item-create'>
        <h2 className='item-heading'>City Create</h2>
        <form action=''>
          <div className='form-element'>
            <label htmlFor=''>City</label>
            <input type='text' onChange={(e)=>setCityName(e.target.value)} value={cityName} required/>
          </div>
          <div className='form-element'>
            <label htmlFor=''>States</label>
             <select name='' id='' onChange={(e)=>setStateName(e.target.value)} value={stateName}>
             <option>Select</option>
             {states.map(st=>
              <option>{st.stateName}</option>
            )}
            </select>
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
    </div>
  );
};
