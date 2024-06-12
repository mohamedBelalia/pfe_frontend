
import { BsFillPersonCheckFill } from "react-icons/bs";
import { PiXCircleFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import PopupParent from "./PopupParent.tsx";
import { useState } from "react";
const CompleteAcount = () => {
    const isArabic = true;
    const [open,setIsOpen] = useState<boolean>(false);
    const onClose = ()=> {
        setIsOpen(false);
    }
   
    return (
        
        
        <div className='border  z-50 p-6  m-auto sm:w-[70%]  tab:w-[400px] md:w-[300px] mb-4 md:mb-0  rounded-md'>
            <PopupParent id={3} isOpen={open} onClose={onClose} />
            <div onClick={()=>setIsOpen(true)} className='flex items-center cursor-pointer hover:text-blue-700 justify-end flex-nowrap font-bold text-blue500 '>
                <div className='text-md mr-2 md:text-lg'>{isArabic?"أكمل حسابك":"Complétez votre compte"}</div>
                <BsFillPersonCheckFill className="text-3xl  font-semibold" />
            </div>
            <div className="px-4  flex flex-col items-end py-4">
                <div className="flex py-3 items-center  font-700 text-teal500">
                    <p className="text-md md:text-lg mx-2 -mt-1 font-semibold"> {isArabic?"صورة تعريفية":"Image d'introduction"}</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
                <div className="flex font-700 items-center text-red-500" >
                    <p className="md:text-lg  mx-2 text-md font-semibold  -mt-1">{isArabic?"المدينة أو المنطقة":"Ville ou région"}</p>
                    <PiXCircleFill className="text-2xl font-700" />
                </div>
                <div className="flex py-3  items-center font-700 text-teal500">
                    <p className="md:text-lg  mx-2  font-semibold  -mt-1">{isArabic?"وصف":"Description"}</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
            </div>
        </div>
    )
}

export default CompleteAcount