import RatingRangesOf from "./RatingRangesOf"

type EvaluationProps = {
  workerId : string
}
// 
const Evaluation = ({workerId}:EvaluationProps) => {
  return (
    <div className="px-7 mt-8 flex flex-col gap-14"> 
        <div>
          <p className="font-bold text-lg text-blue600 mb-1">Le Respect de Delais</p>
          <RatingRangesOf workerId={workerId} ratingOf="respect_delais"/>
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