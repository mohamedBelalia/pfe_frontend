import { RxFramerLogo , RxHamburgerMenu , RxCross1 } from "react-icons/rx";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ShowedContent from "./ShowedContent";
import PhoneNavbar from "./PhoneNavbar";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {

    // To handle the guids part in the navbar by hide and show it throw the state below
    const [isQuidsClicked , setIsQuidsClicked] = useState<boolean>(false)

    const [isBecomeTaskerClicked , setIsBecomeTaskerClicked] = useState<boolean>(false)

    const taskerRegesterBtnsPopupRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        const taskerBtnsClickOutSide = (event: MouseEvent): void => {
            if (taskerRegesterBtnsPopupRef.current && !taskerRegesterBtnsPopupRef.current.contains(event.target as Node)) {
              setIsBecomeTaskerClicked(false)
            }
          };

          document.addEventListener('click' , taskerBtnsClickOutSide)

          return () => {removeEventListener('click' , taskerBtnsClickOutSide)}

    },[])

    const navigate = useNavigate()

    // handle the guids part hide/show btn
    const showGuidsBox = ()=>{
        setIsQuidsClicked(!isQuidsClicked)
        // when the show is clicked and if the BecomeTasker btns are showen , we should hide it
        setIsBecomeTaskerClicked(false) 
    }


    const showTaskerBtnRegester = () => {
        setIsBecomeTaskerClicked(!isBecomeTaskerClicked)
        setIsQuidsClicked(false)
    }

    // to go to the specific path in addition go to the top of the page
    const goTo = (path : string) => {
        window.scroll(0,0)
        navigate(path)
    }

  return (
    <div className="w-[90%] md:w-[70%] mx-auto relative z-50 bg-[#414E5F]">
        <div className="fixed mx-auto mt-5 w-[90%] md:w-[70%] sm:shadow-xl mb-10">
            <div className="px-6 py-5 rounded-xl bg-transparent md:bg-white md:w-auto w-[50px]">
                <div className="flex md:justify-between justify-end items-center">
                    <div onClick={()=>goTo("/")} className="gap-2 items-center hidden md:flex cursor-pointer">
                        <RxFramerLogo className="text-4xl text-green-700"/>
                        <p className="text-xl text-green-700">Tasker</p>
                    </div>
                   
                    <div className="flex items-center gap-6">
                        
                        {/* Grouping The ul and the "Become a tasker" btn to make the respnsive mechanism easy */}
                        <div className="items-center gap-6 hidden md:flex">
                            <ul className="flex items-center gap-6 font-bold text-base text-[#414E5F]">
                                <div className="cursor-pointer" onClick={()=>goTo("/Signup")}>Signup</div>
                                <div className="cursor-pointer" onClick={()=>goTo("/Login")}>Login</div>
                                <div className="cursor-pointer" onClick={()=>goTo("/search")}><IoSearchSharp className="text-2xl"/></div>
                            </ul>
                            <div ref={taskerRegesterBtnsPopupRef} onClick={showTaskerBtnRegester}>
                                <Button label="Become a tasker" bg="#199AFF" color="white"/>
                            </div>
                        </div>

                        <div className="bg-[#d0d3dab6] p-2 rounded-md cursor-pointer md:static absolute right-0"
                            onClick={showGuidsBox}
                        >   
                        {
                            isQuidsClicked ? 
                            <RxCross1 className="text-3xl font-bold text-[#020409]"/>
                            :
                            <RxHamburgerMenu className="text-3xl font-bold text-[#020409]"/>
                        }
                        </div>

                    </div>

                </div>
            </div>
            {/* Content Of Guides */}
            <div className={`${isQuidsClicked ? "h-[500px] md:h-[250px] lg:h-[200px]" : "h-0"} transition-all -mt-20 md:-mt-3 duration-200 ease-in-out shadow-xl w-full bg-white overflow-hidden rounded-b-lg`}>
                    <ShowedContent/>
            </div>

            {/* The Worker Btns to regester that Handle by setIsBecomeTaskerClicked state */}
            <div className={`w-full ${isBecomeTaskerClicked ? "h-[140px]" : "h-0"} bg-teal-50 rounded-b-md absolute left-0 shadow-lg -z-10 transition-all duration-200 ease-in-out`}>
                        
            </div>

        </div>

        {/* Mobile navbar */}
        <div className="fixed border border-green-600 mx-auto p-2 h-[70px] w-[90%] bottom-0 mb-4 shadow-xl bg-white rounded-md flex md:hidden">
            <PhoneNavbar/>
        </div>


    </div>
  )
}

export default Navbar