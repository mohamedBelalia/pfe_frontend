import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SortedBy = () => {

  const [isClicked , setIsClicked] = useState<boolean>(false)

  const [sortedByValue , setSortedByValue] = useState<string>("Recommended")

  const handleClickedSortedBy = (sortingType : string) => {
        setSortedByValue(sortingType)
        setIsClicked(false)
  }

  return (
    <div className="flex justify-end">
        <div className="flex gap-5 md:justify-normal justify-center">
            <h1 className="md:block hidden text-xl font-semibold text-[#414E5F]">Sorted By : </h1>

            <div className="w-[250px] relative z-50">
              <div onClick={()=>setIsClicked(!isClicked)} className="bg-gray-200 border border-gray-400 rounded-md h-[37px] flex justify-center gap-4 items-center cursor-pointer select-none">
                <p className="text-[#414E5F] font-semibold">{sortedByValue}</p>
                <IoIosArrowDown className="text-[#414E5F] text-2xl"/>
              </div>

              <div 
                className={`${isClicked ? 'h-[200px] border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-hidden`}>
                  <div className="p-5 text-center flex flex-col gap-5">
                    <div 
                      onClick={()=>handleClickedSortedBy('Recommended')}
                      className={`${sortedByValue=='Recommended' ? 'bg-green-200' : 'bg-white'}  p-2 rounded-md cursor-pointer`}>
                      Recommended
                    </div>

                    <div 
                      onClick={()=>handleClickedSortedBy('Low To High Price')}
                      className={`${sortedByValue=='Low To High Price' ? 'bg-green-200' : 'bg-white'}  p-2 rounded-md cursor-pointer`}>
                      Low To High Price
                    </div>

                    <div 
                      onClick={()=>handleClickedSortedBy('High To Low Price')}
                      className={`${sortedByValue=='High To Low Price' ? 'bg-green-200' : 'bg-white'}  p-2 rounded-md cursor-pointer`}>
                         High To Low Price
                    </div>className={`${sortedByValue=='High To Low Price' ? 'bg-green-200' : 'bg-white'}  p-2 rounded-md cursor-pointer`}
                  </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default SortedBy