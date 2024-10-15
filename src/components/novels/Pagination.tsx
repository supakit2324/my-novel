"use client";
import React, { useState } from "react";

interface IPagination {
    totalPages?: number
    currentPage?: number
    onPageChange?: (page: number) => void;
}

const Pagination = ({ totalPages = 1, currentPage = 1, onPageChange = () => {} }: IPagination) => {
    const handlePageClick = (page: number) => {
        if (onPageChange && typeof onPageChange === 'function') {
            onPageChange(page);
        }
    };

    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;

        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const renderPageNumbers = generatePageNumbers().map((page) => (
        <li
            key={page}
            className={`page-item${page === currentPage ? " active" : ""}`}
        >
            <span
                className="page-link pointer"
                onClick={() => handlePageClick(page)}
            >
                {page}
            </span>
        </li>
    ));

    return (
        <div className="mbp_pagination text-center">
            <ul className="page_navigation">
                <li className="page-item">
                    <span
                        className="page-link pointer"
                        onClick={() => handlePageClick(currentPage - 1)}
                        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto' }}
                    >
                        <span className="fas fa-angle-left" />
                    </span>
                </li>
                {renderPageNumbers}
                <li className="page-item pointer">
                    <span
                        className="page-link"
                        onClick={() => handlePageClick(currentPage + 1)}
                        style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto' }}
                    >
                        <span className="fas fa-angle-right" />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
