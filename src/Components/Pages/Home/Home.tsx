import { useState } from "react"
import LandingPage from "./LandingPage"
import JobsDetails from "./JobsDetails"
import HowWeWork from "./HowWeWork"
import DemandedJobs from "./DemandedJobs/DemandedJobs"

const Home = () => {

  const [choosenJob , setChoosenJob] = useState<string>("1")
  

  return (
    <div className="bg-white mb-40">
        <LandingPage getTheCoosenJob={setChoosenJob}/>
        <JobsDetails idJob={choosenJob}/>
        <HowWeWork/>
        <DemandedJobs/>
    </div>
  )
}

export default Home