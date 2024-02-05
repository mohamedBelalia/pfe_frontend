import { useSelector } from "react-redux"
import StepsPath from "../stepsPath/StepsPath"
import { RootState } from "../../../Store/store"
import SideCriterias from "./sideFilter/SideCriterias"
import SortedBy from "./SortedBy"
import ListWorkers from "./ListWorkers"
import "./filterStyles.css"
import { useState } from "react"
import WorkerProfilePopUp from "./workerPopUp/WorkerProfilePopUp"

const Filter = () => {

    const selectTaskCity:string = useSelector((state:RootState) => state.searchStepOne.stepOneInfo.cityTask)
    const selectTaskName:string = useSelector((state:RootState) => state.selectedTask.selectedTask)

    const [clickedWorkerId , setClickedWorkerId] = useState<string>("")

  return (
    <div className="relative border">
        <StepsPath/>

        <div className="ourContainer my-16">
            <div>
                <h1 className="text-center text-xl font-semibold text-[#414E5F]">There is 
                    <span className="text-[#349292]"> 207 {selectTaskName} Worker </span> 
                    in {selectTaskCity}</h1>
            </div>

            <div className="flex flex-col gap-8 mt-5">
                <div>
                    <SortedBy/>
                </div>
                <div className="flex gap-16">
                    <div className="w-1/3">
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
        <div className="w-full h-screen bg-[#0006] fixed top-0 z-50">
            <div className="flex justify-center items-center h-full">
                <WorkerProfilePopUp idWorker={clickedWorkerId} idWorkerSetter={setClickedWorkerId}/>
            </div>
        </div>
        }

    </div>
  )
}

export default Filter