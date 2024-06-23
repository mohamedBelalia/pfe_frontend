// import { useEffect, useState } from "react";
// import { FaCamera } from "react-icons/fa";
// import { MdVisibility } from "react-icons/md";
// import { MdVisibilityOff } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import Api from "../../../../api/Api";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineQueueList } from "react-icons/hi2";
import { GrUserWorker } from "react-icons/gr";
import { LuImagePlus } from "react-icons/lu";

// interface PROPSPopUp {
//     close: () => void,
//     id: number

// }
// interface Worker {
//     idOuvrier: string;
//     nomOuvrier: string;
//     prenomOuvrier: string;
//     phone: string;
//     imgProfile: string;
//     description_ouvrier: string
//     dateNaissance: string
//     ville: string
//     badge: string
// }
// interface WorkerDiplomes {
//     idDiplome: string;
//     labelleDiplome_FR: string;
//     labelleDiplome_AR: string;
// }
// interface City {
//     idVille: string;
//     ville_AR: string;
//     ville_FR: string;
// }

import React, { useState } from 'react'
import Progress from "../OtherInfos/Progress";
import { FaCity } from "react-icons/fa";
import Professions from "../../../Common/workerComponents/Professions";
import ChoiseCity from "../PopUps/ChoiseCity";



const PopUpCompleteAccount = () => {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const firstElementClick = () => {
        setFirst(true);
        setSecond(false);
        setThird(false);
        setFourth(false);


    }
    const secondElementClick = () => {
        setSecond(true);
        setFirst(false);
        setThird(false);
        setFourth(false);


    }
    const thirdElementClick = () => {
        setThird(true);
        setSecond(false);
        setFirst(false);
        setFourth(false);
    }
    const fourthElementClick = () => {
        setFourth(true);
        setThird(false);
        setSecond(false);
        setFirst(false);

    }
    return (

        <div className="absolute bg-white top-0 left-0 inset-0 container flex  h-[100vh]">
            <div className="w-1/3 px-4 mt-10">
                <Progress num={10} />
                <div className="flex flex-col -mt-2 text-teal-500 font-bold justify-center items-center mb-10">   Complétez votre compte</div>
                <article onClick={firstElementClick} className={`${first ? "bg-teal-400 text-teal-900" : ""} cursor-pointer hover:bg-teal-400 border pl-4 mt-6 rounded-md flex  bg-teal-100 text-teal-800  items-center text-lg font-semibold`}>
                    <IoMdPerson className="mx-2 h-12 text-2xl" /> Personel Information
                </article>
                <article onClick={secondElementClick} className={`${second ? "bg-teal-400 text-teal-900" : ""} cursor-pointer hover:bg-teal-400 border pl-4 mt-6 rounded-md flex  bg-teal-100 text-teal-800  items-center text-lg font-semibold`}>
                    <HiOutlineQueueList className=" text-2xl h-12 mx-2 " />
                    Description et l'image
                </article>
                <article onClick={thirdElementClick} className={`${third ? "bg-teal-400 text-teal-900" : ""} cursor-pointer hover:bg-teal-400 border pl-4 mt-6 rounded-md flex  bg-teal-100 text-teal-800  items-center text-lg font-semibold`}>
                    <GrUserWorker className="  text-2xl h-12 mx-2" />
                    Professions
                </article>
                <article onClick={fourthElementClick} className={`${fourth ? "bg-teal-400 text-teal-900" : ""} cursor-pointer hover:bg-teal-400 border pl-4 mt-6 rounded-md flex  bg-teal-100 text-teal-800  items-center text-lg font-semibold`}>
                    <FaCity className="  text-2xl h-12 mx-2" />
                    Ville
                </article>
            </div>
            {
                first ?
                    <div className="w-2/3 px-2 pt-12 h-[100vh] relative  bg-slate-300">
                        <div className="">
                            <article className="pl-2 cursor-pointer  text-teal-700 flex    items-center text-2xl font-semibold">
                                <IoMdPerson className="mx-2 h-10  text-4xl" /> Personel Information
                            </article>
                            <div className="flex flex-col  px-6 mt-4">
                                <label className="text-lg mt-4 text-blue-500 font-semibold" htmlFor="prenom">Prenom</label>
                                <input className="h-12 border-[1.5px] border-blue-500 rounded-md bg-gray-100" type="text" name="prenom" id="prenom" />

                                <label className="text-lg mt-4 text-blue-500 font-semibold" htmlFor="phone">Nom</label>
                                <input className="h-12   border-[1.5px] border-blue-500 rounded-md bg-gray-100" type="text" name="nom" id="nom" />

                                <label className="text-lg mt-4 text-blue-500 font-semibold" htmlFor="phone">Telephone</label>
                                <input className="h-12   border-[1.5px] border-blue-500 rounded-md bg-gray-100" type="text" name="phone" id="phone" />
                            </div>
                        </div>
                        <button className="absolute py-1 hover:bg-teal-800 left-1/3 w-1/3 bg-teal-600 rounded-md text-xl text-white bottom-20">Valider</button>

                    </div> : ""
            }
            {
                second ? <div className="w-2/3  pt-12 h-[100vh] relative px-8 bg-slate-300">
                    <article className=" cursor-pointer  text-teal-700 rounded-md flex    items-center text-2xl font-semibold">
                        <HiOutlineQueueList className="mr-2  h-10  text-4xl" /> Description et l'image
                    </article>
                    <div className="mx-1">
                        <label className="w-auto" htmlFor="img">
                            <p className="text-blue-500 w-auto  text-lg font-semibold">Image de Profile</p>
                            <LuImagePlus className="text-gray-600 m-auto w-auto mt-3 border-blue-400  px-12 border-[1.5px] rounded-md bg-gray-100 text-9xl"/>
                            <input type="file" id="img" hidden />
                        </label>
                        <p className="text-blue-500 mt-6  text-lg font-semibold">Description</p>
                        <textarea className="w-full bg-gray-100 border-[1.5px] border-blue-400 rounded-md" name="description" id="description" rows={6}></textarea>
                    </div>
                    <button className="absolute py-1 hover:bg-teal-800 left-1/3 w-1/3 bg-teal-600 rounded-md text-xl text-white bottom-20">Valider</button>

                </div> : ""
            }
            {
                third ? <div className="w-2/3  pt-12 h-[100vh] relative px-8 bg-slate-300">
                        <Professions occupations={[]} cmpOccup={[]} />
                    <button className="absolute py-1 hover:bg-teal-800 left-1/3 w-1/3 bg-teal-600 rounded-md text-xl text-white bottom-20">Valider</button>

                </div> : ""
            }
            {
                fourth ? <div className="w-2/3  pt-12 h-[100vh] relative pl-4 bg-slate-300">
                    <ChoiseCity />
                    <button className="absolute py-1 hover:bg-teal-800 left-1/3 w-1/3 bg-teal-600 rounded-md text-xl text-white bottom-20">Valider</button>

                </div> : ""
            }
        </div>
    )
}

export default PopUpCompleteAccount