import { useSelector } from "react-redux"
import StepsPath from "../stepsPath/StepsPath"
import { RootState } from "../../../Store/store"
import SideCriterias from "./sideFilter/SideCriterias"
import ListWorkers from "./ListWorkers"
import "./filterStyles.css"
import { useEffect, useState } from "react"
import WorkerProfilePopUp from "./workerPopUp/WorkerProfilePopUp"
import LoadingPage from "../../../Common/Loading/LoadingPage"
import { ICity, IFilterNeededData } from "../../../../TS"
import Api from "../../../../api/Api"

const Filter = () => {

    const selectTaskCity:string = useSelector((state:RootState) => state.searchStepOne.stepOneInfo.cityTask)
    const selectTaskName:string = useSelector((state:RootState) => state.selectedTask.selectedTask)

    const [isAuthorized , setIsAuthorized] = useState<boolean>(false)

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    // to store the city name
    const [cityName , setCityName] = useState<ICity>()

    // to get the badge IDs
    const [badgePassedValues , setBadgePassedValues] = useState<string[]>([""])

    useEffect(()=>{
        if(selectTaskCity.trim().length == 0 || selectTaskName.trim().length ==0){
            setIsAuthorized(false)
            window.history.back()
        }
        else{
            setIsAuthorized(true)
        }
        
    },[window.location.href])

    // get the city name by the passed ID
    useEffect(()=>{
        const fetchCityName = async()=>{
            const cityResponse = await Api.get(`villes?id=${selectTaskCity}`)
            setCityName(cityResponse.data)
        }
        fetchCityName()
    },[])

    const [clickedWorkerId , setClickedWorkerId] = useState<string>("")

    const filterData : IFilterNeededData = {
            profession : selectTaskName,
            ville : selectTaskCity,   
            badge : badgePassedValues
        }

  return (
    <>
    {
        isAuthorized ?

    <div className="relative border">
        <StepsPath/>

        <div className="w-[90%] md:w-[80%] mx-auto my-16">
            <div className="mb-10">
                {
                    isArabicSelected
                    ?
                    <h1 className="text-center text-xl font-semibold text-[#3a5973]">
                        <span className="text-teal-700 bg-amber-200 rounded-md px-2">{selectTaskName}</span> في <span className="text-teal-700 bg-amber-200 rounded-md px-2">{cityName?.ville_AR}</span>
                         {" "} هناك 207 عامل
                    </h1>
                    :
                    <h1 className="text-center text-xl font-semibold text-[#3a5973]">
                        Il y a 207 travailleurs {" "}
                        <span className="text-teal-700 bg-amber-200 rounded-md px-2">{selectTaskName}</span> à <span className="text-teal-700 bg-amber-200 rounded-md px-2">{cityName?.ville_FR}</span>
                    </h1>
                }
                
            </div>

            <div className="flex flex-col gap-8 mt-5">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <SideCriterias getBadgeNbr={setBadgePassedValues}/>
                    </div>

                    <div className="w-full">
                        <ListWorkers 
                            filterNeededData={filterData} 
                            getClickedWorkerId={setClickedWorkerId} 
                            searchedCityName={selectTaskCity}
                            searchedProfession={selectTaskName}/>
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