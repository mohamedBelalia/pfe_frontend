import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import PaginationPage from "./OtherInfos/PaginationPage";
import Evaluation from "./OtherInfos/Evaluation";
import AllPosts from "./AllPosts/AllPosts";
import Progress from "./OtherInfos/Progress";
import Navbar from "../../Common/Navbar/Navbar";
import { useEffect, useState } from "react";
import Api from "../../../api/Api";
import { deleteCookie, getCookie } from "../../../../config/Cookies";
import { useNavigate } from "react-router-dom";
import { IProfileWorker } from "../../../TS";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { RiLogoutBoxLine } from "react-icons/ri";



const DashboardTT = () => {

  const token = getCookie("auth_token");
  const navigate = useNavigate()
  const [worekerProfile, setWorkerProfile] = useState<IProfileWorker>()

  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  useEffect(() => {

    const fetchProfile = async () => {
      try {
        const response = await Api.get(`/profile?token=${token}`)
        if (response.data.status == "not_valid") {
          navigate("/Login")
        }
        else {
          setWorkerProfile(response.data)
        }

      } catch (error) {
        navigate("/Login")
      }
    }

    fetchProfile()

  }, []);

  const logout = () => {
    deleteCookie("auth_token")
    navigate("/")
  }


  return (

    worekerProfile != undefined
      ?
      <div className="border">
        <Navbar />
        <div className="md:w-[80%]  w-[95%] mx-auto mt-28">
          <div className={`${isArabicSelected ? "md:flex-row-reverse" : ""} md:flex md:flex-row flex  flex-col my-10 mx-auto`}>
            <div className=" " >
              <div className='w-full mb-2 md:hidden px-2 sm:w-[70%] m-auto py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {"Complétez votre informations pour obtenir des clients"}
              </div>
              <p className="md:hidden"><Progress num={2} /></p>
              <Card idWorker={worekerProfile.id} />
              <ComplateAcount idWorker={worekerProfile.id} />
              <button
              onClick={logout}
              className="w-full border-2 border-teal-700 rounded-md mt-5 py-2 flex justify-center items-center gap-2 text-lg font-semibold text-teal-700"
              >
                <RiLogoutBoxLine />
                {
                  isArabicSelected
                  ? "تسجيل الخروج"
                  : "Se déconnecter"
                }
              </button>
            </div>
            <div className="flex  md:w-[800px] md:mx-10 flex-col">
              <PaginationPage />
              <Evaluation workerId={worekerProfile.id} />
            </div>

          </div>
          <AllPosts idWorker={worekerProfile.id} />
          {/* <Comments /> */}

        </div>
      </div>
      :
      <div className="w-full h-[100vh]">
          Log in
      </div>

  )

}

export default DashboardTT
