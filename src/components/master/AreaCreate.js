import React,{useState, useEffect} from "react";
import axios from 'axios';

export const AreaCreate = () => {

  const [areaName,setAreaName]=useState("");
  const [cityName,setCityName]=useState("");
  const [status,setStatus]=useState("active");
  const [cities,setCities]=useState([])

  useEffect(()=>{
    (async function(){
    const {data}=await axios.get('http://localhost:3124/api/city/all')
    setCities(data)
     })()
  },[])

  const submitHandler=async (e)=>{
    e.preventDefault();
    if (cityName === "Select") return alert("pls select city!");
    const res = await axios.post("http://localhost:3124/api/area/add", {
      areaName,
      cityName,
      status
    });
    if (res.data._id){
      alert("Successfull!");
    }
    else{
      alert(res.data);
    }
    setAreaName("");
    setCityName("");
    setStatus("active");
    console.log(res);
  }

  return (
    <div>
      <div className='item-create'>
        <h2 className='item-heading'>Area Create</h2>
        <form action=''>
          <div className='form-element'>
            <label htmlFor=''>Area</label>
            <input type='text' onChange={(e)=>setAreaName(e.target.value)} value={areaName}/>
          </div>
          <div className='form-element'>
            <label htmlFor=''>City</label>
             <select name='' id='' onChange={(e)=>setCityName(e.target.value)} value={cityName}>
             <option>Select</option>
             {cities.map(ct=>
              <option>{ct.cityName}</option>
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
