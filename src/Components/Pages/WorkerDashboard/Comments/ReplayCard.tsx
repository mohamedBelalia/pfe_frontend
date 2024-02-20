import { IoCloseSharp } from "react-icons/io5";
import { BsFillReplyFill } from "react-icons/bs";
import { GrClear } from "react-icons/gr";
import { useState, useEffect } from "react";


interface ChildProps {
  onClose: () => void; // Function to close the child component
  // var to open The tool component
}


const ReplayCard: React.FC<ChildProps> = ({ onClose }) => {

  const [isScroll, setIsScroll] = useState(false);





  // Effect hook to add scroll event listener
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setIsScroll(true); // Set isScroll to true when scrolling occurs
    };

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove scroll event listener when component unmounts
    return () => {

      // Remove scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle close button click
  const handleClick = () => {
    onClose(); // Call onClose function to close the child component
  };



  return (
    <div className="absolute tab:-mt-[207px]  md:w-56 md:h-46 h-38 sm:ml-48 md:pb-10 tab:ml-[40%] ml-[30%] p-4 -mt-36 md:ml-60 md:-mt-52  bg-teal500 bg-opacity-85  border-gray-300 md:p-2 rounded-xl ">
      <button className="flex w-full   md:mr-6 md:mt-6 md:mb-4 md:px-4  justify-end text-white">
        <IoCloseSharp onClick={handleClick} className="text-xl md:text-3xl" />
      </button >
      <div className="flex flex-col ">
        <button className="mb-3 flex items-center md:ml-14  px-2 md:text-xl  text-white rounded-md"><BsFillReplyFill className="mr-2 md:text-2xl" />Replay</button>
        <button onClick={handleClick} className="mb-3 flex items-center md:ml-14  px-2 md:text-xl  text-white rounded-md"><GrClear className="mr-2 md:text-2xl" /> Report</button>
      </div>
    </div>
  )
}

export default ReplayCard