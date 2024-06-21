import { useEffect, useState } from "react"
import { getCookie } from "../../../../config/Cookies"
import Api from "../../../api/Api"
import { ICommunWorkerInfo } from "../../../TS"



const UserProfile = () => {

    const token = getCookie("auth_token")

    // store user image
    const [userProfile , setUserProfile] = useState<ICommunWorkerInfo>()

    // handling status
    const [isError , setIsError] = useState<boolean>(false)
    const [isLoading , setIsLoading] = useState<boolean>(true)

    useEffect(() => {

        const fetchUserProfile = async () => {
            const response = await Api.get(`/userProfile?token=${token}`)
            try {
                if(response.data.status == "token_not_valid"){
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
    <div>
        {userProfile?.imgProfile}
    </div>
  )
}

export default UserProfile

