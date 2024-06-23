import { useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { HiOutlineQueueList } from "react-icons/hi2";
import { GrUserWorker } from "react-icons/gr";
import { LuImagePlus } from "react-icons/lu";
import { FaCity } from "react-icons/fa";
import Progress from "../OtherInfos/Progress";
import ChoiseCity from "../PopUps/ChoiseCity";
import ChoiseOccupations from "../PopUps/ChoiseOccupations";

const PopUpCompleteAccount = ({ onCloseComp }) => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Personel Information",
            icon: <IoMdPerson className="mx-2 h-12 text-2xl" />,
            content: (
                <div className="flex bg-red-300 flex-col md:px-6 md:mt-4">
                    <label className="text-lg mt-4 text-blue-700 font-semibold" htmlFor="prenom">Prenom</label>
                    <input className="h-12 border-[1.5px] focus:border-blue-500 border-blue-500 rounded-md bg-gray-100" type="text" name="prenom" id="prenom" />
                    <label className="text-lg mt-4 text-blue-700 font-semibold" htmlFor="nom">Nom</label>
                    <input className="h-12 border-[1.5px] border-blue-700 rounded-md bg-gray-100" type="text" name="nom" id="nom" />
                    <label className="text-lg mt-4 text-blue-700 font-semibold" htmlFor="phone">Telephone</label>
                    <input className="h-12 border-[1.5px] border-blue-700 rounded-md bg-gray-100" type="text" name="phone" id="phone" />
                </div>
            ),
        },
        {
            title: "Description et l'image",
            icon: <HiOutlineQueueList className="text-2xl h-12 mx-2" />,
            content: (
                <div className="mx-1 px-6 ">
                    <label className="w-auto" htmlFor="img">
                        <p className="text-blue-700 w-auto text-lg font-semibold">Image de Profile</p>
                        <LuImagePlus className="text-gray-600 m-auto w-auto mt-3 border-blue-400 px-12 border-[1.5px] rounded-md bg-gray-100 text-9xl" />
                        <input type="file" id="img" hidden />
                    </label>
                    <p className="text-blue-700 mt-6 mb-2 text-xl font-semibold">Description</p>
                    <textarea className="w-full bg-gray-100 border-[1.5px] border-blue-400 rounded-md" name="description" id="description" rows={6}></textarea>
                </div>
            ),
        },
        {
            title: "Professions",
            icon: <GrUserWorker className="text-2xl h-12 mx-2" />,
            content: (
                <div className='px-6 '>
                    <p className="text-blue-700  mt-6 text-lg font-semibold">Sélectionnez vos professions</p>
                    <ChoiseOccupations />
                </div>
            ),
        },
        {
            title: "Ville",
            icon: <FaCity className="text-2xl h-12 mx-2" />,
            content: (
                <div className=' px-6'>
                    <p className="text-blue-700  mt-6 text-lg font-semibold">Entrez votre ville</p>
                    <ChoiseCity />
                </div>
            ),
        },
    ];

    const renderStepContent = () => {
        return (
            <div className="md:w-2/3  md:px-2 md:pt-12 h-[100vh] relative w-full bg-slate-300">
                <article className="pl-2 cursor-pointer text-teal-700  flex items-center text-2xl font-semibold">
                    {steps[activeStep].icon} {steps[activeStep].title}
                </article>
                {steps[activeStep].content}
                <button className="absolute py-1 hover:bg-teal-800 left-1/3 w-1/3 bg-teal-600 rounded-md text-xl text-white bottom-10">
                    Valider
                </button>
            </div>
        );
    };

    return (
        <div className="fixed z-50  inset-0 items-center justify-center bg-slate-400 md:bg-black md:bg-opacity-70">
            <div className="absolute  md:flex-row flex-col z-50 inset-0 bg-hite container flex h-[100vh]">
                <div className="md:w-1/3  flex flex-col-reverse  md:flex-col w-full md:px-4 md:mt-10">
                    <div> 
                        {/* <Progress num={10} /> */}
                        {/* <div className="flex  md:flex-col -mt-2 text-teal-700 font-bold justify-center items-center mb-10">Complétez votre compte</div> */}
                    </div> 
                    <div className='flex bg-teal-400 w-full md:flex-col'>
                        {steps.map((step, index) => (
                            <article

                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`${activeStep === index ? "  bg-slate-300 text-teal-900" : ""} m-auto cursor-pointer hover:bg-teal-100 md:border px-3 md:pl-4 mt-6 rounded-t-md md:rounded-md flex  text-teal-800 items-center text-lg font-semibold`}
                            >
                                {step.icon} <p className='hidden md:flex'>{step.title}</p>
                            </article>
                        ))}
                    </div>
                </div>
                {renderStepContent()}
            </div>
        </div>
    );
};

export default PopUpCompleteAccount;
