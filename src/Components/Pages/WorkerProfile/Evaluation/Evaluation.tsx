import { useState } from "react"
import RatingRangesOf from "./RatingRangesOf"
import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store"

type EvaluationProps = {
  workerId : string
}
// 
const Evaluation = ({workerId}:EvaluationProps) => {

      // The Slice For Change The Language
      const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

  const [isNoComment , setIsNotComment] = useState<boolean>(false)

  if(isNoComment){
    return <div className="w-full py-5 flex flex-col justify-center items-center opacity-75 gap-4 bg-slate-200 m-3 text-xl font-semibold rounded-md">
    <img src="/imgUsed/rating.png" alt="project" className="w-[150px]" />
    {
        isArabicSelected
        ? "لم يقيم هذا الشخص اي احد"
        : "personne n'évalue cette personne"
    }
</div>
  }

  return (
    <div className="md:px-7 pl-4 mt-8 flex flex-col gap-14"> 
        <div>
          <p className="font-bold text-lg text-blue600 mb-1">Le Respect de Delais</p>
          <RatingRangesOf getIsNoComment={setIsNotComment} workerId={workerId} ratingOf="respect_delais"/>
        </div>

        <div>
          <p className="font-bold text-lg text-blue600 mb-1">Quality Travail</p>
          <RatingRangesOf workerId={workerId} ratingOf="quality_travail"/>
        </div>

        <div>
          <p className="font-bold text-lg text-blue600 mb-1">Prix</p>
          <RatingRangesOf workerId={workerId} ratingOf="prix_qualite"/>
        </div>
    </div>
  )
}

export default Evaluation