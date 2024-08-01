import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { useEffect, useState } from "react";
import { ICity } from "../../../TS";
import Api from "../../../api/Api";
import { SearchedCityDiv } from "../../Pages/Search/Process/ProcessStepOne";


type SearchCityPorps = {
    getCityId : (idCity : string) => void
    isValidateCity : boolean | null,
    initCityName ?: string
}

// Arabic regex
const arabicRegex = /[\u0600-\u06FF]/;

const SearchCity = ({getCityId , isValidateCity , initCityName}:SearchCityPorps) => {
    // The Slice For Change The Language
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    // This is The State of the city name
    const [cityName, setCityName] = useState<string>("");

    // This state used to store the city id
    const [cityID, setCityID] = useState<string>("")

    // This state is to confirm if a "city name" is correct or not
    const [isCityCorrect, setIsCityCorrect] = useState<boolean | undefined>()

    /* when the user start writing in the "city_name" field , this state(searchedCities) 
   is store the matched cities to display them in the searched cities box */
    const [searchedCities, setSearchedCities] = useState<ICity[]>()

    const [citiesFromDB, setCitiesFromDB] = useState<ICity[]>()

    // fetch the cities from databse
    useEffect(() => {
        const fetchCities = async () => {
            const response = await Api.get("/villes")

            setCitiesFromDB(response.data)
        }

        fetchCities()

        if(initCityName){
            setCityName(initCityName)
        }

    }, [])

    useEffect(() => {
        getCityId(cityID)
    }, [cityID]);


    // to get the city name value onchange 
    const getCityName = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const citySearchedName = (cityName: string) => {
        let citiesArray: ICity[] | undefined;

        // test if the entred city name in arabic or not
        if (arabicRegex.test(cityName)) {
            citiesArray = citiesFromDB?.filter((city) =>
                cityName.length > 0 &&
                city.ville_AR.includes(cityName)
            )
        }
        else {
            citiesArray = citiesFromDB?.filter((city) =>
                cityName.length > 0 &&
                city.ville_FR.toLowerCase().includes(cityName.toLowerCase())
            )
        }

        setSearchedCities(citiesArray)
    }

    /* to clear the filtred array when clicking on a "city name"
    it's just passed in the "SearchedCityDiv" component
    */
    const clearCitiesBox = () => {
        setSearchedCities([]);
    }

    return (
        <div className="relative">
            <div>
                <input
                    onChange={getCityName}
                    value={cityName}
                    type="text"
                    placeholder={isArabicSelected ? "مدينتك" : "Votre ville"}
                    className={`${isArabicSelected || arabicRegex.test(cityName) && "rtl-input"} w-full p-3 border-2 outline-none focus:border-blue-500 ${ isValidateCity == false ? "border-red-600" : "border-teal500 "} rounded-lg h-[50px]`}
                />                                                                     
            </div>

            {
                (searchedCities != undefined && searchedCities.length > 0) &&
                <div className="w-full overflow-hidden z-50 rounded-xl bg-white border border-gray-500 mt-1 absolute">
                    {
                        searchedCities.map((city, index) => index < 5 && (
                            <SearchedCityDiv
                                key={index}
                                city={city}
                                isArabic={arabicRegex.test(cityName)}
                                setClickedCityName={setCityName}
                                clearCitiesBox={clearCitiesBox}
                                setIdOfClickedCity={setCityID}
                            />
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default SearchCity