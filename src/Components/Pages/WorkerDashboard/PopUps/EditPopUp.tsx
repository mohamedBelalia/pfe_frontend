import { useState } from "react";
import { useMultistepsForm } from "./useMultistepsForm";
import { FaCamera } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import ChoiseOccupations from "./ChoiseOccupations";
import ChoiseCity from "./ChoiseCity";
// import React from "react";
const EditPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { steps, currentStepindex, step, isFirstStep, isLastStep, back, next } = useMultistepsForm([
        <ChoiseCity />,
        <ChoiseOccupations />,
        <textarea placeholder="Your Description Here" className="h-24 focus:outline-dashed pt-4 pl-4 md:h-28 w-[253px] text-black md:w-[400px] rounded-md mt-3 mb-3" name="description" />
    ])

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const onsubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onsubmit} className='flex  h-[70vh] mt-0 flex-col bg-teal500  border-2 rounded-sm sm:w-[500px] w-full  md:w-[600px]  md:h-[500px]'>
            <div className='  h-[15%]'>{currentStepindex + 1}/{steps.length}</div>
            <div className='relative bg-gray-100  rounded-sm   rounded-t-3xl  h-[85%]'>
                <div className='flex   items-center flex-col w-[60%]  -mt-10  '>
                    <div className="group items-center flex flex-col relative ">
                        <img className='w-20   object-cover  rounded-full border-4 border-white ' src="public\imgUsed\portrait-man-laughing.jpg" alt="" />
                        <div className="absolute hidden group-hover:block  group-hover:opacity-30 w-full h-full  rounded-full bg-black border-4 items-center justify-center "></div>
                        <FaCamera onClick={handleOpen} className='text-white absolute p-6  group-hover:block hidden  h-full w-full ' />
                        {isOpen && (
                            <div className='z-20 w-40 ml-6 pl-8 justify-center absolute flex flex-col bg-teal-500  border-gray-300 p-4 rounded-lg '>
                                <button className=" flex justify-end w-full text-white">
                                    <IoCloseSharp onClick={handleOpen} />
                                </button>

                                <div className="flex flex-col w-full ">
                                    <button className="flex items-center  pt-2 text-lg text-white rounded-md"><BiEdit className="mr-2" /> Edit</button>
                                    <button className="flex items-center pt-2 text-lg text-white rounded-md "><RiDeleteBin5Line className="mr-2" />Delete</button>
                                </div>
                            </div>
                        )}
                        <FaCamera className='z-10 -mt-7 absolute top-16 pb-4 w-6 ml-14 group-hover:hidden   h-full  text-black' />
                    </div>
                    <h1 className='flex border-blue500 pb-2  border-b-2 font-bold '>Mohamed Belalia</h1>
                </div>




                <div className="overflow-y-scroll h-[202px] mt-3  flex flex-col items-center bg-gray-200 md:min-h-[335px] md:max-h-[335px] m-2 no-scrollbar scroll-smooth  ">
                    {step}
                </div>
                <div className="flex fixed top-[70vh] left-[100px] justify-around bottom-4  ">
                    <div className="w-28 "> {!isFirstStep && <button onClick={back} className="bg-teal500 text-white px-4 rounded ">Back</button>}</div>
                    <div className="w-28"> {!isLastStep && <input type="submit" onClick={next} className="bg-teal500 text-white px-4 rounded " value="next"/>} </div>
                </div>

            </div>
        </form>
    )
}

export default EditPopUp