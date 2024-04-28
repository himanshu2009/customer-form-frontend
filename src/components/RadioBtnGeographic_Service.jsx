import React from "react";
import RadioButton from "../common_components/RadioButton";

function RadioBtnGeographic_Service({
  geographicService,
  onChange,
  radioBtnCategory,
}) {
  const options = [
    { id: 1, value: "Local", label: "Local" },
    { id: 2, value: "Regional", label: "Regional" },
    { id: 3, value: "National", label: "National" },
    { id: 4, value: "International", label: "International" },
  ];

  return (
    <div className="flex flex-wrap">
      {options.map((option) => {
        return (
          <RadioButton
            key={option.id}
            id={option.id}
            radioBtnCategory={radioBtnCategory}
            value={option.value}
            checked={geographicService === option.value}
            onChange={onChange}
            label={option.label}
          />
        );
      })}
    </div>
  );
}

export default RadioBtnGeographic_Service;
