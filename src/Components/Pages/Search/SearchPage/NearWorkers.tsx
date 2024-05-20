import { useRef } from "react";
import workersInfoTemp from "../../../../assets/jsonTemp/cardsInfoFil.json"
import NearWorkerCard from "./NearWorkerCard"
import { FaChevronLeft , FaChevronRight } from "react-icons/fa";

type nearWorkersrops = {
    getWorkerId : (id :string) => void
}

const NearWorkers = ({getWorkerId}:nearWorkersrops) => {

    const cardsContainer = useRef<HTMLDivElement>(null)

    const scrollToLeft = () =>{
        if(cardsContainer.current?.scrollLeft != undefined){
            cardsContainer.current.scrollLeft -= 500
        }
    }

    const scrollToRight = () =>{
        if(cardsContainer.current?.scrollLeft != undefined){
            cardsContainer.current.scrollLeft += 500
        }
    }

  return (
    <div className="md:px-0 px-2 flex flex-col gap-6 mt-5">
        <h1 className="text-center text-2xl font-semibold text-gray700">Popular in Your Area</h1>
        <div ref={cardsContainer} className="flex gap-5 overflow-x-scroll no-scrollbar scroll-smooth">
        {
            workersInfoTemp.workers.map((worker,_)=>(
                <div key={worker.id}>
                    <NearWorkerCard workerInfo={worker} getClickedWorkerId={getWorkerId}/>
                </div>
            ))
        }
        </div>

        <div className="w-[150px] mx-auto hidden md:flex justify-between items-center ">
            <div onClick={scrollToLeft} className="w-[40px] h-[40px] bg-blue500 hover:bg-blue-600 text-white rounded-md flex justify-center items-center cursor-pointer">
                <FaChevronLeft/>
            </div>
            <div onClick={scrollToRight} className="w-[40px] h-[40px] bg-blue500 hover:bg-blue-600 text-white rounded-md flex justify-center items-center cursor-pointer">
                <FaChevronRight/>
            </div>
        </div>

    </div>
  )
}

export default NearWorkers
