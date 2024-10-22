import {useParams, useRouter} from "next/navigation";
import {MouseEventHandler} from "react";

interface UpdateEpisodeHeaderProps {
    onSubmit: MouseEventHandler<HTMLButtonElement>;
}

const SettingNovelEpisodeHeader = ({ onSubmit }: UpdateEpisodeHeaderProps) => {
    const params = useParams();
    const id = Array.isArray(params.episodeId) ? params.episodeId[0] : params.episodeId;
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
                <button
                    onClick={handleBack}
                    className="novel-settings-button me-2 novel-episode-header-btn">
                    <i className="fa-regular fa-arrow-left"></i>
                </button>
            </div>
            <div
                className="novel-dashboard-header d-md-flex align-items-center justify-content-end novel-episode-header-wrapper">
                <button type="button" className="novel-settings-button me-2 novel-episode-header-btn">
                    <i className="fa-light fa-x me-1"></i> <span>DELETE</span>
                </button>

                <button type="submit" onClick={onSubmit}
                        className="novel-create-episode-button novel-episode-header-btn">
                    <i className="fa-regular fa-check"></i> <span>RECORD</span>
                </button>
            </div>
        </div>
    );
}

export default SettingNovelEpisodeHeader;