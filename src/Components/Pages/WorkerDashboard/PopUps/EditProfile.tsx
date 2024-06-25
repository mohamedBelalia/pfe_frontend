// import React, { useEffect } from "react";
import { useState } from "react";
import EditPopUp from "./EditPopUp"





interface PROPSPopUp {
    id:number
    isOpen: boolean,
    onClose: () => void,

}



const EditProfile = ({ id,isOpen, onClose }: PROPSPopUp) => {

    
    return (
        <>
            {/* Conditionally render the popup based on the isOpen */}
            {isOpen && (
                // Container for the popup, positioned in the center of the screen
               
                        {/* <div className='text-3xl justify-end sm:w-[500px] w-full  md:w-[600px]  flex  md:-mt-96 sm:-mt-52 tab:mt-0  mb-1 rounded-sm ' onClick={onClose}><IoClose className="text-gray-200 border-2 bg-teal500" /></div> */}
                        <EditPopUp  id={id} close={onClose} />
                    </div>
                </div>
            )}
        </>
    );
};



export default EditProfile