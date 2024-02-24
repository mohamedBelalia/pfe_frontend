import EditPopUp from "./EditPopUp"
import { IoClose } from "react-icons/io5";




interface PROPSPopUp {
    isOpen: boolean,
    onClose: () => void,

}

const EditProfile = ({ isOpen, onClose }: PROPSPopUp) => {



    return (
        // Fragments allow you to return multiple elements without a wrapper
        <>
            {/* Conditionally render the popup based on the isOpen prop */}
            {isOpen && (
                // Container for the popup, positioned in the center of the screen
                <div className="fixed  z-40 flex flex-col  inset-0 items-center justify-center bg-black bg-opacity-60">
                    <div className='flex flex-col items-end '>
                        <button className='text-3xl bg-blue500   border-2 mb-1 rounded-sm text-gray-200' onClick={onClose}><IoClose /></button>
                        <EditPopUp />
                    </div>
                </div>
            )}
        </>
    );
};



export default EditProfile