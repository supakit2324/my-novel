import {useEffect, useState} from "react";
import {fetchNovelsById as fetchNovelsData, Novels} from "@/hooks/use-novels";
import Link from "next/link";

interface NovelDescriptionProps {
    id: string;
}

const  NovelDescriptionById = ({ id }: NovelDescriptionProps) => {
    const [novels, setNovels] = useState<Novels | null>(null);
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

        fetchData();
    }, []);

    return (
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
                    {novels?.tags?.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-2">{tag}</span>
                    )) || "No tags"}
                </span>
            </div>


            <div className="row mt-5">
                <div
                    className="col-sm-12 col-md-6 d-flex align-items-center justify-content-around px-3 py-2 gap-3 shadow-sm">
                    <div className="text-center">
                        <i className="fa-regular fa-eye"></i>
                        <p className="mb-0">Total views</p>
                        <p>0</p>
                    </div>
                    <div className="text-center">
                        <i className="fa-solid fa-list"></i>
                        <p className="mb-0">Number of episodes</p>
                        <p>0</p>
                    </div>
                    <div className="text-center">
                        <i className="fa-regular fa-comment"></i>
                        <p className="mb-0">Comment</p>
                        <p>0</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-around gap-3 shadow-sm">
                    <Link href="#">
                        <div className="text-center">
                            <i className="fa-regular fa-plus"></i>
                            <p>add new episodes</p>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="text-center">
                            <i className="fa-regular fa-pen-to-square"></i>
                            <p>edit</p>
                        </div>
                    </Link>
                    <Link href="#" className="text-center">
                        <i className="fa-regular fa-trash"></i>
                        <p>delete</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NovelDescriptionById