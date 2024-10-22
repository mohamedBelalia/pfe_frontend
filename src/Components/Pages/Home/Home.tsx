import { useState } from "react"
import LandingPage from "./LandingPage"
import JobsDetails from "./JobsDetails"
import HowWeWork from "./HowWeWork"
import DemandedJobs from "./DemandedJobs/DemandedJobs"
import WhereWeAre from "./whereWeAre/WhereWeAre"
import Faqs from "./Faqs/Faqs"
import Navbar from "../../Common/Navbar/Navbar"
import BestWorkers from "./DemandedJobs/BestWorkers"
import WhatIsItThis from "./whatIsItMoqef/WhatIsItThis"

const Home = () => {

  const [choosenJob , setChoosenJob] = useState<string>("1")
  

  return (
    <>
    <Navbar/>
    <div className="bg-white mb-20">
        <LandingPage getTheCoosenJob={setChoosenJob}/>
        {/* <JobsDetails idJob={choosenJob}/> */}
        <BestWorkers/>
        {/* <WhatIsItThis/> */}
        <HowWeWork/>
        <WhereWeAre/>
        <Faqs/>
    </div>
    </>
  )
}

export default Home