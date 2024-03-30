import { FaPhoneAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import { IWorkerInfromation } from "../../../../TS";
import { Config } from "../../../../../config/Local_Variables";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import Professions from "../../../Common/workerComponents/Professions";


export interface workerDataProps {
    id: string;
    name: string;
    imgProfile: string;
    rate: number;
    price: number;
    description: string;
    badge: string;
}


interface workerCardProps {
    workerInfo : IWorkerInfromation
    getClickedWorkerId : (id : string) => void
}


const WorkerCard = ({workerInfo , getClickedWorkerId}:workerCardProps) => {


  // The Slice For Change The Language
  const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)


  return (
    <div>
        <div className="flex flex-col relative md:flex-row md:gap-14 gap-4 border border-black bg-gray-200 px-5 md:px-10 py-7 rounded-xl overflow-hidden">
            {/* This div only display on the small screen witout any content 
                his only rol is to make the worker card clickable on small screens to display his pop-up profile */}
            <div
            onClick={()=>getClickedWorkerId(workerInfo.idOuvrier)} 
            className="md:hidden block absolute w-full h-full top-0 left-0">
            </div>
            <div className="flex flex-col gap-3">
         
                <div 
                  onClick={()=>getClickedWorkerId(workerInfo.idOuvrier)}
                  className="w-[150px] h-[150px] mx-auto md:mx-0 rounded-full overflow-hidden ">
                  <img className="w-full h-full object-cover" src={Config.BaseImagesPath_Profiles + workerInfo?.imgProfile} alt="" />
                </div>
                <div className="flex flex-col md:gap-5 gap-2">
                    <div>
                      <h1 className="font-bold text-center text-2xl md:text-xl text-[#414E5F]">{workerInfo.nomOuvrier} {workerInfo.prenomOuvrier}</h1>
                    </div>
                    {/* loading the badge only in the small screens in this position */}
                    <div className="border-dashed border mx-auto border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-[120px] md:hidden flex items-center justify-around">
                        <SlBadge className="text-xl"/>
                        {
                            isArabicSelected
                            ? workerInfo.labelleBadge_AR
                            : workerInfo.labelleBadge_FR
                        }
                    </div>
                    <p className="text-sm font-bold text-gray-500 text-center block md:hidden">{"Marrakech"}</p>

                    {/* on clicking on this btn we display the worker profile pop-up */}
                    <button 
                        onClick={()=>getClickedWorkerId(workerInfo.idOuvrier)}
                        className="px-5 py-1 font-bold text-white rounded-lg bg-[#349292] hidden md:block">Profile</button>
                </div>
                
            </div>

            <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-col justify-center gap-5 md:hidden text-2xl font-bold text-[#2d7d7d]">

                    <div className="flex mx-auto gap-1 items-center text-gray-600 text-base">
                        <IoIosStar/>
                        {
                            workerInfo.avgEtoile 
                            ? 
                            <p className="font-semibold">{workerInfo.avgEtoile} <span className="text-xs">{workerInfo.nbrCommentair} Reviews</span></p>
                            :
                            <p>
                                {
                                    isArabicSelected
                                    ?  "بدون تعليقات"
                                    : "Aucun avis"
                                }
                            </p>
                        }
                    </div>
                    <div className="text-center">
                        <a 
                            className="font-bold text-2xl text-[#2d7d7d] flex gap-3 items-center justify-center"
                            href="tel:000">
                                <FaPhoneAlt/>
                                {workerInfo.phone}
                        </a>
                    </div>

                </div>
                <div className="hidden md:flex justify-between items-start gap-3">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center text-gray-600">
                            <IoIosStar className="text-2xl"/>
                            {
                                workerInfo.avgEtoile
                                ?
                                <p className="font-semibold text-lg">{workerInfo.avgEtoile} ({workerInfo.nbrCommentair} Reviews)</p>
                                :
                                <p>
                                {
                                    isArabicSelected
                                    ?  "بدون تعليقات"
                                    : "Aucun avis"
                                }
                            </p>
                            }
                        </div>
                        <div className="border-dashed border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-[120px] flex items-center justify-around">
                            <SlBadge className="text-xl"/>
                            {
                            isArabicSelected
                            ? workerInfo.labelleBadge_AR
                            : workerInfo.labelleBadge_FR
                            }
                        </div>
                        <p className="text-sm font-bold text-gray-500">{"Marrakech"}</p>
                    </div>
                    <a 
                        className="text-xl font-bold text-end text-[#2d7d7d] flex gap-3 items-center"
                        href="tel:000">
                            <FaPhoneAlt/>
                            {workerInfo.phone}
                    </a>

                </div>
                
            
                <div className="mt-5 p-5 bg-white rounded-xl flex flex-col gap-4">
                    {
                        isArabicSelected
                        ? <p className="font-medium text-end">المهن الرئيسية</p>
                        : <p className="font-medium">Principales Professions</p>
                    }

                    <Professions idWorker={workerInfo.idOuvrier} />
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default WorkerCard