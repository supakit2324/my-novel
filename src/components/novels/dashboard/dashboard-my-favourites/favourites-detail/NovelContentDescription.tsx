import {NovelEpisode, Novels} from "@/hooks/use-novels";

interface IProps {
    novel: Novels | null,
    episodes: NovelEpisode[] | null
}

const NovelContentDescription = ({novel, episodes}: IProps) => {
    return (
        <>
            <div className="novel-content-info">
                <div className="mb-2">
                    <h6 className="text-white m0">Tags</h6>
                    {novel?.categoryTags?.length ? (
                        novel.categoryTags.map((tag, index) => (
                            <a className="badge bg-secondary me-2 fw-medium p-2 mt-1" href="#">{tag}</a>
                        ))
                    ) : null}
                </div>
                <div className="mb-2">
                    <h6 className="text-white m0">Synopsis</h6>
                    <span className="text-white">{novel?.synopsis}</span>
                </div>
                <div className="d-flex">
                    <span className="text-gray me-3"> Title : </span> <p className="text-white">{novel?.title}</p>
                </div>
                <div className="d-flex">
                    <span className="text-gray me-3"> Author : </span> <p className="text-white">{novel?.author}</p>
                </div>
            </div>
        </>
    )
}

export default NovelContentDescription