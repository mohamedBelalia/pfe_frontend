import { RxFramerLogo } from "react-icons/rx"
import { FaFacebookF , FaWhatsapp , FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="zelijeBg">
        <div className="w-full h-full bg-[#414e5fee] text-white pb-40 md:pb-10 pt-16">

        <div className="md:w-[90%] mx-auto px-5 flex flex-col md:flex-row justify-between gap-10 md:gap-4">

            <div className="md:w-1/4 flex flex-col items-center md:items-start gap-4">
                <div className="flex items-center gap-1">
                    <RxFramerLogo className="text-[70px] text-green-400"/>
                    <h1 className="text-[30px] font-bold text-green-400">Tasker</h1>
                </div>
                <div className="md:w-[80%] text-center md:text-start">
                    <p className="text-[#e1e3e8]">
                        <span className="text-green-400">Tasker</span> The Best Platform to Find 
                        Your Talnted Tasker Easyer
                    </p>
                </div>
            </div>
            <div className="md:w-1/4 md:text-center">
                <h1 className="font-bold text-xl mb-5">Contact Info</h1>
                <ul className="flex flex-col gap-2 text-[#e1e3e8]">
                    <li>Marrakech Azli BTS Mohamed 6</li>
                    <li>Email : tasker@gmail.com</li>
                    <li>Phone +212 714672587</li>
                </ul>
                <div className="md:w-[60%] mx-auto mt-4 flex justify-start gap-4 md:gap-0 md:justify-around">
                    <div className="w-[40px] h-[40px] hover:bg-white hover:text-[#414E5F] cursor-pointer border-2 border-white rounded-full flex justify-center items-center">
                        <FaFacebookF className="text-[20px]"/>
                    </div>
                    <div className="w-[40px] h-[40px] hover:bg-white hover:text-[#414E5F] cursor-pointer border-2 border-white rounded-full flex justify-center items-center">
                        <FaWhatsapp className="text-[20px]"/>
                    </div>
                    <div className="w-[40px] h-[40px] hover:bg-white hover:text-[#414E5F] cursor-pointer border-2 border-white rounded-full flex justify-center items-center">
                        <FaInstagram className="text-[20px]"/>
                    </div>
                </div>
            </div>
            <div className="md:w-1/4 md:text-center">
                <h1 className="font-bold text-xl mb-5">Help</h1>
                <ul className="flex flex-col gap-2 text-[#e1e3e8]">
                    <li>How to Be a Tasker ?</li>
                    <li>How to Find a Tasker ?</li>
                    <li>More Guides</li>
                </ul>
            </div>
            <div className="md:w-1/4 md:text-center">
                <h1 className="font-bold text-xl mb-5">Account</h1>
                <ul className="flex flex-col gap-2 text-[#e1e3e8]">
                    <li>Sign up</li>
                    <li>Login</li>
                </ul>
            </div>

        </div>

        <hr className="w-[80%] h-[1px] my-8 mx-auto bg-gray-400"/>
            <p className="text-center text-[#cacaca]">
                Copyright &copy;2024 All Rights Reseved
            </p>
        </div>
    </footer>
  )
}

export default Footer