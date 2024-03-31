import StepsPath from "../stepsPath/StepsPath"
import citiesGets from "../../../../assets/jsonUsed/cities.json"
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import ErrorAlert from "../../../Common/Alerts/ErrorAlert";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/store";
import { useDispatch } from "react-redux";
import { setTheSearchStepOne } from "../../../Store/Slices/StepOneSlice";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../../Common/Loading/LoadingPage";
import { FaCity } from "react-icons/fa";


const ProcessStepOne = () => {

    const selectedTask :string = useSelector((state:RootState)=> state.selectedTask.selectedTask)

     // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)
  

    // pour assuree que l'user est selectionee le nom de task
    const [isAuthorized , setIsAuthorized] = useState<boolean>(false)

    useEffect(()=>{
        if(selectedTask.length ==0){
            setIsAuthorized(false)
            // if the user don't select a task and want to enter this script 
            // he will redirect to the page he came from using window.history.back()
            window.history.back()
        }
        else{
            setIsAuthorized(true)
        }
        
    },[window.location.href])

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()


    // This is The State of the city name
    const [cityName , setCityName] = useState<string>("") ;


    // This state is to confirm if a "city name" is correct or not
    const [isCityCorrect , setIsCityCorrect] = useState<boolean | undefined>()

    /* when the user start writing in the "city_name" field , this state(searchedCities) 
    is store the matched cities to display them in the searched cities box */
    const [searchedCities , setSearchedCities] = useState<string[]>([])

    // to get the city name value onchange 
    const getCityName = (event : React.ChangeEvent<HTMLInputElement>)=>{
        setCityName(event.target.value)
        // passing the city name value that written in the "citySearchedName()"
        citySearchedName(event.target.value)
    }

    /*
        this function accept "cityName" value and loop throw the "citiesGets.cities" that 
        includs all morrocan cities , and 
        1#if the passed value length is bigger then 0 (because all cities in the json file includes empty string)
        2#if there is a city in the "citiesGets.cities" includes the passed value then this city stored in the "citiesArray"
    */
    const citySearchedName = (cityName : string) => {
        let citiesArray : string[] | undefined = citiesGets.citiesEn.filter((city) => 
            cityName.length > 0 &&
            city.toLowerCase().includes(cityName.toLowerCase())
        )
        setSearchedCities(citiesArray)
    }

    /*
        this function checks if the enterd value "city_name" is in the cities array that imported from
        the json file , when clicking the "Continue" btn below the field of "Your Task Address" 
    */
    const handleCityName = () => {
        if(citiesGets.citiesEn.includes(cityName)){

            setIsCityCorrect(true)

            dispatch(setTheSearchStepOne({stepOneInfo : {
                cityTask : cityName ,
                }}))

            window.scroll(0,0);

            navigate("/search/filter") ; 

        }
        else{
            setIsCityCorrect(false)
        }
    }


    /* to clear the filtred array when clicking on a "city name"
        it's just passed in the "SearchedCityDiv" component
    */
    const clearCitiesBox = () => {
        setSearchedCities([]) ;
    }
    
    
  return (
    <>
    {
        isAuthorized ? 
    
    <>
        {/* The Process in the top of the page */}
        <StepsPath/>

        <div className="w-[90%] md:w-[80%] mx-auto mb-6 mt-12">
            <h1 
            className={`flex flex-col justify-center text-center items-center ${isArabicSelected ? "md:flex-row-reverse" : "md:flex-row"} gap-2  text-2xl font-semibold text-[#2D62FE]`}>
                {
                    isArabicSelected 
                    ? " أكمل العملية للعثور على أفضل "
                    : "Complétez le processus pour trouver le meilleur "
                }
                 <span className="text-teal-700 bg-amber-200 rounded-md px-3">{selectedTask} </span>
            </h1>

            <div className="md:w-[80%] mx-auto mt-6">
                {/* check the uncorrect city name "!== undefined" because the initaile state of "isCityCorrect" is undefined
                    and the alert shouldn't display */}
                {isCityCorrect !== undefined && !isCityCorrect && 
                    <ErrorAlert 
                        message={
                            isArabicSelected
                            ? "أدخل اسم مدينة صحيحًا"
                            : "Entrez un nom de ville correct"
                        } 
                        width="md:w-[80%]" height="h-[30px]"/>
                }
            </div>

            <div className="md:w-[60%] mx-auto md:mt-12 mt-5">
                <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col md:gap-10 gap-5 mb-20">
                    <div className="p-5 border border-black bg-[#eaebeeaa] rounded-xl">
                        <h1 className={`font-semibold flex items-center gap-1 text-lg text-[#414E5F] ${isArabicSelected && "justify-end"}`}>
                            <FaCity className={`text-3xl mr-2 ${isArabicSelected && "hidden"}`}/>
                            {
                                isArabicSelected && <span className="text-red-600">*</span>
                            }
                            {isArabicSelected ? "مدينة مهمتك" : "Votre ville de tâche"}
                            {
                                !isArabicSelected && <span className="text-red-600">*</span>
                            }
                            <FaCity className={`text-3xl mr-2 ${!isArabicSelected && "hidden"}`}/>
                            
                        </h1>

                    {!isCityCorrect 
                    
                    ?
                    <>
                        <div className="relative">
                            <div>
                                <input 
                                    onChange={getCityName}
                                    value={cityName}
                                    type="text" 
                                    placeholder={isArabicSelected ? "مدينتك" : "Votre ville"}
                                    className={`${isArabicSelected && "rtl-input"} w-full p-3 border outline-none border-gray-500 h-[60px] rounded-xl mt-3 focus:border-2 focus:border-[#349292]`}
                                />
                            </div>
                        
                        {
                            searchedCities.length > 0 &&                         
                            <div className="w-full overflow-hidden  rounded-xl bg-white border border-gray-500 mt-1 absolute">
                                {
                                    searchedCities.map((city , index)=> index < 5 &&(
                                        <SearchedCityDiv city={city} key={index} 
                                            setClickedCityName={setCityName}
                                            clearCitiesBox={clearCitiesBox}
                                            />
                                    ))
                                }
                            </div>
                        }

                        </div>

                        <div className="mt-4 flex justify-center items-center">
                            <button onClick={handleCityName} className="px-5 py-1 rounded-md text-white bg-[#51bebe]">Continue</button>
                        </div>
                    </>
                    :
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center text-lg font-bold mt-5 text-gray-500">
                                <FaLocationDot/>  {cityName}
                            </div>
                            <div onClick={()=>setIsCityCorrect(false)}>
                                <FaEdit className="text-3xl text-[#349292] cursor-pointer"/>
                            </div>
                        </div>
                    }  

                    </div>
                    
                </form>
            </div>

        </div>
        
    </>
        :
        <div className="w-full h-[100vh] flex justify-center items-center">
        <LoadingPage/>
        </div>
    }
    </>
  )
}

export default ProcessStepOne



// Searched Cities
interface searchedCityDivTypes {
    city : string ,
    setClickedCityName : (city : string) => void ,
    clearCitiesBox : () => void
}

const SearchedCityDiv = ({city , setClickedCityName , clearCitiesBox}:searchedCityDivTypes) => {

    const cityClicked = (city : string) => {
        setClickedCityName(city)
        clearCitiesBox()
    }

    return (
        <div 
            onClick={()=>cityClicked(city)}
            className="w-full cursor-pointer h-[60px] px-6 border-b border-gray-500 
            flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
        >
           <FaLocationDot className="text-gray-700"/> {city}
        </div>
    )
}