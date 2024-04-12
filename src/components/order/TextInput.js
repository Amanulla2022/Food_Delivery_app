import React from "react";

const TextInput = ({ placeholder, required, type, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mb-4 w-full h-10"
      required={required}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default TextInput;
