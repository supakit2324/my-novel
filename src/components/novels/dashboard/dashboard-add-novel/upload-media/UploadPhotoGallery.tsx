"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import React, { useState, useRef } from "react";
import Image from "next/image";

const UploadPhotoGallery = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = (files: FileList) => {
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && typeof e.target.result === 'string') {
        setUploadedImage(e.target.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleUpload(files);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setUploadedImage(null);
  };

  return (
      <>
        <div
            className="upload-img position-relative overflow-hidden bdrs12 text-center mb30 px-2"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
          <div className="icon mb30">
            <span className="flaticon-upload" />
          </div>
          <h4 className="title fz17 mb10">Upload/Drag a photo of your novel</h4>
          <p className="text mb25">
            Photo must be JPEG or PNG format and at least 2048x768
          </p>
          <label className="ud-btn btn-white">
            Browse File
            <input
                ref={fileInputRef}
                id="fileInput"
                type="file"
                className="ud-btn btn-white"
                onChange={(e) => {
                  if (e.target.files) {
                    handleUpload(e.target.files);
                  }
                }}
                style={{ display: "none" }}
            />
          </label>
        </div>

        {/* Display uploaded image */}
        {uploadedImage && (
            <div className="row justify-content-center">
              <div className="col-auto">
                <div className="profile-img mb20 position-relative d-flex justify-content-center align-items-center">
                  <Image
                      width={212}
                      height={194}
                      className="w-100 bdrs12 cover"
                      src={uploadedImage}
                      alt="Uploaded Image"
                  />
                  <button
                      style={{ border: "none" }}
                      className="tag-del"
                      title="Delete Image"
                      onClick={handleDelete}
                      type="button"
                      data-tooltip-id="delete-image"
                  >
                    <span className="fas fa-trash-can" />
                  </button>

                  <ReactTooltip
                      id="delete-image"
                      place="right"
                      content="Delete Image"
                  />
                </div>
              </div>
            </div>
        )}
      </>
  );
};

export default UploadPhotoGallery;
