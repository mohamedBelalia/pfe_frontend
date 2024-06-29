
import { BsFillPersonCheckFill } from "react-icons/bs";
import { PiXCircleFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import PopupParent from "./PopupParent.tsx";
import { useState } from "react";

import EditPopUp from "../PopUps/EditPopUp.tsx";
const CompleteAcount = () => {
    const isArabic = true;
    const [isopen, setIsOpen] = useState<boolean>(false);
    const onClose = () => {
        setIsOpen(false);
    }
    const [open, setOpen] = useState<boolean>(false);
    const onCloseComp = () => {
        setOpen(false);
    }

    return (


        <div className='border z-50 p-6  m-auto sm:w-[70%]  md:w-[400px] mb-4 md:mb-0  rounded-md'>
            <PopupParent id={2} isOpen={isopen} onClose={onClose} />
            <div onClick={() => setOpen(true)} className='flex items-center cursor-pointer hover:text-blue-700 justify-end flex-nowrap font-bold text-blue500 '>
                <div className='text-md mr-2 md:text-lg'>{isArabic ? "أكمل حسابك" : "Complétez votre compte"}</div>
                <BsFillPersonCheckFill className="text-3xl  font-semibold" />
            </div>
            <div className="px-4  flex flex-col items-end py-4">
                <div className="flex py-3 items-center  font-700 text-teal500">
                    <p className="text-md md:text-lg mx-2 -mt-1 font-semibold"> {isArabic ? "صورة تعريفية" : "Image d'introduction"}</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
                <div className="flex font-700 items-center text-red-500" >
                    <p className="md:text-lg  mx-2 text-md font-semibold  -mt-1">{isArabic ? "المدينة أو المنطقة" : "Ville ou région"}</p>
                    <PiXCircleFill className="text-2xl font-700" />
                </div>
                <div className="flex py-3  items-center font-700 text-teal500">
                    <p className="md:text-lg  mx-2  font-semibold  -mt-1">{isArabic ? "وصف" : "Description"}</p>
                    <FaCheckCircle className="text-xl font-700" />
                </div>
            </div>

            {open ?

                <div className="fixed  z-40 flex flex-col  inset-0 items-center justify-center bg-black bg-opacity-70">
                    <div className='flex overflow-auto scrollbar-thin  bg-white rounded-xl tab:w-[70%] h-[90vh] py-4 w-[95%] flex-col  '>

                        <EditPopUp close={onCloseComp} id={1} />
                    </div>
                </div>
                : ""}
        </div>
    )
}

export default CompleteAcount