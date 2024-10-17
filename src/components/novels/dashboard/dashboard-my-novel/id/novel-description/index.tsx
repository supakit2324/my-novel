import {useEffect, useState} from "react";
import {fetchNovelsById as fetchNovelsData, fetchNovelsEpisodeById, NovelEpisode, Novels} from "@/hooks/use-novels";
import Link from "next/link";
import UploadImageCover from "@/components/novels/dashboard/dashboard-my-novel/id/image-cover/UploadBookCover";

interface NovelDescriptionProps {
    id: string;
}

const  NovelDescriptionById = ({ id }: NovelDescriptionProps) => {
    const [novels, setNovels] = useState<Novels | null>(null);
    const [novelEp, setNovelEp] = useState<NovelEpisode[] | null>(null)
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

        const fetchNovelEp = async () => {
            try {
                const data = await fetchNovelsEpisodeById(id);
                setNovelEp(data);
            } catch (error) {
                console.error("Error fetching novels:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        fetchNovelEp();
    }, []);

    console.log(novelEp)

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="novel-container">
                <div className="novel-cover">
                    <UploadImageCover imageSrc={novels?.imageSrc || null}/>
                </div>
                <div className="novel-details">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="fs-4">{novels?.title}</h5>
                        </div>
                        <div className="col-12">
                            <span className="fw-mediuml">By: </span>
                            <span className="fw-bold">{novels?.author}</span>
                        </div>
                        <div className="col-12">
                            <span className="fw-medium">Synopsis : </span>
                            <span className="fw-normal">{novels?.synopsis}</span>
                        </div>
                        <div className="col-12">
                            <span className="fw-medium">Tags : </span>
                            <span className="fw-normal">
              {novels?.categoryTags?.map((tag, index) => (
                  <span key={index} className="badge bg-secondary me-2">{tag}</span>
              )) || "No tags"}
            </span>
                        </div>
                        <div className="row mt-5">
                            <h5>Episode</h5>
                            <div className="novel-episode-grid">
                                {novelEp?.map((episode) => (
                                    <div key={episode.id} className="novel-episode-block">
                                        <Link href="#">
                                            <span className="btn novel-episode-btn">{`บทที่ ${episode.episode}`}</span>
                                            <div className="tooltip">{episode.episodeName}</div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="stats-container">*/}
                {/*    <div className="stat-item">*/}
                {/*        <i className="fa-regular fa-eye"></i>*/}
                {/*        <p className="mb-0">Total views</p>*/}
                {/*        <p>0</p>*/}
                {/*    </div>*/}
                {/*    <div className="stat-item">*/}
                {/*        <i className="fa-solid fa-list"></i>*/}
                {/*        <p className="mb-0">Number of episodes</p>*/}
                {/*        <p>0</p>*/}
                {/*    </div>*/}
                {/*    <div className="stat-item">*/}
                {/*        <i className="fa-regular fa-comment"></i>*/}
                {/*        <p className="mb-0">Comment</p>*/}
                {/*        <p>0</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default NovelDescriptionById