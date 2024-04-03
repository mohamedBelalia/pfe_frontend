// import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import data from "./Occupations.json";
import { PiXCircleFill } from "react-icons/pi";


type userData = {
    occupations: string[]
}

type OccupationsFormProps = userData & {
    updateFields: (fields: Partial<userData>) => void
}

const Ocupations = ({ occupations, updateFields }: OccupationsFormProps) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [cmpOccup, setCmpOccup] = useState<number[]>([]);
    const [choosedOccupations, setChoosedOccupations] = useState<string[]>([...occupations]);


    const handleClickedOccupations = (index: number, Occup: string | undefined) => {
        if (Occup && cmpOccup.length < 3 && !choosedOccupations.includes(Occup)) {
            setCmpOccup([...cmpOccup, index]);
            setChoosedOccupations([...choosedOccupations, Occup])

            // Pass the updated state to updateFields
            updateFields({ occupations: [...choosedOccupations, Occup] });

            if (cmpOccup.length === 2) {
                setIsClicked(!isClicked);
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
        <div className="md:w-[70%] w-[95%] mt-12 md:mt-0 m-auto   h-full relative ">
            <h1 className="text-teal-500 text-center p-4 text-3xl font-semibold">Your Occupations</h1>
            <div className=' flex justify-center'>
                <div className='flex items-center px-2 border-2   rounded w-full pb-2'>
                    <div className='md:h-14 h-11'></div>
                    {choosedOccupations.map((occup, index) => {
                        return (
                            <div key={index} className="flex  flex-col  text-sm font-700 mr-2 " >
                                <PiXCircleFill onClick={() => deleteOccup(index)} className="text-red-500 mb-1 text-xl md:text-2xl font-700" />
                                <p className="text-teal500  border-teal500 border-2 md:px-4 px-2 rounded-md font-semibold  -mt-1">{occup}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div onClick={() => setIsClicked(!isClicked)} className="bg-gray-200    w-full m-auto -z-10 border border-gray-400 rounded-md md:h-14 h-10 flex  items-center cursor-pointer select-none">
                <p className="text-[#414E5F] pl-20 font-semibold">Selected Occupations</p>
                <IoIosArrowDown className="text-[#414E5F] ml-16 text-2xl" />
            </div>

            <div className={`${isClicked ? 'h-[300px] overflow-y-scroll scrollbar-none border border-gray-400' : 'h-0'} bg-gray-200 w-full  rounded-md shadow-lg  sm:ml-28 md:ml-[5px] md:mt-[113px]    absolute  md:top-20 transition-all ease-in-out duration-150 overflow-hidden`}>
                {data.map((Occu, index) => (
                    <div
                        key={index}
                        onClick={() => handleClickedOccupations(index, Occu)}
                        className={`${cmpOccup.includes(index) ? 'bg-green-200' : ''} md:h-[38px] w-full border-b-2 flex justify-start items-center  px-8  border-gray-300 `}
                    >
                        {Occu}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ocupations