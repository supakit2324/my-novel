"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {NovelTypes} from "@/enums/novel-types.enum";

enum Status {
  NEW = 'New',
}

type Novels = {
  id: string,
  title: string,
  imageSrc: string,
  status: Status,
  section: string,
  type: NovelTypes,
  word: number,
  views: number,
  collection: number
}

const NovelsData: Novels[] = [
  {
    id: 'Nasdw1523ad',
    title: 'ขอบคุณท่านบรรพบุรุษ ที่ส่งระบบหัวขวดมาให้!!',
    imageSrc: '/images/novels/134353009.jfif',
    status: Status.NEW,
    section: '1-5',
    type: NovelTypes.NOVEL,
    word: 30,
    views: 20000,
    collection: 1
  },
  {
    id: 'pa2dw1523ad',
    title: 'ทะลุมิติซุปเปอร์พี่สาวสุดแกร่ง กับระบบสินค้าสู่ความมั่งคั่ง',
    imageSrc: '/images/novels/66ecdc03PPmJEZVn.jpeg',
    status: Status.NEW,
    type: NovelTypes.NOVEL,
    section: '1-7',
    word: 50,
    views: 30000,
    collection: 3
  },
  {
    id: 'pa2w252as65d41',
    title: 'จะไปผจญภัยต่างโลกทั้งทีกลายเป็นผู้หญิงไปซะแล้ว',
    imageSrc: '/images/novels/1613414653_40887198.png',
    status: Status.NEW,
    type: NovelTypes.NOVEL,
    section: '1-10',
    word: 33,
    views: 2733,
    collection: 1
  },
  {
    id: 'pa2w252aslaA41',
    title: 'กำเนิดร่างเทวะบรรพกาล',
    imageSrc: '/images/novels/e2c5e937-10dd-45dc-8769-77e4ec07c171.webp',
    status: Status.NEW,
    section: '1-15',
    type: NovelTypes.FANFIC,
    word: 13,
    views: 12593,
    collection: 3
  }
]

const getStatusStyle = (status: string) => {
  switch (status) {
    case "New":
      return "pending-style style1";
    case "Published":
      return "pending-style style2";
    case "Processing":
      return "pending-style style3";
    default:
      return "";
  }
};

const NovelsDataTable = ({ selectedType }: { selectedType: string }) => {
  const filteredNovels = NovelsData.filter(novel => selectedType === "all" || novel.type.toLowerCase() === selectedType.toLowerCase());

  const changeType = (value: string) => {
    if (value === "all") {
      return 'All Types'
    }

    if (value === "fanfic") {
      return 'Fanfic'
    }

    if (value === "novel") {
      return 'Novels'
    }
  }

  return (
      <table className="table-style3 table at-savesearch ">
        <thead className="t-head">
        <tr>
          <th scope="col">{changeType(selectedType)}</th>
          <th scope="col">Status</th>
          <th scope="col">Section</th>
          <th scope="col">Word</th>
          <th scope="col">Views</th>
          <th scope="col">Collection</th>
          <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody className="t-body">
        {filteredNovels.map((novel) => (
            <tr key={novel.id}>
              <th scope="row">
                <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                  <div className="list-thumb">
                    <Image
                        width={110}
                        height={94}
                        className="w-100"
                        src={novel.imageSrc}
                        alt="novel"
                    />
                  </div>
                  <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                    <div className="h6 list-title">
                      <Link href={`/single-v1/${novel.id}`}>{novel.title}</Link>
                    </div>
                  </div>
                </div>
              </th>
              <td className="vam">
                <span className={getStatusStyle(novel.status)}>{novel.status}</span>
              </td>
              <td className="vam">{novel.section}</td>
              <td className="vam">{novel.word}</td>
              <td className="vam">{novel.views}</td>
              <td className="vam">{novel.collection}</td>
              <td className="vam">
                <div className="d-flex">
                  <button className="icon" style={{ border: "none" }} data-tooltip-id={`edit-${novel.id}`}>
                    <span className="fas fa-pen fa" />
                  </button>
                  <button className="icon" style={{ border: "none" }} data-tooltip-id={`delete-${novel.id}`}>
                    <span className="flaticon-bin" />
                  </button>
                  <ReactTooltip id={`edit-${novel.id}`} place="top" content="Edit" />
                  <ReactTooltip id={`delete-${novel.id}`} place="top" content="Delete" />
                </div>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
  );
};

export default NovelsDataTable;
