import { GrUserWorker } from "react-icons/gr";
import { useNavigate } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";


type PhoneNavbarTypes = {
    getTheBecomeATaskerBox : (isClicked : boolean) => void ,
    isTheBecomeATaskerBoxClicked : boolean 
}

const PhoneNavbar = ({getTheBecomeATaskerBox , isTheBecomeATaskerBoxClicked}:PhoneNavbarTypes) => {

    const navigate = useNavigate()

    const navigateTo = (path:string) =>{
        // using window.scroll(0,0) to ensure that when we reach the page we go to the top of it
        window.scroll(0,0)
        navigate(path)
    }

  return (
    <div className="flex items-center justify-between w-full z-50">
        <div onClick={()=>navigateTo('/')} className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <AiFillHome className="text-2xl"/>
            <p className="text-sm">Home</p>
        </div>

        <div onClick={()=>navigateTo('/search')} className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <IoSearchSharp className="text-2xl"/>
            <p className="text-sm">Search</p>
        </div>

        <div onClick={()=>getTheBecomeATaskerBox(!isTheBecomeATaskerBoxClicked)} 
            className={`w-1/2 p-2 flex flex-col justify-between items-center rounded-md 
                ${!isTheBecomeATaskerBoxClicked ? 'bg-sky-200' : 'bg-sky-300'}`}>
            <GrUserWorker className="text-2xl"/>
            <p className="text-sm">Become a Tasker</p>
        </div>
    </div>
  )
}

export default PhoneNavbar