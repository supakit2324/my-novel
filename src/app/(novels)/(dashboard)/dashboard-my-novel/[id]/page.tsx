'use client'

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import SidebarDashboard from "@/components/novels/dashboard/SidebarDashboard";
import DboardMobileNavigation from "@/components/novels/dashboard/DboardMobileNavigation";
import Footer from "@/components/novels/dashboard/Footer";
import DashboardMyNovelOfAuthorById from "@/components/novels/dashboard/dashboard-my-novel/id";
import SettingNovelHeader from "@/components/novels/dashboard/dashboard-my-novel/id/SettingNovelHeader";

const Page = () => {

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
                            <div className="col-lg-12">
                                <DboardMobileNavigation/>
                            </div>
                            {/* End .row */}

                            <div className="row text-end mb-4">
                                <div className="col-12">
                                    <SettingNovelHeader/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <div
                                        className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                        <DashboardMyNovelOfAuthorById/>
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

export default Page;
