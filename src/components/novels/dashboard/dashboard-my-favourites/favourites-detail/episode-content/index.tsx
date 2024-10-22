'use client'

import {useEffect, useState} from "react";
import {fetchEpisodeById, fetchNovelsById, fetchNovelsEpisodeById, NovelEpisode, Novels} from "@/hooks/use-novels";
import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EpisodeCommentContent
    from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/episode-content/EpisodeCommentContent";
import NextEpisodeContent
    from "@/components/novels/dashboard/dashboard-my-favourites/favourites-detail/episode-content/NextEpisodeContent";

interface IProps {
    episodeId: string
    novelId: string
}

const EpisodeContent = ({episodeId, novelId}: IProps) => {
    const [loading, setLoading] = useState(true);
    const [currentEpisodes, setCurrentEpisodes] = useState<NovelEpisode | null>(null);
    const [allEpisodes, setAllEpisodes] = useState<NovelEpisode[] | null>(null);
    const [novel, setNovel] = useState<Novels | null>(null)
    const [dateTime, setDateTime] = useState('');

    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
        editable: false,
    });

    useEffect(() => {
        const fetchCurrentEpisode = async () => {
            if (episodeId) {
                try {
                    const currentEpisodeData = await fetchEpisodeById(episodeId);
                    setCurrentEpisodes(currentEpisodeData);
                    if (editor && currentEpisodeData?.story) {
                        editor.commands.setContent(currentEpisodeData.story);
                    }
                } catch (error) {
                    console.error("Error fetching episode data:", error);
                }
            }
        };

        const fetchAllEpisode = async () => {
            if (novelId) {
                try {
                    const allEpisodeData = await fetchNovelsEpisodeById(novelId);
                    setAllEpisodes(allEpisodeData);
                } catch (error) {
                    console.error("Error fetching episode data:", error);
                }
            }
        };

        const fetchNovel = async () => {
            if (novelId) {
                try {
                    const novelData = await fetchNovelsById(novelId);
                    setNovel(novelData);
                } catch (error) {
                    console.error("Error fetching novel data:", error);
                }
            }
        }

        const currentDateTime = new Date().toLocaleString();
        setDateTime(currentDateTime);
        fetchCurrentEpisode();
        fetchAllEpisode();
        fetchNovel()
    }, [episodeId, novelId, editor]);

    return (
        <>
            <div className="container">
                <div className="card-episode-content mb-5">
                    <div className="text-center">
                        <h5>Episode {currentEpisodes?.episode}: {currentEpisodes?.episodeName}</h5>
                        <h6><span>By </span> <span>{novel?.author}</span></h6>
                    </div>
                    <EditorContent editor={editor}/>
                </div>

                <EpisodeCommentContent />
                <NextEpisodeContent novel={novel} currentEpisode={currentEpisodes} episodes={allEpisodes || []} />
            </div>
        </>
    )
}

export default EpisodeContent