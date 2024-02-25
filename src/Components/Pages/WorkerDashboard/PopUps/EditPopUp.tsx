import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import ChoiseOccupations from "./ChoiseOccupations";
import ChoiseCity from "./ChoiseCity";
const EditPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex mt-0 flex-col bg-teal500  border-2 rounded-sm w-[300px] md:w-[600px] h-[400px] md:h-[500px]'>
            <div className='  h-[15%]'></div>
            <div className=' bg-gray-100  rounded-sm   rounded-t-3xl  h-[85%]'>
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
                                    <button  className="flex items-center  pt-2 text-lg text-white rounded-md"><BiEdit className="mr-2" /> Edit</button>
                                    <button className="flex items-center pt-2 text-lg text-white rounded-md "><RiDeleteBin5Line className="mr-2" />Delete</button>
                                </div>
                            </div>
                        )}
                        <FaCamera className='  z-10 -mt-7 absolute top-16 pb-4 w-6 ml-14 group-hover:hidden   h-full  text-black' />
                    </div>
                    <h1 className='flex border-blue500 pb-2  border-b-2 font-bold '>Mohamed Belalia</h1>
                </div>
                <div className="overflow-y-scroll  justify-center flex flex-col items-center bg-gray-200 min-h-[335px] max-h-[335px] m-2 no-scrollbar scroll-smooth  ">
                    <ChoiseCity />
                    <ChoiseOccupations />
                    <textarea placeholder="Your Description Here" className="mt-4  pt-4 pl-2 rounded-md" name="description" cols={51} rows={5}></textarea>
                </div>


            </div>
        </div>
    )
}

export default EditPopUp