import { useEffect, useState } from "react"
import { getCookie } from "../../../../config/Cookies"
import { Config } from "../../../../config/Local_Variables"
import Api from "../../../api/Api"
import { ICommunWorkerInfo } from "../../../TS"


const baseProfilePath = Config.BaseImagesPath_Profiles

const UserProfile = () => {

    const token = getCookie("auth_token")

    // store user image
    const [userProfile , setUserProfile] = useState<ICommunWorkerInfo>()

    // handling status
    const [isError , setIsError] = useState<boolean>(false)
    const [isLoading , setIsLoading] = useState<boolean>(true)

    useEffect(() => {

        const fetchUserProfile = async () => {
            const response = await Api.get(`/profile?token=${token}`)
            try {
                if(response.data.status == "not_valid"){
                    console.log("logout !!");
                }
                else{
                    setUserProfile(response.data)
                }
            } catch (exec) {
                setIsError(true)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchUserProfile()
    }, [token]);

  return (
    <div className="w-[45px] border-2 border-teal500 rounded-full overflow-hidden cursor-pointer">
         <img 
         src={baseProfilePath + userProfile?.imgPath}/>
    </div>
  )
}

export default UserProfile

