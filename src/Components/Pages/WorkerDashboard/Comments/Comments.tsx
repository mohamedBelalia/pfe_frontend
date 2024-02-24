import { FaStar } from "react-icons/fa";
import data from "./data.json";
import Btn from "../BTN/Btn";
import ReplayCard from "./ReplayCard";
import { useState } from "react";
import { HiDotsHorizontal } from 'react-icons/hi';


const Comments = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  // Function to handle card click event
  const handleCardClick = (index: number) => {
    setOpenCards(prevOpenCards =>
      prevOpenCards.includes(index) ? prevOpenCards.filter(i => i !== index) : [...prevOpenCards, index]
    );
  };


  return (
    <div className="mt-16 flex flex-col items-center">
      <p className="flex justify-center items-center text-4xl font-semibold text-gray-600">Clients Reviews</p>
      {data.map((item, index) => (
        <div className="relative w-full sm:w-[80%] md:w-[60%] lg:mx-56 md:mx-2 px-2 rounded-md md:px-4 py-2 lg:py-4 md:my-2" key={item.id}>
          <div className="relative border-2 h-[200px]  md:h-[220px] px-6 py-4 rounded-md border-teal500">
            {/* Comment content */}
            <div className="lg:flex mb-5 tab:mb-2 md lg:justify-between">
              <div className="flex">
                <img className="w-14 rounded-full" src={item.img} alt="" />
                <div className="mx-3 text-sm md:text-xl font-semibold">
                  <div>{item.theName}</div>
                  <div className="text-[12px] md:text-sm text-gray-400">{item.date}</div>
                </div>
              </div>
              <div className="flex md:text-md lg:text-lg pb-4 -mt-12 justify-end">
                {/* Render stars */}
                {[...Array(item.starsNumber)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-yellow-500 m-1" />
                ))}
                {[...Array(Math.max(6 - item.starsNumber, 0))].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-gray-500 m-1" />
                ))}
              </div>
            </div>
            {/* Comment text */}
            <div className="md:my-3 md:w-[85%] md:mt-7 ml-1 lg:px-28 font-semibold text-sm md:text-lg">{item.text}</div>
            <button className=" float-end px-2 py-1 border-2 rounded-md border-teal500 text-2xl  text-teal500 " onClick={() => handleCardClick(index)}><HiDotsHorizontal /></button>
            {/* Button to toggle replay card */}

          </div>
          {/* Render replay card with onClose prop */}
          {openCards.includes(index) && <ReplayCard onClose={() => handleCardClick(index)} />}
        </div>
      ))}
      <div className="flex justify-center my-6">
        <Btn text="More" />
      </div>
    </div>
  );
};

export default Comments;
