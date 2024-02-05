import { useSelector } from "react-redux"
import StepsPath from "../stepsPath/StepsPath"
import { RootState } from "../../../Store/store"
import SideCriterias from "./sideFilter/SideCriterias"
import SortedBy from "./SortedBy"
import ListWorkers from "./ListWorkers"
import "./filterStyles.css"

const Filter = () => {

    const selectTaskCity:string = useSelector((state:RootState) => state.searchStepOne.stepOneInfo.cityTask)
    const selectTaskName:string = useSelector((state:RootState) => state.selectedTask.selectedTask)

  return (
    <>
        <StepsPath/>

        <div className="ourContainer my-16">
            <div>
                <h1 className="text-center text-xl font-semibold text-[#414E5F]">There is 
                    <span className="text-[#349292]"> 207 {selectTaskName} Worker </span> 
                    in {selectTaskCity}</h1>
            </div>

            <div className="flex gap-10 mt-10 ">
                <div className="w-1/3">
                    <SideCriterias/>
                </div>

                <div className="w-full">
                    <SortedBy/>
                    <ListWorkers/>
                </div>
            </div>


        </div>

    </>
  )
}

export default Filter