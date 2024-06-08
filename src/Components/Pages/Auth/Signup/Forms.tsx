import { useMultistepForm } from "./useMultistepForm";
import Signup from "./Signup";
import Add_Infos_about_You from "./Add_Infos_about_You";
import Ocupations from "./Ocupations";
import { GoAlertFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
// import AddProjects from "./AddProjects";
import { FormEvent, useEffect, useState } from "react";
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
    cmpOccup: number[];
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
    cmpOccup: [],

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
    // sign up validation
    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if(currentStepIndex === 0){
            if (data.confirmPassword === data.password 
                && data.password.length >=6
                && data.firstName.length >=3
                && data.lastName.length >=3
                && data.phone.length >=10
              
            ) {
                next();
            } else {
                setProgress(0)
                setIsOpen(true);
            }
        }if(currentStepIndex === 1){
            if(data.description.length >=10 && data.userImage != null){
                next();
            }else{
                setIsOpen(true);
            }
        }else{
            if(data.occupations.length >=1){
                console.log("hhhhh");
                
            }else{
                setIsOpen(true);
            }
        }

    
    

    }

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [progress, setProgress] = useState(0);
  const duration = 2000; // 2 seconds in milliseconds

  useEffect(() => {
    const increment = () => {
        if(progress <= 100){

            setProgress((prev) => {
                if (prev <= 100) {
                    return prev + 1;
                } else {
                    const interval = setInterval(() => {
                        console.log("test");
                      }, 1000);
                  
                      // Cleanup function to clear the interval when the component unmounts
                      clearInterval(interval); 
                      return prev;
                       
                }
            });
        }else{
            setIsOpen(false);
        }
    }

    const timer = setTimeout(increment, duration / 100);
    
    return () => clearTimeout(timer);
  }, [progress]);

  
    
    return (
        <div className="md:w-[80%]   md:h-[120vh] h-[100vh] w-full  mx-auto mt-7 ">
            <ProcessSignup stepIndex={currentStepIndex} />
            
            {/* alert echec de l'inscription */}
            {isOpen ? <div className="fixed  inset-0 flex  justify-center z-50 bg-black bg-opacity-80">
                <div className="absolute w-[95vw] top-[20vh] m-auto rounded-t-xl opacity-[100%] bg-red-200 md:w-1/3 shadow-lg">
                    <div className="flex flex-col h-[14vh] sm:h-[18vh] items-center justify-center">
                        <p onClick={() => { setIsOpen(false) }} className="w-full flex text-2xl mr-6 justify-end cursor-pointer" >
                            <IoClose />
                        </p>
                        <h3 className="flex text-red-600 font-bold">
                            Echec de l'inscription <GoAlertFill />
                        </h3>
                        <p className="text-sm text-red-700">Veuillez remplir les informations nécessaires</p>
                    </div>
                    <div className="m-auto  bg-red-400 h-1">
                        <div style={{ width: `${progress-1}%`,  transition: 'width 0.1s ease-in-out'  }} className={` bg-red-800  h-1`}> </div>
                    </div>
                </div>
            </div> : ""}
            <form onSubmit={onSubmit} className="relative tab:w-[80%] w-[95%] lg:w-[100%] m-auto flex flex-col items-baseline justify-between ">
                {step}
                <div className={`${!isArabic ? "" : "flex  flex-row-reverse"}  lg:px-10 flex justify-between w-full bottom-0`}>
                    {!isFirst ? <button onClick={back} type="button"
                        className="md:px-8 py-1 px-4 lg:mx-4 transition-all ease-in-out md:py-1 duration-300 text-white mr-4 bg-blue-400 font-semibold md:text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">
                        {!isArabic ? "Back" : "الرجوع"}
                    </button> : <div />}
                    <div className={`${!isArabic ? "" : "flex flex-row-reverse"}`}>
                        {!isFirst && !isLast && <button type="button" onClick={next} className="md:px-8 py-1  px-4 lg:mx-4 transition-all ease-in-out md:py-1 duration-300 text-gray-500 mr-4 bg-gray-400 font-semibold md:text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">
                            {!isArabic ? "Skip" : "تخطي"}
                        </button>}
                        <button type="submit" className="md:px-8 py-1 px-4 lg:mx-4 transition-all ease-in-out md:py-1 duration-300 bg-teal500 text-white font-semibold md:text-xl hover:bg-[#414F5F] hover:text-white rounded-lg">{isLast ? (isArabic ? "إنهاء" : "Finich") : (!isArabic ? "Next" : "التالي")}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forms;
