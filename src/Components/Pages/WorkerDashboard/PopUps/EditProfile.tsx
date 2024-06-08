// import React, { useEffect } from "react";
import { useState } from "react";
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
                <div className="fixed  z-40 flex flex-col  inset-0 items-center justify-center bg-black bg-opacity-70">
                    <div className='flex overflow-auto scrollbar-thin  bg-white rounded-xl tab:w-[70%] h-[90vh] py-4 w-[95%] flex-col  '>
                        {/* <div className='text-3xl justify-end sm:w-[500px] w-full  md:w-[600px]  flex  md:-mt-96 sm:-mt-52 tab:mt-0  mb-1 rounded-sm ' onClick={onClose}><IoClose className="text-gray-200 border-2 bg-teal500" /></div> */}
                        <EditPopUp  close={onClose} />
                    </div>
                </div>
            )}
        </>
    );
};



export default EditProfile