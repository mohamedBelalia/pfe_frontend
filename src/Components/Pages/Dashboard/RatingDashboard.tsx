import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import RatingRangesOf from "../WorkerProfile/Evaluation/RatingRangesOf"
import { useState } from "react"

type ratingDashboardProps = {
    workerID : string
}

const RatingDashboard = ({workerID}:ratingDashboardProps) => {

    const [rateNbr, setRateNbr] = useState<number>(1)

    const previous = () => {
        if (rateNbr == 1) {
            setRateNbr(3)
        } else {
            const ctr = rateNbr - 1
            setRateNbr(ctr)
        }
    }

    const next = () => {
        if (rateNbr == 3) {
            setRateNbr(1)
        }
        else {
            const ctr = rateNbr + 1
            setRateNbr(ctr)
        }
    }


    return (
        <div className="mt-5 p-2 ">
            {
                rateNbr == 1
                    ?
                    <>
                        <h1 className="font-bold text-lg text-blue600 mb-3">Le Respect de Delais</h1>
                        <RatingRangesOf ratingOf="respect_delais" workerId={workerID} />
                    </>
                    :
                    rateNbr == 2
                        ?
                        <>
                            <h1 className="font-bold text-lg text-blue600 mb-3">Quality Travail</h1>
                            <RatingRangesOf ratingOf="quality_travail" workerId={workerID} />
                        </>
                        :
                        rateNbr == 3
                            ?
                            <>
                                <h1 className="font-bold text-lg text-blue600 mb-3">Prix</h1>
                                <RatingRangesOf ratingOf="prix_qualite" workerId={workerID} />
                            </>
                            : null
            }

            <div className="flex justify-center items-center mt-5 gap-5">
                <button
                    onClick={previous}
                    className="w-[40px] h-[40px] flex justify-center items-center text-2xl text-white bg-blue500 rounded-md">
                    <FaAngleLeft />
                </button>
                <button
                    onClick={next}
                    className="w-[40px] h-[40px] flex justify-center items-center text-2xl text-white bg-blue500 rounded-md">
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}

export default RatingDashboard
