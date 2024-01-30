
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

interface TOOLPROPS {
  id:number,
  onClose: () => void,
}

const ToolType = ({id,onClose}:TOOLPROPS) => {

  return (
    <div className="absolute flex-col w-52 ml-10 -mt-[350px]  bg-teal500 bg-opacity-85  border-gray-300 p-4 rounded-lg ">
            
        <button className="flex justify-end w-full text-white">
            <IoCloseSharp />
        </button >


        <div className="flex flex-col ">
            <button className=" flex items-center ml-14  pt-2 text-lg  text-white rounded-md"><MdOutlineFeaturedPlayList className="mr-2"/>Display</button>
            <button className="flex items-center ml-14  pt-2 text-lg  text-white rounded-md"><BiEdit className="mr-2" /> Edit</button>
            <button className=" flex items-center ml-14 pt-2 text-lg   text-white rounded-md "><RiDeleteBin5Line className="mr-2" />Delete</button>
        </div>
    </div>
  )
}

export default ToolType