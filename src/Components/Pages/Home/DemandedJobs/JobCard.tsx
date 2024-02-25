import { IoIosStar } from "react-icons/io"
import BadgeWorker from "../../../Common/Badge/BadgeWorker"
import { FaHammer, FaPhoneAlt } from "react-icons/fa"

type JobCardTypes = {
    workerInfo : {
      workerImgPath : string ,
      workerFullName : string ,
      workerBadge : string 
      workerPhoneNumber : string 
      workerSkills : string[] 
    }
    getClickedWorkerId : (id :string) => void
}

const JobCard = ({workerInfo , getClickedWorkerId}:JobCardTypes) => {

  return (
    <div className="">
        <div className="p-4 py-6 flex gap-9 flex-col md:flex-1 w-[350px] bg-[#717e912e] shadow-xl rounded-xl overflow-hidden">
           
           {/* Head Card (image , name , badge) */}
           <div className="flex gap-4">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <img className="w-full h-full rounded-full" src={workerInfo.workerImgPath} alt={workerInfo.workerFullName} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-neutral-700">{workerInfo.workerFullName}</p>
                <BadgeWorker badgeName={workerInfo.workerBadge}/>
            </div>
           </div>

          {/* Skills */}
          <div className="">
              <p className="font-medium">Top Skills</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {
                  workerInfo.workerSkills.map((skill , index)=>(
                    <div className="px-4 py-1 rounded-md bg-blue-500 text-white" key={index}>
                        {skill}
                    </div>
                  ))
                }
              </div>
          </div>

          {/* Rate and contact */}

          <div className="flex justify-between items-center ">
              <div>
                <div className="flex gap-2 items-center text-gray-600">
                <IoIosStar className="text-2xl"/> 
                <p className="font-semibold text-lg">8.1 <span className="text-xs">(67 reviews)</span> </p>
                </div>
              </div>
              <div title={`${workerInfo.workerFullName} رقم هاتف السيد `} className="text-[#2d7d7d] text-md font-bold">
                +212 6-78 13 45 23
              </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 ">
                
                <a
                  title={`${workerInfo.workerFullName} إتصل بالسيد`} 
                  href={`tel:${workerInfo.workerPhoneNumber}`} 
                  className="flex justify-center items-center w-full bg-teal-50 hover:bg-teal-200 border-2 border-teal-500 h-[40px] rounded-md">
                    <FaPhoneAlt/>
                </a>
                
                <button 
                onClick={()=>getClickedWorkerId("22")}
                title={`${workerInfo.workerFullName} بروفايل السيد `}
                  className="w-1/2 border-2 border-blue-500 hover:bg-blue-50 h-[40px] rounded-md flex items-center justify-center gap-3">
                  Profile
                  <FaHammer className="text-lg"/>
                </button>
          </div>

        </div>
    </div>
  )
}

export default JobCard





/*
<div className="flex-none md:flex-1 md:h-[220px] w-[300px] bg-[#717e9153] rounded-xl overflow-hidden">
            <img src={img} alt={jobName} className="w-full md:h-[150px] h-[180px] object-cover" />
            <div className="md:h-[25%] h-[80px] flex justify-center items-center flex-col text-[#2b3441]">
                <h1>{jobName}</h1>
                <p className="text-[13px]">{smallDescription}</p>
            </div>
        </div>

*/