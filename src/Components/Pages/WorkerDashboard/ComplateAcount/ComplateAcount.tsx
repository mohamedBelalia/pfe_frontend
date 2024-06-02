
import { BsFillPersonCheckFill } from "react-icons/bs";
import { PiXCircleFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
const CompleteAcount = () => {

    return (

        // <div className='border p-6  mb-8 md:mb-0   rounded-md'>
        //     <div className='flex flex-nowrap font-bold text-blue500 '>
        //         <BsFillPersonCheckFill className="text-3xl font-semibold" />
        //         <div className=' ml-2  text-md md:text-lg'>Complete Your Acount</div>
        //     </div>
        //     <div className="px-4 py-4">
        //         <div className="flex py-3 font-700 text-teal500">
        //             <FaCheckCircle className="text-xl mr-1 font-700" />
        //             <p className="text-md md:text-lg md:font-semibold -mt-1 font-semibold">Image Profile</p>
        //         </div>
        //         <div className="flex font-700 text-red-500" >
        //             <PiXCircleFill className="text-2xl -ml-1 mr-2 font-700" />
        //             <p className="md:text-lg text-md md:font-semibold  -mt-1">City or Region</p>
        //         </div>
        //         <div className="flex py-3 font-700 text-teal500">
        //             <FaCheckCircle className="text-xl mr-2 font-700" />
        //             <p className="md:text-lg md:font-semibold  -mt-1">Description</p>
        //         </div>
        //     </div>
        // </div>
        <div className='border p-6  mb-8 md:mb-0   rounded-md'>
            <div className='flex  justify-end flex-nowrap font-bold text-blue500 '>
                <div className='text-md md:text-lg'>أكمل حسابك</div>
                <BsFillPersonCheckFill className="text-3xl font-semibold" />
            </div>
            <div className="px-4  flex flex-col items-end py-4">
                <div className="flex py-3 mr-2 font-700 text-teal500">
                    <p className="text-md md:text-lg -mt-1 font-semibold"> صورة تعريفية</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
                <div className="flex font-700 mr-2 text-red-500" >
                    <p className="md:text-lg text-md font-semibold  -mt-1">المدينة أو المنطقة</p>
                    <PiXCircleFill className="text-2xl font-700" />
                </div>
                <div className="flex py-3  mr-2 font-700 text-teal500">
                    <p className="md:text-lg font-semibold  -mt-1">وصف</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
            </div>
        </div>
    )
}

export default CompleteAcount