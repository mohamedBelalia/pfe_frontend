import { FaStar } from "react-icons/fa";
import data from "./data.json"
import Btn from "../BTN/Btn";
import ReplayCard from "./ReplayCard";
import { useState } from "react";
import ParentReplayCard from "./ParentReplayCard";
import ReplayTool from "./ReplayTool";



const Comments = () => {

  const [openCards, setOpenCards] = useState<number[]>([]);

  // Function to handle card click event
  const handleCardClick = (index: number) => {
    setOpenCards((prevOpenCards) =>
      prevOpenCards.includes(index) ? prevOpenCards.filter((i) => i !== index) : [...prevOpenCards, index]
    );
  };


  return (
    <div className="mt-16">
      <p className="flex justify-center items-center text-4xl font-semibold text-gray-600">Clients Reviews</p>
      {data.map((item, index) => {
        return (
          <div className="flex justify-center">
            <div  key={item.id} className="bg-gray-200 m-auto w-[80%]  lg:mx-56  mx-2 px-2 relative rounded-xl border md:px-4 py-4 lg:py-8 my-2 border-teal500">
              <div>
                <div className="lg:flex lg:justify-between" >
                  <div className="flex">
                    <img className="w-14 rounded-full" src={item.img} alt="" />
                    <div className="mx-3 text-sm md:text-xl font-semibold">
                      <div>{item.theName}</div>
                      <div className="text-[12px]  md:text-sm  text-gray-400">{item.date}</div>
                    </div>
                  </div>
                  <div className="flex text-sm lg:text-lg pb-4 md:mt-0  -mt-8 justify-end">
                    {[...Array(item.starsNumber)].map((_, index) => {

                      return <FaStar key={index} className="text-yellow-500 m-1" />
                    })}
                    {[...Array(Math.max(6 - item.starsNumber, 0))].map((_, index) => {
                      return <FaStar key={index} className="text-gray-500 m-1" />
                    })}
                  </div>
                </div>
              </div>
              <div className="md:my-3 md:w-[75%] m-auto w-[75%] lg:px-28 font-semibold  text-sm md:text-lg">{item.text}</div>

              {/* Bring CardComponent and ChildComponent */}
              <div className="relative" key={item.id}>
                <ParentReplayCard />
                {openCards.includes(index) && (
                  <ReplayCard onClose={() => handleCardClick(index)}  />
                )}
              </div>
          </div>
          </div>
        )
      })}
      <ReplayTool />
      <div className="flex justify-center my-6 ">
        <Btn text="More" />
      </div>
    </div>
  )
}

export default Comments