import { useMultistepForm } from "./useMultistepForm";
import Signup from "./Signup";
import Add_Infos_about_You from "./Add_Infos_about_You";
import Ocupations from "./Ocupations";
// import AddProjects from "./AddProjects";
import { FormEvent, useState } from "react";
import ProcessSignup from "./ProcessSignup";

type FormData = {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    confirmPassword: string;
    userImage: File | null;
    description: string;
    occupations: string[];
}

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userImage: null,
    description: "",
    occupations: [],
 
};

const Forms = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const isArabic = false;
    const { currentStepIndex, step, isFirst, isLast, back, next } = useMultistepForm([
        <Signup {...data} updateFields={updateFields} />,
        <Add_Infos_about_You {...data} updateFields={updateFields} />,
        <Ocupations {...data} updateFields={updateFields} />,

    ]);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => ({
            ...prev,
            ...fields
        }));
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (data.confirmPassword === data.password) {
            next();
        }
        console.log(data);
        
    }

    return (
        <div className="md:w-[80%]    h-[100vh] w-full  mx-auto mt-7 ">
            <ProcessSignup stepIndex={currentStepIndex} />
            <form onSubmit={onSubmit} className="relative tab:w-[80%]   w-[95%]  lg:w-[100%] m-auto flex flex-col items-baseline justify-between h-[70vh]">
                {step}
                <div className={`${!isArabic?"":"flex  flex-row-reverse"}  lg:px-10 flex justify-between w-full bottom-0`}>
                    {!isFirst ? <button onClick={back} type="button" 
                    className="md:px-8 py-1 px-4 lg:mx-4 transition-all ease-in-out md:py-1 duration-300 text-white mr-4 bg-blue-400 font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">
                        {!isArabic?"Back":"الرجوع"}
                    </button> : <div />}
                    <div className={`${!isArabic?"":"flex flex-row-reverse"}`}>
                        {!isFirst && <button type="button" onClick={next} className="md:px-8 py-1 px-4 lg:mx-4 transition-all ease-in-out md:py-1 duration-300 text-gray-500 mr-4 bg-gray-400 font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">
                            {!isArabic?"Skip":"تخطي"}
                            </button>}
                        <button type="submit" className="md:px-8 py-1 px-4 lg:mx-4 transition-all ease-in-out md:py-1 duration-300 bg-teal500 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">{isLast ? (isArabic?"إنهاء":"Finich") : (!isArabic?"Next":"التالي")}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forms;
