import React from 'react';

const InputForm = () => {
  return (
    <div>
      <input required autoComplete="off" type="text" id="firstName" placeholder="Enter name" name="firstName" />
      <button id="submitBtn">Submit</button>
    </div>
  );
};

export default InputForm;
