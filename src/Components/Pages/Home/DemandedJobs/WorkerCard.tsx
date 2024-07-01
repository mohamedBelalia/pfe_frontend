import { IoIosStar } from "react-icons/io"
import BadgeWorker from "../../../Common/Badge/BadgeWorker"
import { FaHammer, FaPhoneAlt } from "react-icons/fa"
import { IBestWorkers, IProfessionsType } from "../../../../TS"
import { useEffect, useState } from "react"
import Api from "../../../../api/Api"
import { Config } from "../../../../../config/Local_Variables"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../../Store/store"
import { SlBadge } from "react-icons/sl"

interface JobCardTypes extends IBestWorkers {
  getClickedWorkerId?: (id: string) => void
}

const BASE_IMAGE_PATH_Profile = Config.BaseImagesPath_Profiles;

const WorkerCard = ({ workerInfo, getClickedWorkerId }: JobCardTypes) => {

  // The Slice For Change The Language
  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  // state to store the professions
  const [professions, setProfessions] = useState<IProfessionsType[]>();

  // to know if the worker had professions or not
  const [hadProfessions, setHadPorfessions] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfessions = async () => {
      try {
        const response = await Api.get(`/professions?workerId=${workerInfo.idOuvrier}`)
        if (response.data.status == "not found") {
          setHadPorfessions(false)
        }
        else {
          setProfessions(response.data)
        }

      } catch (AxiosError) {
        console.log("404");
      }
    }

    fetchProfessions()

  }, [])


  const gotoWorkerProfile = (workerId: string) => {
    window.scrollTo(0, 0)
    navigate(`/ouvres/${workerId}`)
  }



  return (
    <div className="md:col-span-4">
      <div className="p-4 py-6 flex gap-9 flex-col md:flex-1 w-[350px] md:w-full bg-[#ffffff] shadow-xl rounded-xl overflow-hidden border-2 border-teal-600">

        {/* Head Card (image , name , badge) */}
        <div className="flex gap-4">
          <div className="w-[80px] h-[80px] overflow-hidden">
            <img className="w-full h-full rounded-full border border-teal-600"
              // src="./imgUsed/workerImagePlaceholder.png"
              src={BASE_IMAGE_PATH_Profile + workerInfo.imgProfile}
              alt={workerInfo.nomOuvrier + ' ' + workerInfo.prenomOuvrier} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-neutral-700">{workerInfo.prenomOuvrier} {workerInfo.nomOuvrier}</p>
            <div className="border-dashed gap-2 border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-full flex items-center justify-around">
              <SlBadge className="text-xl" />
              <span>
                {
                  isArabicSelected
                    ? `الخبرة ${workerInfo.experience} سنة `
                    : `experience ${workerInfo.experience} annee`
                }
              </span>
              {/* {badgeName} */}
            </div>
            {/* <BadgeWorker 
                  badgeName={
                    workerInfo.experience 
                  }/> */}
          </div>
        </div>

        {/* Skills */}
        <div
        // className={`flex ${isArabicSelected && 'flex-row-reverse text-end'}`}
        >
          <div>
            <p className="font-medium">
              {
                isArabicSelected
                  ? "المهن الرئيسية"
                  : "Principales Professions"
              }
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {
                hadProfessions
                  ?
                  professions?.map((profession, _) => (
                    <div className="px-4 py-1 rounded-md bg-blue-500 text-white" key={profession.idProfession}>
                      {
                        isArabicSelected
                          ? profession.labelleProfession_AR
                          : profession.labelleProfession_FR}
                    </div>
                  ))
                  :
                  <div className="px-4 py-1 rounded-md bg-gray-500 text-white">
                    {
                      isArabicSelected
                        ? "بدون مهنة"
                        : "Sans Profession"
                    }
                  </div>
              }
            </div>
          </div>
        </div>
        {/* Rate and contact */}

        <div className="flex justify-center items-center ">
          {/* <div>
            <div className="flex gap-2 items-center text-gray-600">
              <IoIosStar className="text-2xl" />
              <p className="font-semibold text-lg">{workerInfo.avgEtoile}
                <span className="text-xs"> ( {workerInfo.nbrCommentair}
                  {isArabicSelected
                    ? " تقييمات "
                    : " Avis"
                  } )
                </span>
              </p>
            </div>
          </div> */}
          <div title={`${workerInfo.prenomOuvrier} رقم هاتف السيد `} className="text-[#2d7d7d] text-lg font-bold">
            {workerInfo.phone}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 ">

          <a
            title={`${workerInfo.prenomOuvrier} إتصل بالسيد`}
            href={`tel:${workerInfo.phone}`}
            className="flex justify-center items-center w-1/2 bg-teal-50 hover:bg-teal-200 border-2 border-teal-500 h-[40px] rounded-md">
            <FaPhoneAlt />
          </a>

          <button
            onClick={() => gotoWorkerProfile(workerInfo.idOuvrier)}
            title={`بروفايل السيد  ${workerInfo.prenomOuvrier} `}
            className="w-1/2 border-2 border-blue-500 hover:bg-blue-50 h-[40px] rounded-md flex items-center justify-center gap-3">

            {
              isArabicSelected
                ? "الملف الشخصي"
                : "Profil"
            }
            <FaHammer className="text-lg" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default WorkerCard





/*
<div className="flex-none md:flex-1 md:h-[220px] w-[300px] bg-[#717e9153] rounded-xl overflow-hidden">
            <img src={img} alt={jobName} className="w-full md:h-[150px] h-[180px] object-cover" />
            <div className="md:h-[25%] h-[80px] flex justify-center items-center flex-col text-[#2b3441]">
                <h1>{jobName}</h1>
                <p className="text-[13px]">{smallDescription}</p>
            </div>
        </div>

*/