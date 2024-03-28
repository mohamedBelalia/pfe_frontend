import { RxFramerLogo , RxHamburgerMenu , RxCross1 } from "react-icons/rx";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowedContent from "./ShowedContent";
import PhoneNavbar from "./PhoneNavbar";
import { IoSearchSharp } from "react-icons/io5";
import RegesterBar from "./RegesterBar";
import { AppDispatch, RootState } from "../../Store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsArabicLanguageSelected } from "../../Store/Slices/ChangeLanguageSlice";
import { PiVideoFill } from "react-icons/pi";

const Navbar = () => {

    //get the url 
    const [currentUrl , setCurrentUrl] = useState<string>("")

    // to change the language icon
    const dispatch = useDispatch<AppDispatch>()
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    // To handle the guids part in the navbar by hide and show it throw the state below
    const [isQuidsClicked , setIsQuidsClicked] = useState<boolean>(false)

    const [isBecomeTaskerClicked , setIsBecomeTaskerClicked] = useState<boolean>(false)

    const navigate = useNavigate()

    // handle the guids part hide/show btn
    const showGuidsBox = ()=>{
        setIsQuidsClicked(!isQuidsClicked)
        // when the show is clicked and if the BecomeTasker btns are showen , we should hide it
        setIsBecomeTaskerClicked(false) 
    }

    useEffect(()=>{

        if(isBecomeTaskerClicked){
            setIsQuidsClicked(false)
        }

    },[isBecomeTaskerClicked])

    useEffect(()=>{
        setCurrentUrl(window.location.href)
    },[window.location.href])

    console.log(currentUrl);
    

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
                                {
                                    currentUrl != "http://localhost:5173/"
                                    &&
                                    <div title="Find the best worker for your task" 
                                        className="cursor-pointer flex items-center gap-2 bg-teal-200 p-2 rounded-md" onClick={()=>goTo("/search")}>
                                    {
                                        isArabicSelected 
                                        ? <p className="text-sm">بحث</p> 
                                        :  <p className="font-normal">search</p> 
                                        }
                                        <IoSearchSharp className="text-2xl"/>
                                    </div>
                                }
                            </ul>
                            <div onClick={showTaskerBtnRegester}>
                                
                                <button className="flex gap-3 justify-center items-center px-5 py-2 rounded-md font-bold text-white bg-[#199AFF]">
                                    <span>
                                    <img src="./public/imgUsed/taskerAuth.png" className="w-[40px]" />
                                    </span>
                                    <span>{isArabicSelected ? "كن حرفيي" : "Devenir un artisan"}</span>
                                </button>
                               
                            </div>
                            <div>
                                {/* Language Button */}
                                <div 
                                    onClick={()=>dispatch(setIsArabicLanguageSelected({isArabicSelected : !isArabicSelected}))}
                                    title="Change The Language" 
                                    className="relative w-[100px] h-[40px] flex justify-between p-2 overflow-hidden items-center bg-slate-200 rounded-xl cursor-pointer">
                                    <div className="w-[30px] h-[30px]">
                                        <img src="./icons/Ar.png" alt="" className="w-full h-full select-none" />
                                    </div>
                                    <div className="w-[26px] h-[26px]">
                                        <img src="./icons/Fr.png" alt="" className="w-full h-full select-none" />
                                    </div>

                                    <div className={`w-[50px] h-[38px] bg-blue-300 absolute top-0 ${isArabicSelected ? "left-0" : "left-[50px]"} flex justify-center items-center transition-all duration-400 ease-in-out`}>
                                        {
                                            isArabicSelected 
                                            ? <img src="./icons/Ar.png" alt="" className="select-none w-[26px] h-[26px]" />
                                            : <img src="./icons/Fr.png" alt="" className="select-none w-[26px] h-[26px]" />
                                        }
                                    </div>
                                
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#d0d3dab6] p-2 rounded-md cursor-pointer md:static absolute right-0"
                            onClick={showGuidsBox}
                        >   
                            <div>
                            {/* {   
                                isQuidsClicked ? 
                                <RxCross1 className="text-3xl font-bold text-[#020409]"/>
                                :
                                <RxHamburgerMenu className="text-3xl font-bold text-[#020409]"/>
                            } */}
                                 <PiVideoFill className="text-3xl font-bold text-sky-700"/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* Content Of Guides */}
            <div className={`${isQuidsClicked ? "h-[500px] md:h-[250px] lg:h-[200px]" : "h-0"} transition-all -mt-20 md:-mt-3 duration-200 ease-in-out shadow-xl w-full bg-white overflow-hidden rounded-b-lg`}>
                    <ShowedContent />
            </div>

            {/* The Worker Btns to regester that Handle by setIsBecomeTaskerClicked state */}
            <div className={`w-full ${isBecomeTaskerClicked ? "h-[40vh] md:h-[140px]" : "h-0"} bg-teal-50 flex flex-col justify-center items-center rounded-b-md absolute left-0 shadow-lg -z-10 transition-all duration-200 ease-in-out overflow-hidden`}>
                <RegesterBar/>
            </div>

        </div>

        {/* Mobile navbar */}
        <div className="fixed border border-green-600 mx-auto p-2 h-[70px] w-[90%] bottom-0 mb-2 shadow-xl bg-white rounded-md flex md:hidden">
            <PhoneNavbar getTheBecomeATaskerBox={setIsBecomeTaskerClicked} isTheBecomeATaskerBoxClicked={isBecomeTaskerClicked}/>
        </div>


    </div>
  )
}

export default Navbar