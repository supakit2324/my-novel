'use client'

import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { nanoid } from "nanoid";

interface IReplyComment {
    id: string,
    username: string,
    comment: string,
    likes: number,
}

interface IComment {
    id: string,
    username: string,
    comment: string,
    likes: number,
    replies: number,
    isSpoilers: boolean
    replyComment?: IReplyComment[]
}


const initialComments: IComment[] = [
    { id: 'law4sxdflawsd2', username: "วันนี้ดูอะไรดี", comment: "หู้ย ขนลุกทีทุ่งเล้ย เอาเรื่องนี้ร้านแล้ว แอบอ่านเลื่อนไปแล้ว30กว่าตอน เรื่องนี้ล่ามใจดีร้อยๆเลย ไม่มีนางเอก เรื่องลอยม่วน สดใส ลอง", likes: 251, replies: 4, isSpoilers: false, replyComment:[
            {
                id: nanoid(9),
                username: 'mikasa123',
                comment: 'kjasdhiohaslkdasiodyuaisohdfioahfaoisuhfas',
                likes: 1
            }
        ] },
    { id: nanoid(8), username: "นักสปอยแห่งชาติ", comment: "ดูความคิดเห็นที่มีเนื้อหาสปอย", likes: 199, replies: 3, isSpoilers: true },
    { id: nanoid(8), username: "อะไรเอ่ยยยยย", comment: "พี่เคา ทำถึง! น้องมาแล้ว (ล๊อคใจในวันที่เย่ ๆ วันนี้!)", likes: 122, replies: 1, isSpoilers: false },
    { id: nanoid(8), username: "อยากอ่านลิ้ววววววว", comment: "น่ะระมากเลอ", likes: 38, replies: 0, isSpoilers: false }
];

const EpisodeCommentContent = () => {
    const [dateTime, setDateTime] = useState('');
    const [comments, setComments] = useState<IComment[]>(initialComments);
    const [newComment, setNewComment] = useState('');
    const [newReply, setNewReply] = useState<{ [key: string]: string }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeReply, setActiveReply] = useState<string | null>(null);

    useEffect(() => {
        const currentDateTime = new Date().toLocaleString();
        setDateTime(currentDateTime);
    }, []);

    const handleNewCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim() === '') return;
        const newCommentData: IComment = {
            id: nanoid(8),
            username: "New User",
            comment: newComment,
            likes: 0,
            replies: 0,
            isSpoilers: false,
        };
        setComments([newCommentData, ...comments]);
        setNewComment('');
    };

    const handleNewReplySubmit = (e: React.FormEvent, commentId: string) => {
        e.preventDefault();
        if (newReply[commentId]?.trim() === '') return;

        const replyData: IReplyComment = {
            id: nanoid(8),
            username: "New Reply User",
            comment: newReply[commentId],
            likes: 0,
        };

        const updatedComments = comments.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: comment.replies + 1,
                    replyComment: comment.replyComment ? [...comment.replyComment, replyData] : [replyData],
                };
            }
            return comment;
        });

        setComments(updatedComments);
        setNewReply((prev) => ({ ...prev, [commentId]: '' }));
    };

    const toggleReply = (commentId: string) => {
        setActiveReply(prevState => (prevState === commentId ? null : commentId));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="comment-container">
            <div>
                <div className="comment-header">
                    <span>65 ความคิดเห็น</span>
                    <button className="comment-chevron-btn" onClick={openModal}>
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
                <div className="border-bottom mt-1 mb-1"></div>

                {comments.map((comment) => (
                    <div key={comment.id} className="comment-content">
                        <div className="comment-header-details">
                            <div>
                                <span className="comment-tag">BEST</span>
                                <span className="comment-author">{comment.username}</span>
                            </div>
                            <span className="comment-date">{dateTime}</span>
                        </div>
                        <div className="comment-body">
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="All Comments Modal"
                    className="comment-modal"
                    overlayClassName="comment-modal-overlay"
                >
                    <div className="modal-header">
                        <h3>ความคิดเห็นทั้งหมด</h3>
                        <button onClick={closeModal} className="modal-close-btn">
                            <i className="fa-regular fa-xmark"></i>
                        </button>
                    </div>

                    <form className="new-comment-form" onSubmit={handleNewCommentSubmit}>
                        <div className="new-comment-container">
                            <label className="comment-input-container mb-2">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="กรุณาเขียนความคิดเห็น"
                                    className="new-comment-input"
                                />
                            </label>
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="spoiler-container">
                                    <input
                                        type="checkbox"
                                        id="spoilers"
                                        name="spoilers"
                                        className="spoiler-checkbox"
                                    />
                                    <label htmlFor="spoilers" className="spoiler-label">
                                        <span className="spoiler-label-text">สปอย</span>
                                    </label>
                                </div>
                                <button type="submit" className="new-comment-submit-btn">
                                    <i className="fa-solid fa-arrow-up"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="border-bottom mt-3 mb-2">
                    </div>

                    {comments.map((comment) => (
                        <div key={comment.id} className="modal-comment">
                            <div className="comment-header-details">
                                <div>
                                    <span className="comment-tag">BEST</span>
                                    <span className="comment-author">{comment.username}</span>
                                </div>
                                <span className="comment-date">{dateTime}</span>
                            </div>
                            <div className="comment-body">
                                <p>{comment.comment}</p>
                            </div>
                            <div className="comment-footer">
                                <div className="comment-footer-action-content">
                                    <span>ถูกใจ {comment.likes}</span>
                                    <span
                                        onClick={() => toggleReply(comment.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                        ตอบกลับ {comment.replies}
                    </span>
                                </div>
                                <button className="more-options-btn">
                                    <i className="fa fa-ellipsis-h"></i>
                                </button>
                            </div>

                            {activeReply === comment.id && comment.replyComment && comment.replyComment.length > 0 && (
                                <div className="reply-section" style={{overflow: 'hidden', maxHeight: '300px'}}>
                                    {comment.replyComment.map((reply) => (
                                        <div key={reply.id} className="reply-comment">
                                            <div className="reply-header">
                                                <span className="reply-author">{reply.username}</span>
                                                <span className="reply-body">{reply.comment}</span>
                                                <span className="reply-likes">ถูกใจ {reply.likes}</span>
                                            </div>
                                        </div>
                                    ))}

                                    <form className="new-comment-form"
                                          onSubmit={(e) => handleNewReplySubmit(e, comment.id)}>
                                        <div className="new-comment-container">
                                            <label className="comment-input-container mb-2">
                                                <input
                                                    type="text"
                                                    value={newReply[comment.id] || ''}
                                                    onChange={(e) => setNewReply((prev) => ({
                                                        ...prev,
                                                        [comment.id]: e.target.value
                                                    }))}
                                                    placeholder="กรุณาเขียนความคิดเห็น"
                                                    className="new-comment-input"
                                                />
                                            </label>
                                            <div className="d-flex justify-content-end align-items-center">
                                                <div className="spoiler-container">
                                                    <input
                                                        type="checkbox"
                                                        id="spoilers"
                                                        name="spoilers"
                                                        className="spoiler-checkbox"
                                                    />
                                                </div>
                                                <button type="submit" className="new-comment-submit-btn">
                                                    <i className="fa-solid fa-arrow-up"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
                </Modal>
            </div>
        </div>
    );
}

export default EpisodeCommentContent;