import { useNavigate } from "react-router-dom"
import DetailsJob from "../../../assets/jsonUsed/usedData.json"
import Button from "../../Common/Button/Button"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../Store/store"
import { setSelectedJobName } from "../../Store/Slices/SelectedTask"
import { useSelector } from "react-redux"

type JobDetailsTypes = {
    idJob : string
}

const JobsDetails = ({idJob}:JobDetailsTypes) => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const jobDetails = DetailsJob.jobs.find((job)=>job.id == idJob)
    const jobCategories : string[]|undefined = jobDetails?.tasks.split("|")

  return (
    <div className="bg-[#f0fffb] md:pb-10 pb-5">
        <div className=" w-[100%] md:w-[80%] mx-auto p-10">
            <div className="flex flex-wrap gap-4">
                {
                    jobCategories?.map((category , _)=>(
                        <div key={category} className="md:w-auto w-full">
                            <CategoryBtn label={category}/>
                        </div>
                    ))
                }
            </div>

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
                    <div className="md:block mt-10 md:mt-0 flex justify-center">
                        <Button label={isArabicSelected ? `العثور على ${jobDetails?.nameAr}` : `Find ${jobDetails?.nameEn}`} bg="#199AFF" color="white"/>
                    </div>
                </div>
                <div className="w-1/2 h-[450px] hidden md:flex overflow-hidden rounded-3xl border-2 border-green-600">
                    <img className="w-full h-full object-cover" src={jobDetails?.imgPath} alt={jobDetails?.name} />
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