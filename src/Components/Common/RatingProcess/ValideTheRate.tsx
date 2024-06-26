import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { IRatingCriteriasType } from "../../Store/Slices/RateingProcess"
import { FaRegCheckCircle } from "react-icons/fa";

const ValideTheRate = () => {

    const criteriasLevels : IRatingCriteriasType = useSelector((state:RootState)=> state.ratingProcessSlice.ratingCriterias)

      // The Slice For Change The Language
      const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

  return (
    <div className="flex flex-col gap-8">
       <div className="flex justify-center items-center">
          <FaRegCheckCircle className="md:text-[250px] text-[150px] text-[#52AFAC]"/>
       </div>
       <div>
          <p className="text-center text-[#52AFAC] md:text-[40px] text-[35px] font-bold">
            {
              isArabicSelected 
              ? "شكرا لك على وقتك"
              : "Merci pour votre temps"
            }
          </p>
       </div>
    </div>
      
  )
}
// 52AFAC
// CAE5E3
export default ValideTheRate
