import { FaStar } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import data from "./data.json"
import ReplayTool from "./ReplayTool";
import Btn from "../BTN/Btn";
import ReplayCard from "./ReplayCard";



const Comments = () => {
  return (
    <div className="mt-16">
        <p className="flex justify-center items-center text-4xl font-semibold text-gray-600">Clients Reviews</p>
        {data.map((item)=>{
            return <div key={item.id} className="mx-56 relative rounded-xl border-2 px-16 py-5 my-10 border-teal500">
                
                <div>
                    <div className="flex justify-between" >
                        <div className="flex">
                            <img className="w-14 rounded-full" src={item.img} alt="" />
                            <div className="mx-3 text-xl font-semibold">
                                <div>{item.theName}</div>
                                <div className="text-sm  text-gray-400">{item.date}</div>
                            </div>
                        </div>
                        <div className="flex ">
                            {[...Array(item.starsNumber)].map((_,index)=>{
                                
                                return <FaStar key={index} className="text-yellow-500 m-1" />
                            })}
                            {[...Array(Math.max(6-item.starsNumber,0))].map((_,index)=>{
                                return <FaStar key={index} className="text-gray-300 m-1" />
                            })}
                        </div>
                    </div>
                </div>
                <div className="my-10 font-semibold text-lg">{item.text}</div>
                <div className="flex cursor-pointer  justify-end ">
                    <HiDotsHorizontal className="text-teal500   text-3xl"/>
                </div>
                <ReplayCard />
            </div>
        })}
        <ReplayTool  />
        <div className="flex justify-center my-6 ">
            <Btn  text="More"/>
        </div>        
    </div>
  )
}

export default Comments