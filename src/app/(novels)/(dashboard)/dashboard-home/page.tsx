import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import SidebarDashboard from "@/components/novels/dashboard/SidebarDashboard";
import DboardMobileNavigation from "@/components/novels/dashboard/DboardMobileNavigation";
import TopStateBlock from "@/components/novels/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/novels/dashboard/dashboard-home/property-view";
import RecentActivities from "@/components/novels/dashboard/dashboard-home/RecentActivities";
import Footer from "@/components/novels/dashboard/Footer";

export const metadata = {
    title: "Dashboard Home",
};

const DashboardHome = () => {
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
                <div className="dashboard dashboard_wrapper pr30 pr0-xl">
                    <SidebarDashboard />
                    {/* End .dashboard__sidebar */}

                    <div className="dashboard__main pl0-md">
                        <div className="dashboard__content bgc-f7">
                            <div className="row pb40">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation />
                                </div>
                                {/* End .col-12 */}

                                <div className="col-lg-12">
                                    <div className="dashboard_title_area">
                                        <h2>Howdy, Ali!</h2>
                                    </div>
                                </div>
                                {/* col-lg-12 */}
                            </div>
                            {/* End .row */}

                            <div className="row">
                                <TopStateBlock />
                            </div>
                            {/* End .row */}

                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                        <div className="row">
                                            <PropertyViews />
                                        </div>
                                    </div>
                                </div>
                                {/* End col-xl-8 */}

                                <div className="col-xl-4">
                                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                        <h4 className="title fz17 mb25">Recent Activities</h4>
                                        <RecentActivities />
                                    </div>
                                </div>
                                {/* End .col-xl-4 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .dashboard__content */}

                        <Footer />
                    </div>
                    {/* End .dashboard__main */}
                </div>
            </div>
            {/* dashboard_content_wrapper */}
        </>
    );
};

export default DashboardHome;
