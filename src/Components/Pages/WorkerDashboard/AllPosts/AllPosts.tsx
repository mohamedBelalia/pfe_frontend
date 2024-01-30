import { HiDotsHorizontal } from "react-icons/hi";
import { useRef, RefObject , useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ToolType from "../ToolsTypes/ToolType";
import data from "./data.json"


const card_width = 300;
const card_height = 300;



const AllPosts = () => {

  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const handleScroll = (amount: number) => {
    if(containerRef.current){
      setScrollEnabled(true);
      const newPosition = containerRef.current.scrollLeft + amount || 300;
      containerRef.current.scrollLeft = newPosition ;
      setScrollEnabled(false);
    }
  };

  

  return (
    <div className=" m-auto" >
      <p className="flex justify-center items-center text-4xl font-semibold text-gray-600">All Posts</p>
      <div ref={containerRef} className=" flex   items-center"
        style={{
          scrollBehavior: "smooth",
           overflowX: scrollEnabled ? 'auto' : 'hidden'
        }}
      >
        
        {data.map((item) => (
          <div
          key={item.id} style={{minWidth: card_width, minHeight: card_height}} 
          className=" m-10 relative shadow-xl rounded-xl    ">
            <img className="rounded-t-xl" src={item.img} alt="img" />
            <div className="border-x-2 border-gray-400 px-2 pb-2 border-b-2 rounded-b-xl">
              <p className="p-2">{item.text}</p>
              <div className="flex p-2 items-center justify-between">
                {item.date}
                  <HiDotsHorizontal className="text-4xl border px-2 w-14 rounded-lg mr-5 cursor-pointer text-teal500" />
              </div>
            <ToolType  />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="text-4xl text-teal500 border-2 rounded-lg px-4 mx-4 hover:bg-teal500 hover:text-white  transition duration-300 ease-in-out " onClick={() => handleScroll(-card_width-50)}><GrFormPrevious /></button>
        <button className="text-4xl text-teal500 border-2 rounded-lg px-4 mx-4 hover:bg-teal500 hover:text-white  transition duration-300 ease-in-out " onClick={() => handleScroll(card_width+50)}><MdNavigateNext /></button>
      </div>

    </div>
  );
};

export default AllPosts;
