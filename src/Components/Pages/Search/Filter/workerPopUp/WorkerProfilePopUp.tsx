import Button from "../../../../Common/Button/Button"
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import Reviews from "./Reviews";
import { useEffect, useState } from "react";
import Api from "../../../../../api/Api";
import { IWorkerInfromation } from "../../../../../TS";
import { Config } from "../../../../../../config/Local_Variables";
import Professions from "../../../../Common/workerComponents/Professions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
import WorkerProjects from "./WorkerProjects";
import LoadingPage from "../../../../Common/Loading/LoadingPage";
import { MdSignalWifiConnectedNoInternet1 } from "react-icons/md";
import Diploms from "./Diplomes";
import { Link } from "react-router-dom";


type workerPopUpTypes = {
    idWorker : string ,
}


const WorkerProfilePopUp = ({idWorker}:workerPopUpTypes) => {

    // to store the worker details
    const [workerDetails , setWorkerDetails] = useState<IWorkerInfromation>()

    // for errors
    const [error , setError] = useState<boolean>(false)

    // for the loading of data
    const [isLoading , setIsLoading] = useState<boolean>(true)

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

   

    useEffect(()=>{
        const fetchWorkerDetails = async()=>{
          try{
              const response = await Api.get(`/workers?id=${idWorker}`)
              if(response.data.status == "not found"){
                    setError(true)
              }
              else{
                setWorkerDetails(response.data[0])                
              }
  
          }catch(exception){
              console.log(exception);
          }
          finally{
            setIsLoading(false)
          }

        }
  
        fetchWorkerDetails()

        
  
    },[idWorker])


    if(error){
        return (
            <div className="w-full h-[200px] bg-white border-2 border-red-600 rounded-md flex justify-center items-center">
                <img className="w-[100px]" src="/imgUsed/connection_error.png" alt="connection error" />
            </div>
        )
    }
   

    if(isLoading){
        return (
            <div className="w-full h-[200px] bg-white rounded-md flex justify-center items-center">
                <LoadingPage/>
            </div>
        )
    }

   
    

  return (
    <div className="w-full rounded-xl pb-10 px-6 bg-white  overflow-x-hidden">
        
        {
        workerDetails != undefined 
        ?
    
        <div className="flex flex-col gap-7">

        <div className={`flex flex-col ${isArabicSelected ? "md:flex-row-reverse" : "md:flex-row"} justify-between items-start mt-3`}>
            <div className={`flex ${isArabicSelected ? "md:flex-row-reverse" : "md:flex-row"} flex-col gap-4 md:mx-0 mx-auto`}>
                <div className="md:w-[80px] w-[100px] md:h-[80px] h-[100px] mx-auto md:mx-0 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={Config.BaseImagesPath_Profiles  + workerDetails.imgProfile} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="font-bold text-lg text-teal500">{workerDetails.prenomOuvrier} {workerDetails.nomOuvrier}</p> 
                    </div>
                    {/* <div className="flex items-center gap-1 text-gray700 font-semibold ">   
                        <IoIosStar/> {workerDetails.avgEtoile} <span className="text-xs">({workerDetails.nbrCommentair} reviews)</span>
                    </div> */}

                    <Link to={`/ouvres/${workerDetails.idOuvrier}`} className="px-10 py-1 bg-teal500 text-white rounded-md">
                        Voir Le Profil
                    </Link>

                    {/* <div className="border-dashed border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] py-0.5 px-1 text-sm  flex gap-3 items-center justify-center">
                        <SlBadge/>
                        {workerDetails.labelleBadge_FR}
                    </div> */}
                    {/* <div className="block md:hidden mt-2">
                        <h1 className="text-xl font-bold text-end text-[#2d7d7d]">{workerDetails?.phone}</h1>
                    </div> */}
                </div>
            </div>
            
            <div className="flex flex-col md:mx-0 mx-auto md:mt-0 mt-5 gap-4">
                <a href="tel:+212 632-602326">
                    <div className="flex justify-end gap-3 items-center text-xl font-semibold text-end text-[#2d7d7d]">
                        <FaPhoneAlt/>
                        {workerDetails.phone}
                    </div>
                </a>
                {/* <div>
                    <Button bg="#349292" color="white" label={`Continue with ${workerDetails.nomOuvrier}`}/>
                </div> */}
            </div>
        </div>


        <div>
            {
                isArabicSelected
                ?
                <h1 className="text-end font-bold text-lg text-gray700">وصف</h1>
                :
                <h1 className="font-bold text-lg text-gray700">Description</h1>
            }
            <p className={`${isArabicSelected && "text-end"} text-gray700`}>
                {workerDetails.description_ouvrier}
            </p>
        </div>

        {/* <div className="flex flex-col gap-1">
            {
                isArabicSelected
                    ? <h1 className="font-bold text-lg text-gray700 text-end">المهن الرئيسية</h1>
                    : <h1 className="font-bold text-lg text-gray700">Principales Professions</h1>
            }
            <Professions idWorker={idWorker}/>
        </div> */}

       {/* <>
            <WorkerProjects idWorker={idWorker} workerName={workerDetails.nomOuvrier}/>
       </>
         */}
{/* 
        <div>
            <h1 className="font-bold text-lg text-gray700">
                {
                    isArabicSelected 
                    ? "الدبلومات"
                    : "Diplômes"
                }
            </h1>
            <Diploms workerId={idWorker}/>
        </div> */}
{/* 
        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg text-gray700">Reviews</h1>
            <Reviews idWorker={idWorker}/>
        </div> */}

        </div>

        : <div className="w-full h-[200px] bg-white text-center border-2 border-red-600 rounded-md flex flex-col gap-3 justify-center items-center">
                <MdSignalWifiConnectedNoInternet1 className="text-[50px] text-red-600"/>
                {
                    isArabicSelected
                    ?
                    <div>
                        <h1 className="font-semibold text-xl">خطأ في الاتصال</h1>
                        <p>تحقق من اتصالك وقم بتحديث الصفحة</p>
                    </div>
                    :
                    <div>
                        <h1 className="font-semibold text-xl">Erreur de connexion</h1>
                        <p>Vérifiez votre connexion et rafraîchissez la page</p>
                    </div>
                }
          </div>
        }

    </div>
  )
}

export default WorkerProfilePopUp