import { useDispatch } from "react-redux"
import { AppDispatch } from "../../Store/store"
import { setClickedProject } from "../../Store/Slices/ClickedProject"
import { useEffect , useState } from "react"
import Api from "../../../api/Api"
import { IProjectWorker } from "../../../TS"
import LoadingPage from "../../Common/Loading/LoadingPage"
import ProjectImages from "./ProjectImages"


type showedProjectProps = {
    idProject : string
}

const ShowedProject = ({idProject}:showedProjectProps) => {

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
            <div className="w-[80%] h-[200px] bg-white rounded-md flex justify-center items-center ">
                <LoadingPage/>
            </div>
        )
    }

    if(project == undefined){
        dispatch(setClickedProject({idProject : ""}))
        return false
    }

  return (
    <div className="w-[95%] md:w-[80%]  bg-white rounded-md">
        <div className="h-[20px] mb-3 flex justify-end">
            <button
                onClick={()=>dispatch(setClickedProject({idProject : ""}))} 
                className="w-[30px] h-[30px] bg-red-500 text-white rounded-bl-lg font-bold">X</button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:p-8 p-2">
            <div className="w-full md:w-[40%] flex flex-col gap-5">
                <h1 className={`text-2xl font-bold text-blue-600 ${isTextArabic && "text-end"}`}>{project.titre}</h1>
                <p className={`text-teal-950 font-semibold ${isTextArabic && "text-end"}`}>
                    {project.description_projet}
                </p>
            </div>

            <div className="w-full md:w-[60%] h-[40vh] md:h-[400px]">
                <ProjectImages idProject={project.idProjet} firstImg={project.imageProjet}/>
            </div>

        </div>
    </div>
  )
}

export default ShowedProject
