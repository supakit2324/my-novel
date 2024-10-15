import React from "react";
import TopUpChannels from "@/components/novels/dashboard/dashboard-my-wallet/top-up-channels";
import TopUpHistory from "@/components/novels/dashboard/dashboard-my-wallet/top-up-history";
import TopUpPurchase from "@/components/novels/dashboard/dashboard-my-wallet/top-up-purchase";

const TopUpContent = () => {
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
                        1. Top-up Channels
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
                        2. Top-up History
                    </button>
                    <button
                        className="nav-link fw600"
                        id="nav-item3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-item3"
                        type="button"
                        role="tab"
                        aria-controls="nav-item3"
                        aria-selected="false"
                    >
                        3. Purchase history
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
                        <h4 className="title fz17 mb30">Top-up Channels</h4>
                        <TopUpChannels/>
                    </div>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-item2"
                    role="tabpanel"
                    aria-labelledby="nav-item2-tab"
                >
                    <div className="ps-widget bgc-white bdrs12 p30 position-relative">
                        <h4 className="title fz17 mb30">Top-up History</h4>
                        <TopUpHistory/>
                    </div>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-item3"
                    role="tabpanel"
                    aria-labelledby="nav-item3-tab"
                >
                    <div className="ps-widget bgc-white bdrs12 p30 position-relative">
                        <h4 className="title fz17 mb30">Top-up Purchase</h4>
                        <TopUpPurchase/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopUpContent;