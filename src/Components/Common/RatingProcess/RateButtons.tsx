import { FaStar } from "react-icons/fa"
import { FaFaceGrin, FaFaceMeh, FaFaceSmile } from "react-icons/fa6"


type RateButtonProps = {
    idRate : string
    text: string 
    nbrStar: number ,
    idClicked : string
    getIdClicked : (id : string) => void
}

const RateButtons = ({idRate , nbrStar  , text , getIdClicked , idClicked}:RateButtonProps) => {
 
    const grayStars = 5 - nbrStar

    let Icon : JSX.Element = <></>

    switch(idRate){
        case "1" :
            Icon = <FaFaceGrin className="text-4xl w-[10%]"/>
        break ;
        case "2" :
            Icon = <FaFaceSmile className="text-4xl w-[10%]"/>
        break;
        case "3" :
            Icon = <FaFaceMeh className="text-4xl w-[10%]"/>
        break ;
    }

    // for the hover style of each btn
    const ExcellentHover = "hover:text-white hover:bg-[#349292]" 
    const TresBienHover = "hover:text-white hover:bg-[#199AFF]" 
    const BienHover = "hover:text-white hover:bg-[#E8985D]" 


    const clickedBtn = (clickedIdRate : string) => {
        getIdClicked(clickedIdRate)
    }
    
    

    return (
        <div className="select-none md:w-full">
        {
            idRate == "1"
            &&
            <div 
                onClick={()=>clickedBtn(idRate)}
                className={`h-[50px] ${idRate == idClicked ? "text-white bg-[#349292]" : "bg-[#90CBE0] text-teal-950"} rounded-xl px-4 py-5 flex items-center  cursor-pointer transition-all duration-150 ${ExcellentHover}`}>
                {Icon}

                <p className="w-[90%] text-center text-lg font-bold">
                    {text}
                </p>
            </div>
        }

        {
            idRate == "2"
            &&
            <div 
                onClick={()=>clickedBtn(idRate)}
                className={`h-[50px] ${idRate == idClicked ? "text-white bg-[#199AFF]" : "bg-[#90CBE0] text-teal-950"} rounded-xl px-4 py-5 flex items-center cursor-pointer transition-all duration-150 ${TresBienHover}`}>

                {Icon}

                <p className="w-[90%] text-center text-lg font-bold">
                    {text}
                </p>
            </div>
        }

        {
            idRate == "3"
            &&
            <div 
                onClick={()=>clickedBtn(idRate)}
                className={`h-[50px] ${idRate == idClicked ? "text-white bg-[#E8985D]" : "bg-[#90CBE0] text-teal-950"} rounded-xl px-4 py-5 flex items-center cursor-pointer transition-all duration-150 ${BienHover}`}>

                {Icon}

                <p className="w-[90%] text-center text-lg font-bold">
                    {text}
                </p>
            </div>
        }

        <div className="flex justify-end mt-1">
            <div className="flex gap-1 text-sm w-fit">
                {
                    Array(nbrStar).fill(null).map((_ , index)=>(
                        <FaStar key={`yellow_star_${index}`} className="text-yellow-500"/>
                    ))
                }
                {
                    Array(grayStars).fill(null).map((_ , index)=>(
                        <FaStar key={`gray_star_${index}`} className="text-gray-500"/>
                    ))
                }
            </div>
        </div>
        
    </div>
    )
}

export default RateButtons