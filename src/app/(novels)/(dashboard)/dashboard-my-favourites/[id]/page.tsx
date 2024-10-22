'use client'

import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/novels/dashboard/Footer";
import DefaultHeader from "@/components/common/DefaultHeader";
import NovelHeader from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelHeader";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import NovelContent from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelContent";
import NovelDescription from "@/components/common/NovelDescription";

const Page = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    return (
        <>
            {/* Main Header Nav */}
            <DefaultHeader/>
            {/* End Main Header Nav */}

            {/* Mobile Nav */}
            <MobileMenu/>
            {/* End Mobile Nav */}

            {/* <!-- Start Property Single Top --> */}
            <section className="full-height-section pt60 pb0 bgc-dark">
                <div className="container flex-grow-container">
                    <div className="row">
                        <NovelHeader id={id}/>
                    </div>
                    {/* End .row */}

                    <div className="row mt30">
                        <NovelContent id={id}/>
                    </div>
                    {/* End .row */}
                </div>
            </section>
            {/* <!-- End Property Single Top --> */}

            {/* Start Our Footer */}
            <section className="footer-style1 pt60 pb-0">
                <Footer/>
            </section>
            {/* End Our Footer */}
        </>
    );
};

export default Page;