import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../Store/store"
import { setRatedWorkerId } from "../../Store/Slices/RatedWorkerId"
import CriteriaOne from "./CriteriaOne1"
import CriteriaTwo from "./CriteriaTwo"
import CriteriaThree from "./CriteriaThree"
import { useSelector } from "react-redux"
import { IRatingCriteriasType, setIsLeveleProcessClicked } from "../../Store/Slices/RateingProcess"
import { useState } from "react"
import ValideTheRate from "./ValideTheRate"
import Api from "../../../api/Api"


export type RateingProcessProps = {
    workerName : string
    workerId ?: string
}

const RatingProcess = ({workerName , workerId}:RateingProcessProps) => {

    const [criteriaNumber , setCriteriaNumber] = useState<number>(1)

     // The Slice For Change The Language
     const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    // to handle the insertion status
    const [insertionStatus , setInsertionStatus] = useState<string>("")

    // to handle the store states
    const dispatch = useDispatch<AppDispatch>()

    const isLevelRatingClicked : boolean = useSelector((state:RootState)=> state.ratingProcessSlice.levelClicked)

    const criteriasLevels : IRatingCriteriasType = useSelector((state:RootState)=> state.ratingProcessSlice.ratingCriterias)

    const suivant = () => {
        dispatch(setIsLeveleProcessClicked(false))
        setCriteriaNumber((prev) => prev+1)
    }

    const retour = () => {
        setCriteriaNumber((prev) => prev-1)
    }


    const insertComment = () => {
        if(criteriasLevels.delais != null && criteriasLevels.maitrise != null && criteriasLevels.prix != null){

            const passedData = {
                idOuvrier : workerId,
                respect_delais : criteriasLevels.delais,
                quality_travail : criteriasLevels.maitrise,
                prix_qualite : criteriasLevels.prix ,
                moyenneEtoiles : "2"
            }

            try{
                const response = Api.post("/commentaire" , passedData)
            
            }
            catch{

            }
            suivant()

            setTimeout(()=> {
                dispatch(setRatedWorkerId({idWorker : ""}))
              }, 3000);

        }
    }
    

  return (
    <div className="w-[95%] md:w-[60%] bg-white rounded-2xl min-h-[500px] ">
        <div className="h-[30px] flex justify-end items-center p-2">
            <button 
                onClick={()=>dispatch(setRatedWorkerId({idWorker : ""}))}
                className="select-none font-bold text-xl w-[30px] h-[30px] flex justify-center items-center mt-2 text-white bg-red-500 rounded-full">X</button>
        </div>
       
       <div className="md:px-36 px-6 pb-7 pt-2 flex flex-col gap-4">
            {/* The Green Process */}
           
           {
            criteriaNumber <= 3
            &&
            <div>
                <div className="h-[20px] w-full bg-[#CAE5E3] border border-blue-600 rounded-full overflow-hidden">
                    <div className={`h-full 
                                    ${criteriaNumber == 1 && "w-[33%]"}
                                    ${criteriaNumber == 2 && "w-[66%]"}
                                    ${criteriaNumber == 3 && "w-[100%]"}
                                 bg-[#52AFAC] rounded-r-lg transition-all duration-500 ease-in-out`}>
                        <p className="flex justify-center items-center text-sm font-bold text-white">
                                    {criteriaNumber == 1 && "1/3"}
                                    {criteriaNumber == 2 && "2/3"}
                                    {criteriaNumber == 3 && "3/3"}
                        </p>
                    </div>
                </div>
            </div>
            }

            <div>
                {
                    criteriaNumber == 1 && <CriteriaOne workerName={workerName}/>
                }
                {
                    criteriaNumber == 2 && <CriteriaTwo workerName={workerName}/>
                }
                {
                    criteriaNumber == 3 && <CriteriaThree/>
                }
                {
                    criteriaNumber == 4 && 
                   <ValideTheRate/>
                }
            </div>

            {
            !(criteriaNumber >=4)
            &&
            <div className="mt-5 flex justify-between items-center">
                {
                    !(criteriaNumber >=4 || criteriaNumber == 1)
                    ?
                    <button
                        onClick={retour} 
                        className="px-10 h-[35px] rounded-lg font-bold bg-gray-700 text-white">
                            {
                                isArabicSelected 
                                ? "الرجوع"
                                : "Retour"
                            }        
                    </button>
                    :
                    <button></button>
                }


                {
                
                criteriaNumber < 3 
                ?

                    isLevelRatingClicked
                    ?
                    <button 
                        onClick={suivant}
                        className="px-10 h-[35px] rounded-lg font-bold bg-[#378380] text-white">
                        {
                            isArabicSelected 
                            ? "التالي"
                            : "Suivant"
                        }
                    </button>
                    :
                    <button 
                        className="px-10 h-[35px] rounded-lg font-bold  bg-gray-500 text-white cursor-not-allowed">
                        {
                            isArabicSelected 
                            ? "التالي"
                            : "Suivant"
                        }
                    </button>
                :

                isLevelRatingClicked
                ?
                <button 
                    onClick={insertComment}
                    className="px-10 h-[35px] rounded-lg font-bold bg-[#378380] text-white">
                    {
                        isArabicSelected 
                        ? "تأكيد"
                        : "Confirmer"
                    }
                </button>
                :
                <button 
                    className="px-10 h-[35px] rounded-lg font-bold  bg-gray-500 text-white cursor-not-allowed">
                    {
                        isArabicSelected  
                        ? "تأكيد"
                        : "Confirmer"
                    }
                </button>

                // <button 
                //     onClick={insertComment}
                //     className="px-10 w-[400px] h-[35px] rounded-lg font-bold bg-[#378380] text-white">Valider</button>

                }
    
            </div>
            }
       </div>

    </div>
  )
}
// 52AFAC
// CAE5E3
export default RatingProcess