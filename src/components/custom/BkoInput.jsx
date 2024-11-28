import React from 'react';

const Input = ({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  autoComplete = 'off',
  required = false,
  ...props
}) => {
  return (
    <>
      <label htmlFor={name} className="block text-sm/6 font-medium text-black">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`block w-full mt-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm ${className}`}
        required={required}
        {...props}
      />
    </>
  );
};

export default Input;
