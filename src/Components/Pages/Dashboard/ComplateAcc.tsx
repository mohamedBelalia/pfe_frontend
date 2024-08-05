import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { MdManageAccounts } from "react-icons/md"
import { FaRegCircleXmark } from "react-icons/fa6"
import { FaRegCheckCircle } from "react-icons/fa"
import { useEffect, useState } from "react"
import Api from "../../../api/Api"

type ComplateAccProps = {
    workerId: string
    getIsUpdateInfo: (isUpdate: boolean) => void
}

export const ComplateAcc = ({ workerId, getIsUpdateInfo }: ComplateAccProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
    const [unComplatedInfo, setUncomplatedInfo] = useState<string[]>([])

    useEffect(() => {
        const fetchUncomplatedInfo = async () => {
            const response = await Api.get(`/verification?workerId=${workerId}`);
            setUncomplatedInfo(response.data);
        }

        fetchUncomplatedInfo()

    }, []);


    return (
        <div className="border-2 border-teal-600 bg-blue-50 rounded-md p-2">
            <span onClick={() => getIsUpdateInfo(true)} className="flex cursor-pointer items-center gap-3 py-1 px-4 font-bold text-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-100">
                <MdManageAccounts className="text-3xl" />
                {
                    isArabicSelected ? "أكمل حسابك" : "Complétez votre compte"
                }
            </span>
            <div className="flex flex-col gap-2 mt-2">
                <span

                    className={`flex items-center text-lg gap-2 font-semibold ${unComplatedInfo.includes("experience") ? "text-red-600" : "text-green-600"}`}>
                    {
                        unComplatedInfo.includes("experience")
                            ? <FaRegCircleXmark className="text-xl" />
                            : <FaRegCheckCircle className="text-xl" />
                    }
                    {isArabicSelected ? "الخبرة" : "Expérience"}
                </span>
                <span className={`flex items-center text-lg gap-2 font-semibold ${unComplatedInfo.includes("imgProfile") ? "text-red-600" : "text-green-600"}`}>
                    {
                        unComplatedInfo.includes("imgProfile")
                            ? <FaRegCircleXmark className="text-xl" />
                            : <FaRegCheckCircle className="text-xl" />
                    }
                    {isArabicSelected ? "صورة الملف الشخصي" : "Image de Profil"}
                </span>
                <span className={`flex items-center text-lg gap-2 font-semibold ${unComplatedInfo.includes("description_ouvrier") ? "text-red-600" : "text-green-600"}`}>
                    {
                        unComplatedInfo.includes("description_ouvrier")
                            ? <FaRegCircleXmark className="text-xl" />
                            : <FaRegCheckCircle className="text-xl" />
                    }
                    {isArabicSelected ? "الوصف" : "Description"}
                </span>
            </div>
        </div>
    )
}
