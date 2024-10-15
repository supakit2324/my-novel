import {nanoid} from "nanoid";
import React from "react";

enum StatusTopUpEnum {
    WAITING = 'waiting',
    SUCCESS = 'success',
    FAILED = 'failed'
}

interface ITopUp {
    id: string,
    status: StatusTopUpEnum,
    amount: number,
    type: string,
    updatedAt: Date
}

const getStatusStyle = (status: string) => {
    switch (status) {
        case "waiting":
            return "pending-style top-up-style1";
        case "success":
            return "pending-style top-up-style2";
        case "failed":
            return "pending-style top-up-style3";
        default:
            return "";
    }
};

const TopUpHistory = () => {
    const topUpHistoryData: ITopUp[] = [
        {
            id: nanoid(10),
            status: StatusTopUpEnum.FAILED,
            amount: 200,
            type: 'unknown',
            updatedAt: new Date()
        },
        {
            id: nanoid(10),
            status: StatusTopUpEnum.SUCCESS,
            amount: 200,
            type: 'unknown',
            updatedAt: new Date()
        },
        {
            id: nanoid(10),
            status: StatusTopUpEnum.WAITING,
            amount: 50,
            type: 'unknown',
            updatedAt: new Date()
        },
        {
            id: nanoid(10),
            status: StatusTopUpEnum.SUCCESS,
            amount: 250,
            type: 'unknown',
            updatedAt: new Date()
        },
        {
            id: nanoid(10),
            status: StatusTopUpEnum.FAILED,
            amount: 1000,
            type: 'unknown',
            updatedAt: new Date()
        },
        {
            id: nanoid(10),
            status: StatusTopUpEnum.WAITING,
            amount: 1000,
            type: 'unknown',
            updatedAt: new Date()
        },
        {
            id: nanoid(10),
            status: StatusTopUpEnum.SUCCESS,
            amount: 1000,
            type: 'unknown',
            updatedAt: new Date()
        },
    ]

    const formatDate = (date: Date) => {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    return (
        <>
            <table className="table-style3 table at-savesearch ">
                <thead>
                <tr className="text-center">
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Updated</th>
                </tr>
                </thead>
                <tbody className="t-body">
                {topUpHistoryData.map((history) => (
                    <tr className="text-center" key={history.id}>
                        <td className="vam">{history.id}</td>
                        <td className="vam">
                            <span className={getStatusStyle(history.status)}>{history.status}</span>
                        </td>
                        <td className="vam">{history.amount}</td>
                        <td className="vam">{history.type}</td>
                        <td className="vam">{formatDate(history.updatedAt)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default TopUpHistory;