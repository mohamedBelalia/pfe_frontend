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
  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
  const [professions, setProfessions] = useState<IProfessionsType[]>();
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
      <div className="bg-white rounded-lg border-2 border-teal-500 shadow-sm hover:shadow-md transition-all duration-200">
        {/* Profile Section */}
        <div className="p-5 bg-teal-50">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500">
              <img 
                className="w-full h-full object-cover"
                src={BASE_IMAGE_PATH_Profile + workerInfo.imgProfile}
                alt={workerInfo.nomOuvrier + ' ' + workerInfo.prenomOuvrier} 
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-teal-800">
                {workerInfo.prenomOuvrier} {workerInfo.nomOuvrier}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <SlBadge className="text-teal-600" />
                <span className="text-sm text-teal-700">
                  {isArabicSelected
                    ? `الخبرة ${workerInfo.experience} سنة`
                    : `Experience ${workerInfo.experience} annee`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Professions Section */}
        <div className="p-5 border-b border-teal-100">
          <h3 className="text-sm font-medium text-teal-700 mb-3">
            {isArabicSelected ? "المهن الرئيسية" : "Principales Professions"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {hadProfessions ? (
              professions?.map((profession) => (
                <span
                  key={profession.idProfession}
                  className="px-3 py-1 bg-teal-100 text-teal-700 rounded text-sm"
                >
                  {isArabicSelected
                    ? profession.labelleProfession_AR
                    : profession.labelleProfession_FR}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded text-sm">
                {isArabicSelected ? "بدون مهنة" : "Sans Profession"}
              </span>
            )}
          </div>
        </div>

        {/* Contact and Actions Section */}
        <div className="p-5">
          <div className="mb-4 text-center">
            <span className="text-teal-700 font-medium">
              {workerInfo.phone}
            </span>
          </div>
          
          <div className="flex gap-3">
            <a
              href={`tel:${workerInfo.phone}`}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-200"
            >
              <FaPhoneAlt />
              <span className="text-sm font-medium">
                {isArabicSelected ? "اتصل" : "Appeler"}
              </span>
            </a>
            <button
              onClick={() => gotoWorkerProfile(workerInfo.idOuvrier)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              <FaHammer />
              <span className="text-sm font-medium">
                {isArabicSelected ? "الملف الشخصي" : "Profil"}
              </span>
            </button>
          </div>
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