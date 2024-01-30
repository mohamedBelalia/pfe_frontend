import { IoCloseSharp } from "react-icons/io5";
import { BsFillReplyFill } from "react-icons/bs";
import { GrClear } from "react-icons/gr";


const ReplayCard = () => {
  return (
    <div className="absolute flex-col w-64 ml-60 -mt-52 pb-12  bg-teal500 bg-opacity-85  border-gray-300 p-4 rounded-xl ">
            
    <button className="flex w-full justify-end text-white">
        <IoCloseSharp className=" text-xl  mb-4" />
    </button >


    <div className="flex flex-col ">
        <button className="mb-3 flex items-center ml-14  pt-2 text-xl  text-white rounded-md"><BsFillReplyFill className="mr-2 text-2xl"/>Replay</button>
        <button className="mb-3 flex items-center ml-14  pt-2 text-xl  text-white rounded-md"><GrClear className="mr-2 text-2xl" /> Report</button>
    </div>
</div>
  )
}

export default ReplayCard