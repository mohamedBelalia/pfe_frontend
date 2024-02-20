// ChildComponent.tsx
import React, { useEffect, useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

// Define props interface for ChildComponent
interface ChildProps {
  onClose: () => void; // Function to close the child component
}

const ChildComponent: React.FC<ChildProps> = ({ onClose }) => {
  // State if the page is scrolled
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
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to handle close button click
  const handleClick = () => {
    onClose(); // Call onClose function to close the child component
  };

  // JSX content of ChildComponent
  return (
    <div className={`absolute flex-col w-52 -ml-40 -mt-[320px] bg-teal-500 bg-opacity-85 border-gray-300 p-4 rounded-lg ${isScroll ? 'hidden' : ''}`}>
      <div>
        <button onClick={handleClick} className=" flex justify-end w-full text-white">
          <IoCloseSharp />
        </button>

        <div className="flex flex-col">
          <button className="flex items-center ml-14 pt-2 text-lg text-white rounded-md"><MdOutlineFeaturedPlayList className="mr-2" />Display</button>
          <button className="flex items-center ml-14 pt-2 text-lg text-white rounded-md"><BiEdit className="mr-2" /> Edit</button>
          <button className="flex items-center ml-14 pt-2 text-lg text-white rounded-md "><RiDeleteBin5Line className="mr-2" />Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ChildComponent;
