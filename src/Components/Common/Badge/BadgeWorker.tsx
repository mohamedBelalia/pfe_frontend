import { SlBadge } from "react-icons/sl"
import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { useEffect, useState } from "react"

type badgeProps = {
    badgeName : string | undefined
}

const BadgeWorker = ({badgeName}:badgeProps) => {

  const [exp , setExp] = useState<string | undefined>("")

  useEffect(()=>{
    setTimeout(() => {
        setExp(badgeName)
    }, 1000);
  },[badgeName])

      // The Slice For Change The Language
      const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)
  console.log(exp);
  
  return (
    <div className="border-dashed gap-2 border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-full flex items-center justify-around">
        <SlBadge className="text-xl"/>
        <span>
        {
          isArabicSelected
          ? `الخبرة ${exp} سنة `
          : "experience"
        }
        </span>
        {/* {badgeName} */}
    </div>
  )
}

export default BadgeWorker