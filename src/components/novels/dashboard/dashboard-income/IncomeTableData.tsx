'use client'

import React, {useEffect, useState} from "react";
import {th} from "date-fns/locale";
import {format} from "date-fns";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {nanoid} from "nanoid";
import Pagination from "@/components/novels/Pagination";

const generateRandomDate = (daysAgo: number) => {
    const currentDate = new Date();
    const resultDate = new Date(currentDate);
    resultDate.setDate(currentDate.getDate() - daysAgo);
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);

    resultDate.setHours(randomHours);
    resultDate.setMinutes(randomMinutes);
    resultDate.setSeconds(randomSeconds);

    return resultDate;
};
interface IIncome {
    id: string;
    name: string;
    amount: number;
    createdAt: Date;
}

const initialIncome: IIncome[] = [
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 500,
        createdAt: generateRandomDate(1),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 300,
        createdAt: generateRandomDate(1),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 350,
        createdAt: generateRandomDate(1),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 300,
        createdAt: generateRandomDate(1),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 300,
        createdAt: generateRandomDate(7),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 300,
        createdAt: generateRandomDate(7),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 300,
        createdAt: generateRandomDate(5),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 50,
        createdAt: generateRandomDate(70),
    },
    {
        id: nanoid(13),
        name: 'เทพแห่งระบบ',
        amount: 550,
        createdAt: generateRandomDate(71),
    },
]

interface IncomeTableDataProps {
    startDate: Date | null;
    endDate: Date | null;
}

const IncomeTableData = ({ startDate, endDate }: IncomeTableDataProps) => {
    const [incomeData, setIncomeData] = useState<IIncome[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    useEffect(() => {
        const filteredIncome = initialIncome
            .filter((income) => {
                if (startDate && endDate) {
                    return income.createdAt >= startDate && income.createdAt <= endDate;
                }
                return true;
            })
            .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        setIncomeData(filteredIncome);

        const total = filteredIncome.reduce((sum, income) => sum + income.amount, 0);
        setTotalAmount(total);
    }, [startDate, endDate]);
    
    return (
        <>
            <table className="table-style3 table at-savesearch mt-3">
                <thead className="t-head">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Amount</th>
                    <th scope="col">CreatedAt</th>
                </tr>
                </thead>
                <tbody className="t-body">
                {incomeData.length === 0 ? (
                    <tr>
                        <td colSpan={3} className="text-center">
                            <div style={{
                                height: '300px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <p>ไม่มีการแจ้งเตือน</p>
                            </div>
                        </td>
                    </tr>
                ) : (
                    incomeData.map((income) => (
                        <tr key={income.id}>
                            <td className="vam">{income.name}</td>
                            <td className="vam">{income.amount}</td>
                            <td>{format(income.createdAt, 'dd/MM/yyyy HH:mm:ss', {locale: th})}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>

            <div className="mt-3">
                <h6>Total Income for the Month: {totalAmount}</h6>
            </div>
        </>
    )
}

export default IncomeTableData