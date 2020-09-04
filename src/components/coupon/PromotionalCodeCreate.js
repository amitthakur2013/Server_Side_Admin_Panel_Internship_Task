import React,{useState} from "react";
import CKEditor from "ckeditor4-react";
import axios from 'axios';

export const PromotionalCodeCreate = () => {
  
  const [title,setTitle]=useState("");
  const [subTitle,setSubTitle]=useState("");
  const [code,setCode]=useState("");
  const [validFrom,setValidFrom]=useState("");
  const [validTill,setValidTill]=useState("");
  const [isUserSpecific,setisUserSpecific]=useState(false);
  const [isDealSpecific,setisDealSpecific]=useState(false);
  const [minAmount,setminAmount]=useState(0);
  const [maxAmount,setmaxAmount]=useState(0);
  const [discount,setdiscount]=useState(0);
  const [status, setStatus]=useState("active");
  const [user,setUser]=useState("");
  const [description,setDescription]=useState("");
  const [notes,setNotes]=useState("");

  const formData={
    "title":title,
    "subTitle":subTitle,
    "code":code,
    "validFrom":validFrom,
    "validTill":validTill,
    "isDealSpecific":isDealSpecific,
    "isUserSpecific":isUserSpecific,
    "minAmount":minAmount,
    "maxAmount":maxAmount,
    "discount":discount,
    "status":status
  }


  const createPromo=async (e)=>{
    e.preventDefault();
    console.log(description);
    try{
      const fd=new FormData()
      Object.keys(formData).forEach(function(key) {
      fd.append(key,formData[key]);
      });
      const files=document.getElementById('icon-file').files;
      fd.append("icon",files[0]);
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      axios
        .post("http://localhost:3124/api/promocode/new",fd,config)
        .then((res) => {
          console.log(res.data);
        });

    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>PromotionalCodeCreate </h2>
      <form action=''>
        <div className='form-element'>
          <label htmlFor=''>User</label>
          <input type='text' onChange={(e)=>setUser(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Icon</label>
          <input type='file' id="icon-file"/>
        </div>
        <div className='form-element'>
          <label htmlFor=''> Sub Title</label>
          <input type='text' onChange={(e)=>setSubTitle(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Code</label>
          <input type='text' onChange={(e)=>setCode(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Discount</label>
          <input type='text' onChange={(e)=>setdiscount(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Amount</label>
          <input type='text' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Min Amount</label>
          <input type='text' onChange={(e)=>setminAmount(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Max Amount</label>
          <input type='text' onChange={(e)=>setmaxAmount(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Valid From</label>
          <input type='date' onChange={(e)=>setValidFrom(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Valid To</label>
          <input type='date' onChange={(e)=>setValidTill(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Display From</label>
          <input type='date' />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Display To</label>
          <input type='date' />
        </div>

        <br />
        <div className='form-element'>
          <label htmlFor=''>Description</label>
          <CKEditor/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Notes</label>
          <CKEditor/>
        </div>
        <br />

        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id='' onChange={(e)=>setStatus(e.target.value)}>
          <option>active</option>
          <option>inactive</option>
          </select>
        </div>
        <div className='center'>
          <button onClick={(e)=>createPromo(e)} className='blue-button'>Create</button>
          <button className='red-button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
