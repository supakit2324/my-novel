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
    date: Date
    episode: string,
    productName: string,
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

const TopUpPurchase = () => {
    const topUpHistoryData: ITopUp[] = [
        {
            id: nanoid(10),
            productName: 'ระบบล่าผีเก็บแต้มบุญ',
            status: StatusTopUpEnum.FAILED,
            amount: 200,
            episode: '1-25',
            date: new Date()
        },
        {
            id: nanoid(10),
            productName: 'การกลับมาของจอมปราชญ์ศักดิ์สิทธิ์',
            status: StatusTopUpEnum.SUCCESS,
            amount: 200,
            episode: '1-30',
            date: new Date()
        },
        {
            id: nanoid(10),
            productName: 'ข้าคือเจ้าสำนักแห่งประวัติการณ์',
            status: StatusTopUpEnum.WAITING,
            amount: 50,
            episode: '1-5',
            date: new Date()
        },
        {
            id: nanoid(10),
            productName: 'บุปผาร่ายรัก',
            status: StatusTopUpEnum.SUCCESS,
            episode: '1-45',
            amount: 250,
            date: new Date()
        },
        {
            id: nanoid(10),
            productName: 'ผมต้องเป็น NPC เพื่อเปลี่ยนโลก',
            status: StatusTopUpEnum.FAILED,
            episode: '1-25',
            amount: 1000,
            date: new Date()
        },
        {
            id: nanoid(10),
            productName: 'BEHEMOTH ราชันแห่งมอนเตอร์',
            status: StatusTopUpEnum.WAITING,
            amount: 1000,
            episode: '1-300',
            date: new Date()
        },
        {
            id: nanoid(10),
            productName: 'เกิดใหม่หลังวันสิ้นโลกผมก็กลายเป็นเด็กทารกไปซะแล้ว',
            status: StatusTopUpEnum.SUCCESS,
            amount: 1000,
            episode: '1-300',
            date: new Date()
        },
    ]

    const formatDate = (date: Date) => {
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }

    const calculateCoin = (amount: number): number => {
        const coinRate = 10;
        return amount * coinRate;
    }

    return (
        <>
            <table className="table-style3 table at-savesearch ">
                <thead>
                <tr className="text-center">
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Coin</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">EP</th>
                    <th scope="col">Date</th>
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
                        <td className="vam">{calculateCoin(history.amount)}</td>
                        <td className="vam">{history.productName}</td>
                        <td className="vam">{history.episode}</td>
                        <td className="vam">{formatDate(history.date)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default TopUpPurchase;