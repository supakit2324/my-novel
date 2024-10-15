'use client'

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import SidebarDashboard from "@/components/novels/dashboard/SidebarDashboard";
import DboardMobileNavigation from "@/components/novels/dashboard/DboardMobileNavigation";
import Pagination from "@/components/novels/Pagination";
import Footer from "@/components/novels/dashboard/Footer";
import NotificationTable from "@/components/novels/dashboard/dashboard-notification/NotificationTable";
import React, { useState } from "react";

const DashboardNotification = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
    const totalNotifications = 50;
    const totalPages = Math.ceil(totalNotifications / perPage);

    return (
        <>
            <DashboardHeader />
            <MobileMenu />

            <div className="dashboard_content_wrapper">
                <div className="dashboard dashboard_wrapper pr0-xl slate-bg-100">
                    <SidebarDashboard />

                    <div className="dashboard__main pl0-md">
                        <div className="dashboard__content slate-bg-100">
                            <div className="row pb40">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation/>
                                </div>
                            </div>

                            <div className="row align-items-center pb40">
                                <div className="col-xxl-3">
                                    <div className="dashboard_title_area">
                                        <h2>Notification</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div
                                        className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                        <div className="packages_table table-responsive">
                                            <NotificationTable currentPage={currentPage} perPage={perPage}/>

                                            <div className="mt30">
                                                <Pagination totalPages={totalPages} currentPage={currentPage}
                                                            onPageChange={setCurrentPage}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardNotification;
