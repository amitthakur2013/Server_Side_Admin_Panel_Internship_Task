import React,{useState} from "react";
import axios from 'axios';
import CKEditor from "ckeditor4-react";

export const MenuCreate = () => {
  const [title,setTitle]=useState("");
  const [info,setInfo]=useState("");
  const [isdefault,setisdefault]=useState("Yes");
  const [status,setStatus]=useState("active");

  const create = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3124/api/menuTemplate/new", {
      title,
      info,
      isdefault,
      status
    });
    if (res.data._id){
      alert("Successfull!");
    }
    else{
      alert(res.data);
    }
    setTitle("");
    setInfo("");
    setisdefault("Yes");
    setStatus("active");

    console.log(res);
  };
  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>MenuCreate</h2>
      <form>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Info</label>
          <CKEditor onChange={(e) =>setInfo(e.editor.getData())}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Is Default</label>
          <select name='' id='' onChange={(e)=>setisdefault(e.target.value)}>
            <option disabled>Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id='' onChange={(e)=>setStatus(e.target.value)}>
            <option disabled>Select</option>
            <option>active</option>
            <option>inactive</option>
          </select>
        </div><br/>
        <div style={{justifyContent:"center"}} className='form-element'>
          <button className='Next' onClick={(e) => create(e)}>Create</button>
          <button className='Back'>Cancel</button>
        </div>
      </form><br/>
    </div>
  );
};
