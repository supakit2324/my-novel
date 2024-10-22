'use client'

import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/novels/dashboard/Footer";
import DefaultHeader from "@/components/common/DefaultHeader";
import NovelHeader from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelHeader";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import NovelContent from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelContent";
import NovelDescription from "@/components/common/NovelDescription";
import EpisodeContent from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/episode-content";

const Page = () => {
    const params = useParams();
    const novelId = Array.isArray(params.id) ? params.id[0] : params.id;
    const episodeId = Array.isArray(params.episodeId) ? params.episodeId[0] : params.episodeId;

    return (
        <>
            {/* Main Header Nav */}
            <DefaultHeader/>
            {/* End Main Header Nav */}

            {/* Mobile Nav */}
            <MobileMenu/>
            {/* End Mobile Nav */}

            {/* <!-- Start Property Single Top --> */}
            <section className="full-height-section pt60 pb60 slate-bg-100">
                <EpisodeContent novelId={novelId}  episodeId={episodeId}/>
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