// import { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React from 'react'


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const OtherInfos: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    return (
        <div className="flex mt-12 justify-around  items-center space-x-2">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 hover:bg-teal-700 ease-in-out bg-teal-500 text-white   text-2xl rounded-md  disabled:opacity-50"
            >
                <GrPrevious />
            </button>
            <div className=" text-center  w-[40%]">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageClick(index + 1)}
                        className={`px-3 mx-4 py-1 rounded-md ${currentPage === index + 1 ? 'bg-teal-700  text-white' : 'bg-gray-200  text-gray-700'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 hover:bg-teal-700 ease-in-out bg-teal-500 text-white   text-2xl rounded-md disabled:opacity-50"
            >
                <GrNext />
            </button>
        </div>
    );
};

export default OtherInfos;
