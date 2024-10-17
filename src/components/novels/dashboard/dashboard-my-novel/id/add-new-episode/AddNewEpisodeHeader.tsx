import { useParams, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface AddNewEpisodeHeaderProps {
    onSubmit: MouseEventHandler<HTMLButtonElement>;
}

export const AddNewEpisodeHeader = ({ onSubmit }: AddNewEpisodeHeaderProps) => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
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
            <div className="novel-dashboard-header d-md-flex align-items-center justify-content-end novel-episode-header-wrapper">
                <button type="button" className="novel-settings-button me-2 novel-episode-header-btn">
                    <i className="fa-light fa-bookmark me-2"></i> <span>RECORD</span>
                </button>

                <button type="submit" onClick={onSubmit} className="novel-create-episode-button novel-episode-header-btn">
                    <i className="fa-regular fa-check"></i> <span>PUBLISH</span>
                </button>
            </div>
        </div>
    );
};

export default AddNewEpisodeHeader;
