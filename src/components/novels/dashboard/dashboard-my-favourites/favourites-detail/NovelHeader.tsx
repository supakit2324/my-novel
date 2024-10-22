'use client'

import {fetchNovelsById, Novels} from "@/hooks/use-novels";
import {useEffect, useState} from "react";

interface IProps {
    id: string
}

const NovelHeader = ({id}: IProps) => {
    const [novel, setNovel] = useState<Novels | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNovel = async () => {
            if (id) {
                try {
                    const data = await fetchNovelsById(id);
                    setNovel(data);
                } catch (error) {
                    console.error("Error fetching novel data:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchNovel();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="col-lg-8">
                <div className="single-property-content mb30-md">
                    <h2 className="sp-lg-title text-white">{novel?.title}</h2>
                    <div className="d-flex align-items-center justify-content-start gap-2">
                        <div className="property-meta d-flex align-items-center justify-content-start">
                        <span className="ff-heading text-white ml0-sm fz15">
                            <i className="fa-regular fa-list fs-6"></i> <span>{novel?.categoryTags?.[0]}</span>
                        </span>
                        </div>

                        <div className="property-meta d-flex align-items-center">
                        <span className="ff-heading text-white ml10 ml0-sm fz15">
                           <i className="fa-regular fa-eye fs-6"></i> <span>{novel?.views}</span>
                    </span>
                        </div>

                        <div className="property-meta d-flex align-items-center">
                        <span className="ff-heading text-white ml10 ml0-sm fz15">
                            <i className="fa-light fa-thumbs-up fs-6"></i> <span>{novel?.favorites}</span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* End .col-lg--8 */}

            <div className="col-lg-4">
                <div className="single-property-content">
                    <div className="property-action dark-version text-lg-end">
                        <div className="d-flex mb20 mb10-md align-items-center justify-content-lg-end">
                            <a className="icon mr10" href="#">
                                <span className="flaticon-like"/>
                            </a>
                            <a className="icon mr10" href="#">
                                <span className="flaticon-new-tab"/>
                            </a>
                            <a className="icon mr10" href="#">
                                <span className="flaticon-share-1"/>
                            </a>
                            <a className="icon" href="#">
                                <span className="flaticon-printer" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* End .col-lg--4 */}
        </>
    );
};

export default NovelHeader