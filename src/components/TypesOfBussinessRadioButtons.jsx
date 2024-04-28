import React from "react";
import RadioButton from "../common_components/RadioButton";

function TypesOfBussinessRadioButtons({
  businessType,
  onChange,
  radioBtnCategory,
}) {
  const options = [
    { id: 1, value: "Retailer", label: "Retailer" },
    {
      id: 2,
      value: "Publication / Broadcaster",
      label: "Publication / Broadcaster",
    },
    { id: 3, value: "Manufacturer", label: "Manufacturer" },
    { id: 4, value: "Wholesaler", label: "Wholesaler" },
    {
      id: 5,
      value: "Construction Contractor",
      label: "Construction Contractor",
    },
    { id: 6, value: "Professional Services", label: "Professional Services" },
    { id: 7, value: "Consultant", label: "Consultant" },
    { id: 8, value: "Other", label: "Other" },
    { id: 9, value: "Distribution / Dealer", label: "Distribution / Dealer" },
    { id: 10, value: "Service Provider", label: "Service Provider" },
    {
      id: 11,
      value: "Freight/Transportation",
      label: "Freight/Transportation",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          value={option.value}
          checked={businessType === option.value}
          onChange={onChange}
          label={option.label}
          radioBtnCategory={radioBtnCategory}
        />
      ))}
    </div>
  );
}

export default TypesOfBussinessRadioButtons;
