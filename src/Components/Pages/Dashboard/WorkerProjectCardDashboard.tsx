import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { MdDelete } from "react-icons/md"
import { GrUpdate } from "react-icons/gr"
import { IProjectWorker } from "../../../TS"
import { Config } from "../../../../config/Local_Variables"


type workerProjectCardProps = {
    project : IProjectWorker,
    getClickedProjectID : (id:string) => void,
    getIsCompUpdated :React.Dispatch<React.SetStateAction<boolean>>;
    getUpdatedProjectId : (idProject : string) => void
    getIsUpdateProjectChange :React.Dispatch<React.SetStateAction<boolean>>;
}

const WorkerProjectCardDashboard = ({project , getClickedProjectID , getIsCompUpdated , getUpdatedProjectId , getIsUpdateProjectChange}:workerProjectCardProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    const formatTitle = (title: string) => {
        let formatedTitle: string;
        if (title.length > 61) {
            formatedTitle = title.slice(0, 60) + "..."
        }
        else {
            formatedTitle = title
        }

        return formatedTitle;
    }

    // Delete project
    const deleteClicked = () => {
        getClickedProjectID(project.idProjet);    
        getIsCompUpdated((prev: boolean) => !prev)
    }

    // Update project
    const updateClicked = () => {
        getUpdatedProjectId(project.idProjet)
        getIsUpdateProjectChange((prev: boolean) => !prev)
    }

    return (
        <div
            className="relative min-w-[350px] h-[250px] border-2 border-teal-500 rounded-md overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-teal-950 flex flex-col justify-between p-2">
                <div className="flex gap-3 select-none">
                    <div onClick={updateClicked} className="w-fit bg-blue-600 p-2 rounded-md flex items-center gap-2 cursor-pointer">
                        <GrUpdate className="text-lg font-bold text-white" />
                        <span className="text-sm font-semibold text-white">Mise à jour</span>
                    </div>
                    <div onClick={deleteClicked} className="w-fit bg-red-700 p-2 rounded-md flex items-center cursor-pointer">
                        <MdDelete className="text-xl font-bold text-white" />
                        <span className="text-sm font-semibold text-white">Supprimer</span>
                    </div>
                </div>
                <div className="h-[25%]">
                    <p className={`text-white font-semibold ${isArabicSelected && "text-end"}`}>
                        {formatTitle(project.titre)}
                    </p>
                </div>
            </div>

            <img src={ Config.BaseImagesPath_Projects + project.imageProjet} alt={project.titre} className="w-full h-full object-cover" />
        </div>
    )
}

export default WorkerProjectCardDashboard