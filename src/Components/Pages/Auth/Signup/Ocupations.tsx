// import React from 'react'
import { useState, useEffect, useRef } from 'react';
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
    const [isArabic] = useState<boolean>(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

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
        <div className="md:w-[70%]  w-[95%] lg:mt-10 mt-4 md:mt-0 m-auto   h-[70vh] relative ">
            <h1 className="text-blue-500 text-center p-4 text-3xl font-semibold">
                {`${!isArabic ? "Vos métiers" : "مهنتك"}`}
                <p className='text-sm text-red-500'>
                    {`${!isArabic ? "Choisissez des métiers adaptés à votre activité" : "اختر المهن التس تناسب نشاطك"}`}
                </p>
            </h1>
            <div className=' flex justify-center'>
                {/* <div className='flex items-center px-2 border-2   rounded w-full pb-2'> */}


            </div>
            <div onClick={() => setIsClicked(!isClicked)}
                className={`${!isArabic ? "" : "flex-row-reverse "} px-2  border-teal500 rounded-xl md:px-2    h-[55px] justify-between lg:w-[610px] m-auto  border-2  md:h-14  flex  items-center cursor-pointer select-none `}>

                <div className='flex w-full  overflow-x-auto justify-center'>
                    {
                        choosedOccupations && choosedOccupations.length !== 0 ?
                            choosedOccupations.map((o, i) => {
                                return (
                                    <div key={o} className="flex  justify-center mr-1 px-2 py-2 items-center rounded-md  bg-teal-500 h-[30px] text-sm font-700  " >
                                        <p className="text-teal-800    md:px-4 px-2 rounded-md font-semibold  ">{o}</p>
                                        <div className='text-teal-800 w-2 bg-white  rounded-full h-2 flex justify-center items-center    text-lg md:text-xl '>
                                            <p className=''><PiXCircleFill onClick={() => deleteOccup(i)} /></p>
                                        </div>
                                    </div>
                                )
                            })
                            : `${!isArabic ? "Cliquez pour sélectionner" : "انقر للتحديد"}`

                    }
                </div>
                <IoIosArrowDown className="text-[#414E5F] md:ml-10  text-2xl" />
            </div>

            <div className={`${isClicked ? 'h-[300px] w-[611px] mt-1 overflow-y-scroll scrollbar-none border border-teal500' : 'h-0'}
             bg-gray-50 w-full  rounded-md shadow-lg   transition-all ease-in-out duration-150 overflow-hidden`}>
                {data.map((Occu, index) => (
                    <div
                        key={index}
                        onClick={() => handleClickedOccupations(index, Occu)}
                        className={`${cmpOccup.includes(index) ? 'bg-teal-400 text-white' : ''} md:h-[38px] hover:bg-blue-600 hover:text-white w-full border-b-2 flex justify-start items-center  px-8  border-gray-100 `}
                    >
                        {Occu}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ocupations