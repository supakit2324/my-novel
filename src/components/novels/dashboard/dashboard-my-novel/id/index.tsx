'use client'

import {useParams, useRouter} from "next/navigation";
import NovelDescriptionById from "@/components/novels/dashboard/dashboard-my-novel/id/novel-description";

const DashboardMyNovelOfAuthorById = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    return (
        <div>
            <NovelDescriptionById id={id}/>
        </div>
    )
}

export default DashboardMyNovelOfAuthorById