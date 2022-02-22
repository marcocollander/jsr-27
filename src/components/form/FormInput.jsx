import React from "react";

const FormInput = ({ type }) => {
  const inputType = ["text", "number", "email"].includes(type) ? type : "range";

  return <input type={inputType} />;
};

export default FormInput;
