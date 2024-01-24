import { RxFramerLogo , RxHamburgerMenu , RxCross1 } from "react-icons/rx";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShowedContent from "./ShowedContent";
import PhoneNavbar from "./PhoneNavbar";

const Navbar = () => {

    const [isClicked , setIsClicked] = useState<boolean>(false)

    const showNavBox = ()=>{
        setIsClicked(!isClicked)
    }

  return (
    <div className="w-[90%] md:w-[70%] mx-auto relative ">
        <div className="fixed mx-auto mt-5 w-[90%] md:w-[70%] sm:shadow-xl">
            <div className="px-6 py-5 rounded-xl bg-transparent md:bg-white">
                <div className="flex md:justify-between justify-end items-center">
                    <div className="gap-2 items-center hidden md:flex cursor-pointer">
                        <RxFramerLogo className="text-4xl text-green-700"/>
                        <p className="text-xl text-green-700">Tasker</p>
                    </div>
                   
                    <div className="flex items-center gap-6">
                        
                        {/* Grouping The ul and the "Become a tasker" btn to make the respnsive mechanism easy */}
                        <div className="items-center gap-6 hidden md:flex">
                            <ul className="flex items-center gap-6 font-bold text-base text-[#414E5F]">
                                <Link to="/Signup">Signup</Link>
                                <Link to="/Login">Login</Link>
                            </ul>
                            <Button label="Become a tasker" bg="#199AFF" color="white"/>
                        </div>

                        <div className="bg-[#D0D3DA] p-2 rounded-md cursor-pointer"
                            onClick={showNavBox}
                        >   
                        {
                            isClicked ? 
                            <RxCross1 className="text-3xl font-bold text-[#020409]"/>
                            :
                            <RxHamburgerMenu className="text-3xl font-bold text-[#020409]"/>
                        }
                        </div>

                    </div>

                </div>
            </div>
            {/* Content Of Guides */}
            <div className={`${isClicked ? "h-[500px] md:h-[250px] lg:h-[200px]" : "h-0"} transition-all -mt-24 md:-mt-3 duration-200 ease-in-out w-full bg-white overflow-hidden rounded-b-lg`}>
                    <ShowedContent/>
            </div>

        </div>

        {/* Mobile navbar */}
        <div className="fixed mx-auto p-2 h-[70px] w-[90%] bottom-0 mb-8 shadow-xl bg-white rounded-md flex md:hidden">
            <PhoneNavbar/>
        </div>

    </div>
  )
}

export default Navbar