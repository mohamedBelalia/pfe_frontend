import { useState } from "react";
import RateButtons from "./RateButtons";
import { AppDispatch, RootState } from "../../Store/store";
import { useDispatch } from "react-redux";
import { IRatingCriteriasType, setDelaisCriteriasLevels, setIsLeveleProcessClicked } from "../../Store/Slices/RateingProcess";
import { useSelector } from "react-redux";
import { RateingProcessProps } from "./RatingProcess";


const rates = [
    {   
        idRate : "1",
        text : "Excellent" ,
        nbrStar : 5
    },
    {   
        idRate : "2",
        text : "Tres Bien" ,
        nbrStar : 3
    },
    {   
        idRate : "3",
        text : "Bien" ,
        nbrStar : 1
    }
]

const CriteriaOne = ({workerName}:RateingProcessProps) => {

    const [idClicked , setIdClicked] = useState<string>("")

    const dispatch = useDispatch<AppDispatch>()


    if(idClicked == "1" || idClicked == "2" || idClicked == "3"){
        dispatch(setIsLeveleProcessClicked(true))
    }
    else{
        dispatch(setIsLeveleProcessClicked(false))
    }

    if(idClicked == "1"){
        dispatch(setDelaisCriteriasLevels("Excellent"))
    }
    else if(idClicked == "2"){
        dispatch(setDelaisCriteriasLevels("Tres Bien"))
    }
    else if(idClicked == "3"){
        dispatch(setDelaisCriteriasLevels("Bien"))
    }

  return (
    <div>
        <h1 className="md:w-[80%] mx-auto text-teal-900 text-2xl font-bold text-center">
            Est-ce que <span className="text-teal-500">{workerName}</span> respecte les délais ? 
        </h1>

        <div className="mt-8 flex flex-col gap-7 md:px-28">
            {
                rates.map((rate , _) => (
                    <div key={rate.idRate}>
                        <RateButtons idRate={rate.idRate} text={rate.text} nbrStar={rate.nbrStar} getIdClicked={setIdClicked} idClicked={idClicked}/>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CriteriaOne
