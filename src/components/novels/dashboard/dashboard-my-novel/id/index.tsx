'use client'

import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {fetchNovelsById as fetchNovelsData, Novels} from "@/hooks/use-novels";
import UploadImageCover from "@/components/novels/dashboard/dashboard-my-novel/id/image-cover/UploadBookCover";
import NovelDescriptionById from "@/components/novels/dashboard/dashboard-my-novel/id/novel-description";

const DashboardMyNovelOfAuthorById = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const router = useRouter();

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
    },  [id]);

    return (
        <div>
            <form>
                <div className="">
                    <div className="">
                        <NovelDescriptionById id={id}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DashboardMyNovelOfAuthorById