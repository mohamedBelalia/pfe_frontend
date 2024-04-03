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
    const { currentStepIndex, step, isFirst, isLast, back, next } = useMultistepForm([
        <Signup {...data} updateFields={updateFields} />,
        <Add_Infos_about_You {...data} updateFields={updateFields} />,
        <Ocupations {...data} updateFields={updateFields} />,
        // <AddProjects {...data} updateFields={updateFields} />,
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
    }

    return (
        <div className="md:h-[100%] w-full md:w-[85%] tab:w-[70%] m-auto  justify-center  items-center  mb-6 flex-col ">
            <ProcessSignup stepIndex={currentStepIndex} />
            <form onSubmit={onSubmit} className="relative w-full h-[600px]">
                {step}
                <div className="absolute px-10 flex justify-between w-full bottom-0">
                    {!isFirst ? <button onClick={back} type="button" className="md:px-8  px-4 transition-all ease-in-out md:py-1 duration-300 bg-blue-400 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">Back</button> : <div />}
                    <div>
                        {!isFirst && <button type="button" onClick={next} className="md:px-8 px-4 mr-4 transition-all ease-in-out md:py-1 duration-300 bg-gray-300 text-gray-400 font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">Skip</button>}
                        <button type="submit" className="md:px-8 px-4 transition-all ease-in-out md:py-1 duration-300 bg-teal500 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">{isLast ? "Finish" : "Next"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forms;
