import { IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
import { TbStars } from "react-icons/tb";
import Api from "../../../../api/Api";
import PopUpCompleteAccount from "../ComplateAcount/PopUpCompleteAccount";
import { Config } from "../Local_Variables";

interface Worker {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    phone: string;
    imgProfile: string;
    description_ouvrier: string;
    // experience: string;
}

interface Profession {
    idProfession: number;
    labelleProfession_AR: string;
    labelleProfession_FR: string;
}

const Card = () => {
    const [worker, setWorker] = useState<Worker | null>(null);
    const [professions, setProfessions] = useState<Profession[]>([]);
    // const [idNum, setIdNum] = useState<number>(0);
    const isArabic = false;

    const Occupations = (props: { text: string; keyProf: string }) => {
        return (
            <div key={props.keyProf} className="m-2 px-4 py-1 border-2 border-teal500 bg-gray-300 rounded-full">
                {props.text}
            </div>
        );
    };

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchWorkerAndProfessions = async () => {
            try {
                const workerResponse = await Api.get<Worker[]>("workers?id=1");
                const workerData = workerResponse.data[0];
                setWorker(workerData);
                // setIdNum(Number(workerData.idOuvrier));

                const professionsResponse = await Api.get<Profession[]>(`professions?workerId=${workerData.idOuvrier}`);
                setProfessions(professionsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchWorkerAndProfessions();
    }, []);

    return (
        <div className={`${isArabic ? "flex flex-col items-end" : ""} p-6 w-full m-auto sm:w-[70%] tab:w-[400px] pb-6 mb-3 border text-center rounded-md`}>
            {isOpen ? <PopUpCompleteAccount idWorker="15" onCloseComp={togglePopup} /> : ""}
            <div onClick={togglePopup} className={`${isArabic ? "flex-row-reverse" : ""} flex cursor-pointer text-blue500`}>
                <IoMdSettings />
                <div className="-mt-1 font-semibold mx-1">{isArabic ? "تعديل الملف الشخصي" : "Editer le profile"}</div>
            </div>
            
            <img className="w-32 md:w-32 m-auto mt-6 mb-3 rounded-full" src={Config.BaseImagesPath_Profiles + worker?.imgProfile} alt="" />
            <div className="text-teal500 w-full text-lg md:text-xl font-semibold flex justify-center pb-4">
                <div>{worker?.nomOuvrier + " " + worker?.prenomOuvrier}</div>
                <TbStars className="ml-3 text-yellow-500" />
            </div>
            <div className="m-auto">
                <div>{worker?.description_ouvrier}</div>
            </div>
            <div className={`${isArabic ? "flex flex-col items-end" : ""}`}>
                <div className="font-semibold ml-1 mt-5 text-teal500 text-left">{isArabic ? "المهن" : "Occupations"}</div>
                <div className={`${isArabic ? "justify-end" : ""} flex flex-wrap`}>
                    {professions.map((prof) => (
                        <Occupations text={isArabic ? prof.labelleProfession_AR : prof.labelleProfession_FR} keyProf={String(prof.idProfession)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
