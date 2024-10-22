"use client";
import React, {useEffect, useState} from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from "next/image";
import Link from "next/link";
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
  },
  {
    id: 'aZsoAt94Adr',
    title: 'สตูดิโอสุ่มของนักเขียนอัจฉริยะ The Genius Artist’s Random Studio',
    imageSrc: '/images/novels/The-Genius-Artists-Random-Studio-scaled.jpg',
    status: Status.NEW,
    section: '1-49',
    type: NovelTypes.CARTOON,
    word: 30,
    views: 7000,
    collection: 1
  },
  {
    id: 'a859cat94Adr',
    title: 'The People On Earth Are Too Ferocious',
    imageSrc: '/images/novels/p49bhnzd26j91.webp',
    status: Status.NEW,
    section: '1-235',
    type: NovelTypes.CARTOON,
    word: 30,
    views: 27040,
    collection: 1
  },
  {
    id: 'PAwjkasd8566',
    title: 'นางร้ายขอแซ่บ',
    imageSrc: '/images/novels/book_detail_large.gif',
    status: Status.NEW,
    section: '0',
    type: NovelTypes.EBOOK,
    word: 0,
    views: 1,
    collection: 1
  },
  {
    id: 'Masdka6+da',
    title: 'อั่งเปาทะลุโลก',
    imageSrc: '/images/novels/4845b704eabb751.png',
    status: Status.NEW,
    section: '1-807',
    type: NovelTypes.FAN_CLUB_TRANSLATION,
    word: 0,
    views: 14648,
    collection: 1
  },
]


const ListingsFavourites = ({ selectedType }: { selectedType: string }) => {
  const filteredNovels = NovelsData.filter(
      novel => selectedType === "all" || novel.type.toLowerCase() === selectedType.toLowerCase()
  );

  const [favoriteNovels, setFavoriteNovels] = useState(filteredNovels);

  useEffect(() => {
    const filteredNovels = NovelsData.filter(
        novel => selectedType === "all" || novel.type.toLowerCase() === selectedType.toLowerCase()
    );
    setFavoriteNovels(filteredNovels);
  }, [selectedType]);

  const handleDeleteNovel = (id: string) => {
    const updatedNovels = favoriteNovels.filter((novel) => novel.id !== id);
    setFavoriteNovels(updatedNovels);
  };

  return (
      <div className="row">
        {favoriteNovels.length === 0 ? (
            <h3>No items available.</h3>
        ) : (
            favoriteNovels.map((novel) => (
                <div className="col-md-6 col-lg-5 col-xl-3 col-xxl-2" key={novel.id}>
                  <div className="listing-style1 style2">
                    <div className="list-thumb fixed-height">
                      <Image
                          width={382}
                          height={300}
                          className="img-fluid w-100 h-100 object-cover"
                          src={novel.imageSrc}
                          alt="listings"
                      />

                      <button
                          className="tag-del"
                          title="Delete Item"
                          onClick={() => handleDeleteNovel(novel.id)}
                          style={{ border: "none" }}
                          data-tooltip-id={`delete-${novel.id}`}
                      >
                        <span className="fas fa-trash-can"></span>
                      </button>

                      <ReactTooltip
                          id={`delete-${novel.id}`}
                          place="left"
                          content="Delete"
                      />
                    </div>
                    <div className="list-content">
                      <h6 className="list-title1">
                        <Link href={`/dashboard-my-favourites/${novel.id}`}>{novel.title}</Link>
                      </h6>
                    </div>
                  </div>
                </div>
            ))
        )}
      </div>
  );
};

export default ListingsFavourites;
