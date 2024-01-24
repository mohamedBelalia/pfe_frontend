import { RiAccountCircleLine } from "react-icons/ri"
import { TbLogout } from "react-icons/tb"
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";

const PhoneNavbar = () => {
  return (
    <div className="flex items-center justify-between w-full">

        <Link to="/" className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <AiFillHome className="text-2xl"/>
            Home
        </Link>

        <Link to="/search" className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <IoSearchSharp className="text-2xl"/>
            Search
        </Link>

        <Link to="/Signup" className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <RiAccountCircleLine className="text-2xl"/>
            Signup
        </Link>

        <Link to="/Login" className="w-[80px] p-2 flex flex-col justify-between items-center rounded-md">
            <TbLogout className="text-2xl"/>
            Login
        </Link>
    </div>
  )
}

export default PhoneNavbar