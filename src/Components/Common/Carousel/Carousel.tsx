import { useState } from "react";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa";
import { Config } from "../../../../config/Local_Variables";


type CarouselProps = {
  slides : string[]
}

const Carousel = ({slides}:CarouselProps) => {

  let [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {

    if (current === 0){ 
      setCurrent(slides.length - 1) 
    }
    else{ 
      setCurrent(current - 1) 
    }

  }

  let nextSlide = () => {
    if (current === slides.length - 1){
      setCurrent(0)
    }
    else{
      setCurrent(current + 1)
    }
  }

  return (
    <div className="overflow-hidden relative h-full">
      <div 
          className="flex transition ease-out duration-500 h-full "
          style={{
          transform: `translateX(-${current * 100}%)`,
          }}
      >

        {slides.map((img , index) => {
          return <img
                  key={index}
                  src={ Config.BaseImagesPath_Projects + img } 
                  className="min-w-[100%] object-cover"/>
        ;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-3 md:px-10 text-3xl">
        <button onClick={previousSlide}>
          <FaChevronLeft className="w-[35px] h-[35px] rounded-md p-1 bg-white text-teal-800" />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight className="w-[35px] h-[35px] rounded-md p-1 bg-white text-teal-800" />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer  ${
                i == current ? "bg-teal-500" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel