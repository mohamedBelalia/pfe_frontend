// import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import ReplayCard from './ReplayCard';
const ParentReplayCard = () => {
  const [showChildCard, setShowChildCard] = useState<boolean>(false);

  // Effect hook to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setShowChildCard(false); // Hide child component when scrolling occurs
    };

    // Add scroll event listener to window
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to handle click event on the card
  const handleClick = () => {
    setShowChildCard(true); // Show child component when the card is clicked
  };


  return (
    <div>
      {/* Button to show child component */}
      <button className='flex justify-end w-full ' onClick={handleClick}>
        <HiDotsHorizontal className="  text-teal-500 object-cover border rounded-lg w-16 h-10  text-xl  md:text-3xl" />
      </button>
      {/* Render child component if showChildCard is true */}
      {showChildCard && <ReplayCard isOpen={false}  onClose={() => setShowChildCard(false)} />}
    </div>
  )
}

export default ParentReplayCard