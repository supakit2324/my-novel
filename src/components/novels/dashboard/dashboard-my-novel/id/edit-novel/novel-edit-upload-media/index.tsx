import React from "react";
import EditUploadBookCover
    from "@/components/novels/dashboard/dashboard-my-novel/id/edit-novel/novel-edit-upload-media/EditUploadBookCover";
import {Novels} from "@/hooks/use-novels";
import NovelEditDescription
    from "@/components/novels/dashboard/dashboard-my-novel/id/edit-novel/novel-edit-description";

interface IProps {
    props: Novels
}


const NovelEditUploadMedia = ({props}: IProps) => {
    return (
        <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
            <h4 className="title fz17 mb30">Upload book cover</h4>
            <form className="form-style1">
                <div className="row">
                    <div className="col-lg-12">
                        {props ? <EditUploadBookCover props={props} /> : <p>Loading...</p> }
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

export default NovelEditUploadMedia;
