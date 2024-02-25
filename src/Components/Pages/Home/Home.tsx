import { useState } from "react"
import LandingPage from "./LandingPage"
import JobsDetails from "./JobsDetails"
import HowWeWork from "./HowWeWork"
import DemandedJobs from "./DemandedJobs/DemandedJobs"
import WhereWeAre from "./whereWeAre/WhereWeAre"
import Faqs from "./Faqs/Faqs"
import Navbar from "../../Common/Navbar/Navbar"
import WorkerProfilePopUp from "../Search/Filter/workerPopUp/WorkerProfilePopUp"

const Home = () => {

  const [choosenJob , setChoosenJob] = useState<string>("1")
  
   // to handle the clicked worker popup profile
   const [workerClickedId , setWorkerClickedId] = useState<string>("")

  return (
    <>
    <Navbar/>
    <div className="bg-white mb-20">
        <LandingPage getTheCoosenJob={setChoosenJob}/>
        <JobsDetails idJob={choosenJob}/>
        <HowWeWork/>
        <DemandedJobs getWorkerId={setWorkerClickedId}/>
        <WhereWeAre/>
        <Faqs/>

        {/* worker profile popup */}
        {
            workerClickedId != "" &&
            <div className="w-full h-screen bg-[#00000062] fixed top-0 z-50">
                
                <div className="md:w-[50%] w-[95%] mx-auto flex flex-col justify-center items-center h-full">
                    
                    <div className="flex justify-end w-full">
                      <div onClick={()=>setWorkerClickedId("")} 
                          className="hover:bg-red-100 cursor-pointer flex justify-center items-center w-[60px] h-[30px] bg-white rounded-t-lg text-xl font-bold">
                          <h1>X</h1>
                      </div>
                    </div>

                    <WorkerProfilePopUp idWorker={workerClickedId}/>
                </div>
            </div>
            }

    </div>
    </>
  )
}

export default Home