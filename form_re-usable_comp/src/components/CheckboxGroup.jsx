import React from 'react';

const CheckboxGroup = ({ label, name, options, selectedValues, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;
