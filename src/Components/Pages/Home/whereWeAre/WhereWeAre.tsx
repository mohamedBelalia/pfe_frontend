import { useSelector } from "react-redux"
import {citiesEn , citiesAr} from "../../../../assets/jsonUsed/cities.json" 
import CityName from "./CityName"
import { RootState } from "../../../Store/store"

const WhereWeAre = () => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

  return (
    <div className="mt-16 pt-3 px-1">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#349292]">{isArabicSelected ? "أين نحن" : "Où sommes-nous"}</h1>
        <div className="mx-auto text-center mt-5">
            <p className="text-lg text-[#414E5F]">
                {
                    isArabicSelected 
                    ? 
                    <>
                        نحن في جميع مدن المغرب  <br/>
                        يمكنك العثور على العمال في منطقتك بسهولة عبر منصتنا
                    </>
                    :<>
                        Nous sommes dans toutes les villes du Maroc  <br/>
                        Vous pouvez facilement trouver des travailleurs dans votre région via notre plateforme
                    </>
                }
                
            </p>
        </div>

        <div className="overflow-hidden relative">
            <div className="flex gap-4 mt-8 citiesScrollLeft">
                {   
                    isArabicSelected
                    ?
                    citiesAr.map((city , index)=>(
                        <CityName cityName={city} key={index}/>
                    ))
                    :

                    citiesEn.map((city , index)=>(
                        <CityName cityName={city} key={index}/>
                    ))
                }
            </div>
        </div>

        <div className="overflow-hidden">
            <div className="flex gap-4 mt-4 citiesScrollRight">
                {
                   isArabicSelected
                   ?
                   citiesAr.map((city , index)=>(
                       <CityName cityName={city} key={index}/>
                   ))
                   :

                   citiesEn.map((city , index)=>(
                       <CityName cityName={city} key={index}/>
                   ))
                }
            </div>
        </div>

    </div>
  )
}

export default WhereWeAre