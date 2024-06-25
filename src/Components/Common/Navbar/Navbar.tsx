import { RxFramerLogo } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowedContent from "./ShowedContent";
import PhoneNavbar from "./PhoneNavbar";
import { IoSearchSharp } from "react-icons/io5";
import RegesterBar from "./RegesterBar";
import { AppDispatch, RootState } from "../../Store/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setIsArabicLanguageSelected } from "../../Store/Slices/ChangeLanguageSlice";
import useAuth from "../../Custom/UseAuth";
import UserProfile from "./UserProfile";
import { TbLayoutGridAdd } from "react-icons/tb";


const Navbar = () => {

    // user token
    // The Slice For Change The Language
    const isAuth = useAuth()

    //get the url 
    const [currentUrl, setCurrentUrl] = useState<string>("")

    // to change the language icon
    const dispatch = useDispatch<AppDispatch>()
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    // To handle the guids part in the navbar by hide and show it throw the state below
    const [isQuidsClicked, setIsQuidsClicked] = useState<boolean>(false)

    const [isBecomeTaskerClicked, setIsBecomeTaskerClicked] = useState<boolean>(false)

    const navigate = useNavigate()

    // handle the guids part hide/show btn
    const showGuidsBox = () => {
        setIsQuidsClicked(!isQuidsClicked)
        // when the show is clicked and if the BecomeTasker btns are showen , we should hide it
        setIsBecomeTaskerClicked(false)
    }

    useEffect(() => {

        if (isBecomeTaskerClicked) {
            setIsQuidsClicked(false)
        }

    }, [isBecomeTaskerClicked])

    useEffect(() => {
        setCurrentUrl(window.location.href)
    }, [window.location.href])


    const showTaskerBtnRegester = () => {
        setIsBecomeTaskerClicked(!isBecomeTaskerClicked)
        setIsQuidsClicked(false)
    }

    // to go to the specific path in addition go to the top of the page
    const goTo = (path: string) => {
        window.scroll(0, 0)
        navigate(path)
    }


    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Check if user is scrolling up or down
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setNavbarVisible(false);
            } else {
                // Scrolling up
                setNavbarVisible(true);
            }

            setLastScrollTop(currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);


    return (
        <div className="w-full md:w-[70%] mx-auto relative z-50 bg-[#414E5F]">
            <div className="fixed mx-auto mt-5 w-full md:w-[70%] sm:shadow-xl mb-10">
                <div className="px-6 py-3 rounded-xl bg-transparent md:bg-[#d9e2ef] md:w-auto w-[50px]">
                    <div className="flex md:justify-between justify-end items-center">
                        <div onClick={() => goTo("/")} className="gap-2 items-center hidden md:flex cursor-pointer">
                            <RxFramerLogo className="text-4xl text-green-700" />
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
                                            className="cursor-pointer flex items-center gap-2 bg-teal-200 p-2 rounded-md" onClick={() => goTo("/search")}>
                                            {
                                                isArabicSelected
                                                    ? <p className="text-sm">بحث</p>
                                                    : <p className="font-normal">search</p>
                                            }
                                            <IoSearchSharp className="text-2xl" />
                                        </div>
                                    }
                                </ul>

                                {
                                    !isAuth
                                        ?
                                        <div onClick={showTaskerBtnRegester}>

                                            <button className="flex gap-3 justify-center items-center px-5 py-1 rounded-md font-bold text-white bg-[#199AFF]">
                                                <span>
                                                    <img src="/public/imgUsed/taskerAuth.png" className="w-[40px]" />
                                                </span>
                                                <span>{isArabicSelected ? "حرفي" : "Artisan"}</span>
                                            </button>
                                        </div>
                                        :
                                        <Link to={"/ajouter-projet"} className="flex gap-2 items-center bg-teal-600 py-2 px-3 mr-6 rounded-md font-semibold text-white">
                                            {
                                                isArabicSelected ? "أضف مشروعا" : "Ajouter un Projet"
                                            }
                                            <TbLayoutGridAdd className="text-xl"/>
                                        </Link>
                                        // <button className="flex gap-2 items-center bg-red-300 py-2 px-3 mx-6 rounded-md">
                                        //     {
                                        //         isArabicSelected ? "تسجيل الخروج" : "Se déconnecter"
                                        //     }
                                        //     <HiOutlineLogout className="text-xl"/>
                                        // </button>
                                }


                                <div>
                                    {/* Language Button */}
                                    <div
                                        onClick={() => dispatch(setIsArabicLanguageSelected({ isArabicSelected: !isArabicSelected }))}
                                        title="Change The Language"
                                        className="relative w-[100px] h-[40px] flex justify-between p-2 overflow-hidden items-center bg-slate-200 rounded-xl cursor-pointer">
                                        <div className="w-[30px] h-[30px] flex justify-center items-center">
                                            <span className="text-2xl font-extrabold select-none">ض</span>
                                        </div>
                                        <div className="w-[26px] h-[26px] flex justify-center items-center">
                                            <span className="text-2xl font-extrabold select-none">A</span>
                                        </div>

                                        <div className={`w-[50px] h-[38px] bg-blue-300 absolute top-0 ${isArabicSelected ? "left-0" : "left-[50px]"} flex justify-center items-center transition-all duration-400 ease-in-out`}>
                                            {
                                                isArabicSelected
                                                    ? <span className="text-2xl font-extrabold select-none">ض</span>
                                                    : <span className="text-2xl font-extrabold select-none">A</span>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {
                                isAuth
                                && <div className="md:block hidden relative">
                                    <div className="-top-2 left-7 w-[20px] h-[20px] rounded-full bg-red-600 absolute ">

                                    </div>
                                    <UserProfile />
                                </div>
                            }

                            {/* <div className="bg-[#d0d3dab6] p-2 rounded-md md:flex hidden cursor-pointer md:static absolute right-3"
                            onClick={showGuidsBox}
                        >   
                            <div>
                                 <PiVideoFill className="text-3xl font-bold text-sky-700"/>
                            </div>
                        </div> */}

                            <div className={`justify-between items-center absolute md:hidden mt-2 px-3 -ml-5 ${!navbarVisible && "hidden"}`}>
                                <div
                                    onClick={() => dispatch(setIsArabicLanguageSelected({ isArabicSelected: !isArabicSelected }))}
                                    title="Change The Language"
                                    className="relative w-[80px] h-[30px] flex justify-between p-2 overflow-hidden items-center bg-slate-200 rounded-xl cursor-pointer">
                                    <div className="w-[30px] h-[30px] flex justify-center items-center">
                                        <span className="font-extrabold select-none">ض</span>
                                    </div>
                                    <div className="w-[30px] h-[30px] flex justify-center  items-center">
                                        <span className="font-extrabold select-none ">A</span>
                                    </div>

                                    <div className={`w-[40px] h-[30px] bg-blue-300 absolute top-0 ${isArabicSelected ? "left-0" : "left-[40px]"} flex justify-center items-center transition-all duration-400 ease-in-out`}>
                                        {
                                            isArabicSelected
                                                ? <span className="font-extrabold select-none">ض</span>
                                                : <span className="font-extrabold select-none">A</span>
                                        }
                                    </div>

                                </div>
                            </div>

                            {/* <div className="w-full md:hidden flex justify-between items-center absolute mt-4 -ml-6 px-3">
                            <div className="flex items-center gap-2">
                                <SiHomebridge className="text-[30px] text-teal-500"/>
                                <p className="font-bold text-xl text-teal-500">Hrayfi</p>
                            </div>

                            <div className="bg-[#d0d3dab6] p-1 rounded-md">
                                 <PiVideoFill className="text-3xl font-bold text-sky-700"/>
                            </div>
                        </div> */}

                        </div>

                    </div>
                </div>
                {/* Content Of Guides */}
                <div className={`${isQuidsClicked ? "h-[500px] md:h-[250px] lg:h-[200px]" : "h-0"} transition-all -mt-20 md:-mt-3 duration-200 ease-in-out shadow-xl w-full bg-[#d9e2ef] overflow-hidden rounded-b-lg`}>
                    <ShowedContent />
                </div>

                {/* The Worker Btns to regester that Handle by setIsBecomeTaskerClicked state */}
                <div className={`w-full ${isBecomeTaskerClicked ? "h-[40vh] md:h-[140px]" : "h-0"} bg-[#d9e2ef] flex flex-col justify-center items-center rounded-b-md absolute left-0 shadow-lg -z-10 transition-all duration-200 ease-in-out overflow-hidden`}>
                    <RegesterBar />
                </div>

            </div>

            {/* Mobile navbar */}
            <div className={`fixed mx-auto ${navbarVisible ? "h-[60px]" : "h-0"} transition-max-h shadow-[0px_16px_47px_0px_#2d3748] ease-in-out duration-100 w-full bottom-0 overflow-hidden bg-white flex md:hidden`}>
                <PhoneNavbar getTheBecomeATaskerBox={setIsBecomeTaskerClicked} isTheBecomeATaskerBoxClicked={isBecomeTaskerClicked} />
            </div>


        </div>
    )
}

export default Navbar