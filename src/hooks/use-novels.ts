import {NovelTypes} from "@/enums/novel-types.enum";
import {nanoid} from "nanoid";

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
    tags?: string
    categoryTags?: string[]
    abbreviation?: string,
    language: string,
    contentRating: string,
    bookType: string,
    primaryGender: string,
    isFree?: string,
    length: string,
    price?: number
}

export const NovelsData: Novels[] = [
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
        tags: 'Plot',
        categoryTags: ['survival', 'revenge'],
        abbreviation: 'abcd',
        language: 'Thai',
        contentRating: 'Rated R',
        bookType: 'Episode type',
        primaryGender: 'Other',
        length: 'novel',
        isFree: undefined,
        price: undefined,
        synopsis: 'หยานเจิ้นเจิ้น หัวหน้ากลุ่มนักล่าซอมบี้ผู้มีพรสวรรค์ด้านพลังจิตอันแกร่งกล้าแห่งโลกโลกาวินาศ นางได้รับบ่อน้ำพุวิเศษและห้วงมิติพื้นที่ส่วนตัวจากระบบ พร้อมทั้งทะลุมิติเกิดใหม่กลายเป็นสาวน้อยชาวไร่ ซึ่งผู้เป็นพ่อของนางจู่ๆก็พลันหายสาบสูญไปอย่างลึกลับ ส่วนย่าแท้ๆกลับไม่มีเหลียวแลสนใจอันใด ในสายตาเห็นกันประดุจเศษขยะไร้ค่าชิ้นหนึ่ง รวมถึงบรรดาญาติทั้งลุงป้าผู้ชอบกลั่นแกล้งรังแกนางเป็นชีวิตจิตใจ ไหนจะนังดอกบัวขาวงูพิษที่เป็นลูกพี่ลูกน้อง'
    },
]

export type NovelEpisode = {
    id: string,
    bookId: string,
    episodeName : string,
    episode: number,
    story?: string
    publishTime?: string,
    publishOption?: string,
    priceOption?: string
    price?: number
}


export const NovelEpisodeData: NovelEpisode[] = [
    {
        id: '_KXCmtFCU-Xcr8KUYDXr',
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร1',
        episode: 1,
        publishOption: 'not_published',
        publishTime: undefined,
        priceOption: 'free',
        price: 0,
        story: '<p>asdsadasdasdasdasd</p><p><strong>asdasdasdasdasdasdasdasd</strong></p><p><strong><u>asdasdasdsadsadasdasdasda</u></strong></p>',
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร2',
        episode: 2,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร3',
        episode: 3,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร4',
        episode: 4,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร5',
        episode: 5,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร6',
        episode: 6,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร7',
        episode: 7,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร8',
        episode: 8,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร9',
        episode: 9,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร10',
        episode: 10,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร11',
        episode: 11,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร12',
        episode: 12,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร13',
        episode: 13,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร14',
        episode: 14,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร15',
        episode: 15,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร16',
        episode: 16,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร17',
        episode: 17,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร18',
        episode: 18,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร19',
        episode: 19,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร20',
        episode: 20,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร21',
        episode: 21,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร22',
        episode: 22,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร23',
        episode: 23,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร24',
        episode: 24,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร25',
        episode: 25,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร26',
        episode: 26,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร27',
        episode: 27,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร28',
        episode: 28,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร29',
        episode: 29,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร30',
        episode: 30,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร31',
        episode: 31,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร32',
        episode: 32,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร33',
        episode: 33,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร34',
        episode: 34,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร35',
        episode: 35,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร36',
        episode: 36,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร37',
        episode: 37,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร38',
        episode: 38,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร39',
        episode: 39,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร40',
        episode: 40,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร41',
        episode: 41,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร42',
        episode: 42,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร43',
        episode: 43,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร44',
        episode: 44,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร45',
        episode: 45,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร46',
        episode: 46,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร47',
        episode: 47,
    },
    {
        id: nanoid(20),
        bookId: 'pa2dw1523ad',
        episodeName: 'อะไร48',
        episode: 48,
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

export const fetchNovelsEpisodeById = async (bookId: string): Promise<NovelEpisode[] | null> => {
    const novelEpisodes = NovelEpisodeData.filter((ep) => ep.bookId === bookId);
    if (novelEpisodes.length === 0) {
        return null
    }
    return novelEpisodes;
};

export const fetchEpisodeById = async (epId: string): Promise<NovelEpisode | null> => {
    const ep = NovelEpisodeData.find((ep) => ep.id === epId)
    if (!ep) {
        return null
    }
    return ep
}