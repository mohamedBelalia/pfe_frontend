import { useDispatch } from "react-redux"
import { AppDispatch } from "../../Store/store"
import { setClickedProject } from "../../Store/Slices/ClickedProject"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import Api from "../../../api/Api"
import { IProjectWorker } from "../../../TS"
import { Config } from "../../../../config/Local_Variables"
import LoadingPage from "../../Common/Loading/LoadingPage"


type showedProjectProps = {
    idProject : string
}

const tempImgs = ["project2.jpeg" , "project1.jpeg" , "project3.jpeg" , "project4.jpeg" , "project5.jpeg"]

const ShowedProject = ({idProject}:showedProjectProps) => {

    const cardsContainerRef = useRef<HTMLDivElement>(null)

    // to change the showed Project
    const dispatch = useDispatch<AppDispatch>()

    // to store the project data
    const [project , setProject] = useState<IProjectWorker>()

    // to handle the errors
    const [isError , setIsError] = useState<boolean>(false) 

    // handle the loading
    const [isLoaded , setIsLoaded] = useState<boolean>(false)

    // to handle the project content
    const [ isTextArabic , setIsTextArabic] = useState<boolean>(true)

    useEffect(()=>{
        const fetchProjectData = async()=> {
            
            try{
                const response = await Api.get(`/projects?id=${idProject}`)
                if(response.data.status != "not found"){
                    setProject(response.data[0])
                }
            }
            catch(err){
                setIsError(true)
            }
            finally{
                setIsLoaded(true)
            }
        }

        fetchProjectData()

    },[idProject])

    const frenchRegex = /[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;

    useEffect(()=>{
        if(project?.titre != undefined && frenchRegex.test(project.titre)){
            setIsTextArabic(false)
        }
    },[project?.titre])

   
    if(isError){
        return <div>Il y a quelque chose qui ne va pas, vérifiez votre connexion Internet !!</div>
    }

    if(!isLoaded){
        return (
            <div className="w-[80%] h-[200px] bg-white rounded-md flex justify-center items-center">
                <LoadingPage/>
            </div>
        )
    }

    if(project == undefined){
        dispatch(setClickedProject({idProject : ""}))
        return false
    }

    const scrollToLeft = () =>{
        if(cardsContainerRef.current?.scrollLeft != undefined){
            cardsContainerRef.current.scrollLeft -= 550
        }
    }

    const scrollToRight = () =>{
        if(cardsContainerRef.current?.scrollLeft != undefined){
            cardsContainerRef.current.scrollLeft += 550
        }
    }


  return (
    <div className="w-[80%]  bg-white rounded-md opacity-100">
        <div className=" h-[20px] mb-3 flex justify-end">
            <button
                onClick={()=>dispatch(setClickedProject({idProject : ""}))} 
                className="w-[30px] h-[30px] bg-red-500 text-white rounded-bl-lg font-bold">X</button>
        </div>
        <div className="flex gap-5 p-8">
            <div className="w-[40%] flex flex-col gap-5">
                <h1 className={`text-2xl font-bold text-blue-600 ${isTextArabic && "text-end"}`}>{project.titre}</h1>
                <p className={`text-teal-950 font-semibold ${isTextArabic && "text-end"}`}>
                    {project.description_projet}
                </p>
            </div>

            <div className="w-[60%] h-[400px]">
                <div ref={cardsContainerRef} className="w-[550px] h-[80%] mx-auto overflow-hidden rounded-md flex overflow-x-scroll no-scrollbar scroll-smooth">
                    {
                        tempImgs.map((img, index)=>(
                            <img 
                                key={index} 
                                src={Config.BaseImagesPath_Projects + img} 
                                className="w-[550px]  object-cover mx-3 ourBorder" alt="" />
                        ))
                    }
                </div>
              
                <div className="mt-4 flex gap-10 justify-center items-center mx-auto">
                    <div 
                        onClick={scrollToLeft}
                        className="w-[40px] h-[40px] bg-teal-600 rounded-md flex justify-center items-center cursor-pointer">
                        <FaChevronLeft  className="text-2xl text-white"/>
                    </div>
                    <div
                        onClick={scrollToRight}
                        className="w-[40px] h-[40px] bg-teal-600 rounded-md flex justify-center items-center cursor-pointer">
                        <FaChevronRight  className="text-2xl text-white"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShowedProject

// 
//   
