import { HiDotsHorizontal } from "react-icons/hi";
import { useRef, RefObject , useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ToolType from "./ToolsTypes/ToolType";
 const data = [
  {id:"1",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},    {img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta."},
  {id:"2",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"3",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"4",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"5",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"6",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"7",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"10",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"8",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
  {id:"9",img:"imgUsed/wall.jpg", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias beatae unde amet molestiae Dicta.",date:"12/02/2024"},
]

const card_width = 300;
const card_height = 300;
 


const AllPosts = () => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [enable, setEnable] = useState<boolean>(false);
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
        
        {data.map((item,index) => (
          <div 
            key={index} style={{minWidth: card_width, minHeight: card_height}} className=" m-10 relative shadow-xl rounded-xl    ">
            <img className="rounded-t-xl" src={item.img} alt="img" />
            <div className="border-x-2 border-gray-400 px-2 pb-2 border-b-2 rounded-b-xl">
              <p className="p-2">{item.text}</p>
              <div className="flex  items-center justify-between">
                {item.date}
                <button onClick={()=>{
                  setEnable(true);
                }}>

                  <HiDotsHorizontal  className="text-4xl mr-5 cursor-pointer text-teal500" />
                </button>
              </div>
            <ToolType  isEnable={enable}/>

            </div>
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
