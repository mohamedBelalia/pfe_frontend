import { useState } from "react";
import RateButtons from "./RateButtons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { setIsLeveleProcessClicked, setPrixCriteriasLevels } from "../../Store/Slices/RateingProcess";


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

const CriteriaThree = () => {
    const [idClicked , setIdClicked] = useState<string>("")

    const dispatch = useDispatch<AppDispatch>()

    if(idClicked == "1" || idClicked == "2" || idClicked == "3"){
        dispatch(setIsLeveleProcessClicked(true))
    }
    else{
        dispatch(setIsLeveleProcessClicked(false))
    }

    if(idClicked == "1"){
        dispatch(setPrixCriteriasLevels("Excellent"))
    }
    else if(idClicked == "2"){
        dispatch(setPrixCriteriasLevels("Tres Bien"))
    }
    else if(idClicked == "3"){
        dispatch(setPrixCriteriasLevels("Bien"))
    }
    
  return (
    <div>
        <h1 className="w-[82%] mx-auto text-teal-900 text-2xl font-bold text-center">
        Est-ce que le prix correspond au travail effectué ?
        </h1>

        <div className="mt-8 flex flex-col gap-7 px-28">
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

export default CriteriaThree
