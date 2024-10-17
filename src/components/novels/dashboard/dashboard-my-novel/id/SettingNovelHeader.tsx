export const SettingNovelHeader = () => {
    return (
        <>
            <div className="novel-dashboard-header d-md-flex align-items-center justify-content-end">
                <a href="#" className="novel-settings-button me-2">
                    <i className="fa-solid fa-gear"></i>
                </a>

                <a href="#" className="novel-create-episode-button">
                    <i className="fa-regular fa-plus"></i> CREATE A NEW EPISODE
                </a>
            </div>
        </>
    )
}

export default SettingNovelHeader;