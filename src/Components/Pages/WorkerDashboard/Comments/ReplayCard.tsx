import { IoCloseSharp } from "react-icons/io5";
import { BsFillReplyFill } from "react-icons/bs";
import { GrClear } from "react-icons/gr";
import { useState, useEffect } from "react";
import ReplayTool from "./ReplayTool";


interface ChildProps {
  onClose: () => void; // Function to close the child component
}


const ReplayCard: React.FC<ChildProps> = ({ onClose }) => {

  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [showTool, setShowTool] = useState<boolean>(false);


  const handleToolReplay = () => {
    setShowTool(true);
  }


  // Effect hook to add scroll event listener
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setIsScroll(true); // Set isScroll to true when scrolling occurs
      handleClick();
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
    <div>

      <div className="absolute flex-col  items-center md:w-52 sm:w-44 w-36 sm:ml-[210px] ml-[120px] md:ml-[250px] -mt-[130px] sm:-mt-[160px] md:-mt-[190px] bg-teal-500 bg-opacity-85 border-gray-300  rounded-lg ">
        <button className="flex md:p-4 p-2 justify-end md:mb-2 mb-1 w-full  text-white">
          <IoCloseSharp onClick={handleClick} className="text-xl  md:text-sm" />
        </button >
        <div className="flex items-center flex-col pb-2 md:pb-4 ">
          <button onClick={handleToolReplay} className="mb-3 flex items-center md:ml-14  px-2 md:text-xl  text-white rounded-md"><BsFillReplyFill className="mr-2 md:text-2xl" />Replay</button>
          <button onClick={handleClick} className="mb-3 flex items-center md:ml-14  px-2 md:text-xl  text-white rounded-md"><GrClear className="mr-2 md:text-2xl" /> Report</button>
        </div>
      </div>
      {showTool && <ReplayTool onClose={handleClick} />}
    </div>
  )
}

export default ReplayCard