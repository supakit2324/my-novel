"use client";
import React from "react";
import Select, {OptionProps, StylesConfig} from "react-select";

const structureTypeOptions = [
  { value: "Apartments", label: "Apartments" },
  { value: "Bungalow", label: "Bungalow" },
  { value: "Houses", label: "Houses" },
  { value: "Loft", label: "Loft" },
];

const customStyles: StylesConfig<{ value: string; label: string }, true> = {
  option: (
      provided: any,
      { isFocused, isSelected }: OptionProps<{ value: string; label: string }, true>
  ) => ({
    ...provided,
    backgroundColor: isSelected
        ? "#eb6753"
        : isFocused
            ? "#eb675312"
            : undefined,
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#eb675312",
    },
  }),
};

const StructureType = () => {
  return (
    <div className="col-sm-6 col-xl-4">
      <div className="mb20">
        <label className="heading-color ff-heading fw600 mb10">
          Structure type
        </label>
        <div className="location-area">
          <Select
            styles={customStyles}
            className="select-custom pl-0"
            classNamePrefix="select"
            required
            isMulti
            defaultValue={[structureTypeOptions[0]]}
            name="structureType"
            options={structureTypeOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default StructureType;
