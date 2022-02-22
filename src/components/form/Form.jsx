import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import FormTextInput from "./FormTextInput";

const Form = () => {
  const onBtnClick = (e) => console.log(e.target);
  const label = "Click me";

  const onInputChange = (e) => console.log(e.target.value);
  const placeholder = "Enter data here...";

  return (
    <div>
      {/* <FormInput type="text" />
      <FormInput type="number" />
      <FormInput type="email" />
      <FormInput type="blah" /> */}
      <FormButton onBtnClick={onBtnClick} label={label} />
      <FormTextInput onInputChange={onInputChange} placeholder={placeholder} />
      <FormTextInput onInputChange={onInputChange} placeholder={"Username"} />
      <FormTextInput onInputChange={onInputChange} placeholder={"Password"} />
    </div>
  );
};

export default Form;
