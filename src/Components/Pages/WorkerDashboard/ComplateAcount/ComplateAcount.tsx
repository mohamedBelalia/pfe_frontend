
import { BsFillPersonCheckFill } from "react-icons/bs";
import { PiXCircleFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
const CompleteAcount = () => {
    const isArabic = true;
    return (

        
        <div className='border p-6  m-auto sm:w-[70%]  tab:w-[400px] md:w-[300px] mb-4 md:mb-0  rounded-md'>
            <div className='flex  justify-end flex-nowrap font-bold text-blue500 '>
                <div className='text-md md:text-lg'>{isArabic?"أكمل حسابك":"Complétez votre compte"}</div>
                <BsFillPersonCheckFill className="text-3xl font-semibold" />
            </div>
            <div className="px-4  flex flex-col items-end py-4">
                <div className="flex py-3 mr-2 font-700 text-teal500">
                    <p className="text-md md:text-lg -mt-1 font-semibold"> {isArabic?"صورة تعريفية":"Image d'introduction"}</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
                <div className="flex font-700 mr-2 text-red-500" >
                    <p className="md:text-lg text-md font-semibold  -mt-1">{isArabic?"المدينة أو المنطقة":"Ville ou région"}</p>
                    <PiXCircleFill className="text-2xl font-700" />
                </div>
                <div className="flex py-3  mr-2 font-700 text-teal500">
                    <p className="md:text-lg font-semibold  -mt-1">{isArabic?"وصف":"Description"}</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
            </div>
        </div>
    )
}

export default CompleteAcount