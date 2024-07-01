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

  const [isArabic, setIsArabic] = useState(true);

  return (
    <div className="mt-16 flex flex-col items-center">
      <p className="flex justify-center items-center text-4xl font-semibold text-gray-600">تعليقات العملاء</p>
      {data.map((item, index) => (
        <div className="w-full sm:w-[80%] md:w-[60%] lg:mx-56 md:mx-2 px-2 rounded-md md:px-4 py-2 lg:py-4 md:my-2" key={item.id}>
          <div className="relative border-2 pb-14 px-6 py-6 rounded-md border-teal500">
            {/* Comment content */}
            {isArabic ? (
              <div className="justify-between flex   mb-5 tab:mb-2 md lg:justify-between">

                <div className="flex md:text-md lg:text-lg  justify-end">
                  {/* Render stars */}
                  {[...Array(item.starsNumber)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-500 m-1" />
                  ))}
                  {[...Array(Math.max(6 - item.starsNumber, 0))].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-gray-500 m-1" />
                  ))}
                </div>
                <div className="flex">
                  <img className="w-14 rounded-full" src={item.img} alt="" />
                  <div className="mx-3 text-sm md:text-xl font-semibold">
                    <div>{"كمال الخضر"}</div>
                    <div className="text-[12px] md:text-sm text-gray-400">{item.date}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="justify-between flex   mb-5 tab:mb-2 md lg:justify-between">
                <div className="flex">
                  <img className="w-14 rounded-full" src={item.img} alt="" />
                  <div className="mx-3 text-sm md:text-xl font-semibold">
                    <div>{item.theName}</div>
                    <div className="text-[12px] md:text-sm text-gray-400">{item.date}</div>
                  </div>
                </div>
                <div className="flex md:text-md lg:text-lg pb-4 justify-end">
                  {/* Render stars */}
                  {[...Array(item.starsNumber)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-500 m-1" />
                  ))}
                  {[...Array(Math.max(6 - item.starsNumber, 0))].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-gray-500 m-1" />
                  ))}
                </div>

              </div>
            )}
            {/* Comment text */}
            {isArabic ? (<div className="md:my-3  md:mt-7 ml-1 text-right pb-2  lg:px-28 font-semibold text-sm md:text-lg">{"تأتي هذه الطلبات استنادًا إلى الحاجة الملحة لوسيلة نقل تسهم في تأمين وسيلة مواصلات آمنة وموثوقة لطلاب المنطقة، خاصةً مع بعدها عن المراكز التعليمية، والتي يعاني الطلاب من صعوبات في الوصول إليها"}</div>)
              : (<div className="md:my-3  md:mt-7 ml-1 text-left pb-2  lg:px-28 font-semibold text-sm md:text-lg">{item.text}</div>)}
            <button className=" px-2 py-1  border-2 float-right  rounded-md border-teal500 text-2xl  text-teal500 " onClick={() => handleCardClick(index)}><HiDotsHorizontal /></button>
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
