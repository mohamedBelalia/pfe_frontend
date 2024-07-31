interface PROPSPopUp {
    id:number
    isOpen: boolean,
    onClose: () => void,

}



const EditProfile = ({isOpen}: PROPSPopUp) => {
    
    
    return (
        <>
            {/* Conditionally render the popup based on the isOpen */}
            {isOpen && (
                <div className="fixed  z-40 flex flex-col  inset-0 items-center justify-center bg-black bg-opacity-70">
                    <div className='flex overflow-auto scrollbar-thin  bg-white rounded-xl tab:w-[70%] h-[90vh] py-4 w-[95%] flex-col  '>
                    </div>
                </div>
            )}
        </>
    );
};



export default EditProfile