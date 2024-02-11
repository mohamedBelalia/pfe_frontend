import { IoIosStar } from "react-icons/io";
import { SlBadge } from "react-icons/sl";

export interface workerDataProps {
    id: string;
    name: string;
    imgProfile: string;
    rate: number;
    price: number;
    description: string;
    badge: string;
}

interface workerDataObject {
  workerInf : workerDataProps
}

interface workerCardProps extends workerDataObject {
    getClickedWorkerId : (id : string) => void
}


const WorkerCard = ({workerInf , getClickedWorkerId}:workerCardProps) => {
  return (
    <div>
        <div className="flex flex-col md:flex-row md:gap-14 gap-8 border border-black bg-gray-200 px-5 md:px-10 py-7 rounded-xl ">
            <div className="flex flex-col gap-3">
                <div 
                  onClick={()=>getClickedWorkerId(workerInf.id)}
                  className="w-[150px] h-[150px] mx-auto md:mx-0 rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={workerInf.imgProfile} alt="" />
                </div>
                <div className="flex flex-col md:gap-5 gap-2">
                    <div>
                      <h1 className="font-bold text-center text-2xl md:text-xl text-[#414E5F]">{workerInf.name}</h1>
                      <p 
                        onClick={()=>getClickedWorkerId(workerInf.id)}
                        className="text-center font-bold text-[#349292] cursor-pointer hidden md:block">Profile</p>
                    </div>
                    {/* loading the badge only in the small screens in this position */}
                    <div className="border-dashed border mx-auto border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-[120px] md:hidden flex items-center justify-around">
                        <SlBadge className="text-xl"/>
                        {workerInf.badge}
                    </div>
                    <p className="text-sm font-bold text-gray-500 text-center block md:hidden">{"Marrakech"}</p>
                    
                    <button className="px-5 py-1 font-bold text-white rounded-lg bg-[#349292] hidden md:block">Contact</button>
                </div>
                
            </div>

            <div className="flex flex-col gap-1 w-full">
                <div className="flex md:justify-end justify-between text-2xl font-bold text-[#2d7d7d]">

                    <div className="flex md:hidden gap-1 items-center text-gray-600 text-base">
                        <IoIosStar/>
                        <p className="font-semibold">{workerInf.rate} <span className="text-xs">(143 Reviews)</span></p>
                    </div>

                    <p className="text-xl md:text-2xl">{workerInf.price} Dh/Day</p>
                </div>
                <div className="hidden md:flex flex-col gap-3 ">
                    <div className="flex gap-2 items-center text-gray-600">
                        <IoIosStar className="text-2xl"/>
                        <p className="font-semibold text-lg">{workerInf.rate} (143 Reviews)</p>
                    </div>
                    <div className="border-dashed border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-[120px] flex items-center justify-around">
                        <SlBadge className="text-xl"/>
                        {workerInf.badge}
                    </div>
                    <p className="text-sm font-bold text-gray-500">{"Marrakech"}</p>
                </div>

                <div className="mt-5 p-5 bg-white rounded-xl flex flex-col gap-3">
                    <h1 className="text-lg font-semibold text-[#414E5F]">I can help you in</h1>
                    <p className="text-gray-500 text-[14px]">
                      {workerInf.description}
                      <a href="" className="text-[#2d7d7d]  font-semibold">...More</a>
                    </p>
                </div>

                <div className="flex justify-between md:hidden mt-6 items-center gap-4">
                    <button className="w-full px-5 py-2 font-bold text-white rounded-lg bg-[#349292]">Contact</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default WorkerCard