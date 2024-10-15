'use client'
import Select, {OptionProps, SingleValue, StylesConfig} from "react-select";
import React, {useState} from "react";
import UploadPhotoGallery from "@/components/novels/dashboard/dashboard-add-novel/upload-media/UploadPhotoGallery";
import UploadIdCard from "@/components/novels/dashboard/dashboard-income/UploadIdCard";

type OptionType = { value: string; label: string };

const companyTypeOptions: OptionType[] = [
    { value: 'Company', label: 'company' },
    { value: 'Individual', label: 'individual' },
]

const bankNameOptions: OptionType[] = [
    { value: 'Bangkok Bank', label: 'bangkok bank' },
    { value: 'Kasikorn Bank', label: 'kasikorn bank' },
    { value: 'Krung Thai Bank', label: 'krung thai bank' },
    { value: 'CitiBank', label: 'citiBank' },
]

const TransactionForm = () => {
    const [selectedCompanyType, setSelectedCompanyType] = useState<OptionType | null>(null);
    const [selectedBankName, setSelectedBankName] = useState<OptionType | null>(null);

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

    const handleCompanyTypeChange = (selectedOption: SingleValue<OptionType>) => {
        setSelectedCompanyType(selectedOption);
    };

    const handleBankNameChange = (selectedOption: SingleValue<OptionType>) => {
        setSelectedBankName(selectedOption);
    };

    return (
        <form className="form-style1">
            <div className="border-bottom mb-4">
                <h5>1. Add a bank account</h5>
                <div className="row">
                    <div className="col-sm-12 col-xl-8">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">Name and Surname (must match the name
                                on
                                the passbook)</label>
                            <input type="text" className="form-control" placeholder="Your Name"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-4">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">Company Type</label>
                            <div className="location-area">
                                <Select
                                    value={selectedCompanyType}
                                    onChange={handleCompanyTypeChange}
                                    options={companyTypeOptions}
                                    styles={customStyles}
                                    className="select-custom pl-0"
                                    classNamePrefix="select"
                                    required
                                    isMulti={false}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-xl-8">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">Account Number</label>
                            <input type="text" className="form-control" placeholder="xxx-x-xxxxx-x-xx"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-4">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">Bank</label>
                            <div className="location-area">
                                <Select
                                    value={selectedBankName}
                                    onChange={handleBankNameChange}
                                    options={bankNameOptions}
                                    styles={customStyles}
                                    className="select-custom pl-0"
                                    classNamePrefix="select"
                                    required
                                    isMulti={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-bottom mb-4">
                <h5>2. Attach a copy of your ID card.</h5>
                <div className="row">
                    <div className="col-sm-12 col-xl-4">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">National Identification
                                Number</label>
                            <input type="text" className="form-control" placeholder="National Identification Number"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-8">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">Address as per ID card
                                Number</label>
                            <textarea
                                cols={30}
                                rows={3}
                                placeholder="Address as per ID card."
                            />
                        </div>
                    </div>

                    <div>
                        <UploadIdCard/>
                    </div>

                </div>
            </div>

            <div className="mb-4">
                <h5>3. Add current address</h5>
                <div className="row">
                    <div className="col-sm-12 col-xl-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">Current address</label>
                            <input type="text" className="form-control" placeholder="Current address"/>
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-6">
                        <div className="mb20">
                            <label className="heading-color ff-heading fw600 mb10">telephone number</label>
                            <input type="text" className="form-control" placeholder="telephone number"/>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-md-12">
                <div className="text-start">
                    <button type="submit" className="ud-btn btn-dark">
                        Submit
                        <i className="fal fa-arrow-right-long"/>
                    </button>
                </div>
            </div>

        </form>
    )
}

export default TransactionForm