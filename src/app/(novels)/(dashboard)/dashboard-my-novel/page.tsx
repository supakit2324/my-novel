'use client'

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import SidebarDashboard from "@/components/novels/dashboard/SidebarDashboard";
import DboardMobileNavigation from "@/components/novels/dashboard/DboardMobileNavigation";
import FilterHeader from "@/components/novels/dashboard/dashboard-my-novel/FilterHeader";
import NovelsDataTable from "@/components/novels/dashboard/dashboard-my-novel/NovelsDataTable";
import Footer from "@/components/novels/dashboard/Footer";
import Pagination from "@/components/novels/Pagination";
import {useState} from "react";

const DashboardMyNovel = () => {
    const [selectedType, setSelectedType] = useState<string>("all");

    return (
        <>
            {/* Main Header Nav */}
            <DashboardHeader />
            {/* End Main Header Nav */}

            {/* Mobile Nav  */}
            <MobileMenu />
            {/* End Mobile Nav  */}

            {/* dashboard_content_wrapper */}
            <div className="dashboard_content_wrapper">
                <div className="dashboard dashboard_wrapper pr0-xl slate-bg-100">
                    <SidebarDashboard/>
                    {/* End .dashboard__sidebar */}

                    <div className="dashboard__main pl0-md">
                        <div className="dashboard__content slate-bg-100">
                            <div className="row pb40">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation/>
                                </div>
                                {/* End .col-12 */}
                            </div>
                            {/* End .row */}

                            <div className="row align-items-center pb40">
                                <div className="col-xxl-3">
                                    <div className="dashboard_title_area">
                                        <h2>My Novels</h2>
                                    </div>
                                </div>
                                <div className="col-xxl-9">
                                    <FilterHeader onTypeChange={setSelectedType}/>
                                </div>
                            </div>
                            {/* End .row */}

                            <div className="row">
                                <div className="col-xl-12">
                                    <div
                                        className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                        <div className="packages_table table-responsive">
                                            <NovelsDataTable selectedType={selectedType}/>

                                            <div className="mt30">
                                                <Pagination/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .dashboard__content */}

                        <Footer/>
                    </div>
                    {/* End .dashboard__main */}
                </div>
            </div>
            {/* dashboard_content_wrapper */}
        </>
    );
};

export default DashboardMyNovel;
