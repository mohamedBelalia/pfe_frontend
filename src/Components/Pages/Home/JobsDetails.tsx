import { useNavigate } from "react-router-dom"
import DetailsJob from "../../../assets/jsonUsed/usedData.json"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../Store/store"
import { setSelectedJobName } from "../../Store/Slices/SelectedTask"
import { useSelector } from "react-redux"
import { FaSearch } from "react-icons/fa";

type JobDetailsTypes = {
    idJob : string
}

const JobsDetails = ({idJob}:JobDetailsTypes) => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const jobDetails = DetailsJob.jobs.find((job)=>job.id == idJob)
    const jobCategoriesAr : string[]|undefined = jobDetails?.tasksAr.split("|")
    const jobCategoriesFr : string[]|undefined = jobDetails?.tasksFr.split("|")

  return (
    <div className="bg-[#f0fffb] md:pb-10 pb-5">
        <div className=" w-[100%] md:w-[80%] mx-auto p-10">
            {
                isArabicSelected ? 
                <div className="flex flex-wrap gap-4">
                {
                    jobCategoriesAr?.map((category , _)=>(
                        <div key={category} className="md:w-auto w-full">
                            <CategoryBtn label={category}/>
                        </div>
                    ))
                }
                </div>
                :
                <div className="flex flex-wrap gap-4">
                {
                    jobCategoriesFr?.map((category , _)=>(
                        <div key={category} className="md:w-auto w-full">
                            <CategoryBtn label={category}/>
                        </div>
                    ))
                }
            </div>
            }
           

            <div className={`flex flex-col ${isArabicSelected ? "md:flex-row-reverse text-right" : "md:flex-row"} gap-2 mt-14 items-center`}>
                <div className="w-full">
                    <h1 className="font-bold text-4xl text-[#199AFF]">
                        {isArabicSelected ? jobDetails?.nameAr : jobDetails?.nameEn}
                    </h1>
                    <div className="md:my-10 my-5">
                        <p className={`font-semibold md:text-xl flex items-end gap-3 ${isArabicSelected ? "flex-row-reverse" : "flex-row"} mb-2 text-[#414E5F]`}>
                            <span className="text-bold text-4xl">. </span>
                            {isArabicSelected ? jobDetails?.sentence1Ar : jobDetails?.sentence1En}
                        </p>
                        <p className={`font-semibold md:text-xl flex items-end gap-3 ${isArabicSelected ? "flex-row-reverse" : "flex-row"} mb-2 text-[#414E5F]`}>
                            <span className="text-bold text-4xl">. </span>
                            {isArabicSelected ? jobDetails?.sentence2Ar : jobDetails?.sentence2En}
                        </p>
                        <p className={`font-semibold md:text-xl flex items-end gap-3 ${isArabicSelected ? "flex-row-reverse" : "flex-row"} mb-2 text-[#414E5F]`}>
                            <span className="text-bold text-4xl">. </span>
                            {isArabicSelected ? jobDetails?.sentence3Ar : jobDetails?.sentence3En}
                        </p>
                    </div>
                    <div className={`mt-10 md:mt-0 flex ${isArabicSelected ? "md:justify-end" : "md:justify-start"} justify-center`}>
                        <button className="flex gap-3 justify-center items-center px-5 py-2 rounded-md font-bold text-white bg-[#199AFF]">
                                <FaSearch/>
                                <span>{isArabicSelected ? "العثور على " + jobDetails?.nameAr : "trouver un " + jobDetails?.nameEn }</span>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 h-[450px] hidden md:flex overflow-hidden rounded-3xl border-2 border-green-600">
                    <img className="w-full h-full object-cover" src={jobDetails?.imgPath} alt={jobDetails?.nameEn} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobsDetails

type CategoryBtnTypes = {
    label : string
}
const CategoryBtn = ({label}:CategoryBtnTypes) => {

    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    const goTo = () =>{
        window.scrollTo(0,0)
        dispatch(setSelectedJobName({selectedTask : label}))
        navigate("/search/step_one")
    }

    return (
         <button onClick={goTo} className="px-3 py-2 bg-[#d4fff7cc] w-full rounded-2xl font-semibold text-gray-600 text-lg  border-2 border-green-700">
            {label}
        </button>
    )
}