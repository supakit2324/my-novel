"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface NovelDescriptionProps {
    imageSrc: string | null;
}

const UploadImageCover = ({ imageSrc }: NovelDescriptionProps) => {
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-box position-relative d-md-flex align-items-end justify-content-center">
            <div className="book-cover-img new position-relative justify-content-center overflow-hidden bdrs12">
                <Image
                    width={240}
                    height={220}
                    className="w-100 cover h-100"
                    src={imageSrc || "/images/listings/profile-1.jpg"}
                    alt="profile avatar"
                />
            </div>
            {/* End .profile-img */}
        </div>
    );
};

export default UploadImageCover;
