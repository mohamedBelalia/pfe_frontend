import { useSelector } from "react-redux";
import Navbar from "../../Common/Navbar/Navbar"
import SideInfo from "./SideInfo"
import { RootState } from "../../Store/store";
import { ComplateAcc } from "./ComplateAcc";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Warnning } from "./Warnning";
import CountRates from "./CountRates";
import RatingDashboard from "./RatingDashboard";
import ProjetsDashboard from "./ProjetsDashboard";


const Dashboard = () => {

  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
  const tempId = "78";

  return (
    <div className="border" >
        <Navbar/> 
        <div 
          dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
          className="pt-32 pb-10 w-[80%] mx-auto flex items-start gap-10">

            <div className="w-1/2 flex flex-col gap-4">
              <SideInfo workerId={tempId}/>
              <ComplateAcc workerId={tempId}/>
              <button
              className="w-full border-2 border-teal-700 rounded-md py-2 flex justify-center items-center gap-2 text-lg font-semibold text-teal-700"
              >
                <RiLogoutBoxLine />
                {
                  isArabicSelected
                  ? "تسجيل الخروج"
                  : "Se déconnecter"
                }
              </button>
            </div>
            <div className="w-full">
                  <Warnning workerId={tempId}/>
                  <CountRates workerID={tempId}/>
                  <RatingDashboard workerID={tempId}/>
            </div>

        </div>
        {/* Les Projets */}
        <ProjetsDashboard workerID={tempId}/>
    </div>
  )
}

export default Dashboard