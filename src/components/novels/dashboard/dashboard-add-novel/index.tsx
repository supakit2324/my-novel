import React from "react";
import NovelDescription from "./novel-description";
import UploadMedia from "./upload-media";

const AddNovelTabContent = () => {
  return (
      <>
        <nav>
          <div className="nav nav-tabs" id="nav-tab2" role="tablist">
            <button
                className="nav-link active fw600 ms-3"
                id="nav-item1-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item1"
                type="button"
                role="tab"
                aria-controls="nav-item1"
                aria-selected="true"
            >
              1. Description
            </button>
            <button
                className="nav-link fw600"
                id="nav-item2-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item2"
                type="button"
                role="tab"
                aria-controls="nav-item2"
                aria-selected="false"
            >
              2. Media
            </button>
          </div>
        </nav>
        {/* End nav tabs */}

        <div className="tab-content" id="nav-tabContent">
          <div
              className="tab-pane fade show active"
              id="nav-item1"
              role="tabpanel"
              aria-labelledby="nav-item1-tab"
          >
            <div className="ps-widget bgc-white bdrs12 p30 position-relative">
              <h4 className="title fz17 mb30">Novel Description</h4>
              <NovelDescription/>
            </div>
          </div>

          <div
              className="tab-pane fade"
              id="nav-item2"
              role="tabpanel"
              aria-labelledby="nav-item2-tab"
          >
            <UploadMedia/>
          </div>

        </div>
      </>
  );
};

export default AddNovelTabContent;
