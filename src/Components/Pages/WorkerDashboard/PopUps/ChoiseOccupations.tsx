import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import data from "./OccupData.json"; // Ensure this file exports an array of strings

const ChoiseOccupations = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [selectedOccupations, setSelectedOccupations] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickedOccupations = (occupation: string) => {
        if (selectedOccupations.includes(occupation)) {
            setSelectedOccupations(selectedOccupations.filter((item) => item !== occupation));
        } else if (selectedOccupations.length < 3) {
            setSelectedOccupations([...selectedOccupations, occupation]);
            if (selectedOccupations.length === 2) {
                setIsClicked(false);
            }
        }
    };

    const handleRemoveOccupation = (occupation: string) => {
        setSelectedOccupations(selectedOccupations.filter((item) => item !== occupation));
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="pt-3 relative" ref={dropdownRef}>
            <div 
                onClick={() => setIsClicked(!isClicked)} 
                className="bg-gray-200 -z-10 border-[1.5px] border-blue-700 rounded-md h-12 flex items-center cursor-pointer "
            >
                <div className="text-[#414E5F] justify-center w-[90%] m-auto flex pl-4 font-semibold">
                    {selectedOccupations.length > 0 ? selectedOccupations.map((item) => (
                        <span 
                            className='border-2 m-au flex justify-center items-center bg-teal-300 rounded-md px-2 py-1 mr-2' 
                            key={item}
                        >
                            {item} 
                            <IoMdCloseCircle 
                                className='ml-2  text-lg cursor-pointer' 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveOccupation(item);
                                }}
                            />
                        </span>
                    )) : ''}
                </div>
                <IoIosArrowDown className="text-blue-700 text-2xl  mr-8" />
            </div>

            <div className={`${isClicked ? 'h-[200px] overflow-y-scroll mt-5 scrollbar-none border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-hidden`}>
                <div className="items-center flex flex-col">
                    {data.map((occupation, index) => (
                        <div
                            key={index}
                            onClick={() => handleClickedOccupations(occupation)}
                            className={`${selectedOccupations.includes(occupation) ? 'bg-teal-400' : ''} h-[38px] w-full border-b-2 flex justify-start items-center pl-6 font-semibold border-gray-300`}
                        >
                            {occupation}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChoiseOccupations;
