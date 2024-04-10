import React from "react";

const TextInput = ({ placeholder, required, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mb-4 w-full h-10"
      required={required}
    />
  );
};

export default TextInput;
