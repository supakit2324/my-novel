'use client';

import React, {useEffect, useState} from "react";
import Select, { OptionProps, SingleValue, StylesConfig } from "react-select";

type OptionType = { value: Date; label: string };

interface CalenderIncomeProps {
    onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

const CalenderIncome = ({ onDateChange }: CalenderIncomeProps) => {
    const [selectedMonth, setSelectedMonth] = useState<OptionType | null>(null);

    const formatMonth = (date: Date) => {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${year}`;
    };

    const genMonths = (): OptionType[] => {
        const months: OptionType[] = [];
        const today = new Date();
        const startMonth = today.getMonth();
        const startYear = today.getFullYear();

        for (let i = 0; i <= 12; i++) {
            const date = new Date(startYear, startMonth - i);
            months.push({
                value: date,
                label: formatMonth(date)
            });
        }
        return months;
    };

    useEffect(() => {
        const today = new Date();
        const currentMonth: OptionType = {
            value: today,
            label: formatMonth(today)
        };
        setSelectedMonth(currentMonth);
        updateStartAndEndDates(today);
    }, []);

    const updateStartAndEndDates = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();

        const start = new Date(year, month, 1);
        const end = new Date(year, month + 1, 0);
        onDateChange(start, end);
    };

    const handleMonthChange = (selectedOption: SingleValue<OptionType>) => {
        setSelectedMonth(selectedOption);
        if (selectedOption) {
            updateStartAndEndDates(selectedOption.value);
        }
    };

    const customStyles: StylesConfig<OptionType, false> = {
        option: (provided, { isFocused, isSelected }) => ({
            ...provided,
            backgroundColor: isSelected ? "#4c79fb" : isFocused ? "#c9e0fa" : undefined,
            cursor: "pointer",
            ":hover": {
                backgroundColor: "#c9e0fa",
            },
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: 150,
            overflowY: 'auto',
        }),
    };

    return (
        <form className="form-style1">
            <div className="location-area">
                <Select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    options={genMonths()}
                    styles={customStyles}
                    className="select-custom pl-0"
                    classNamePrefix="select"
                    required
                    isMulti={false}
                />
            </div>
        </form>
    );
};

export default CalenderIncome;