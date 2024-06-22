import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store"
import { IoWarning } from "react-icons/io5"

type AlertLoginProps = {
    message: string
}

const AlertLogin = ({ message }: AlertLoginProps) => {

    const [arabicMsg, setArabicMsg] = useState<string>("")
    const [frenchMsg, setFrenchMsg] = useState<string>("")

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    useEffect(() => {
        if (message == "connection_error") {
            setArabicMsg("هناك خطأ في الاتصال")
            setFrenchMsg("il y a une erreur de connexion")
        }

        if (message == "uncomplate_data") {
            setArabicMsg("جميع الحقول مهمة")
            setFrenchMsg("Tous les champs sont importants")
        }

        if (message == "not_found") {
            setArabicMsg("رقم الهاتف أو كلمة المرور غير صحيحة")
            setFrenchMsg("Le numéro de téléphone ou le mot de passe est incorrect")
        }

        if (message == "something_wrong") {
            setArabicMsg("هناك خطأ في تسجيل الدخول الخاص بك")
            setFrenchMsg("Il y a un problème avec votre connexion")
        }
    }, [message])

    return (
        <div
            dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
            className="flex items-center gap-3 w-[50%] mx-auto p-4 border-2 border-red-600 bg-red-200 rounded-lg mb-4 text-red-800 font-semibold">
            <IoWarning className="text-3xl"/>
            {
                isArabicSelected
                    ? arabicMsg
                    : frenchMsg
            }
        </div>
    )
}

export default AlertLogin