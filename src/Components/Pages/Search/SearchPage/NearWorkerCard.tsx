import BadgeWorker from "../../../Common/Badge/BadgeWorker";
import { IoIosStar } from "react-icons/io";
import Button from "../../../Common/Button/Button";

interface WorkerCardProps {
    workerInfo : {
        id: string;
        name: string;
        imgProfile: string;
        rate: number;
        price: number;
        description: string;
        badge: string;
    },
    getClickedWorkerId : (id : string) => void
}

const skillsTemp = ["Storytelling" , "Editing" , "Teaching"]

const NearWorkerCard = ({workerInfo , getClickedWorkerId}:WorkerCardProps) => {
  return (
    <div className="p-6 border border-gray-700 rounded-md w-[90vw] md:w-[500px] flex flex-col gap-5">
        <div className="px-5 flex flex-col md:flex-row gap-4 items-center">
            <div className="w-[120px] h-[120px] overflow-hidden rounded-full">
                <img className="w-full h-full object-cover" src={workerInfo.imgProfile} alt={workerInfo.name}/>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-xl font-bold text-gray700">{workerInfo.name}</p>
                <div className="flex justify-center md:justify-normal flex-wrap gap-2">
                    <BadgeWorker badgeName={workerInfo.badge}/>
                </div>
            </div>
        </div>

        <div className="flex justify-between items-center px-5">
            <div className="flex gap-2 items-center text-gray-600">
               <IoIosStar className="text-2xl"/> 
               <p className="font-semibold text-lg">{workerInfo.rate}.0 <span className="text-xs">(67 reviews)</span> </p>
            </div>
            <div>
                <p className="text-[#2d7d7d] text-xl font-bold">{workerInfo.price} Dh/Day</p>
            </div>
        </div>

        <div className="px-5 flex flex-col gap-2">
            <h1 className="font-medium text-gray-700">Top Skills</h1>
            <div className="flex flex-wrap gap-2">
                {
                    skillsTemp.map((skill,index)=>(
                        <div key={index} className="px-4 py-1 rounded-md bg-blue-500 text-white">
                            {skill}
                        </div>
                    ))
                }
                
            </div>
        </div>

        <div className="px-5 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center mt-5">
            <button onClick={()=>getClickedWorkerId(workerInfo.id)} className="px-5 py-2 font-semibold text-teal500 border border-teal500 rounded-md hover:bg-gray-100">
                View Profile
            </button>
            <Button bg="#349292" color="white" label={`Continue with ${workerInfo.name}`}/>
        </div>

    </div>
  )
}

export default NearWorkerCard