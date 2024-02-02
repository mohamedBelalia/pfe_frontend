import React from "react";
import ToolType from "../ToolsTypes/ToolType";
import { HiDotsHorizontal } from "react-icons/hi";

function Post({ item, card_width:number, card_height, containerRef, setScrollEnabled}) {
    const [isChildOpen, setIsChildOpen] = useState(false);
    const handleClick = () => {
        setIsChildOpen(true);
    };
    const handleScroll = (amount: number) => {
        if (containerRef.current) {
          setScrollEnabled(true);
          const newPosition = containerRef.current.scrollLeft + amount || 300;
          containerRef.current.scrollLeft = newPosition;
          setScrollEnabled(false);
        }
      };
  return (
    <div
      key={item.id}
      className=" m-10 relative shadow-xl rounded-xl    "
    >
      <img className="rounded-t-xl" src={item.img} alt="img" />
      <div className="border-x-2 border-gray-400 px-2 pb-2 border-b-2 rounded-b-xl">
        <p className="p-2">{item.text}</p>
        <div className="flex p-2 items-center justify-between">
          {item.date}
          <HiDotsHorizontal
            onClick={handleClick}
            className="text-4xl border px-2 w-14 rounded-lg mr-5 cursor-pointer text-teal500"
          />
        </div>
        {isChildOpen && <ToolType setIsChildOpen={setIsChildOpen}/>}
      </div>
    </div>
  );
}

export default Post;
