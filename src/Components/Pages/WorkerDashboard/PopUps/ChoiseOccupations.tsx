import { useState } from 'react';
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
        <div className="sm:w-[400px] w-[90%]   md:w-[400px] relative ">
            <div onClick={() => setIsClicked(!isClicked)} className="bg-gray-200   w-[100%]  md:w-full  -z-10 border border-gray-400 rounded-md h-[37px] flex  items-center cursor-pointer select-none">
                <p className="text-[#414E5F] pl-4 font-semibold">Selected  <span className='pl-2  sm:mr-28 md:mr-56 mr-24'>{cmpOccup.length}</span></p>
                <IoIosArrowDown className="text-[#414E5F] text-2xl" />
            </div>

            <div className={`${isClicked ? 'h-[200px] overflow-y-scroll   scrollbar-none border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-hidden`}>
                <div className="items-center  flex flex-col ">
                    {data.map((Occu, index) => (
                        <div
                            key={index}
                            onClick={() => handleClickedOccupations(index)}
                            className={`${cmpOccup.includes(index) ? 'bg-green-200' : ''}   h-[38px] w-full  border-b-2 flex justify-start items-center pl-6 font-semibold  border-gray-300 `}
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
