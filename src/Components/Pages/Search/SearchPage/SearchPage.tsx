import { IoSearchSharp } from "react-icons/io5"
import Navbar from "../../../Common/Navbar/Navbar"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../Store/store"
import { useNavigate } from "react-router-dom"
import { setSelectedJobName } from "../../../Store/Slices/SelectedTask"
import {devJobs} from "../../../../assets/jsonTemp/tempData.json"
import { IoIosArrowDown } from "react-icons/io"
import NearWorkers from "./NearWorkers"
import WorkerProfilePopUp from "../Filter/workerPopUp/WorkerProfilePopUp"

const SearchPage = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [searchedTask , setSearchedTask] = useState<string>("")

    // to handle the clicked worker popup profile
    const [workerClickedId , setWorkerClickedId] = useState<string>("")

    const searchBtn = () => {
        if(searchedTask.trim().length > 0){
          window.scrollTo(0,0)
          dispatch(setSelectedJobName({selectedTask:searchedTask}))
          navigate("/search/step_one")
        }
      }

    // code && logic of the selected fields 

    // state to manage the behavior of the select box of Job Titles
    const [isJobTitleClicked , setIsJobTitleClicked] = useState<boolean>(false)

    // initailize the jobTitle in the select bar
    const jobTitle = devJobs[0].jobTitle

    const handleSelectedJobTitle = (selectedJobId : string) => {
        window.scrollTo(0,0)
        dispatch(setSelectedJobName({selectedTask:selectedJobId}))
        navigate("/search/step_one")    
  }


  return (
    <div>
        <div className="border">
            <Navbar/>
        </div>
     
        <div className="pt-36 mb-20 mx-auto flex flex-col gap-8">
            <h1 className="text-center text-2xl font-semibold text-teal-700">Search For Your Specific Task</h1>

            <div className="md:w-full w-[80%] mx-auto md:mx-0 flex justify-center">
                <input 
                  onChange={(e)=>setSearchedTask(e.target.value)}
                  className="h-[55px] md:h-[70px] w-full md:w-[40%] rounded-l-full px-9 outline-none border-2 border-[#199AFF] focus:border-teal-700"
                  type="text" 
                  placeholder="Search By Task Name"/>
                <button onClick={searchBtn} className="rounded-r-full bg-teal-700 flex justify-center items-center w-[90px]">
                  <IoSearchSharp className="text-3xl text-white"/>
                </button>
            </div>

            <p className="text-center text-sm font-semibold text-gray-500">Or Select It</p>

            <div className="flex flex-col md:flex-row justify-between gap-5 md:w-[50%] mx-auto">

            <div className="w-[90vw] md:w-[30vw] mx-auto relative z-10">
              <div onClick={()=>setIsJobTitleClicked(!isJobTitleClicked)} className="bg-gray-200 border border-gray-400 rounded-md h-[45px] flex justify-center gap-4 items-center cursor-pointer select-none">
                <p className="text-[#414E5F] font-semibold">{jobTitle}</p>
                <IoIosArrowDown className="text-[#414E5F] text-2xl"/>
              </div>

              <div 
                className={`${isJobTitleClicked ? 'h-[200px] border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-14 transition-all ease-in-out duration-150 overflow-y-scroll`}>
                  <div className="p-5 text-center flex flex-col gap-5">
                    {
                        devJobs.map((job,_)=>(
                            <div 
                            key={job.id_job}
                            onClick={()=>handleSelectedJobTitle(job.jobTitle)}
                            className={`${jobTitle == job.jobTitle ? 'bg-blue-200' : 'bg-white'}  p-2 rounded-md cursor-pointer`}>
                                {job.jobTitle}
                            </div>
                        ))
                    }
                    
                  </div>
              </div>
            </div>

            </div>


            <div className="md:w-[80%] md:mx-auto mx-0">
              <NearWorkers getWorkerId={setWorkerClickedId}/>
            </div>

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
    </div>
  )
}

export default SearchPage