import React, { Fragment,useEffect,useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const LocationInfo = ({
  step,
  stepIncrement,
  stepDecrement,
  locationState,
  setLocationState,
}) => {
  const onChange = (e) => {
    setLocationState({
      ...locationState,
      [e.target.name]: e.target.value,
    });
  };
//var cities=[];
function displayCity(e){
  if (e.target.value === "Select") return alert("pls select satate!");
  e.preventDefault();
    axios.get(`http://localhost:3124/api/city/${e.target.value}`)
    .then(async ({data})=>{
    if(!data[0]) return alert("No city available for selected state!!");
    await setLocationState({
      ...locationState,
      state:data[0].parentState.stateName,
      cities:data,
      city:""
    })  
  })
  .catch(err=>alert(err)); 
  
}

function displayArea(e){
  if (e.target.value === "Select") return alert("pls select city!");
  e.preventDefault();
    axios.get(`http://localhost:3124/api/area/${e.target.value}`)
    .then(async ({data})=>{
    if(!data[0]) return alert("No area available for selected city!!");
    await setLocationState({
      ...locationState,
      city:data[0].parentCity.cityName,
      areas:data
    }) 
  })
  .catch(err=>alert(err)); 
  
}

  const validator = () => {
    var {
      state,
      city,
      area,
      addrLine1,
      addrLine2,
      landmark,
      zipcode,
    } = locationState;

    if (state === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid State.",
        timer: 2000,
      });
      return;
    }

    if (city === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid City.",
        timer: 2000,
      });
      return;
    }

    if (area === "Select") {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Area.",
        timer: 2000,
      });
      return;
    }

    if (addrLine1 === "" || addrLine1 === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Address.",
        timer: 2000,
      });
      return;
    }

    if (addrLine2 === "" || addrLine2 === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Address.",
        timer: 2000,
      });
      return;
    }

    if (zipcode === null) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Enter a valid Zipcode.",
        timer: 2000,
      });
      return;
    }

    console.log(locationState);
    stepIncrement();
  };

  return (
    <Fragment>
      <div className='form-element'>
        <label htmlFor='state'>State</label>
        <select
          class='form-control'
          name='state'
          onChange={(e)=>displayCity(e)}
          value={locationState.state}
          required
        >
          <option>Select</option>
          {locationState.states.map(st =>
          <option>{st.stateName}</option>
          )}
        </select>
      </div>

      <div className='form-element'>
        <label htmlFor='city'>City</label>
        <select
          class='form-control'
          name='city'
          onChange={(e)=>displayArea(e)}
          value={locationState.city}
          required
        >
          <option>Select</option>
          {locationState.cities.map(ct =>
          <option>{ct.cityName}</option>
          )}
        </select>
      </div>

      <div className='form-element'>
        <label htmlFor='area'>Area</label>
        <select
          class='form-control'
          name='area'
          onChange={onChange}
          value={locationState.area}
          required
        >
          <option>Select</option>
          {locationState.areas.map(ct =>
          <option>{ct.areaName}</option>
          )}
        </select>
      </div>

      <div className='form-element'>
        <label htmlFor='addrLine1'>Address Line One</label>
        <input
          type='text'
          class='form-control'
          name='addrLine1'
          onChange={onChange}
          value={locationState.addrLine1}
          required
        />
      </div>

      <div className='form-element'>
        <label htmlFor='addrLine2'>Address Line Two</label>
        <input
          type='text'
          class='form-control'
          name='addrLine2'
          onChange={onChange}
          value={locationState.addrLine2}
          required
        />
      </div>

      <div className='form-element'>
        <label htmlFor='landmark'>Landmark</label>
        <input
          type='text'
          class='form-control'
          name='landmark'
          onChange={onChange}
          value={locationState.landmark}
        />
      </div>

      <div className='form-element'>
        <label htmlFor='zipcode'>Zip Code</label>
        <input
          type='number'
          class='form-control'
          name='zipcode'
          onChange={onChange}
          value={locationState.zipcode}
          required
        />
      </div>

      <br />

      <div style={{ width: "150px", margin: "auto" }}>
        <button
          type='button'
          className='btn btn-primary'
          onClick={stepDecrement}
        >
          Back
        </button>
        <button
          type='button'
          className='btn btn-success'
          style={{ marginLeft: "20px" }}
          onClick={validator}
        >
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default LocationInfo;
