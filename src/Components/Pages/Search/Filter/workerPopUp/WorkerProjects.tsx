import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
import { IProjectWorker } from "../../../../../TS";
import Api from "../../../../../api/Api";
import { Config } from "../../../../../../config/Local_Variables";


type workerProjectsProps = {
    idWorker : string 
    workerName : string
}

const WorkerProjects = ({idWorker , workerName}:workerProjectsProps) => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const [isProjectHovered , setIsProjectHovered] = useState<boolean>(false)
    const [idProjectHovered , setIdProjectHovered] = useState<string>("")

    // state to store worker projects
    const [projects , setProjects] = useState<IProjectWorker[]>()

    // to check the existence of projects
    const [isProjectsExist , setIsProjectsExist] = useState<boolean>(false)

    // to handle the errors of fetched projects
    const [hasError , setHasError] = useState<boolean>(false)

    // to handle the loading of projects
    const [isLoading , setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
            const fetchWorkerProjects = async() => {
                try{
                    const response = await Api.get(`/projects?workerId=${idWorker}`)
                    if(response.data.status == "not found"){
                        setIsProjectsExist(false)
                    }
                    else{
                        setIsProjectsExist(true)
                        setProjects(response.data)
                    }
                }
                catch(err){
                    setHasError(true)
                }
                finally{    
                    setIsLoading(false)
                }
            }

            fetchWorkerProjects()

    },[idWorker])

     // for the projects
     const handleMouseOver = (idProject : string) => {
        setIsProjectHovered(true)
        setIdProjectHovered(idProject)
    }   

    if(hasError){
        return(
            <div>There is Something wrong , we will fix it soon</div>
        )
    }

    if(isLoading){
        return (
            <div className="flex flex-col gap-1 my-5 animate-pulse">
                <h1 className={`font-bold text-lg text-gray700 ${isArabicSelected && "text-end"}`}>
                    {
                        isArabicSelected
                        ? "المشاريع"
                        : "les projets"
                    }
                </h1>
                <div className="h-[150px] w-[160px] rounded-md bg-slate-300"></div>
            </div>
        )
    }


  return (

    <>
    {
    isProjectsExist
    ?

    <div className="flex flex-col gap-1 my-5">
    <h1 className={`font-bold text-lg text-gray700 ${isArabicSelected && "text-end"}`}>
        {
            isArabicSelected
            ? "المشاريع"
            : "les projets"
        }
    </h1>
    <div className={`w-full h-[150px] flex gap-7 ${isArabicSelected && "flex-row-reverse"}`}>
        {
            projects?.slice(0,3).map((project , index)=>(
                index == 2
               ?
                <div key={index} className="h-full relative w-[160px] rounded-md overflow-hidden cursor-pointer">
                    <div className="w-full flex justify-center items-center h-full bg-[#0000008b] absolute top-0 left-0">
                        <p className="text-white font-bold">Plus de Projets</p>
                    </div>
                    <img src={ Config.BaseImagesPath_Projects + project.imageProjet } className="w-full h-full object-cover" />
                </div>
                :
                <div
                    key={index} 
                    onMouseOver={()=>handleMouseOver(project.idProjet)} 
                    onMouseOut={()=>setIsProjectHovered(false)}
                    className="h-full relative w-[160px] rounded-md overflow-hidden cursor-pointer ourBorder">
                    <img src={ Config.BaseImagesPath_Projects + project.imageProjet } className="w-full h-full object-cover" />
                    <div className={`${isProjectHovered && (idProjectHovered == project.idProjet) ? "h-[100%]" : "h-0"} w-full flex justify-center items-center 
                                    overflow-hidden bg-[#0e605a70] 
                                    absolute top-0 left-0 transition-all ease-in-out duration-300`}>
                        <button className="px-5 py-1 bg-teal-300 rounded-md hover:bg-teal-400">
                            Afficher
                        </button>
                    </div>
                </div> 
            ))
        }
        
    </div>
    </div>
        
    : 
        <div className="h-[150px] w-full rounded-md border-2 border-teal-500 flex flex-col items-center">
            <img className="w-[100px]" src="/imgUsed/no_img.png" alt="" />
            <p>
                {
                    isArabicSelected
                    ? `لم يتم تحميل أي مشاريع من قبل ${workerName}`
                    : `Aucun projet téléchargé par ${workerName}`
                }
            </p>
        </div>
    }

    </>
   
  )
}

export default WorkerProjects