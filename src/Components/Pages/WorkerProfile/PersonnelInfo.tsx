import { FaPhoneAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { ISingleWorker } from "../../../TS";
import { Config } from "../../../../config/Local_Variables";
import { MdRateReview } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { setRatedWorkerId } from "../../Store/Slices/RatedWorkerId";
import { useSelector } from "react-redux";


const PersonnelInfo = ({singleWorker}:ISingleWorker) => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    // to store the id of the rated worker
    const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="w-full flex flex-col px-5 py-4 md:py-10 rounded-md bg-white border border-teal-800 shadow-xl gap-3">
        <div className="flex gap-3 flex-col md:flex-row items-center">
            <div className="rounded-full overflow-hidden md:w-[90px] md:h-[90px] w-[120px] h-[120px]">
                <img 
                    src={Config.BaseImagesPath_Profiles + singleWorker.imgProfile} 
                    className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
                <h1 className="text-2xl md:text-xl font-bold text-teal-700">{singleWorker.prenomOuvrier + " " + singleWorker.nomOuvrier}</h1>
                <div className="flex items-center gap-2">
                    <IoIosStar/> <p className="font-semibold">{singleWorker.nbrCommentair} <span className="text-xs">({singleWorker.avgEtoile} reviews)</span></p>
                </div>
                 
                    { // TODO fetch the city(s) of the worker
                        isArabicSelected
                        ?
                        <p className="text-sm  font-semibold">
                            المدينة الرئيسية
                            <span className="px-1 bg-yellow-300 rounded-md font-bold text-teal-800"> مراكش</span>
                        </p>
                        : 
                        <p className="text-sm  font-semibold">
                            ville principale <span className="px-1 bg-yellow-300 rounded-md font-bold text-teal-800">Marrakech</span>
                        </p>
                    }
                
            </div>
        </div>

      
        <div className="py-1 px-4 rounded-md bg-slate-400 text-white text-center w-[100px] mx-auto">
            <p>Maalem</p>
        </div>  

        <div className="mt-4 ">
            <a href="tel:+212 632-602326">
                <div className="flex border-2 border-dashed border-teal-500 rounded-md py-2 mx-auto justify-center gap-3 items-center text-xl font-semibold text-end text-[#2d7d7d]">
                    <FaPhoneAlt/>
                    {singleWorker.phone}
                </div>
            </a>
        </div>

        <div className="mt-4">
            <button
                onClick={()=>dispatch(setRatedWorkerId({idWorker : singleWorker.idOuvrier}))} 
                className="flex items-center gap-4 py-2 px-4 font-semibold hover:text-teal-900 hover:bg-blue-100 transition-all duration-300 border-2 border-blue-600 rounded-md mx-auto">
                Évaluer {singleWorker.nomOuvrier} 
                <MdRateReview className="text-2xl"/>
            </button>
        </div>

    </div>
  )
}

export default PersonnelInfo