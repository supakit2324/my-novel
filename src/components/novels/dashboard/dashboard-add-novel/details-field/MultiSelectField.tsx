"use client";
import React from "react";
import Select, {OptionProps, StylesConfig} from "react-select";

interface OptionsType {
  floorNo: string[];
  energyClass: string[];
  energyIndex: string[];
}

const options: OptionsType = {
  floorNo: ["1st", "2nd", "3rd", "4th"],
  energyClass: ["All Listing", "Active", "Sold", "Processing"],
  energyIndex: ["All Cities", "Pending", "Processing", "Published"],
};

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

const MultiSelectField = () => {
  const fieldTitles = ["Floors no", "Energy Class", "Energy index in kWh/m2a"];
  return (
    <>
      {Object.keys(options).map((key, index) => (
        <div className="col-sm-6 col-xl-4" key={index}>
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {fieldTitles[index]}
            </label>
            <div className="location-area">
              <Select
                styles={customStyles}
                className="select-custom pl-0"
                classNamePrefix="select"
                required
                isMulti
                options={options[key as keyof OptionsType].map((item) => ({
                  value: item,
                  label: item,
                }))}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MultiSelectField;
