import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { useEffect, useState } from "react"
import Api from "../../../api/Api"

type WarnningProps = {
    workerId : string
}
export const Warnning = ({workerId}:WarnningProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    const [unComplatedInfo , setUncomplatedInfo] = useState<string[]>([])
    const [isLoading , setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchUncomplatedInfo = async() => {
            const response = await Api.get(`/verification?workerId=${workerId}`);
            try {
              setUncomplatedInfo(response.data);              
            } catch (error) {
              console.log(error);
            }
            finally{
              setIsLoading(false)
            }
        }

        fetchUncomplatedInfo()

    }, []);

    

  return (
    unComplatedInfo.length > 0 ?
    <div className="md:w-[80%] text-center p-3 border-2 border-red-800 bg-red-300 rounded-md flex justify-center items-center font-semibold mx-auto text-red-900">
        {
            isArabicSelected 
            ? "أكمل معلومات ملفك الشخصي للحصول على عملاء"
            : "Complétez vos informations de profil pour obtenir des clients"
        }
    </div>
    : null
  )
}
