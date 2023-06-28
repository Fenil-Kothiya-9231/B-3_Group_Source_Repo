import React from 'react';

const RadioInput = ({ label, name, options, selectedValue, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
