
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";




const ToolType = () => {
   
    const [showToolType , setShowToolType] = useState("block");

  return (
   
            <div 
                style={{
                    display: showToolType,
                }}
            className="absolute flex-col w-52 ml-14 -mt-[326px]  bg-teal500 bg-opacity-90  border-gray-300 p-4 rounded-lg ">
                <button className="flex justify-end  text-white">
                    <IoCloseSharp className=" text-xl -mt-3 mb-4" />
                </button >
                <div className="flex flex-col ">
                    <button className=" flex items-center ml-14  pt-2 text-lg  text-white rounded-md"><MdOutlineFeaturedPlayList  className=" " />Display</button>
                    <button className="flex items-center ml-14  pt-2 text-lg  text-white rounded-md"><BiEdit className="mr-2" /> Edit</button>
                    <button className=" flex items-center ml-14 pt-2 text-lg   text-white rounded-md "><RiDeleteBin5Line className="mr-2" />Delete</button>
                </div>
            </div>
  )
}

export default ToolType