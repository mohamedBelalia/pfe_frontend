import { IoSearchSharp } from "react-icons/io5"
import Navbar from "../../../Common/Navbar/Navbar"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../Store/store"
import { useNavigate } from "react-router-dom"
import { setSelectedTask } from "../../../Store/Slices/SelectedTask"
import {devJobs , devTasks} from "../../../../assets/jsonTemp/tempData.json"
import { IoIosArrowDown } from "react-icons/io"

const SearchPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [searchedTask , setSearchedTask] = useState<string>("")

    const searchBtn = () => {
        if(searchedTask.trim().length > 0){
          window.scrollTo(0,0)
          dispatch(setSelectedTask({selectedTask:searchedTask}))
          navigate("/search/step_one")
        }
      }

    // code && logic of the selected fields 

    // state to manage the behavior of the select box of Job Titles
    const [isJobTitleClicked , setIsJobTitleClicked] = useState<boolean>(false)
    // state to manage the behavior of the select box of Job Tasks
    const [isJobTaskClicked , setIsJobTaskClicked] = useState<boolean>(false)
    const [selectedJobTitle , setSelectedJobTitle] = useState<string>(devJobs[0].jobTitle)

    // this state is to store the tasks that related to the selected job
    const [selectedTasksArray , setSelectedTasksArray] = useState<{
        id_task: string
        taskTitle: string
        id_job: string 
    }[]>(devTasks)


    useEffect(()=>{
        setSelectedTasksArray(devTasks.filter((task)=> task.id_job == "1"))
    },[])


    const handleSelectedJobTitle = (selectedJobId : string) => {
        let selectedJobTitle = devJobs.filter((job)=> job.id_job === selectedJobId)[0]
        setSelectedJobTitle(selectedJobTitle.jobTitle)
        setIsJobTitleClicked(false)

        // the name is the description 
        let theTasksRelatedToJob = devTasks.filter((task)=> task.id_job == selectedJobId)
        setSelectedTasksArray(theTasksRelatedToJob)
  }


  const handleSelectedTask = (selectedTaskId : string)=>{
    let selectedTaskName = devTasks.filter((task)=> task.id_task == selectedTaskId)[0]
          
          window.scrollTo(0,0)
          dispatch(setSelectedTask({selectedTask:selectedTaskName.taskTitle}))
          navigate("/search/step_one")

    setIsJobTaskClicked(false)
  }

  return (
    <div>
        <div className="border">
            <Navbar/>
        </div>
        <div className="py-36 mb-20 w-[80%] mx-auto flex flex-col gap-8">
            <h1 className="text-center text-2xl font-semibold text-teal-700">Search For Your Specific Task</h1>

            <div className="w-full flex justify-center">
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

            <div className="w-[250px] relative z-10">
              <div onClick={()=>setIsJobTitleClicked(!isJobTitleClicked)} className="bg-gray-200 border border-gray-400 rounded-md h-[37px] flex justify-center gap-4 items-center cursor-pointer select-none">
                <p className="text-[#414E5F] font-semibold">{selectedJobTitle}</p>
                <IoIosArrowDown className="text-[#414E5F] text-2xl"/>
              </div>

              <div 
                className={`${isJobTitleClicked ? 'h-[200px] border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-y-scroll`}>
                  <div className="p-5 text-center flex flex-col gap-5">
                    {
                        devJobs.map((job,_)=>(
                            <div 
                            key={job.id_job}
                            onClick={()=>handleSelectedJobTitle(job.id_job)}
                            className={`${selectedJobTitle == job.jobTitle ? 'bg-blue-200' : 'bg-white'}  p-2 rounded-md cursor-pointer`}>
                                {job.jobTitle}
                            </div>
                        ))
                    }
                    
                  </div>
              </div>
            </div>

            <div className="w-[250px] relative">
              <div onClick={()=>setIsJobTaskClicked(!isJobTaskClicked)} className="bg-gray-200 border border-gray-400 rounded-md h-[37px] flex justify-center gap-4 items-center cursor-pointer select-none">
                <p className="text-[#414E5F] font-semibold">Select Your Task</p>
                <IoIosArrowDown className="text-[#414E5F] text-2xl"/>
              </div>

              <div 
                className={`${isJobTaskClicked ? 'h-[200px] border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-y-scroll`}>
                  <div className="p-5 text-center flex flex-col gap-5">
                    {
                        selectedTasksArray?.map((task,_)=>(
                            <div 
                            key={task.id_task}
                            onClick={()=>handleSelectedTask(task.id_task)}
                            className="bg-white p-2 rounded-md cursor-pointer">
                                {task.taskTitle}
                            </div>
                        ))
                    }
                    
                  </div>
              </div>
            </div>

            </div>
        
        </div>
    </div>
  )
}

export default SearchPage