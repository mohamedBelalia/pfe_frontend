import { mustDemandedJobs } from "../../../../assets/jsonUsed/mustDemandedJobs.json"
import JobCard from "./JobCard"

const DemandedJobs = () => {
  return (
    <div className="px-1 md:px-0 md:w-[80%] w-full md:mx-auto mt-16 pt-12">
        <h1 className="text-center text-4xl font-bold text-[#349292]">The Most Demanded Crafts</h1>

        <div className="flex md:hidden gap-5 mt-14 overflow-scroll hideScrollBar">
            {
                mustDemandedJobs.map((job, _) => (
                    <JobCard img={job.img} jobName={job.jobName} smallDescription={job.smallDescription} key={job.id}/>
                ))
            }
        </div>

        <div className="hidden md:flex justify-around md:flex-wrap gap-5 mt-14">
            {
                mustDemandedJobs.map((job, _) => (
                    <JobCard img={job.img} jobName={job.jobName} smallDescription={job.smallDescription} key={job.id}/>
                ))
            }
        </div>

    </div>
  )
}

export default DemandedJobs