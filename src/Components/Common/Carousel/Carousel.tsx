import React, { ReactNode, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {

    const [currImg , setCurrImg] = useState<number>(0)

    const leftClick = () => {
        setCurrImg((curr)=>(curr == 0 ? children.length - 1 : curr - 1))
    }

    const rightClick = () => {
        setCurrImg((curr)=>(curr == children.length - 1 ? 0  : curr + 1))
    }

  return (
    <div className='overflow-hidden relative h-[100%] '>
        <div className='flex gap-1 w-[550px]  transition-transform ease-out duration-500 ' style={{transform: `translateX(-${currImg * 100}%)`}}>
         {children}
        </div>

        <div className='absolute inset-0 flex justify-between items-center p-4 '>
            <button><FaChevronLeft onClick={leftClick} className="text-2xl text-white bg-teal-600 w-[35px] h-[35px] p-1 rounded-md"/></button>
            <button><FaChevronRight onClick={rightClick} className="text-2xl text-white bg-teal-600 w-[35px] h-[35px] p-1 rounded-md"/></button>
        </div>
        

    </div>
  );
}

export default Carousel;
