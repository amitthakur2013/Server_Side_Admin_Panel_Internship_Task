import React,{useState} from "react";
import axios from 'axios';

export const BannerAdd = () => {

  const [title,setTitle]=useState("");
  const [bannerTitle,setBannerTitle]=useState("");
  const [bannerSubtitle,setBannerSubTitle]=useState("");
  const [caption,setCaption]=useState("");
  const [redirectUrl,setRedirectUrl]=useState("");
  const [position,setPosition]=useState("");
  const [status,setStatus] = useState("active");

  const formData= {
    "title":title,
    "bannerSubtitle":bannerSubtitle,
    "bannerTitle":bannerTitle,
    "position":position,
    "status":status,
    "redirectUrl":redirectUrl,
    "caption":caption
  }

  const createBanner=async (e)=>{
    e.preventDefault();
    try{
      const fd=new FormData()
      Object.keys(formData).forEach(function(key) {
      fd.append(key,formData[key]);
      });
      const files=document.getElementById('logo-file').files;
      fd.append("logo",files[0]);
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      axios
        .post("http://localhost:3124/api/banner/new",fd,config)
        .then((res) => {
          console.log(res.data);
          alert("SuccessFull!!");
        });

    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='item-create'>
      <h2 className='item-heading-create'>ImageAdd</h2>
      <form action='' className='item-right-inner'>
        <div className='form-element'>
          <label htmlFor=''>Config</label>
          <select name='' id=''></select>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Banner Title</label>
          <input type='text' onChange={(e) => setBannerTitle(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Banner Sub Title</label>
          <input type='text' onChange={(e) => setBannerSubTitle(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Caption</label>
          <input type='text' onChange={(e) => setCaption(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Redirect URL</label>
          <input type='text' onChange={(e) => setRedirectUrl(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Logo</label>
          <input type='file' id="logo-file"/>
        </div>

        <div className='form-element'>
          <label htmlFor=''>Position</label>
          <input type='text' onChange={(e) => setPosition(e.target.value)}/>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Status</label>
          <select name='' id='' onChange={(e) => setStatus(e.target.value)}>
            <option>active</option>
            <option>inactive</option>
          </select>
        </div>
        <div className='center'>
          <button className='blue-button' onClick={(e)=>createBanner(e)}>Create</button>
          <button className='red-button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};
