import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { MdManageAccounts } from "react-icons/md"
import { FaRegCircleXmark } from "react-icons/fa6"
import { FaRegCheckCircle } from "react-icons/fa"

type ComplateAccProps = {
    workerId : string
}
export const ComplateAcc = ({workerId}:ComplateAccProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  return (
    <div className="border-2 border-teal-600 bg-blue-50 rounded-md p-2">
        <span className="flex items-center gap-3 px-4 font-bold text-blue-500">
        <MdManageAccounts className="text-3xl"/>
            {
                isArabicSelected ? "أكمل حسابك" : "Complétez votre compte"
            }
        </span>
        <div className="flex flex-col gap-2 mt-2">
            <span className="flex items-center text-lg gap-2 font-semibold text-red-600">
                <FaRegCircleXmark className="text-xl"/>
                {isArabicSelected ? "الخبرة" : "Expérience"}
            </span>
            <span className="flex items-center text-lg gap-2 font-semibold text-green-600">
                <FaRegCheckCircle className="text-xl"/>
                {isArabicSelected ? "صورة الملف الشخصي" : "Image de Profil"}
            </span>
            <span className="flex items-center text-lg gap-2 font-semibold text-green-600">
                <FaRegCheckCircle className="text-xl"/>
                {isArabicSelected ? "الوصف" : "Description"}
            </span>
        </div>
    </div>
  )
}
