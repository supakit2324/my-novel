'use client'

import { nanoid } from "nanoid";
import React, {useEffect, useState} from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { format } from "date-fns";
import { th } from "date-fns/locale";

interface INotification {
    id: string;
    title: string;
    createdAt: Date;
}

interface IPaginationResponse {
    page: number;
    perPage: number;
    count: number;
    records: INotification[];
}

const generateRandomDate = (daysAgo: number) => {
    const now = new Date();

    const randomOffset = Math.floor(Math.random() * daysAgo);
    const randomDate = new Date(now);
    randomDate.setDate(now.getDate() - randomOffset);

    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
    randomDate.setHours(randomHours);
    randomDate.setMinutes(randomMinutes);
    randomDate.setSeconds(randomSeconds);

    return randomDate;
};

const initialNotifications: INotification[] = [
    {
        id: nanoid(15),
        title: "คุณได้ทำการเติม M เป็นจำนวน 150 บาท",
        createdAt: generateRandomDate(1),
    },
    {
        id: nanoid(15),
        title: "คุณได้ทำการเติม M เป็นจำนวน 50 บาท",
        createdAt: generateRandomDate(3),
    },
    {
        id: nanoid(15),
        title: "คุณได้ทำการเติม M เป็นจำนวน 50 บาท",
        createdAt: generateRandomDate(3),
    },
    {
        id: nanoid(15),
        title: "บัญชีของคุณได้รับ point จากการเชิญเพื่อน 1000",
        createdAt: generateRandomDate(5),
    },
    {
        id: nanoid(15),
        title: "บัญชีของคุณได้รับ point จากการเชิญเพื่อน 1000",
        createdAt: generateRandomDate(10),
    },
    {
        id: nanoid(15),
        title: "บัญชีของคุณได้รับ point จากการเชิญเพื่อน 1000",
        createdAt: generateRandomDate(13),
    },
    {
        id: nanoid(15),
        title: "บัญชีของคุณได้รับ point จากการเชิญเพื่อน 1000",
        createdAt: generateRandomDate(14),
    },
    {
        id: nanoid(15),
        title: "บัญชีของคุณได้รับ point จากการเชิญเพื่อน 1000",
        createdAt: generateRandomDate(15),
    },
    {
        id: nanoid(15),
        title: "ยินดีด้วย novel ของคุณได้รับการเข้าชม 5000 ครั้ง",
        createdAt: generateRandomDate(15),
    },
    {
        id: nanoid(15),
        title: "ยินดีด้วย novel ของคุณได้รับการเข้าชม 5000 ครั้ง",
        createdAt: generateRandomDate(19),
    },
    {
        id: nanoid(15),
        title: "ยินดีด้วย novel ของคุณได้รับการเข้าชม 5000 ครั้ง",
        createdAt: generateRandomDate(21),
    },
    {
        id: nanoid(15),
        title: "คุณได้ทำการเติม M เป็นจำนวน 550 บาท",
        createdAt: generateRandomDate(21),
    },
    {
        id: nanoid(15),
        title: "คุณได้ทำการเติม M เป็นจำนวน 50 บาท",
        createdAt: generateRandomDate(23),
    },
]

const NotificationTable = ({ currentPage, perPage }: { currentPage: number; perPage: number }) => {
    const [notifications, setNotifications] = useState<INotification[]>([]);
    const totalPages = Math.ceil(notifications.length / perPage);

    useEffect(() => {
        setNotifications(initialNotifications);
    }, []);

    const paginate = (data: INotification[], page: number, perPage: number): INotification[] => {
        const startIndex = (page - 1) * perPage;
        return data.slice(startIndex, startIndex + perPage);
    };

    const paginatedData = paginate(notifications, currentPage, perPage);

    return (
        <>
            <table className="table-style3 table at-savesearch">
                <thead className="t-head">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">CreatedAt</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody className="t-body">
                {paginatedData.length === 0 ? (
                    <tr>
                        <td colSpan={3} className="text-center">
                            <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <p>ไม่มีการแจ้งเตือน</p>
                            </div>
                        </td>
                    </tr>
                ) : (
                    paginatedData.map((notification) => (
                        <tr key={notification.id}>
                            <td className="vam">{notification.title}</td>
                            <td>{format(notification.createdAt, 'dd/MM/yyyy HH:mm:ss', { locale: th })}</td>
                            <td className="vam">
                                <div className="d-flex">
                                    <button
                                        className="icon"
                                        style={{ border: "none" }}
                                        data-tooltip-id={`delete-${notification.id}`}
                                    >
                                        <span className="flaticon-bin" />
                                    </button>
                                    {/* Tooltips */}
                                    <ReactTooltip id={`delete-${notification.id}`} place="top" content="Delete" />
                                </div>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </>
    );
};

export default NotificationTable;