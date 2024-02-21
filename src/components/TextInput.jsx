import React from 'react';

const TextInput = ({ type, name, value, placeholder, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className="input input-bordered w-full mb-4"
      required={required}
      onChange={onChange}
    />
  );
};

export default TextInput;
