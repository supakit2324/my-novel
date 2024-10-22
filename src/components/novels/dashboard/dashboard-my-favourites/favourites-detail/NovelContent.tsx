'use client'

import {fetchNovelsById, fetchNovelsEpisodeById, NovelEpisode, Novels} from "@/hooks/use-novels";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import {useEffect, useState} from "react";
import EditNovelEpisode from "@/components/novels/dashboard/dashboard-my-novel/id/edit-novel-episode";
import NovelTabContent from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/NovelTabContent";

interface IProps {
    id: string
}

const NovelContent = ({id}: IProps) => {
    const [novel, setNovel] = useState<Novels | null>(null);
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState<NovelEpisode[] | null>(null);

    useEffect(() => {
        const fetchNovel = async () => {
            if (id) {
                try {
                    const novelData = await fetchNovelsById(id);
                    setNovel(novelData);
                } catch (error) {
                    console.error("Error fetching novel data:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        const fetchNovelEpisode = async () => {
            if (id) {
                try {
                    const episodeData = await fetchNovelsEpisodeById(id);
                    setEpisodes(episodeData);
                } catch (error) {
                    console.error("Error fetching episode data:", error);
                }
            }
        };

        fetchNovel();
        fetchNovelEpisode();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4 p-3">
                    {novel?.imageSrc ? (
                        <Image
                            src={novel.imageSrc}
                            width={300}
                            height={280}
                            alt={novel.title || "Novel Image"}
                            className="img-fluid"
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
                <div className="col-12 col-md-8 p-3">
                    <NovelTabContent novel={novel} episodes={episodes} id={id}/>
                </div>
            </div>
        </>
    )
        ;
}

export default NovelContent;
