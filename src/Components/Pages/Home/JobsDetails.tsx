import { useNavigate } from "react-router-dom"
import DetailsJob from "../../../assets/jsonUsed/usedData.json"
import Button from "../../Common/Button/Button"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../Store/store"
import { setSelectedTask } from "../../Store/Slices/SelectedTask"

type JobDetailsTypes = {
    idJob : string
}

const JobsDetails = ({idJob}:JobDetailsTypes) => {

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

            <div className="flex flex-col md:flex-row gap-2 mt-14 items-center">
                <div className="w-full">
                    <h1 className="font-bold text-4xl text-[#199AFF]">{jobDetails?.name}</h1>
                    <div className="md:my-10 my-5">
                        <p className="font-semibold md:text-xl mb-2 text-[#414E5F]">
                            <span className="text-bold text-4xl">. </span>{jobDetails?.sentence1}
                        </p>
                        <p className="font-semibold md:text-xl mb-2 text-[#414E5F]">
                            <span className="text-bold text-4xl">. </span>{jobDetails?.sentence2}
                        </p>
                        <p className="font-semibold md:text-xl mb-2 text-[#414E5F]">
                            <span className="text-bold text-4xl">. </span>{jobDetails?.sentence3}
                        </p>
                    </div>
                    <div className="md:block mt-10 md:mt-0 flex justify-center">
                        <Button label={`Find ${jobDetails?.name}`} bg="#199AFF" color="white"/>
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
        dispatch(setSelectedTask({selectedTask : label}))
        navigate("/search/step_one")
    }

    return (
         <button onClick={goTo} className="px-3 py-2 bg-[#d4fff7cc] w-full rounded-2xl font-semibold text-gray-600 text-lg  border-2 border-green-700">
            {label}
        </button>
    )
}