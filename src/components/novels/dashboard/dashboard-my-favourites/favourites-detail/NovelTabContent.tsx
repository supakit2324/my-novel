import React, { useState } from "react";
import {NovelEpisode, Novels} from "@/hooks/use-novels";
import NovelEpisodesContent
    from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelEpisodesContent";
import NovelContentDescription
    from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelContentDescription";

interface IProps {
    novel: Novels | null,
    episodes: NovelEpisode[] | null
    id: string
}

const NovelTabContent = ({novel, episodes, id}: IProps) => {
    const [activeTab, setActiveTab] = useState("episodes");

    if (!novel) {
        return <div>No novel data available</div>;
    }

    if (!episodes) {
        return <div>No episodes available</div>;
    }

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab2" role="tablist" style={{border: 'none'}}>
                    <button
                        className={`nav-link ${activeTab === 'episodes' ? 'nav-novel-content-active' : 'nav-novel-content-inactive'}`}
                        id="nav-item1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-item1"
                        type="button"
                        role="tab"
                        aria-controls="nav-item1"
                        aria-selected="true"
                        onClick={() => setActiveTab("episodes")}
                        disabled={activeTab === "episodes"}
                    >
                        ตอนที่
                    </button>

                    <button
                        className={`nav-link ${activeTab === 'description' ? 'nav-novel-content-active' : 'nav-novel-content-inactive'}`}
                        id="nav-item2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-item2"
                        type="button"
                        role="tab"
                        aria-controls="nav-item2"
                        aria-selected="false"
                        onClick={() => setActiveTab("description")}
                        disabled={activeTab === "description"}
                    >
                        ข้อมูล
                    </button>

                    <button
                        className={`nav-link ${activeTab === 'comments' ? 'nav-novel-content-active' : 'nav-novel-content-inactive'}`}
                        id="nav-item3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-item3"
                        type="button"
                        role="tab"
                        aria-controls="nav-item3"
                        aria-selected="false"
                        onClick={() => setActiveTab("comments")}
                        disabled={activeTab === "comments"}
                    >
                        ความคิดเห็น
                    </button>
                </div>
            </nav>
            {/* End nav tabs */}

            <div className="tab-content" id="nav-tabContent">
                <div
                    className={`tab-pane fade ${activeTab === 'episodes' ? 'show active' : ''}`}
                    id="nav-item1"
                    role="tabpanel"
                    aria-labelledby="nav-item1-tab"
                >
                    <div className="ps-widget bgc-charcoal-blue bdrs12 p15 position-relative text-white" style={{ minHeight: '300px' }}>
                        <NovelEpisodesContent episodes={episodes} id={id}/>
                    </div>
                </div>

                <div
                    className={`tab-pane fade ${activeTab === 'description' ? 'show active' : ''}`}
                    id="nav-item2"
                    role="tabpanel"
                    aria-labelledby="nav-item2-tab"
                >
                    <div className="ps-widget bgc-charcoal-blue bdrs12 p15 position-relative text-white" style={{ minHeight: '300px' }}>
                        <NovelContentDescription novel={novel} episodes={episodes}/>
                    </div>
                </div>

                <div
                    className={`tab-pane fade ${activeTab === 'comments' ? 'show active' : ''}`}
                    id="nav-item3"
                    role="tabpanel"
                    aria-labelledby="nav-item3-tab"
                >
                    <div className="ps-widget bgc-charcoal-blue bdrs12 p15 position-relative text-white" style={{ minHeight: '300px' }}>
                        <h4 className="title fz17 mb30 text-white">Comments</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NovelTabContent;
