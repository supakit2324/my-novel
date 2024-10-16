import {NovelTypes} from "@/enums/novel-types.enum";

export enum Status {
    NEW = 'New',
}

export type Novels = {
    id: string,
    title: string,
    imageSrc: string,
    status: Status,
    section: string,
    type: NovelTypes,
    word: number,
    views: number,
    collection: number
    author: string
    synopsis?: string
    tags?: string[]
}

export const NovelsData: Novels[] = [
    {
        id: 'Nasdw1523ad',
        title: 'ขอบคุณท่านบรรพบุรุษ ที่ส่งระบบหัวขวดมาให้!!',
        imageSrc: '/images/novels/134353009.jfif',
        status: Status.NEW,
        section: '1-5',
        type: NovelTypes.NOVEL,
        word: 30,
        views: 20000,
        collection: 1,
        author: 'Barron_Cg',
        tags: ['Fantasy', 'Romantic']
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
        collection: 3,
        author: 'Barron_Cg',
        tags: ['Fantasy', 'Romantic'],
        synopsis: 'หยานเจิ้นเจิ้น หัวหน้ากลุ่มนักล่าซอมบี้ผู้มีพรสวรรค์ด้านพลังจิตอันแกร่งกล้าแห่งโลกโลกาวินาศ นางได้รับบ่อน้ำพุวิเศษและห้วงมิติพื้นที่ส่วนตัวจากระบบ พร้อมทั้งทะลุมิติเกิดใหม่กลายเป็นสาวน้อยชาวไร่ ซึ่งผู้เป็นพ่อของนางจู่ๆก็พลันหายสาบสูญไปอย่างลึกลับ ส่วนย่าแท้ๆกลับไม่มีเหลียวแลสนใจอันใด ในสายตาเห็นกันประดุจเศษขยะไร้ค่าชิ้นหนึ่ง รวมถึงบรรดาญาติทั้งลุงป้าผู้ชอบกลั่นแกล้งรังแกนางเป็นชีวิตจิตใจ ไหนจะนังดอกบัวขาวงูพิษที่เป็นลูกพี่ลูกน้อง'
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
        collection: 1,
        author: 'Barron_Cg'
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
        collection: 3,
        author: 'Barron_Cg'
    }
]

export const fetchNovels = (): Promise<Novels[]> => {
    return new Promise((resolve) => {
        resolve(NovelsData);
    });
}

export const fetchNovelsById = async (id: string): Promise<Novels> => {
    const novel = NovelsData.find((novel) => novel.id === id);
    if (!novel) {
        throw new Error(`Novel with id ${id} not found`);
    }
    return novel;
};