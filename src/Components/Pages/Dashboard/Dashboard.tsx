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
import UpdateForm from "./UpdateForm";
import { useEffect, useState } from "react";
import DeletingPopUp from "./PopUps/DeletingPopUp";
import UpdateProject from "../WorkerDashboard/updateProject/UpdateProject";


const Dashboard = () => {

  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
  const tempId = "78";

  const [isUpdateInfo, setIsUpdateInfo] = useState<boolean>(false)
  const [clickedProjectID, setClickedProjectID] = useState<string>("")

  // update project
  const [isCancelUpdate, setIsCancelUpdate] = useState<string>("")
  const [clickedUpdatedProjectId, setClickedUpdatedProjectId] = useState<string>("")

  const cancelUppdateProject = () => {
    setClickedUpdatedProjectId("")
  }

  useEffect(() => { }, [clickedProjectID]);

  return (
    <div className="border relative" >
      <Navbar />
      <div
        dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
        className="md:pt-32 pt-16 pb-10 md:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="flex md:hidden w-full">
          <Warnning workerId={tempId} />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <SideInfo workerId={tempId} />
          <ComplateAcc workerId={tempId} getIsUpdateInfo={setIsUpdateInfo} />
          <button
            className="w-full border-2 border-teal-700 rounded-md py-2 hidden md:flex justify-center items-center gap-2 text-lg font-semibold text-teal-700"
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
          <div className="md:flex hidden">
            <Warnning workerId={tempId} />
          </div>
          <CountRates workerID={tempId} />
          <RatingDashboard workerID={tempId} />
        </div>

      </div>
      {/* Les Projets */}
      <ProjetsDashboard workerID={tempId} getClickedProject={setClickedProjectID} getUpdatedProjectID={setClickedUpdatedProjectId} />


      <button
        className="w-[90%] mx-auto mb-5 mt-12 border-2 border-teal-700 rounded-md py-2 md:hidden flex justify-center items-center gap-2 text-lg font-semibold text-teal-700"
      >
        <RiLogoutBoxLine />
        {
          isArabicSelected
            ? "تسجيل الخروج"
            : "Se déconnecter"
        }
      </button>


      {/* ############## POP-UPs ############## */}
      {/* Pop-up to update profile info */}
      {
        isUpdateInfo
          ?
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[#000000a9]">
            <UpdateForm workerID={tempId} getIsUpdateInfo={setIsUpdateInfo} />
          </div>
          :
          null
      }

      {/* Pop-up sure to delete project */}
      {
        clickedProjectID.length > 0
          ?
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[#000000c9]">
            <DeletingPopUp projectID={clickedProjectID} setProjectIdClicked={setClickedProjectID} />
          </div>
          : null
      }

      {/* Pop-up for updating a project */}
      {
        clickedUpdatedProjectId.length > 0
          ?
          <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[#000000c9]">
            <UpdateProject cancelIt={cancelUppdateProject} idProject={clickedUpdatedProjectId} />
          </div>
          : null
      }

    </div>
  )
}

export default Dashboard