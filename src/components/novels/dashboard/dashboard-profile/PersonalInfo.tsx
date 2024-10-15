'use client'
import React, {useEffect, useState} from "react";
import Select, {OptionProps, SingleValue, StylesConfig} from "react-select";
import Countries from "@/data/countries";

type OptionType = { value: string; label: string };

const PersonalInfo = () => {
  const [selectedSex, setSelectedSex] = useState<OptionType | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<OptionType | null>(null);
  const [countryOptions, setCountryOptions] = useState<OptionType[]>([]);

  const customStyles: StylesConfig<OptionType, true | false> = {
    option: (provided: any, { isFocused, isSelected }: OptionProps<OptionType, true | false>) => ({
      ...provided,
      backgroundColor: isSelected ? "#4c79fb" : isFocused ? "#c9e0fa" : undefined,
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#c9e0fa",
      },
    }),
    menuList: (provided: any) => ({
      ...provided,
      maxHeight: 150,
      overflowY: 'auto',
    }),
  };

  const sexOptions = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
  ]

  const convertCountries = (): Promise<{ value: string; label: string }[]> => {
    return new Promise((resolve) => {
      const data = Countries.map((country) => ({
        value: country.name.toLowerCase(),
        label: country.name,
      }));
      resolve(data);
    });
  };

  useEffect(() => {
    convertCountries().then((data) => {
      setCountryOptions(data);
    });
  }, []);

  const handleSexChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedSex(selectedOption);
  };

  const handleCountryChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Username
            </label>
            <input
                type="text"
                className="form-control"
                value="My_Novel"
                disabled={true}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Email</label>
            <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
            />
          </div>
        </div>
        {/* End .col */}


        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Sex</label>
            <div className="location-area">
              <Select
                  value={selectedSex}
                  onChange={handleSexChange}
                  options={sexOptions}
                  styles={customStyles}
                  className="select-custom pl-0"
                  classNamePrefix="select"
                  required
                  isMulti={false}
              />
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              First Name
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your First Name"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Last Name
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your Last Name"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Phone Number
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your Phone Number"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Country</label>
            <div className="location-area">
              <Select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  options={countryOptions}
                  styles={customStyles}
                  className="select-custom pl-0"
                  classNamePrefix="select"
                  required
                  isMulti={false}
              />
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Province
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your province"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              District
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your District"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Zip Code
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your Zip Code"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-xl-8 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Address
            </label>
            <input
                type="text"
                className="form-control"
                placeholder="Your Address"
                required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="text-end">
            <button type="submit" className="ud-btn btn-dark">
              Update Profile
              <i className="fal fa-arrow-right-long"/>
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default PersonalInfo;
