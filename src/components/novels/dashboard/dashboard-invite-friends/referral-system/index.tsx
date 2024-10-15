'use client'

import {nanoid} from "nanoid";
import {useState} from "react";

const ReferralSystem = () => {
    const randomRefLink = nanoid(13);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`https://mynovel.co/register/${randomRefLink}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000)
    };

    return (
        <>
            <p className="fw-bold" >Share your registration link to your friends and receive bonuses for both you and your friends.</p>
            <div className="d-flex align-items-center py-3 px-4 bg-light rounded shadow-sm">
                <div className="flex-grow-1">
                    <p
                        className="m-0 p-2 bg-white rounded shadow-sm"
                        style={{ border: '1px solid #ddd', display: 'inline-block' }}
                    >
                        {`https://mynovel.co/register/${randomRefLink}`}
                    </p>
                </div>
                <button
                    className="btn btn-primary ms-3 text-white"
                    onClick={handleCopy}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </>
    );
};

export default ReferralSystem;