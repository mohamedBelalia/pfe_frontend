import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"

type WarnningProps = {
    workerId : string
}
export const Warnning = ({workerId}:WarnningProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  return (
    <div className="w-[80%] p-3 border-2 border-red-800 bg-red-300 rounded-md flex justify-center items-center font-semibold mx-auto text-red-900">
        {
            isArabicSelected 
            ? "أكمل معلومات ملفك الشخصي للحصول على عملاء"
            : "Complétez vos informations de profil pour obtenir des clients"
        }
    </div>
  )
}
