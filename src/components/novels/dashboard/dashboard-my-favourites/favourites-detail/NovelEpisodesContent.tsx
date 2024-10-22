import {NovelEpisode, Novels} from "@/hooks/use-novels";
import Link from "next/link";

interface IProps {
    episodes: NovelEpisode[] | null
    id: string
}

const NovelEpisodesContent = ({episodes, id}: IProps) => {
    return (
        <>
            <div className="row">
                <div className="novel-episode-content-grid">
                    {episodes?.map((episode) => (
                        <div key={episode.id} className="novel-episode-content-block">
                            <Link href={`/dashboard-my-favourites/${id}/episode/${episode.id}`}>
                                <span className="btn novel-episode-content-btn">{`บทที่ ${episode.episode}`}</span>
                                <div className="novel-content-tooltip">{episode.episodeName}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NovelEpisodesContent