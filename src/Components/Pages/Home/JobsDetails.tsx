import DetailsJob from "../../../assets/jsonUsed/usedData.json"
import Button from "../../Common/Button/Button"

type JobDetailsTypes = {
    idJob : string
}

const JobsDetails = ({idJob}:JobDetailsTypes) => {

    const jobDetails = DetailsJob.jobs.find((job)=>job.id == idJob)
    const jobCategories : string[]|undefined = jobDetails?.tasks.split("|")

  return (
    <div className="bg-[#EBFFF9] pb-10">
        <div className=" w-[100%] md:w-[80%] mx-auto p-10">
            <div className="flex flex-wrap gap-4">
                {
                    jobCategories?.map((category , _)=>(
                        <div key={category}>
                            <CategoryBtn label={category}/>
                        </div>
                    ))
                }
            </div>

            <div className="flex flex-col md:flex-row gap-2 mt-20">
                <div className="w-full">
                    <h1 className="font-bold text-4xl text-[#199AFF]">{jobDetails?.name}</h1>
                    <div className="md:my-16 my-5">
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
                    <div className="md:block flex justify-center">
                        <Button label={`Find ${jobDetails?.name}`} bg="#199AFF" color="white"/>
                    </div>
                </div>
                <div className="w-1/2 h-[500px] hidden md:flex overflow-hidden rounded-3xl border-2 border-green-600">
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
    return (
        <button className="px-3 py-2 bg-[#DFF5F1] rounded-2xl font-semibold md:font-bold text-[#414E5F] text-lg md:text-xl border-2 border-green-700">
            {label}
        </button>
    )
}