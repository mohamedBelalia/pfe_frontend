import { useEffect, useState } from "react";
import cities from "./Cities.json";
import { FaLocationDot } from "react-icons/fa6";

const ChoiseCity = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        // Set isOpen based on input length
        setIsOpen(value.length > 0);
    };

    const handleChoiseCyty = (city:string)=>{
        setInputValue(city)
    }

    useEffect(() => {
        const handleClick = () => {
          // Handle click event here
          setIsOpen(false)
        };
    
        // Add event listener when component mounts
        document.addEventListener('click', handleClick);
    
        // Remove event listener when component unmounts
        return () => {
          document.removeEventListener('click', handleClick);
        };
      }, []); // Empty dependency array ensures the effect runs only once
    

    return (
        <div className=" md:w-[400px] relative z-50  cursor-pointer h-[60px] border-gray-500 flex justify-start  text-lg items-center ">
            <input
            
                onChange={handleInput}
                placeholder='Your Address'
                className='border-teal500 md:w-full w-[265px]  md:pl-3 bg-transparent border rounded-md h-[37px]'
                type="text"
                value={inputValue}
            />
            {isOpen && (
                <div className='h-[200px] z-10 overflow-y-scroll scrollbar-none border border-gray-400 bg-gray-200 rounded-md shadow-lg absolute w-full top-14 -mt-1 transition-all ease-in-out duration-150 overflow-hidden'>
                   
                   {cities .filter(city => city.toLowerCase().includes(inputValue.toLowerCase()))
                            .map((city, index) => (
                                inputValue.length<5 &&<div 
                                onClick={()=>handleChoiseCyty(city)}
                                key={index}
                                className="w-full  cursor-pointer h-[60px] px-6 border-b border-gray-500 
                                 flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
                            >
                                <FaLocationDot className="text-gray-700" /> {city}
                            </div>
                            ))
                            
                   }
                </div>
            )}
        </div>
    );
};

export default ChoiseCity;
