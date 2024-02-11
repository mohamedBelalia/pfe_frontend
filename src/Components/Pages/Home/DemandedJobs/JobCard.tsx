import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AppDispatch } from "../../../Store/store"
import { setSelectedTask } from "../../../Store/Slices/SelectedTask"

type JobCardTypes = {
    img : string ,
    jobName : string ,
    smallDescription : string 
}

const JobCard = ({img , jobName , smallDescription}:JobCardTypes) => {

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate() ;

  const jobClicked = () => {
    window.scroll(0,0)
    dispatch(setSelectedTask({selectedTask : jobName}))
    navigate("/search/step_one")
  }

  return (
    <div onClick={jobClicked} className="cursor-pointer">
        <div className="flex-none md:flex-1 md:h-[220px] w-[300px] bg-[#717e9153] rounded-xl overflow-hidden">
            <img src={img} alt={jobName} className="w-full md:h-[150px] h-[180px] object-cover" />
            <div className="md:h-[25%] h-[80px] flex justify-center items-center flex-col text-[#2b3441]">
                <h1>{jobName}</h1>
                <p className="text-[13px]">{smallDescription}</p>
            </div>
        </div>
    </div>
  )
}

export default JobCard