import React from "react";

const FormTextInput = ({ onInputChange, placeholder }) => {
  return (
    <input type="text" onChange={onInputChange} placeholder={placeholder} />
  );
};

export default FormTextInput;
