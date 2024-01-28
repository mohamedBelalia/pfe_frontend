import {cities} from "../../../../assets/jsonUsed/cities.json" 
import CityName from "./CityName"

const WhereWeAre = () => {
  return (
    <div className="mt-16 pt-3">
        <h1 className="text-center text-4xl font-bold text-[#349292]">Where We Are</h1>
        <div className="mx-auto text-center mt-5">
            <p className="text-lg text-[#414E5F]">
                We are in all the Moroccan Cities  <br/>
                You can find workers in our platform from you area easilly
            </p>
        </div>

        <div className="overflow-hidden relative">
            <div className="flex gap-4 mt-8 citiesScrollLeft">
                {
                    cities.map((city , index)=>(
                        <CityName cityName={city} key={index}/>
                    ))
                }
            </div>
        </div>

        <div className="overflow-hidden">
            <div className="flex gap-4 mt-4 citiesScrollRight">
                {
                    cities.map((city , index)=>(
                        <CityName cityName={city} key={index}/>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default WhereWeAre