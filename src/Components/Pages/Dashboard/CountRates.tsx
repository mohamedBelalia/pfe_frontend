import { GiStarsStack } from "react-icons/gi"
import { RootState } from "../../Store/store"
import { useSelector } from "react-redux"

type CountRatesProps = {
    workerID : string
}
const CountRates = ({workerID}:CountRatesProps) => {
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
  return (
    <div className="flex flex-col justify-center items-center mt-5 w-fit mx-auto text-teal-700">
        <GiStarsStack className="text-[55px]"/>
        <p className="text-lg font-semibold">
            {
                isArabicSelected
                ? `قام ${5} أشخاص بتقييمك`
                : `${5} personnes vous ont évalué`
            }
        </p>
    </div>
  )
}

export default CountRates