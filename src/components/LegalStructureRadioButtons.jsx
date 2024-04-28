import React from "react";
import RadioButton from "../common_components/RadioButton";

function LegalStructureRadioButtons({
  legalStructure,
  onChange,
  radioBtnCategory,
}) {
  const options = [
    { id: 1, value: "Corporation", label: "Corporation" },
    { id: 2, value: "Partnership", label: "Partnership" },
    { id: 3, value: "Sole Proprietorship", label: "Sole Proprietorship" },
    { id: 4, value: "Joint Venture", label: "Joint Venture" },
    { id: 5, value: "Franchise", label: "Franchise" },
    { id: 6, value: "Non-Profit", label: "Non-Profit" },
  ];
  return (
    <div className="flex flex-wrap">
      {options.map((option) => (
        <RadioButton
          key={option.id}
          id={option.id}
          value={option.value}
          checked={legalStructure === option.value}
          onChange={onChange}
          label={option.label}
          radioBtnCategory={radioBtnCategory}
        />
      ))}
    </div>
  );
}

export default LegalStructureRadioButtons;
