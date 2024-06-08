import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
import { TbStars } from "react-icons/tb";
import EditProfile from "../PopUps/EditProfile";

const Card = () => {

    const isArabic = true;
    const Occupations = (props: { text: string }) => {
        return (
            <div className=" m-2 px-4 py-1 border-2  border-teal500 bg-gray-300  rounded-full">{props.text}</div>
        )
    }

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (


        <div className={`${isArabic?"flex flex-col items-end":""}  p-6 w-full m-auto sm:w-[70%] tab:w-[35vw] md:w-[30vw] pb-6 mb-3 border text-center  rounded-md`}>

            <EditProfile isOpen={isOpen} onClose={togglePopup} />
            <div onClick={togglePopup} className={ `${isArabic?"flex-row-reverse":""} flex cursor-pointer  text-blue500`}>
                <IoMdSettings />
                <div className='-mt-1 font-semibold mx-1'>{isArabic ? "تعديل الملف الشخصي" : "Edit Profile"}</div>

            </div>
            <img className=' w-32 md:w-32 m-auto mt-6 mb-3 rounded-full ' src="imgUsed\portrait-man-laughing.jpg" alt="" />
            <div className="text-teal500 w-full text-lg md:text-xl font-semibold flex justify-center pb-4">
                <div >{!isArabic ? "Ahmed Akrami" : "أحمد أكرم"}</div>

                <TbStars className="ml-3  text-yellow-500" />
            </div>
            <div className={`${isArabic ? "rtl" : ""} `}>
                {!isArabic?"Je me ferai un plaisir de vous aider et de tout faire rapidement et efficacement. J'aime mon travail et j'aime aider les gens."
                :" سأكون سعيدًا بمساعدتك والقيام بكل شيء بسرعة وكفاءة. أحب عملي وأحب مساعدة الناس."}
            </div>

            {/* <div className={`${isArabic:"rtl"}`}>I will be happy to help you and do everything quickly and efficiently. I like my job and I like helping people</div> */}
            <div className={`${isArabic?"flex flex-col  items-end":""}`}>
                <div className="font-semibold ml-1 mt-5 text-teal500 text-left">{isArabic? "المهن" : "Occupations"}</div>

                <div className={`${isArabic?"justify-end":""} flex  flex-wrap`}>
                    <Occupations text={"Plumber"} />
                    <Occupations text={"Builder"} />
                    <Occupations text={"Hv Technician"} />

                </div>
            </div>
        </div>
        // <div className='p-6   pb-6 mb-3 border text-center  rounded-md'>

        //     <EditProfile isOpen={isOpen} onClose={togglePopup} />
        //     <div onClick={togglePopup} className='flex justify-end font-bold w-full  cursor-pointer text-blue500 '>
        //         <div className='-mt-1.5 mr-1'>تعديل الملف</div>
        //         <IoMdSettings />
        //     </div>
        //     <img className=' w-32 md:w-32 m-auto mt-6 mb-3 rounded-full ' src="public\imgUsed\portrait-man-laughing.jpg" alt="" />
        //     <div className="text-teal500 text-lg md:text-xl font-semibold flex justify-center pb-4">
        //         <div >أحمد أكرم </div>
        //         <TbStars className="ml-3  text-yellow-500" />
        //     </div>
        //     <div className="text-sm md:text-md w-72 m-auto text-600 font-semibold text-gray700">سأكون سعيدًا بمساعدتك والقيام بكل شيء بسرعة وكفاءة. أحب عملي وأحب مساعدة الناس</div>
        //     <div>
        //         <div className="font-semibold ml-1 mt-5 text-teal500 text-right">المهن</div>
        //         <div className="flex justify-end flex-wrap">
        //             <Occupations text={"سباك"} />
        //             <Occupations text={"بناء"} />
        //             <Occupations text={"نجار الخشب"} />

        //         </div>
        //     </div>
        // </div>

    )
}

export default Card