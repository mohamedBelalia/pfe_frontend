import React, { useEffect } from "react";
import EditPopUp from "./EditPopUp"
import { IoClose } from "react-icons/io5";




interface PROPSPopUp {
    isOpen: boolean,
    onClose: () => void,

}



const EditProfile = ({ isOpen, onClose }: PROPSPopUp) => {


    return (
        <>
            {/* Conditionally render the popup based on the isOpen */}
            {isOpen && (
                // Container for the popup, positioned in the center of the screen
                <div className="fixed  z-40 flex flex-col  inset-0 items-center justify-center bg-black bg-opacity-60">
                    <div className='flex flex-col items-end '>
                        <button className='text-3xl bg-teal500 md:-mt-96 sm:-mt-52 tab:mt-0 border-2 mb-1 rounded-sm text-gray-200' onClick={onClose}><IoClose /></button>
                        <EditPopUp />
                    </div>
                </div>
            )}
        </>
    );
};



export default EditProfile