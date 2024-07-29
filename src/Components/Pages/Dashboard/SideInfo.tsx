import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { useEffect, useState } from "react"
import Api from "../../../api/Api"
import { getCookie } from "../../../../config/Cookies"
import { IProfessionsType, IWorkerInfromation } from "../../../TS"
import LoadingPage from "../../Common/Loading/LoadingPage"
import { Config } from "../WorkerDashboard/Local_Variables"

type SideInfoProps = {
    workerId: string
}
const tempImg = "http://localhost/pfeApi/api/uploads/profiles/defaultUserImage.png"
const SideInfo = ({ workerId }: SideInfoProps) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
    const tempOcupp = ["Climatisation", "Vitrerie Aluminium", "Peintre"]
    const [userInfo , setUserInfo] = useState<IWorkerInfromation>()
    const [isError , setIsError] = useState<boolean | null>(null)
    const [isLoading , setIsLoading] = useState<boolean>(true)
    const [isZeroOccup , setIsZeroOccup] = useState<boolean>(false)
    const [isOccupLoading , setIsOccupLoading] = useState<boolean>(true)
    const [occups , setOccups] = useState<IProfessionsType[]>([])

    const token = getCookie("auth_token") ;

    useEffect(()=>{
        const fetchUserInfo = async () => {
            try{
                const response = await Api.get(`/workers?token=${token}`)
                if(response.data.status == "token_not_valid"){
                    console.log("logout"); // TODO logout here also
                }
                else{
                    setUserInfo(response.data);
                }
            }
            catch(e){
                setIsError(true)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchUserInfo()
    },[])

    useEffect(() => {
        const fetchOccupations = async() => {
            const response = await Api.get(`/professions?workerId=${workerId}`)
            try {
                if(response.data.status == "not found"){
                    setIsZeroOccup(true)
                }
                else{
                    setOccups(response.data)
                }
            } catch (error) {
                setIsZeroOccup(true)
            }
            finally{
                setIsOccupLoading(false)
            }
        }

        fetchOccupations()
    }, []);


    if(isLoading){
        return <div className="w-full bg-gray-200 flex justify-center items-center h-[150px] rounded-md">
            <LoadingPage/>
        </div>
    }
    

    return (
        <div
            className="p-5 bg-[#e4e4e4] rounded-md">
            <div className="w-[100px] rounded-full mx-auto overflow-hidden border-2 border-teal-500 bg-white p-1">
                <img src={Config.BaseImagesPath_Profiles + userInfo?.imgProfile} className="w-full object-cover" />
            </div>
            <h1 className="text-center mt-3 font-semibold text-xl text-teal-600">{userInfo?.prenomOuvrier + " " + userInfo?.nomOuvrier}</h1>

            {/* Additional infos */}
            <div className="mt-5 flex flex-col gap-4">
                {/* Experince */}
                {
                    userInfo?.experience != null ??
                <div>
                    <p className="font-semibold text-blue-600">{isArabicSelected ? "الخبرة" : "Expérience"}</p>
                    <p className="text-lg font-semibold text-teal-700">{isArabicSelected ? `${userInfo?.experience} سنة` : `${userInfo?.experience} ans`}</p>
                </div>
                }
                {/* ville */}
                <div>
                    <p className="font-semibold text-blue-600">{isArabicSelected ? "المدينة" : "Ville"}</p>
                    <p className="text-lg font-semibold text-teal-700">{isArabicSelected ? userInfo?.ville_AR : userInfo?.ville_FR}</p>
                </div>
                {/* occupations */}
                <div>
                    <p className="font-semibold text-blue-600 mb-2">{isArabicSelected ? "المهن" : "Occupations"}</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            occups.map((occup, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 rounded-md bg-teal-500 text-white"
                                >{
                                    isArabicSelected
                                    ? occup.labelleProfession_AR
                                    : occup.labelleProfession_FR
                                }</span>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SideInfo