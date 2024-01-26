import ToolType from "../ToolsTypes/ToolType";
import { HiDotsHorizontal } from "react-icons/hi";
import { useRef, RefObject , useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
 const data = [
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},    {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta."},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
]

const card_width = 300;
const card_height = 300;
 


const AllPosts  = () => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const handleScroll = (amount: number) => {
    if(containerRef.current){
      setScrollEnabled(true);
      const newPosition = containerRef.current.scrollLeft + amount || 0;
      containerRef.current.scrollLeft = newPosition ;
      setScrollEnabled(false);
    }
  };

  return (
    <div className="container m-auto" >
      <div ref={containerRef} className=" flex justify-center items-center"
        style={{
          scrollBehavior: "smooth",
           overflowX: scrollEnabled ? 'auto' : 'hidden'
        }}
      >
        
        {data.map((item, index) => (
          <div 
            key={index} style={{minWidth: card_width, minHeight: card_height}} className=" m-10 relative shadow-xl rounded-xl    ">
            <img className="rounded-t-xl" src={item.img} alt="img" />
            <div className="border-x-2 border-gray-400 px-2 pb-2 border-b-2 rounded-b-xl">
              <p className="p-2">{item.text}</p>
              <div className="flex  items-center justify-between">
                {item.date}
                <HiDotsHorizontal className="text-4xl mr-5 text-teal500" />
              </div>

            </div>
                <ToolType isEnable={true}/>
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="text-4xl text-teal500 border-2 rounded-lg px-4 mx-4 hover:bg-teal500 hover:text-white  transition duration-300 ease-in-out " onClick={() => handleScroll(-card_width)}><GrFormPrevious /></button>
        <button className="text-4xl text-teal500 border-2 rounded-lg px-4 mx-4 hover:bg-teal500 hover:text-white  transition duration-300 ease-in-out " onClick={() => handleScroll(card_width)}><MdNavigateNext /></button>
      </div>
      
    </div>
  );
};

export default AllPosts;
