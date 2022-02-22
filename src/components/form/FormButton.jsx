import React from "react";

const FormButton = ({ onBtnClick, label }) => {
  return <button onClick={onBtnClick}>{label}</button>;
};

export default FormButton;
