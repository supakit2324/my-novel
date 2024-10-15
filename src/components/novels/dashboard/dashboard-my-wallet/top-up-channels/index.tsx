import Link from "next/link";
import Image from 'next/image';

const TopUpChannels = () => {
    const channelsItem = [
        {
            href: '#',
            text: 'Truemoney Wallet',
            img: '/images/top-up/truemoney_large_logo.jpg',
        },
        {
            href: '#',
            text: 'Promptpay',
            img: '/images/top-up/PromptPay.jpg',
        },
        {
            href: '#',
            text: 'ShopeePay',
            img: '/images/top-up/shopeepay01.png',
        },
        {
            href: '#',
            text: 'Visa',
            img: '/images/top-up/images.png',
        },
        {
            href: '#',
            text: 'Mastercard',
            img: '/images/top-up/mastercard.png',
        }
    ]

    return (
        <>
            <div className="row">
                {channelsItem.map((channel, index) => (
                    <div className="col-md-6 col-lg-3" key={index}>
                        <Link href={channel.href}>
                            <div className="mb-4 d-flex shadow flex-column align-items-center rounded-3 px-5 py-3 overflow-hidden">
                                <div className="d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px' }}>
                                    <Image
                                        width={200}
                                        height={200}
                                        src={channel.img}
                                        alt={channel.text}
                                        className="img-fluid"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="text-center mt-2">
                                    <h5>{channel.text}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopUpChannels;
