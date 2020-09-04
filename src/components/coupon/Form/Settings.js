import React from "react";

export const Settings = (props) => {
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
        <label htmlFor=''>Status</label>
        <select name='' id=''>
          <option value=''>active</option>
          <option value=''> In active</option>
        </select>
      </div>
      <div className='center'>
        <button className='Back' onClick={back}>
          Prev
        </button>
        <button className='Next' onClick={next}>
          Submit
        </button>
      </div>
    </div>
  );
};
