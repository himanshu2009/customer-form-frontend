import React from "react";

function RadioButton({
  id,
  value,
  checked,
  onChange,
  label,
  radioBtnCategory,
}) {
  return (
    <div className="w-[100%] md:w-[44%] ">
      <input
        className=" ml-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="radio"
        id={id}
        name={radioBtnCategory}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="ml-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
