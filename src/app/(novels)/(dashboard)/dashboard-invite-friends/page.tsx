import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/novels/dashboard/DboardMobileNavigation";
import Footer from "@/components/novels/dashboard/Footer";
import SidebarDashboard from "@/components/novels/dashboard/SidebarDashboard";
import DashboardInviteFriendsContent from "@/components/novels/dashboard/dashboard-invite-friends";

export const metadata = {
    title: "Dashboard My Wallet",
};

const DashboardMyWallet = () => {
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
                        <div className="dashboard__content property-page slate-bg-100">
                            <div className="row pb40 d-block d-lg-none">
                                <div className="col-lg-12">
                                    <DboardMobileNavigation/>
                                </div>
                                {/* End .col-12 */}
                            </div>
                            {/* End .row */}

                            <div className="row align-items-center pb40">
                                <div className="col-lg-12">
                                    <div className="dashboard_title_area">
                                        <h2>Invite Friends</h2>
                                    </div>
                                </div>
                            </div>
                            {/* End .row */}

                            <div className="row">
                                <div className="col-xl-12">
                                    <div
                                        className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 position-relative">
                                        <div className="navtab-style1">
                                            <DashboardInviteFriendsContent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End dashboard__content */}

                        <Footer/>
                    </div>
                    {/* End .dashboard__main */}
                </div>
            </div>
            {/* dashboard_content_wrapper */}
        </>
    );
};

export default DashboardMyWallet;
