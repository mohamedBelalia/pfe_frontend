// AllPosts.tsx
import  { useRef, useState } from 'react';
import CardComponent from './CardComponent';
import ChildComponent from './ChildComponent';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import data from "./data.json";

const card_width = 300;
const card_height = 300;

const AllPosts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [openCards, setOpenCards] = useState<number[]>([]);

  // Function to handle card click event
  const handleCardClick = (index: number) => {
    setOpenCards((prevOpenCards) =>
      prevOpenCards.includes(index) ? prevOpenCards.filter((i) => i !== index) : [...prevOpenCards, index]
    );
  };

  // Function to handle horizontal scrolling
  const handleScroll = (amount: number) => {
    if (containerRef.current) {
      setScrollEnabled(true);
      const newPosition = containerRef.current.scrollLeft + amount || 300;
      containerRef.current.scrollLeft = newPosition;
      setScrollEnabled(false);
    }
  };

  return (
    <div>
      {/* Title */}
      <p className="flex justify-center items-center text-4xl font-semibold text-gray-600">All Posts</p>
      
      {/* Container for cards */}
      <div
        ref={containerRef}
        className="flex items-center"
        style={{
          scrollBehavior: "smooth",
          overflowX: scrollEnabled ? 'auto' : 'hidden'
        }}
      >
        {/* Map through data to render cards */}
        {data.map((item) => (
          <div
            key={item.id}
            style={{ minWidth: card_width, minHeight: card_height }}
            className="md:m-10 m-4 l rounded-xl"
          >
            {/* Card image */}
            <img className="rounded-t-xl" src={item.img} alt="img" />
            
            {/* Card content */}
            <div className="border border-black border-t-0 bg-gray-100 px-2  rounded-b-xl">
              <p className="p-2">{item.text}</p>
              <div className="flex p-2 items-center justify-between">
                <div className="opacity-30">{item.date}</div>
                
                {/* Bring CardComponent and ChildComponent */}
                <div className="relative" key={parseInt(item.id)}>
                  <CardComponent />
                  {openCards.includes(parseInt(item.id)) && (
                    <ChildComponent onClose={() => handleCardClick(parseInt(item.id))} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Buttons for horizontal scrolling */}
      
      <div className="flex justify-center">
        <button
          className="text-4xl hidden md:block text-teal500 border-2 rounded-lg px-4 mx-4 hover:bg-teal500 hover:text-white transition duration-200 ease-in-out"
          onClick={() => handleScroll(-card_width - 50)}
        >
          <GrFormPrevious />
        </button>
        <button
          className="text-4xl hidden md:block text-teal500 border-2 rounded-lg px-4 mx-4 hover:bg-teal500 hover:text-white transition duration-300 ease-in-out"
          onClick={() => handleScroll(card_width + 50)}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
