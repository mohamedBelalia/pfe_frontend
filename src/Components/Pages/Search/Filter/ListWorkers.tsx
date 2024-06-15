import WorkerCard from "./WorkerCard"
import { ICity, IFilterNeededData, IWorkerInfromation } from "../../../../TS"
import { useEffect, useState } from "react"
import Api from "../../../../api/Api"
import WorkerFilteredCardLoading from "../../../Common/LoadingLayouts/WorkerFilteredCardLoading"
import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store"



interface listWorkersProps{
  filterNeededData : IFilterNeededData
  getClickedWorkerId : (id : string)=>void
  searchedCityName : string
  searchedProfession : string
  // for the nbr of filtered workers 
  getNbrWorkers : (nbrWorker : number) => void
  // city name
  cityName? : ICity
}

const ListWorkers = ({getClickedWorkerId , filterNeededData , searchedCityName , searchedProfession , getNbrWorkers , cityName}:listWorkersProps) => {

    const [filteredWorkers , setFilteredWorkers] = useState<IWorkerInfromation[]>()

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

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
        filter += `,badge:${filterNeededData.badge[0]}|${filterNeededData.badge[1]}`
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
            getNbrWorkers(response.data.length)            
          }
          else{
            setIsNotFound(true)
            getNbrWorkers(0)
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


    if(isLoaded){
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
                <div className="w-full h-[300px] rounded-md border-2 border-teal-500 flex flex-col justify-center items-center">
                 <div className="flex gap-4 items-center">
                    <img src="/imgUsed/noUsers.png" alt="user not found" className="w-1/3" />
                    <div className="w-1/2 flex flex-col text-center gap-4">
                      <h1 className="text-3xl font-semibold text-teal-600">
                        {
                          isArabicSelected 
                          ? "غير موجود"
                          : "Non Trouvé !"
                        }
                      </h1>
                      {
                        isArabicSelected
                        ?
                        <p className="font-semibold text-gray-800">نأسف، لا يوجد <span className="px-2 bg-teal-300 rounded-md">{searchedProfession}</span> متاحون في <span className="px-2 bg-teal-300 rounded-md">{cityName?.ville_AR}</span> في الوقت الحالي</p>
                        :
                        <p className="font-semibold text-gray-800">Nous sommes désolés, mais il n'y a pas de <span className="px-2 bg-teal-300 rounded-md">{searchedProfession}</span> disponibles à <span className="px-2 bg-teal-300 rounded-md">{cityName?.ville_FR}</span> pour le moment !</p>
                      }
                    </div>
                 </div>
                </div>
              }
          </div>
    </div>
  )
}

export default ListWorkers
