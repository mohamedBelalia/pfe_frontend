import { useMultistepForm } from "./useMultistepForm";
import Signup from "./Signup";
import Add_InfosAbout_You from "./Add_InfosAbout_You";
import Ocupations from "./Ocupations";
import AddProjects from "./AddProjects";
import { FormEvent, useState } from "react";

type FormData = {
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
    confirmPassword: string,
    userImage: string,
    description: string,
    occupations: string[],
    projects:[ {
        proTitle: string,
        proDescription: string,
        proImage: File,
    }]
}

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userImage: "",
    description: "",
    occupations: [],
    projects: [{
        proTitle: "",
        proDescription: "",
        proImage: new File([], 'emptyFile') // Assuming proImage is of type File
    }]
};

const Forms = () => {
    const [data, setData] = useState(INITIAL_DATA)

    const { steps, currentStepIndex, step, isFirst, isLast, back, next } = useMultistepForm([ 
        // <Signup {...data} updateFields={updateFields} />,
        // <Add_InfosAbout_You  />,
        // <Ocupations occupations={data.occupations} updateFields={updateFields} />,
        <AddProjects  />,
    ])

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return {...prev, ...fields}
        })
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        next();
    }

    return (
        <form onSubmit={onSubmit} className="relative w-full h-[400px]">
            {step}
            <div className="absolute flex justify-between w-full bottom-0">
                {!isFirst ? <button onClick={back} type="submit" className="px-8 transition-all ease-in-out py-1 duration-300 bg-blue-400 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">Back</button> : <button />}
                <div>
                    {!isFirst && <button onClick={next} className="px-8 mr-4 transition-all ease-in-out py-1 duration-300 bg-gray-300 text-gray-400 font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">Skip</button>}
                    <button type="submit" className="px-8 transition-all ease-in-out py-1 duration-300 bg-teal500 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">{isLast ? "Finish" : "Next"}</button>
                </div>
            </div>
        </form>
    )
}

export default Forms;
