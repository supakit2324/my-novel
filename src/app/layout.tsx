"use client";

import "../../node_modules/react-modal-video/scss/modal-video.scss";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import "rc-slider/assets/index.css";
import { Prompt } from 'next/font/google';
import {useEffect} from "react";
import Aos from "aos";
import ScrollToTop from "../components/common/ScrollTop";
import Head from "next/head";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const promptBody = Prompt({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--body-font-family",
});

const promptTitle = Prompt({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--title-font-family",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        Aos.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            </Head>
            <html lang="en">
            <body className={`body  ${promptBody.variable} ${promptTitle.variable}`} cz-shortcut-listen="false">
            <div className="wrapper ovh">{children}</div>
            <ScrollToTop />
            </body>
            </html>
        </>
    );
}
