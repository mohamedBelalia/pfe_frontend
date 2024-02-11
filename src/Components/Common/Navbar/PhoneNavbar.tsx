import { RiAccountCircleLine } from "react-icons/ri"
import { TbLogout } from "react-icons/tb"
import { Link, useNavigate } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";

const PhoneNavbar = () => {

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
            Home
        </div>

        <div onClick={()=>navigateTo('/search')} className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <IoSearchSharp className="text-2xl"/>
            Search
        </div>

        <div onClick={()=>navigateTo('/Signup')} className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <RiAccountCircleLine className="text-2xl"/>
            Signup
        </div>

        <div onClick={()=>navigateTo('/Login')} className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <TbLogout className="text-2xl"/>
            Login
        </div>
    </div>
  )
}

export default PhoneNavbar