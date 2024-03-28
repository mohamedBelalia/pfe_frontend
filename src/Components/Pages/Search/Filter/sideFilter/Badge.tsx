import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IBadgeProps } from "../../../../../TS";

type badgeTypes = {
    maalem : boolean
    khedam : boolean
}

const Badge = ({getBadgeNbr}:IBadgeProps) => {
    
    const [badgeTypes , setBadgeTypes] = useState<badgeTypes>({
        maalem : false ,
        khedam : false 
    })


    useEffect(()=>{
        
       if(badgeTypes.maalem && !badgeTypes.khedam){
            getBadgeNbr(["1"])
       }
       else if(!badgeTypes.maalem && badgeTypes.khedam){
            getBadgeNbr(["2"])
       }
       else if(badgeTypes.maalem && badgeTypes.khedam){
            getBadgeNbr(["1","2"])
       }
       else{
            getBadgeNbr([])
       }

    },[badgeTypes.khedam , badgeTypes.maalem])

    const handleBadgeClicked = (typeName : "maalem" | "khedam") =>{
        switch(typeName){
            case 'maalem' : setBadgeTypes({...badgeTypes , maalem : !badgeTypes.maalem}) ;
                    break ;
            case 'khedam' : setBadgeTypes({...badgeTypes , khedam : !badgeTypes.khedam}) ;
                    break ;
            default : return false ;
        }
    }

  return (
    <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-[#414E5F]">Badge</h1>

        <div className="flex flex-col gap-3">
            <div onClick={()=>handleBadgeClicked('maalem')} className="flex gap-3 items-center cursor-pointer w-[100px] select-none">
                {
                badgeTypes.maalem 
                ? 
                <div className="w-[25px] h-[25px] rounded-md bg-white border border-[#349292] relative">
                    <FaCheck className="font-bold text-3xl absolute -top-1 text-[#276f6f]"/>
                </div>
                :
                <div className="w-[25px] h-[25px] rounded-md bg-white border border-[#349292] relative"></div>
                }
                <p className="font-semibold text-[#414E5F]">Maalem</p>
            </div>


            <div onClick={()=>handleBadgeClicked('khedam')} className="flex gap-3 items-center cursor-pointer w-[100px] select-none">
                {
                badgeTypes.khedam 
                ?
                <div className="w-[25px] h-[25px] rounded-md bg-white border border-[#349292] relative">
                    <FaCheck className="font-bold text-3xl absolute -top-1 text-[#276f6f]"/>
                </div>
                : 
                <div className="w-[25px] h-[25px] rounded-md bg-white border border-[#349292] relative"></div>
                }
                <p className="font-semibold text-[#414E5F]">Khedam</p>
            </div>
        </div>

    </div>
  )
}

export default Badge