import Navbar from "../../Common/Navbar/Navbar"
import PersonnelInfo from "./PersonnelInfo"
import { MdOutlineDescription } from "react-icons/md";
import Professions from "../../Common/workerComponents/Professions";
import { GrCertificate } from "react-icons/gr";
import { AiOutlineProfile } from "react-icons/ai";
import Diplomes from "../Search/Filter/workerPopUp/Diplomes";
import { FaHammer } from "react-icons/fa6";
import WorkerProjects from "./WorkerProjects";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Api from "../../../api/Api";
import { IWorkerInfromation } from "../../../TS";

const WorkerProfile = () => {

  let {idWorker} = useParams()

  // to check if the worker existe 
  const [isFound , setIsFound] = useState<boolean>(true)

  // to store the worker data
  const [workerData , setWorkerData] = useState<IWorkerInfromation>()
  
  // to handle the errors
  const [isError , setIsError] = useState<boolean>(false)

  // to handle the loading
  const [isLoaded , setIsLoaded] = useState<boolean>(false)


  useEffect(()=>{
      const fetchWorkerData = async() => {
        try{
            const response = await Api.get(`/workers?id=${idWorker}`)

            if(response.data[0].idOuvrier == null){
                setIsFound(false)
            }
            else{
              setWorkerData(response.data[0])
            }
        }
        catch(err){
          setIsError(true)
        }
        finally{
          setIsLoaded(true)
        }
      }

      fetchWorkerData()
  },[])


  if(!isLoaded){
    return <div>LOADING ...</div>
  }
  

  if(workerData == undefined || !isFound){
    return <div>NOT FOUND</div>
  }

  if(isError){
    return <div>Something wrong (check your connection)</div>
  }
  

  return (
    
    <div className="min-h-[80vh]">
      <Navbar/> 
        
      <div className="w-[80%] mx-auto md:pt-[140px] pt-[60px] py-[40px] flex items-start gap-6">
          <div className="w-1/3">
              <PersonnelInfo singleWorker={workerData}/>
          </div>

          <div className="w-[70%] flex flex-col gap-8">
              <div>
                <h1 className="text-xl font-bold flex items-center gap-1 text-teal-700">
                  <MdOutlineDescription className="text-[30px]"/> Description
                </h1>
                <p className="font-semibold mt-1 px-8">
                  {workerData?.description_ouvrier}
                </p>
              </div>

              <div>
                  <h1 className="text-xl font-bold flex items-center gap-1 text-teal-700">
                    <AiOutlineProfile className="text-[30px]"/> Professions
                  </h1>
                  <div className="py-3">
                    <Professions idWorker={workerData.idOuvrier}/>
                  </div>
              </div>

              <div>
                  <h1 className="text-xl font-bold flex items-center gap-2 text-teal-700">
                      <FaHammer className="text-[30px]"/> Projects
                  </h1>
                    <WorkerProjects idOuvrier={workerData.idOuvrier}/>
              </div>


              <div>
                  <h1 className="text-xl font-bold flex items-center gap-1 text-teal-700">
                    <GrCertificate className="text-[30px]"/> Diplômes
                  </h1>
                  <div className="py-3">
                    <Diplomes workerId={idWorker != null ? idWorker : ""}/>
                  </div>
              </div>

          </div>

      </div>  
      
    </div>

  )
}

export default WorkerProfile


