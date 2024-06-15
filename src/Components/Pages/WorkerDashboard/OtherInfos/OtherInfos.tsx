// import { useState } from "react";
import { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import React from 'react'
// const OtherInfos = () => {
// const isArabic = true;
// const cmpDataTest = [25, 4, 34, 22, 23, 23, 22, 52, 656, 4, 3, 2, 45, 54, 54, 5, 5, 66, 6, 36, 8];
// const cmp = cmpDataTest.length;



// return (
//     // <div className='lg:px-10  py-6 rounded-md px-4 w-full md:ml-10'>


//     //     {/* Complete Your Profile Informations To Get Clients */}
//     //     <div className='w-full hidden md:block  py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
//     //         {isArabic ? "أكمل معلومات ملفك الشخصي للحصول على عملاء" : "Complete Your Profile Informations To Get Clients"}
//     //     </div>

//     //     <Progress />

//     //     {/* Rates */}
//     //     <div className='flex items-center justify-center text-teal500'>
//     //         <div className="flex flex-col justify-center items-center">
//     //             <img className="lg:w-16 w-12 ml-2" src="icons/starsRate.png" alt="Rating" />
//     //             <div className="relative flex justify-center items-center"></div>

//     //             {isArabic ? <div className="flex font-semibold flex-row">
//     //                 <span>شخص قاموا بتقييمك</span><span>47</span></div>
//     //                 : <div>47 people rated you</div>}
//     //         </div>
//     //     </div>

//     //     {/* Your Works */}
//     //     <div className=" ">
//     //         <div className={`flex text-teal500 text-2xl font-semibold pb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
//     //             <div className={`flex text-[20px] md:text-md lg:text-lg md:text-2xl items-center ${isArabic ? "flex-row-reverse" : ""}`}>
//     //                 <img className="lg:w-16 md:w-12 w-10" src="icons/post.png" alt="Post" />
//     //                 {!isArabic ? "Your Works" : "أعمالك"}
//     //             </div>
//     //         </div>
//     //         <div className={`flex w-full  justify-between items-center flex-wrap ${isArabic ? "flex-row-reverse" : ""}`}>

//     //             <div className=" mb-4 w-[48%]  aspect-1  rounded">
//     //                 <img className="rounded-xl w-full object-cover  h-full  " src="imgUsed/portrait-man-laughing.jpg" alt="img" />
//     //             </div> 
//     //             <div className=" mb-4 w-[48%]  aspect-1  rounded">
//     //                 <img className="rounded-xl w-full object-cover  h-full  " src="imgUsed/00.jpg" alt="img" />
//     //             </div> 
//     //             <div className=" mb-4 w-[48%]  aspect-1  rounded">
//     //                 <img className="rounded-xl w-full object-cover  h-full  " src="imgUsed/20.jpg" alt="img" />
//     //             </div> 

//     //             <div className="w-[48%]  aspect-1 cursor-pointer   relative bg-black rounded-xl">
//     //                 <img className="rounded-xl object-cover w-full opacity-50 h-full" src="imgUsed/30.jpg" alt="img" />
//     //                 <div className="absolute  hover:text-[2rem] hover:text-teal500 w-full h-full text-white inset-0 m-auto flex items-center justify-center md:text-3xl sm:text-xl">+{cmp-3} Posts</div>
//     //             </div>

//     //         </div>
//     //     </div>
//     // </div>
// ;



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
