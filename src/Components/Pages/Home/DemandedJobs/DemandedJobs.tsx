import { topRatedWorkers } from "../../../../assets/jsonUsed/topRatedWorkers.json"
import JobCard from "./JobCard"

type topWorkersType = {
    getWorkerId : (id :string) => void
}

// temporary worker skills (production akha ayoub hhh)
const workerSills = ["home page" , "about" , "contact us"]

const DemandedJobs = ({getWorkerId}:topWorkersType) => {
  return (
    <div className="px-1 md:px-0 md:w-[80%] w-full md:mx-auto mt-16 pt-12">
        <h1 className="text-center text-4xl font-bold text-[#349292]">The Top 6 Rated Workers In Your Area</h1>

            {/* Phone screens seaction */}
        <div className="flex md:hidden gap-5 mt-14 overflow-scroll hideScrollBar">
            {
                topRatedWorkers.map((job, _) => (
                    <JobCard 
                        // to handle the clicked profile
                        getClickedWorkerId={getWorkerId}

                    // this object workerInfo includs all the needed info for the worker
                        workerInfo={
                            {
                                workerBadge: job.workerBadge , 
                                workerFullName: job.workerFullName ,
                                workerImgPath : job.workerImgPath ,
                                workerPhoneNumber : job.workerPhoneNumber ,
                                workerSkills : workerSills
                            }} />
                ))
            }
        </div>

            {/* PC screens seaction */}
        <div className="hidden md:flex justify-around md:flex-wrap gap-5 mt-14">
            {
                topRatedWorkers.map((job, _) => (
                    <JobCard 
                        getClickedWorkerId={getWorkerId}
                        workerInfo={
                            {
                                workerBadge: job.workerBadge , 
                                workerFullName: job.workerFullName ,
                                workerImgPath : job.workerImgPath ,
                                workerPhoneNumber : job.workerPhoneNumber ,
                                workerSkills : workerSills
                            }} />
                ))
            }
        </div>

    </div>
  )
}

export default DemandedJobs