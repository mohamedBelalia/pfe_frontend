import { FaPhoneAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { ISingleWorker } from "../../../TS";
import { Config } from "../../../../config/Local_Variables";


const PersonnelInfo = ({singleWorker}:ISingleWorker) => {
console.log(singleWorker);

  return (
    <div className="w-full flex flex-col px-5 py-10 rounded-md bg-white border border-teal-800 shadow-xl gap-3">
        <div className="flex gap-3">
            <div className="rounded-full overflow-hidden w-[90px] h-[90px]">
                <img 
                    src={Config.BaseImagesPath_Profiles + singleWorker.imgProfile} 
                    className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold text-teal-700">{singleWorker.prenomOuvrier + " " + singleWorker.nomOuvrier}</h1>
                <div className="flex items-center gap-2">
                    <IoIosStar/> <p className="font-semibold">{singleWorker.nbrCommentair} <span className="text-xs">({singleWorker.avgEtoile} reviews)</span></p>
                </div>
                <p className="text-xs text-red-600 font-bold">FIXE THE CITYES</p>
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

        <div>
            <button></button>
        </div>

    </div>
  )
}

export default PersonnelInfo