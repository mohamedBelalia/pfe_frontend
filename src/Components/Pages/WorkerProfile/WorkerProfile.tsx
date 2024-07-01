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
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import ShowedProject from "./ShowedProject";
import RatingProcess from "../../Common/RatingProcess/RatingProcess";
import Evaluation from "./Evaluation/Evaluation";

const WorkerProfile = () => {

  let { idWorker } = useParams()

  // to check if the worker existe 
  const [isFound, setIsFound] = useState<boolean>(true)

  // to store the worker data
  const [workerData, setWorkerData] = useState<IWorkerInfromation>()

  // to handle the errors
  const [isError, setIsError] = useState<boolean>(false)

  // to handle the loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // The Slice For Change The Language
  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  // The Slice to show the Project
  const idProject: string = useSelector((state: RootState) => state.clickedProject.idProject)

  //  the slice to get the rated worker ID
  const ratedWorkerID: string = useSelector((state: RootState) => state.ratedWorkerId.idWorker)


  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const response = await Api.get(`/workers?id=${idWorker}`)

        if (response.data[0].idOuvrier == null) {
          setIsFound(false)
        }
        else {
          setWorkerData(response.data[0])
        }
      }
      catch (err) {
        setIsError(true)
      }
      finally {
        setIsLoaded(true)
      }
    }

    fetchWorkerData()
  }, [])


  if (!isLoaded) {
    return <div>LOADING ...</div>
  }


  if (workerData == undefined || !isFound) {
    return <div>NOT FOUND</div>
  }

  if (isError) {
    return <div>Something wrong (check your connection)</div>
  }


  return (

    <div className="min-h-[80vh] relative">

      {/* to show the details of each project */}
      {
        idProject.length > 0
        &&
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#03111eed] z-[60] flex justify-center items-center">
          <ShowedProject idProject={idProject} />
        </div>
      }

      {/* to start the rating process for the cliked worker */}
      {
        ratedWorkerID.length > 0
        &&
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#03111eed] z-[60] flex justify-center items-center">
          <RatingProcess workerName={workerData.nomOuvrier} workerId={workerData.idOuvrier} />
        </div>
      }

      <Navbar />
      <div className={`w-full md:w-[80%] mx-auto md:pt-[140px] pt-[80px] py-[40px] px-5 md:px-0 flex gap-10 flex-col ${isArabicSelected ? "tab:flex-row-reverse" : "tab:flex-row "} items-start`}>
        <div className="w-full mx-auto sm:w-[70%] md:w-[80%] tab:w-1/3">
          <PersonnelInfo singleWorker={workerData} />
        </div>

        <div className="w-full tab:w-[70%] flex flex-col gap-8">
          <div>
            <h1 className={`text-xl font-bold flex ${isArabicSelected ? 'justify-end' : 'justify-start'} gap-1 text-teal-700`}>
              {
                isArabicSelected
                  ?
                  <>
                    وصف <MdOutlineDescription className="text-[30px]" />
                  </>
                  :
                  <>
                    <MdOutlineDescription className="text-[30px]" /> Description
                  </>
              }

            </h1>
            <p className={`font-semibold mt-1 px-4 ${isArabicSelected && "text-end"}`}>
              {workerData?.description_ouvrier}
            </p>
          </div>

          <div>
            <h1 className={`text-xl font-bold flex ${isArabicSelected ? 'justify-end' : 'justify-start'} gap-1 text-teal-700`}>
              {
                isArabicSelected
                  ?
                  <>
                    المهن <AiOutlineProfile className="text-[30px]" />
                  </>
                  :
                  <>
                    <AiOutlineProfile className="text-[30px]" /> Professions
                  </>
              }

            </h1>
            <div className="py-3">
              <Professions idWorker={workerData.idOuvrier} />
            </div>
          </div>

          <div>
            <h1 className={`text-xl font-bold flex ${isArabicSelected ? 'justify-end' : 'justify-start'} gap-1 text-teal-700`}>
              {
                isArabicSelected
                  ?
                  <>
                    المشاريع <FaHammer className="text-[30px]" />
                  </>
                  :
                  <>
                    <FaHammer className="text-[30px]" /> Les Projets
                  </>
              }

            </h1>
            <WorkerProjects idOuvrier={workerData.idOuvrier} />
          </div>

          <div className="my-5">
            <h1 className={`text-xl font-bold flex ${isArabicSelected ? 'justify-end' : 'justify-start'} gap-1 text-teal-700`}>
              {
                isArabicSelected
                  ?
                  <>
                    الدبلومات <GrCertificate className="text-[30px]" />
                  </>
                  :
                  <>
                    <GrCertificate className="text-[30px]" /> Evaluation
                  </>
              }

            </h1>
            <div className="pb-3">
              {
                idWorker != undefined  // if there is no id worker
                &&
                <Evaluation workerId={idWorker} />
              }
            </div>
          </div>

          <div>
            <h1 className={`text-xl font-bold flex ${isArabicSelected ? 'justify-end' : 'justify-start'} gap-1 text-teal-700`}>
              {
                isArabicSelected
                  ?
                  <>
                    الدبلومات <GrCertificate className="text-[30px]" />
                  </>
                  :
                  <>
                    <GrCertificate className="text-[30px]" /> Diplômes
                  </>
              }

            </h1>
            <div className="pb-3">
              <Diplomes workerId={idWorker != null ? idWorker : ""} />
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default WorkerProfile


