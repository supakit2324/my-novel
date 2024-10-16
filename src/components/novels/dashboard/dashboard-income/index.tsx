'use client'

import React, {useState} from "react";
import TransactionForm from "@/components/novels/dashboard/dashboard-income/TransactionForm";
import IncomeTableData from "@/components/novels/dashboard/dashboard-income/IncomeTableData";
import CalenderIncome from "@/components/novels/dashboard/dashboard-income/CalenderIncome";

const IncomeTabContent = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleDateChange = (start: Date | null, end: Date | null) => {
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                    <button
                        className="nav-link active fw600 ms-3"
                        id="nav-item1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-item1"
                        type="button"
                        role="tab"
                        aria-controls="nav-item1"
                        aria-selected="true"
                    >
                        1. Total Income
                    </button>
                    <button
                        className="nav-link fw600"
                        id="nav-item2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-item2"
                        type="button"
                        role="tab"
                        aria-controls="nav-item2"
                        aria-selected="false"
                    >
                        2. Register Transaction
                    </button>
                </div>
            </nav>
            {/* End nav tabs */}

            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-item1"
                    role="tabpanel"
                    aria-labelledby="nav-item1-tab"
                >
                    <div className="ps-widget bgc-white bdrs12 p30 position-relative">
                        <div className="d-flex justify-content-between">
                            <h4 className="title fz17 mb30">Total Income</h4>
                            <CalenderIncome onDateChange={handleDateChange} />
                        </div>
                        <IncomeTableData startDate={startDate} endDate={endDate} />
                    </div>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-item2"
                    role="tabpanel"
                    aria-labelledby="nav-item2-tab"
                >
                    <div className="ps-widget bgc-white bdrs12 p30 position-relative">
                        <h4 className="title fz17 mb30">Register Transaction</h4>
                        <TransactionForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IncomeTabContent;
