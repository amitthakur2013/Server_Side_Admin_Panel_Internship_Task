import React from "react";

export const Templates = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <div>
      <div className='form-element'>
        <label htmlFor=''>Menu</label>
        <select name='' id=''>
          <option value='' disabled selected></option>
          {props.formData.menuTemplate.map((m)=>
          <option value=''>{m.title}</option>
          )}
        </select>
      </div>
      <div className='form-element'>
        <label htmlFor=''>How to Use offer</label>
        <select name='' id=''>
          <option value='' disabled selected></option>
          {props.formData.howtouseTemplate.map((m)=>
          <option value=''>{m.title}</option>
          )}
        </select>
      </div>
      <div className='form-element'>
        <label htmlFor=''>Cancellation Policy</label>
        <select name='' id=''>
          <option value='' disabled selected></option>
          {props.formData.cancellationTemplate.map((m)=>
          <option value=''>{m.title}</option>
          )}
        </select>
      </div>
      <div className='form-element'>
        <label htmlFor=''>Things To Remember</label>
        <select name='' id=''>
        <option value='' disabled selected></option>
        {props.formData.thingstorememberTemplate.map((m)=>
          <option value=''>{m.title}</option>
          )}
        </select>
      </div>
      <div className='center'>
        <button className='Back' onClick={back}>
          Prev
        </button>
        <button className='Next' onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};
