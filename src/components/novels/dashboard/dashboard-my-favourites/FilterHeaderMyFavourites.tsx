'use client'

import {ChangeEvent, useState} from "react";
import {NovelTypes} from "@/enums/novel-types.enum";

type OptionType = { value: string; label: string };

const FilterHeaderMyFavorites = ({ onTypeChange }: { onTypeChange: (type: string) => void }) => {
    const [selectedType, setSelectedType] = useState<OptionType | null>({ value: "all", label: "All Type" });

    const typeOptions: OptionType[] = [
        { value: NovelTypes.ALL, label: "All Type" },
        { value: NovelTypes.NOVEL, label: "Novel" },
        { value: NovelTypes.FANFIC, label: "Fanfic" },
        { value: NovelTypes.CARTOON, label: "Cartoon" },
        { value: NovelTypes.EBOOK, label: "Ebook" },
        { value: NovelTypes.FAN_CLUB_TRANSLATION, label: "Fan Club Translation" },
    ];

    const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setSelectedType(typeOptions.find(option => option.value === selected) || null);
        onTypeChange(selected);
    };

    return (
        <div className="dashboard_search_meta d-md-flex align-items-center justify-content-xxl-end">
            <div className="item1 mb15-sm">
                <div className="search_area">
                    <input
                        type="text"
                        className="form-control bdrs12"
                        placeholder="Search"
                        required
                    />
                    <label>
                        <span className="flaticon-search" />
                    </label>
                </div>
            </div>

            <div className="page_control_shorting bdr1 bdrs12 py-2 ps-3 pe-2 mx-1 mx-xxl-3 bgc-white mb15-sm maxw160">
                <div className="pcs_dropdown d-flex align-items-center">
                    <span style={{ minWidth: "50px" }} className="title-color">
                        Type:
                    </span>
                    <select className="form-select show-tick" value={selectedType?.value} onChange={handleTypeChange}>
                        {typeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterHeaderMyFavorites;
