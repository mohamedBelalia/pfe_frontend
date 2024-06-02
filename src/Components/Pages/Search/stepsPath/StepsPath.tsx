import { RxFramerLogo } from "react-icons/rx"
import { FaCheck } from "react-icons/fa6";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { addTheReachedStepName } from "../../../Store/Slices/StepsFilterFollowSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const StepsPath = () => {

    const dispatch = useDispatch<AppDispatch>()
    const reachedSteps : string[] = useSelector((state:RootState) => state.stepsFilterFollowSlice.reachedSteps)    

    useEffect(()=>{
        let urlParts = window.location.href.split("/")
        let reachedStep = urlParts[urlParts.length -1 ]

        dispatch(addTheReachedStepName({stepName : reachedStep}))
    },[window.location.href])
        

  return (
    <div className="md:w-[80%] mx-auto mt-7 mb-8">
        <div className="h-[70px] tab:w-[80%] w-[95%] mx-auto bg-gray-300 rounded-xl px-5 flex gap-8">
            <Link to={"/"} className="w-[10%] hidden h-full md:flex justify-center items-center gap-2">
                <RxFramerLogo className="text-4xl text-green-700"/>
                <p className="text-xl text-green-700">Tasker</p>
            </Link>

            <div className=" w-full flex justify-center items-center px-4">
                <div className="h-[80%] w-full flex justify-center items-center gap-2">

                    <div className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] bg-[#349292] text-white rounded-full flex justify-center items-center">
                        <FaCheck className="font-bold hidden md:block"/>
                    </div>

                    <div className="w-[40%] rounded-full overflow-hidden relative">
                        <div className="w-full h-[4px] tab:h-[6px] bg-gray-400"></div>
                        <div className={`${reachedSteps.includes("step_one") ? 'w-[100%]' : 'w-0'} transition-all ease-in-out duration-1000 h-[4px] tab:h-[6px] bg-[#349292] absolute top-0 left-0`}></div>
                    </div>

                    <div className={`${reachedSteps.includes("filter") ? 'bg-[#349292] text-white' : 'bg-gray-300 text-[#349292] border-2 border-[#349292]'} w-[15px] h-[15px] md:w-[30px] md:h-[30px] rounded-full flex justify-center items-center`}>
                        {
                        reachedSteps.includes("filter") ?
                        <FaCheck className="font-bold hidden md:block"/>
                        :
                        <p className="font-bold hidden md:block">2</p>
                        }
                    </div>

                    <div className="w-[40%] rounded-full overflow-hidden relative">
                        <div className="w-full h-[4px] tab:h-[6px] bg-gray-400"></div>
                        <div className={`${reachedSteps.includes("filter") ? 'w-[100%]' : 'w-0'} transition-all ease-in-out duration-1000 h-[4px] tab:h-[6px] bg-[#349292] absolute top-0 left-0`}></div>
                    </div>

                    <div className={`${reachedSteps.includes("filter") ? 'text-[#349292] border-[#349292]' : 'text-gray-400 border-gray-400'} bg-gray-300 border-2 -ml-1 w-[15px] h-[15px] md:w-[30px] md:h-[30px]  rounded-full flex justify-center items-center`}>
                        <p className="font-bold hidden md:block">3</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default StepsPath