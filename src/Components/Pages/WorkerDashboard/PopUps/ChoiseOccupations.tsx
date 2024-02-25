import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import data from "./OccupData.json";

const ChoiseOccupations = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [cmpOccup, setCmpOccup] = useState<number[]>([]);

    const handleClickedOccupations = (index: number) => {
        if (cmpOccup.includes(index)) {
            setCmpOccup(cmpOccup.filter((item) => item !== index));
        } else if (cmpOccup.length < 3) {
            setCmpOccup([...cmpOccup, index]);
        }
    };



    return (
        <div className="sm:w-[400px]   md:w-[400px] relative ">
            <div onClick={() => setIsClicked(!isClicked)} className="bg-gray-200 m-auto md:w-full  w-[265px] -z-10 border border-gray-400 rounded-md h-[37px] flex justify-around gap-4 items-center cursor-pointer select-none">
                <p className="text-[#414E5F] font-semibold">Selected  <span className='pl-2'>{cmpOccup.length}</span></p>
                <IoIosArrowDown className="text-[#414E5F] text-2xl" />
            </div>

            <div className={`${isClicked ? 'h-[200px] overflow-y-scroll   scrollbar-none border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-hidden`}>
                <div className="p-5 text-center flex flex-col gap-5">
                    {data.map((Occu, index) => (
                        <div
                            key={index}
                            onClick={() => handleClickedOccupations(index)}
                            className={`${cmpOccup.includes(index) ? 'bg-green-200' : 'bg-white'} -my-[8px] py-1 border-2 border-teal500 rounded-md`}
                        >
                            {Occu}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChoiseOccupations;
