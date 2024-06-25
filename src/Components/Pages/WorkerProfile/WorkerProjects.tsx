import { useEffect, useRef, useState } from "react";
import { BsImages } from "react-icons/bs";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa";
import { IProjectWorker } from "../../../TS";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import Api from "../../../api/Api";
import { Config } from "../../../../config/Local_Variables";
import { useDispatch } from "react-redux";
import { setClickedProject } from "../../Store/Slices/ClickedProject";

type workerProjectsProps = {
    idOuvrier : string
}

const WorkerProjects = ({idOuvrier} : workerProjectsProps) => {

    const cardsContainerRef = useRef<HTMLDivElement>(null)

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

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
                    const response = await Api.get(`/projects?workerId=${idOuvrier}`)
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

    },[idOuvrier])
  

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


    const scrollToLeft = () =>{
        if(cardsContainerRef.current?.scrollLeft != undefined){
            cardsContainerRef.current.scrollLeft -= 390
        }
    }

    const scrollToRight = () =>{
        if(cardsContainerRef.current?.scrollLeft != undefined){
            cardsContainerRef.current.scrollLeft += 390
        }
    }

    if(projects == undefined || !isProjectsExist){
        return <div>NO PROJECTS</div>
    }

  return (
    <div className="my-5">
        <div ref={cardsContainerRef} className="flex gap-10 overflow-x-scroll no-scrollbar scroll-smooth">
           {
            projects.map((project , index)=>(
                <div key={project.idProjet}>
                    <ProjectCard projectInfo={project}/>
                </div>
            ))
           }
        </div>

        <div className="mt-4 flex gap-10 justify-center items-center mx-auto">
            <div 
                onClick={scrollToLeft}
                className="w-[40px] h-[40px] bg-blue-600 rounded-md flex justify-center items-center cursor-pointer">
                <FaChevronLeft className="text-2xl text-white"/>
            </div>
            <div
                onClick={scrollToRight} 
                className="w-[40px] h-[40px] bg-blue-600 rounded-md flex justify-center items-center cursor-pointer">
                <FaChevronRight className="text-2xl text-white"/>
            </div>
        </div>

    </div>
  )
}

export default WorkerProjects

type ProjectProps = {
    projectInfo : IProjectWorker
}

const ProjectCard = ({projectInfo}:ProjectProps) => {

    // to change the showed Project
    const dispatch = useDispatch<AppDispatch>()
  

    const titleProject : string = projectInfo.titre != undefined ? projectInfo.titre?.slice(0,50) : ""
        
    const [isTextArabic , setIsTextArabic] = useState<boolean>(true)
        
    const frenchRegex = /[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;

    useEffect(()=>{
        if(frenchRegex.test(titleProject)){
            setIsTextArabic(false)
        }
    },[titleProject])


    return(
        <div
            onClick={()=>dispatch(setClickedProject({idProject : projectInfo.idProjet}))} 
            className="relative w-[350px] h-[250px] border-2 border-teal-500 rounded-md overflow-hidden cursor-pointer">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-teal-950 flex flex-col justify-between p-2">
                <div className="flex justify-end">
                    <div className="w-fit bg-teal-700 p-2 rounded-md">
                        <BsImages className="text-xl font-bold text-white"/>
                    </div>
                </div>
                <div className="h-[25%]">
                    <p className={`text-white font-semibold ${isTextArabic && "text-end"}`}>
                        {
                            isTextArabic
                            ? <>...{titleProject}</>
                            : <>{titleProject}...</>
                        }
                    </p>
                </div>
            </div>

            <img src={Config.BaseImagesPath_Projects + projectInfo.imageProjet} alt="" className="w-full h-full object-cover" />
        </div>
    )
    
}
