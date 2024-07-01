import { GrUserWorker } from "react-icons/gr";
import { useNavigate } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiLoginCircleLine } from "react-icons/ri";

type PhoneNavbarTypes = {
    getTheBecomeATaskerBox : (isClicked : boolean) => void ,
    isTheBecomeATaskerBoxClicked : boolean 
}

const PhoneNavbar = ({getTheBecomeATaskerBox , isTheBecomeATaskerBoxClicked}:PhoneNavbarTypes) => {

    const navigate = useNavigate()
    
    const currentUrl : string = window.location.href

    const pathArr : string[] = currentUrl.split("/")

    const path = pathArr[pathArr.length - 1]


    const navigateTo = (path:string) =>{
        // using window.scroll(0,0) to ensure that when we reach the page we go to the top of it
        window.scroll(0,0)
        navigate(path)
    }

  return (
    <div className="flex items-center justify-between w-full z-50 px-3 pt-1">
        <div onClick={()=>navigateTo('/')} className={`${path.length ? "text-gray-500" : "text-black"} w-[80px] h-[80%] relative flex flex-col justify-between items-center rounded-md`}>
            {
                path.length == 0
                &&
                <div className="w-[70%] h-[25px] bg-[#27a1b737] rounded-full absolute"></div>
            }
            <AiFillHome className="text-5xl"/>
            <p className="text-sm font-bold select-none">Accueil</p>
        </div>

        <div onClick={()=>navigateTo('/search')} className={`relative ${path == "search" ? "text-black" : "text-gray-500"} w-[80px] h-[80%]  flex flex-col justify-between items-center rounded-md`}>
            {
                path == "search"
                &&
                <div className="w-[70%] h-[25px] bg-[#27a1b737] rounded-full absolute"></div>
            }
            <IoSearch className="text-2xl"/>
            <p className="text-sm font-bold select-none">Recherche</p>
        </div>
{/* 
        <div onClick={()=>navigateTo('/search')} className="text-gray-500 w-[80px] h-[80%]  flex flex-col justify-between items-center rounded-md">
            <RiLoginCircleLine className="text-2xl"/>
            <p className="text-sm font-bold select-none">Profile</p>
        </div> */}

        <div onClick={()=>getTheBecomeATaskerBox(!isTheBecomeATaskerBoxClicked)} 
            className="text-gray-500 flex w-[80px] h-[80%] flex-col justify-between items-center rounded-md relative">
                {
                    isTheBecomeATaskerBoxClicked
                    &&
                    <div className="w-[70%] h-[25px] bg-[#27a1b737] rounded-full absolute"></div>
                }
            <GrUserWorker className="text-2xl"/>
            <p className="text-sm font-bold select-none">Ouvrier</p>
        </div>
    </div>
  )
}

export default PhoneNavbar