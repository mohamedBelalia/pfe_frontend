import { IoSearchSharp } from "react-icons/io5";
import { jobs } from "../../../assets/jsonUsed/JobsIconsNames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { setSelectedJobName } from "../../Store/Slices/SelectedTask";

type LandingPageTypes = {
  getTheCoosenJob : (idJob:string) => void
}

const LandingPage = ({getTheCoosenJob}:LandingPageTypes) => {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [jobClicked , setJobClicked] = useState<string>("1")
    const [isSmallPhone , setIsSmallPhone] = useState<boolean>(false) ;

    const [searchedTask , setSearchedTask] = useState<string>("");


    const searchBtn = () => {
      if(searchedTask.trim().length > 0){
        window.scrollTo(0,0)
        dispatch(setSelectedJobName({selectedTask:searchedTask}))
        navigate("/search/step_one")
      }
    }

    const clicked = (id : string) => {
        setJobClicked(id)
        getTheCoosenJob(id)
      }
    
      useEffect(()=>{
        setIsSmallPhone(()=>window.innerHeight <= 740 && window.innerWidth <= 640)
      },[])
      
      

  return (
    <div className={`w-full ${isSmallPhone ? "h-[90vh]" : "h-[65vh]"} md:h-[90vh] relative bg-[#414E5F]`}>

      <div className="w-full h-full absolute top-0 left-0 overflow-hidden zelijeBg"></div>

      <div className="h-[100%] relative ourContainer flex flex-col gap-10 md:gap-32 justify-center md:justify-end items-center">
          
          {/* The Part Of The Title and the input */}
            <div className="w-full flex  flex-col gap-10 justify-center items-center relative">
              
              <h1 className="font-bold text-4xl md:text-5xl text-white text-center">Find Your Expert Worker</h1>
              <div className="w-full flex justify-center">
                  <input 
                    onChange={(e)=>setSearchedTask(e.target.value)}
                    className="h-[55px] md:h-[75px] w-full md:w-[40%] rounded-l-full px-9 outline-none border-2 focus:border-[#199AFF]"
                    type="text" 
                    placeholder="Search By Task Name"/>
                  <button onClick={searchBtn} className="rounded-r-full bg-[#199AFF] flex justify-center items-center w-[90px]">
                    <IoSearchSharp className="text-3xl text-white"/>
                  </button>
              </div> 
              
            </div> 

          {/* The Part Of The Jobs to choose */}
          <div className=" md:w-full w-[95vw] md:static absolute bottom-0 mb-8 md:mb-12">
            <div className="flex justify-between gap-10 md:gap-1 px-4 overflow-scroll hideScrollBar">
                {
                  jobs.map((job , _)=>(
                    <div onClick={()=>clicked(job.id)} key={job.id}>
                      <JobBtn Icon={job.Icon} name={job.name} id={job.id} clickedId={jobClicked}/>
                    </div>
                  ))
                }
            </div>
          </div>


      </div> 
    </div>
  )
}

export default LandingPage


// The Part Of JobBtn Component

interface JobBtnTypes {
  Icon : React.ReactNode ,
  name : string ,
  id : string ,
  clickedId : string
}

const JobBtn = ({Icon , name , id , clickedId} : JobBtnTypes) =>{

    return (
      <div className="flex flex-col items-center gap-3 cursor-pointer p-2 w-[60px] relative z-[-2px]">
        <div className={`${id === clickedId ? "text-[#48d1d1]" : "text-white"} text-[35px] md:text-[40px]`}>
          {Icon}
        </div>
        <p className={`${id === clickedId ? "text-[#48d1d1]" : "text-white"} font-bold text-lg`}>{name}</p>

          {
            id === clickedId 
            && 
            <div className="bg-[#349292b9] w-[30px] h-[30px] top-8 rounded-full absolute"></div>
          }

      </div>
    )
}