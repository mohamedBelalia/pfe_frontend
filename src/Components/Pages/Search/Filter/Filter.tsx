import { useSelector } from "react-redux"
import StepsPath from "../stepsPath/StepsPath"
import { RootState } from "../../../Store/store"
import SideCriterias from "./sideFilter/SideCriterias"
import SortedBy from "./SortedBy"
import ListWorkers from "./ListWorkers"
import "./filterStyles.css"
import { useEffect, useState } from "react"
import WorkerProfilePopUp from "./workerPopUp/WorkerProfilePopUp"
import LoadingPage from "../../../Common/Loading/LoadingPage"

const Filter = () => {

    const selectTaskCity:string = useSelector((state:RootState) => state.searchStepOne.stepOneInfo.cityTask)
    const selectTaskName:string = useSelector((state:RootState) => state.selectedTask.selectedTask)

    const [isAuthorized , setIsAuthorized] = useState<boolean>(false)


    useEffect(()=>{
        if(selectTaskCity.trim().length == 0 || selectTaskName.trim().length ==0){
            setIsAuthorized(false)
            window.history.back()
        }
        else{
            setIsAuthorized(true)
        }
        
    },[window.location.href])

    const [clickedWorkerId , setClickedWorkerId] = useState<string>("")

  return (
    <>
    {
        isAuthorized ?

    <div className="relative border">
        <StepsPath/>

        <div className="w-[90%] md:w-[80%] mx-auto my-16">
            <div>
                <h1 className="text-center text-xl font-semibold text-[#414E5F]">There is 
                    <span className="text-[#349292]"> 207 {selectTaskName} Worker </span> 
                    in {selectTaskCity}</h1>
            </div>

            <div className="flex flex-col gap-8 mt-5">
                <div>
                    <SortedBy/>
                </div>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <SideCriterias/>
                    </div>

                    <div className="w-full">
                        <ListWorkers getClickedWorkerId={setClickedWorkerId}/>
                    </div>
                </div>
            </div>

        </div>

        {
            clickedWorkerId != "" &&
        <div className="w-full h-screen bg-[#00000062] fixed top-0 z-50">
            
            <div className="md:w-[50%] w-[95%] mx-auto flex flex-col justify-center items-center h-full">
                
                <div className="flex justify-end w-full">
                    <div onClick={()=>setClickedWorkerId("")} 
                        className="hover:bg-red-100 cursor-pointer flex justify-center items-center w-[60px] h-[30px] bg-white rounded-t-lg text-xl font-bold">
                        <h1>X</h1>
                    </div>
                </div>

                <WorkerProfilePopUp idWorker={clickedWorkerId}/>
            </div>
        </div>
        }

    </div>  
    :
    <div className="w-full h-[100vh] flex justify-center items-center">
        <LoadingPage/>
    </div>
    }
    </>
  )
}

export default Filter