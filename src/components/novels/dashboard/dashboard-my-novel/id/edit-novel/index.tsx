'use client'

import React, {useEffect, useState} from "react";
import NovelEditDescription
    from "@/components/novels/dashboard/dashboard-my-novel/id/edit-novel/novel-edit-description";
import NovelEditUploadMedia
    from "@/components/novels/dashboard/dashboard-my-novel/id/edit-novel/novel-edit-upload-media";
import {useParams} from "next/navigation";
import {fetchNovelsById as fetchNovelsData, Novels} from "@/hooks/use-novels";

const UpdateNovelTabContent = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    const [novels, setNovels] = useState<Novels | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNovelsData(id);
                setNovels(data);
            } catch (error) {
                console.error("Error fetching novels:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },  [id]);

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
                        {novels ? <NovelEditDescription props={novels} /> : <p>Loading...</p> }
                    </div>
                </div>

                <div
                    className="tab-pane fade"
                    id="nav-item2"
                    role="tabpanel"
                    aria-labelledby="nav-item2-tab"
                >
                    <div className="ps-widget bgc-white bdrs12 p30 position-relative">
                        <h4 className="title fz17 mb30">Upload book cover</h4>
                        {novels ? <NovelEditUploadMedia props={novels} /> : <p>Loading...</p> }
                    </div>
                </div>

            </div>
        </>
    );
};

export default UpdateNovelTabContent;
