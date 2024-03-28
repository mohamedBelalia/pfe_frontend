import WorkerCard from "./WorkerCard"
import { IFilterNeededData, IWorkerInfromation } from "../../../../TS"
import { useEffect, useState } from "react"
import Api from "../../../../api/Api"
import WorkerFilteredCardLoading from "../../../Common/LoadingLayouts/WorkerFilteredCardLoading"



interface listWorkersProps{
  filterNeededData : IFilterNeededData
  getClickedWorkerId : (id : string)=>void
}

const ListWorkers = ({getClickedWorkerId , filterNeededData}:listWorkersProps) => {

    const [filteredWorkers , setFilteredWorkers] = useState<IWorkerInfromation[]>()

    // loading state
    const [isLoaded , setIsLoaded] = useState<boolean>(true)

    // for the empty filter result
    const [isNotFound , setIsNotFound] = useState<boolean>(false)

    let filter : string = `ville:${filterNeededData.ville},profession:${filterNeededData.profession}` ;

    const badgeParams = () => {
      
      if(filterNeededData.badge[0] != undefined && filterNeededData.badge[1] == undefined){
        filter += `,badge:${filterNeededData.badge[0]}`
      }
      else if(filterNeededData.badge[1] != undefined && filterNeededData.badge[0] == undefined){
        filter += `,badge:${filterNeededData.badge[1]}`
      }
      else if(filterNeededData.badge[0] != undefined && filterNeededData.badge[1] != undefined){
        filter += `,badge:${filterNeededData.badge[0]}&${filterNeededData.badge[1]}`
      }   
    
    }
    
    useEffect(()=>{

      badgeParams()

      const fetchFilteredWorkers = async()=>{
        try{
          const response = await Api.get(`/workers?filter=${filter}`)
          
          if(response.data.status != "not found"){
            setFilteredWorkers(response.data) ;
            setIsNotFound(false)
          }
          else{
            setIsNotFound(true)
          }
         

        }catch(error){
          console.log(error);
        }
        finally{
          setIsLoaded(false)
        }
      }

      fetchFilteredWorkers()

    },[
      filterNeededData.ville ,
      filterNeededData.profession ,
      filterNeededData.badge
    ])    


    if(!isLoaded){
      return(
        <div>
          <WorkerFilteredCardLoading/>
        </div>
      )
    }
    
    
  return (
    <div className="">
          <div className="flex flex-col gap-8">
              {
                !isNotFound
                ?
                filteredWorkers?.map((worker,_)=>(
                  <WorkerCard key={worker.idOuvrier} workerInfo={worker} getClickedWorkerId={getClickedWorkerId}/>
                ))
                :
                <div className="w-full h-[300px] rounded-md border border-red-400 flex flex-col justify-center items-center">
                  <h1 className="text-6xl">No One</h1>
                  <p>we will design this ui inchaalah</p>
                </div>
              }
          </div>
    </div>
  )
}

export default ListWorkers
