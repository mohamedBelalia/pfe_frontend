
import { BsFillPersonCheckFill } from "react-icons/bs";
import { PiXCircleFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
const CompleteAcount = () => {

  return (
    
            <div className='border p-4  bg-gray-100 rounded-xl'>
                <div className='flex flex-nowrap font-bold text-blue500 '>
                    <BsFillPersonCheckFill className="text-3xl font-semibold"/>
                    <div className=' ml-2 text-xl'>Complete Your Acount</div>
                </div>
                <div className="px-4 py-4">
                    <div className="flex py-3 font-700 text-teal500">
                        <FaCheckCircle className="text-2xl mr-2 font-700"/>
                        <p className="text-xl -mt-1 font-semibold">Image Profile</p>
                    </div>
                    <div className="flex font-700 text-red-500" >
                        <PiXCircleFill className="text-2xl mr-2 font-700" />
                        <p className="text-xl font-semibold  -mt-1">City or Region</p>
                    </div>
                    <div className="flex py-3 font-700 text-red-500">
                        <PiXCircleFill className="text-2xl mr-2 font-700"/>
                        <p className="text-xl font-semibold  -mt-1">Paiment Price</p>
                    </div>
                    <div className="flex font-700 text-teal500">
                        <FaCheckCircle className="text-2xl mr-2 font-700"/>
                        <p className="text-xl font-semibold  -mt-1">Description</p>
                    </div>
                </div>
            </div>
  )
}

export default CompleteAcount