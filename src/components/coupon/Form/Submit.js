import React from "react";

export const Submit = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  return (
    <div>
      <h2>Your Data</h2>
      <div>
        {props.merchantUser}
        <br />
        {props.title}
      </div>
      <div>
        <button className='Back' onClick={back}>
          Prev
        </button>
      </div>
    </div>
  );
};
