// CardComponent.tsx
import { HiDotsHorizontal } from "react-icons/hi";
import ChildComponent from './ChildComponent';
import { useState,useEffect } from "react";



const CardComponent = () => {
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
      <button onClick={handleClick}>
        <HiDotsHorizontal className='  text-2xl border w-12 h-8 rounded-lg mr-5 cursor-pointer text-teal500' />
      </button>
      {/* Render child component if showChildCard is true */}
      {showChildCard && <ChildComponent onClose={() => setShowChildCard(false)} />}
    </div>
  );
};

export default CardComponent;
