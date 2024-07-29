import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { FaAngleLeft, FaAngleRight, FaHammer } from "react-icons/fa6"
import WorkerProjectCardDashboard from "./WorkerProjectCardDashboard"
import { useEffect, useRef, useState } from "react"
import Api from "../../../api/Api"
import { IProjectWorker } from "../../../TS"
import LoadingPage from "../../Common/Loading/LoadingPage"

type prjectsProps = {
    workerID: string
}

const ProjetsDashboard = ({ workerID }: prjectsProps) => {


    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
    const cardsContainerRef = useRef<HTMLDivElement>(null)

    const [isNotFound, setIsNotFound] = useState<boolean | null>(null)
    const [isError, setIsError] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [projects, setProjects] = useState<IProjectWorker[]>([])

    useEffect(() => {
        const fetchWorkerProjects = async () => {
            const response = await Api.get(`/projects?workerId=${workerID}`)
            try {
                if (response.data.status == "not_found") {
                    setIsNotFound(true)
                }
                else {
                    setProjects(response.data)
                }
            }
            catch (e) {
                setIsError(true)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchWorkerProjects()

    }, []);


    if(isLoading) {
        return <div className="w-[80%] mx-auto my-5 p-2" dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>
            <h1 className="font-bold text-2xl text-blue-500 flex items-center gap-4">
                {
                    isArabicSelected
                        ? "مشاريعك"
                        : "Votre Projets"
                }
                <FaHammer className="text-3xl" />
            </h1>
            <div className="flex items-center justify-center my-8">
                <LoadingPage/>
            </div>
        </div>
    }


    const scrollToLeft = () => {
        if (cardsContainerRef.current?.scrollLeft != undefined) {
            cardsContainerRef.current.scrollLeft -= 390
        }
    }

    const scrollToRight = () => {
        if (cardsContainerRef.current?.scrollLeft != undefined) {
            cardsContainerRef.current.scrollLeft += 390
        }
    }

    return (
        <div className="w-[80%] mx-auto my-5 p-2" dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>
            <h1 className="font-bold text-2xl text-blue-500 flex items-center gap-4">
                {
                    isArabicSelected
                        ? "مشاريعك"
                        : "Votre Projets"
                }
                <FaHammer className="text-3xl" />
            </h1>

            <div ref={cardsContainerRef} className="flex gap-10 overflow-x-scroll no-scrollbar scroll-smooth mt-4">
                {
                    projects.map((project , _)=>(
                        <WorkerProjectCardDashboard key={project.idProjet} project={project}/>
                    ))
                }
            </div>

            <div className="flex justify-center items-center gap-3 mt-4">
                <button
                    onClick={scrollToLeft}
                    className="w-[40px] h-[40px] flex justify-center items-center text-2xl text-white bg-blue500 rounded-md">
                    <FaAngleLeft />
                </button>
                <button
                    onClick={scrollToRight}
                    className="w-[40px] h-[40px] flex justify-center items-center text-2xl text-white bg-blue500 rounded-md">
                    <FaAngleRight />
                </button>
            </div>

        </div>
    )
}

export default ProjetsDashboard
