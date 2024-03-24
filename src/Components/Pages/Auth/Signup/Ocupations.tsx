// import React from 'react'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import data from "./Occupations.json";
import { PiXCircleFill } from "react-icons/pi";



const Ocupations = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [cmpOccup, setCmpOccup] = useState<number[]>([]);
    const [choosedOccupations, setChoosedOccupations] = useState<string[]>([]);

    const handleClickedOccupations = (index: number, Occup: string) => {

        if (cmpOccup.length < 3 && !choosedOccupations.includes(Occup)) {
            setCmpOccup([...cmpOccup, index]);
            setChoosedOccupations([...choosedOccupations, Occup])
            if (cmpOccup.length == 2) {
                setIsClicked(!isClicked)
            }

        }

    };
    const deleteOccup = (indexToDelete: number) => {

        setChoosedOccupations(prevItems => {
            // Create a new array without the item at the specified index
            return prevItems.filter((_, index) => index !== indexToDelete);
        });
        setCmpOccup(prevItems => {
            // Create a new array without the item at the specified index
            return prevItems.filter((_, index) => index !== indexToDelete);
        });
    };


    return (
        <div className="w-[70%]  m-auto   relative ">
            <h1 className="text-teal-500 text-center p-4 text-3xl font-semibold">Your Occupations</h1>
            <div className=' flex justify-center'>
                <div className='flex  w-[60%] pb-2'>
                    <div className='h-14'></div>
                    {choosedOccupations.map((occup, index) => {
                        return (
                            <div className="flex  flex-col  text-sm font-700 mr-2 " >
                                <PiXCircleFill onClick={() => deleteOccup(index)} className="text-red-500 mb-1 text-2xl font-700" />
                                <p className="text-teal500  border-teal500 border-2 px-4 py-1 rounded-md font-semibold  -mt-1">{occup}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div onClick={() => setIsClicked(!isClicked)} className="bg-gray-200    w-[60%] m-auto -z-10 border border-gray-400 rounded-md h-[50px] flex  items-center cursor-pointer select-none">
                <p className="text-[#414E5F] pl-20 font-semibold">Selected Occupations</p>
                <IoIosArrowDown className="text-[#414E5F] ml-16 text-2xl" />
            </div>

            <div className={`${isClicked ? 'h-[260px] overflow-y-scroll scrollbar-none border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg ml-44  mt-[128px]   absolute w-[60%]  top-10 transition-all ease-in-out duration-150 overflow-hidden`}>
                {data.map((Occu, index) => (
                    <div
                        key={index}
                        onClick={() => handleClickedOccupations(index, Occu)}
                        className={`${cmpOccup.includes(index) ? 'bg-green-200' : ''}   h-[38px] w-full  border-b-2 flex justify-start items-center pl-6 font-semibold  border-gray-300 `}
                    >
                        {Occu}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ocupations