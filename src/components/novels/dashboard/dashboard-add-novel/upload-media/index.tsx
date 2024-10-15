import React from "react";
import UploadBookCover from "@/components/novels/dashboard/dashboard-add-novel/upload-media/UploadBookCover";

const UploadMedia = () => {
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Upload book cover</h4>
        <form className="form-style1">
            <div className="row">
                <div className="col-lg-12">
                    <UploadBookCover/>
                </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-12">
                <div className="text-start">
                    <button type="submit" className="ud-btn btn-dark">
                        Submit
                        <i className="fal fa-arrow-right-long"/>
                    </button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default UploadMedia;
