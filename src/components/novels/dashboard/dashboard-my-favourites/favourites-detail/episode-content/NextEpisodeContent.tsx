'use client'

import Image from 'next/image';
import {NovelEpisode, Novels} from "@/hooks/use-novels";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

interface IProps {
    novel: Novels | null;
    currentEpisode: NovelEpisode | null;
    episodes: NovelEpisode[];
}

const NextEpisodeContent = ({ novel, currentEpisode, episodes }: IProps) => {
    const [nextEpisode, setNextEpisode] = useState<NovelEpisode | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (currentEpisode && episodes.length > 0) {
            const nextEp = episodes.find((ep) => ep.episode === currentEpisode.episode + 1);
            setNextEpisode(nextEp || null);
        }
    }, [currentEpisode, episodes]);

    const handleNextEpisodeClick = () => {
        if (nextEpisode && novel) {
            router.push(`/dashboard-my-favourites/${novel.id}/episode/${nextEpisode.id}`);
        }
    };

    return (
        <div className="episode-card-container">
            {nextEpisode ? (
                <div className="episode-card">
                    <div className="episode-card-image">
                        <Image
                            width={382}
                            height={300}
                            className="img-fluid w-100 h-100 object-cover"
                            src={novel?.imageSrc || '/placeholder.jpg'}
                            alt="listings"
                        />
                    </div>
                    <div className="episode-card-content">
                        <div className="episode-title">
                            <span>{novel?.title}</span>
                            <span>Next Episode {nextEpisode?.episodeName || "No Title"}</span>
                        </div>
                        <div className="episode-status">
                            {nextEpisode?.priceOption === "free" ? "ฟรี" : nextEpisode?.price ? `฿${nextEpisode.price}` : ""}
                        </div>
                    </div>
                    <button className="episode-chevron-btn" onClick={handleNextEpisodeClick}>
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
            ) : (
                <div className="no-episode">
                    <span>No more episodes available</span>
                </div>
            )}
        </div>
    );
};

export default NextEpisodeContent;