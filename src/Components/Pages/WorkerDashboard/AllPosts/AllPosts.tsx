import { useRef } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import data from "./data.json";

const card_width = 400;
const card_height = 300;

const AllPosts = () => {
  const cardsContainer = useRef<HTMLDivElement>(null);

  const scrollToLeft = () => {
    if (cardsContainer.current?.scrollLeft !== undefined) {
      cardsContainer.current.scrollLeft -= 500; // Adjust the scroll amount as needed
    }
  };

  const scrollToRight = () => {
    if (cardsContainer.current?.scrollLeft !== undefined) {
      cardsContainer.current.scrollLeft += 500; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className='m-auto'>
      <div
        ref={cardsContainer}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth items-center"
        style={{ scrollBehavior: 'smooth' }} // Optional: Add smooth scrolling behavior
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{ minWidth: card_width, minHeight: card_height }}
            className="mx-4 shadow-xl relative rounded-md"
          >
            <div className='absolute  w-[55%] top-4 right-4 flex justify-around z-40'>
              <button className=" bg-red-300 text-red-950  hover:bg-red-400  font-semibold py-1 px-4 rounded">
                Suprimer
              </button>
              <button className="bg-teal-100 hover:bg-teal-400 text-teal-700 font-semibold py-1 px-4 rounded">
                Modifier
              </button>

            </div>
            <p className='absolute font-semibold bottom-2 px-1 w-full text-md text-white z-10'>{item.text}</p>
            <img className="absolute inset-0 h-full w-full rounded-md object-cover" src="imgUsed/00.jpg" alt="img" />
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-teal-900 via-teal-900/30 to-teal-900/50 transition-all duration-300 hover:bg-gradient-to-t hover:from-teal-800 hover:via-gray-700/40 hover:to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex my-4 justify-center">
        <button
          className="text-4xl hidden md:block text-teal-500 border-2 rounded-lg px-4 mx-4 hover:bg-teal-500 hover:text-white transition duration-200 ease-in-out"
          onClick={scrollToLeft}
        >
          <GrFormPrevious />
        </button>
        <button
          className="text-4xl hidden md:block text-teal-500 border-2 rounded-lg px-4 mx-4 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out"
          onClick={scrollToRight}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
