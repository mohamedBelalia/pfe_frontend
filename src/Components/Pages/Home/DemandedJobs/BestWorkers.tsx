import { useSelector } from "react-redux"
import WorkerCard from "./WorkerCard"
import { RootState } from "../../../Store/store"
import Api from "../../../../api/Api"
import { useEffect, useState } from "react"
import { IWorkerInfromation } from "../../../../TS"
import WorkerCardLoading from "../../../Common/LoadingLayouts/WorkerCardLoading"

type topWorkersType = {
    getWorkerId : (id :string) => void
}


const BestWorkers = ({getWorkerId}:topWorkersType) => {
    const test : number[] = [1 , 2 , 3 , 4 , 5 , 6]
    // state of the best Workers 
    const [workers , setWorkers] = useState<IWorkerInfromation[]>()

    // for the error handling
    const [isError , setIsError] = useState<boolean>(false)

    // to handle the loading interval
    const [isLoaded , setIsLoaded] = useState<boolean>(true)

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    useEffect(()=>{
        const fetchBestWorkers = async()=>{
            try{
                const response = await Api.get("/workers?top=6")
                
                if(response.data[0].status == "not_found"){ // we should put the other condtions
                    
                }
                else{
                    setWorkers(response.data)
                }

            }catch(exe){
                setIsError(true)
            }
            finally{
                setIsLoaded(false)
            }
        }

        fetchBestWorkers()

    },[])

   
    // if(isError){
    //     return (
    //         <div>
    //             Somthing wrong , check connection
    //         </div>
    //     )
    // }

    if(isLoaded){
        return (
        <div className="px-1 md:px-0 md:w-[80%] w-full md:mx-auto mt-16 pt-12">
            <h1 className="text-center text-4xl font-bold text-[#349292]">
            {
                isArabicSelected 
                ? "أفضل 6 عمال تقييمًا في منطقتك"
                : "Les 6 meilleurs artisans évalués dans votre région."
            }
            </h1>

            {/* PC screens seaction Loading*/}
            <div className="hidden md:flex justify-around md:flex-wrap gap-5 mt-14">
                    {
                        test.map((nbr,_)=>(
                            <WorkerCardLoading key={nbr}/>
                        ))
                    }
            </div>

            {/* Phone screens seaction Loading*/}
            <div className="flex md:hidden gap-5 mt-14 overflow-scroll hideScrollBar">
                    {
                        test.map((nbr,_)=>(
                            <WorkerCardLoading key={nbr}/>
                        ))
                    }
            </div>

            
        </div>
        )
    }

    
  return (
    <div className="px-1 md:px-0 md:w-[80%] w-full md:mx-auto mt-16 pt-12">
        <h1 className="text-center text-4xl font-bold text-[#349292]">
            {
                isArabicSelected 
                ? "أفضل 6 عمال تقييمًا في منطقتك"
                : "Les 6 meilleurs artisans évalués dans votre région."
            }
            
        </h1>

            {/* Phone screens seaction */}
        <div className="flex md:hidden gap-5 mt-14 overflow-scroll hideScrollBar">
            {
                workers?.map((worker, _) => (
                    <WorkerCard key={worker.idOuvrier}

                        // to handle the clicked profile
                        getClickedWorkerId={getWorkerId}

                    // this object workerInfo includs all the needed info for the worker
                        workerInfo={
                            {   
                                idOuvrier : worker.idOuvrier ,
                                nomOuvrier : worker.nomOuvrier ,
                                prenomOuvrier : worker.prenomOuvrier ,
                                phone : worker.phone ,
                                imgProfile : worker.imgProfile ,
                                idBadge : worker.idBadge ,
                                labelleBadge_AR : worker.labelleBadge_AR ,
                                labelleBadge_FR : worker.labelleBadge_FR ,
                                nbrCommentair : worker.nbrCommentair ,
                                avgEtoile : worker.avgEtoile
                            }} />
                ))
            }
        </div>

            {/* PC screens seaction */}
        <div className="hidden md:flex justify-around md:flex-wrap gap-5 mt-14">
            {
                workers?.map((worker, _) => (
                    <WorkerCard key={worker.idOuvrier}

                        // to handle the clicked profile
                        getClickedWorkerId={getWorkerId}

                    // this object workerInfo includs all the needed info for the worker
                        workerInfo={
                            {   
                                idOuvrier : worker.idOuvrier ,
                                nomOuvrier : worker.nomOuvrier ,
                                prenomOuvrier : worker.prenomOuvrier ,
                                phone : worker.phone ,
                                imgProfile : worker.imgProfile ,
                                idBadge : worker.idBadge ,
                                labelleBadge_AR : worker.labelleBadge_AR ,
                                labelleBadge_FR : worker.labelleBadge_FR,
                                nbrCommentair : worker.nbrCommentair ,
                                avgEtoile : worker.avgEtoile
                            }} />
                ))
            }
        </div>

    </div>
  )
}

export default BestWorkers