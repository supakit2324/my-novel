import {useParams} from "next/navigation";

export const SettingNovelHeader = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    return (
        <>
            <div className="novel-dashboard-header d-md-flex align-items-center justify-content-end">
                <a href={`/dashboard-my-novel/${id}/edit`} className="novel-settings-button me-2">
                    <i className="fa-solid fa-gear"></i>
                </a>

                <a href={`/dashboard-my-novel/${id}/add-new-episode`} className="novel-create-episode-button">
                    <i className="fa-regular fa-plus"></i> CREATE A NEW EPISODE
                </a>
            </div>
        </>
    )
}

export default SettingNovelHeader;