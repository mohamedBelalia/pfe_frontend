import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"

type SideInfoProps = {
    workerId: string
}
const tempImg = "http://localhost/pfeApi/api/uploads/profiles/defaultUserImage.png"
const SideInfo = ({ workerId }: SideInfoProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
    const tempOcupp = ["Climatisation", "Vitrerie Aluminium", "Peintre"]

    return (
        <div
            className="p-5 bg-[#e4e4e4] rounded-md">
            <div className="w-[100px] rounded-full mx-auto overflow-hidden border-2 border-teal-500 bg-white p-1">
                <img src={tempImg} className="w-full object-cover" />
            </div>
            <h1 className="text-center mt-3 font-semibold text-xl text-teal-600">Mohamed Belalia</h1>

            {/* Additional infos */}
            <div className="mt-5 flex flex-col gap-4">
                {/* Experince */}
                <div>
                    <p className="font-semibold text-blue-600">{isArabicSelected ? "الخبرة" : "Expérience"}</p>
                    <p className="text-lg font-semibold text-teal-700">{isArabicSelected ? `${15} سنة` : `${15} ans`}</p>
                </div>
                {/* ville */}
                <div>
                    <p className="font-semibold text-blue-600">{isArabicSelected ? "المدينة" : "Ville"}</p>
                    <p className="text-lg font-semibold text-teal-700">{isArabicSelected ? "مراكش" : "Marrakech"}</p>
                </div>
                {/* occupations */}
                <div>
                    <p className="font-semibold text-blue-600 mb-2">{isArabicSelected ? "المهن" : "Occupations"}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            tempOcupp.map((occup, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 rounded-md bg-teal-500 text-white"
                                >{occup}</span>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideInfo