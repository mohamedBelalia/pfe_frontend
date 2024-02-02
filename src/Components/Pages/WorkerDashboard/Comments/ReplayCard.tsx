import { IoCloseSharp } from "react-icons/io5";
import { BsFillReplyFill } from "react-icons/bs";
import { GrClear } from "react-icons/gr";


const ReplayCard = () => {
  return (
    <div className="absolute  md:w-64 md:h-44 h-36 ml-64 px-10 -mt-40 md:ml-60 md:-mt-52  bg-teal500 bg-opacity-85  border-gray-300 md:p-4 rounded-xl ">
            
    <button className="flex w-full m-4 md:px-4  justify-end text-white">
        <IoCloseSharp className=" text-xl" />
    </button >


    <div className="flex flex-col ">
        <button className="mb-3 flex items-center md:ml-14  px-2 md:text-xl  text-white rounded-md"><BsFillReplyFill className="mr-2 md:text-2xl"/>Replay</button>
        <button className="mb-3 flex items-center md:ml-14  px-2 md:text-xl  text-white rounded-md"><GrClear className="mr-2 md:text-2xl" /> Report</button>
    </div>
</div>
  )
}

export default ReplayCard