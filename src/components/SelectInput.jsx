import React from 'react';

const SelectInput = ({ name, value, onChange }) => {
  return (
    <select
      className="select select-bordered w-full max-w-xs mt-4"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option disabled value="">Select</option>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default SelectInput;
