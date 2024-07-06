import { BsFillPersonCheckFill } from "react-icons/bs";
import PopupParent from "./PopupParent.tsx";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import EditPopUp from "../PopUps/EditPopUp.tsx";
import Api from "../../../../api/Api.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store.ts";

interface Worker {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    phone: string;
    imgProfile: string;
    description_ouvrier: string;
    ville_FR: string;
    ville_AR: string;
    idBadge:string;
    experience: string; // Add experience field if it doesn't exist
}
interface Profession {
    idProfession: number;
    labelleProfession_AR: string;
    labelleProfession_FR: string;
}
interface idWorkerProps {
    idWorker:string
}

const CompleteAcount = ({idWorker}:idWorkerProps) => {
    
    const isArabicSelected : boolean = useSelector((state:RootStateState)=> state.selectedLanguageSlice.isArabicSelectedSelected)
    
    const [professions, setProfessions] = useState<Profession[]>([]);

    const [formData, setFormData] = useState<Partial<Worker>>({
        idOuvrier: '',
        nomOuvrier: '',
        prenomOuvrier: '',
        phone: '',
        imgProfile: '',
        description_ouvrier: '',
        ville_FR: '',
        ville_AR: '',
        experience: '',
        idBadge:""
    });

    useEffect(() => {
        const fetchProfessions = async () => {
            try {
               
                // setIdNum(Number(workerData.idOuvrier));

                const professionsResponse = await Api.get<Profession[]>(`professions?workerId=${formData.idOuvrier}`);
                setProfessions(professionsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchProfessions();
    }, [formData]);

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Worker[]>(`workers?id=${idWorker}`);
                const workerData = response.data[0];
                setFormData(workerData);
            } catch (error) {
                console.error("Error fetching worker:", error);
            }
        };

        fetchWorker();
    });

    const [isopen, setIsOpen] = useState<boolean>(false);
    const onClose = () => {
        setIsOpen(false);
    }
    const [open, setOpen] = useState<boolean>(false);
    const onCloseComp = () => {
        setOpen(false);
    }

    return (
        <div className='border z-50 p-6 m-auto sm:w-[70%] md:w-[400px] mb-4 md:mb-0 rounded-md'>
            <PopupParent id={2} isOpen={isopen} onClose={onClose} />
            <div onClick={() => setOpen(true)} className={`${isArabicSelected ? "justify-end " : "justify-end flex-row-reverse"} flex items-center cursor-pointer hover:text-blue-700 flex-nowrap font-bold text-blue500`}>
                <div className='text-md mr-2 md:text-lg'>{isArabicSelected ? "أكمل حسابك" : "Complétez votre compte"}</div>
                <BsFillPersonCheckFill className="text-3xl mr-2 font-semibold" />
            </div>
            <div className={`${isArabicSelected ? "items-end flex-row-reverse" : ""} px-4 flex flex-col py-4`}>
                {formData.imgProfile !== '' ?
                    <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-teal-700`}>
                       <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "صورة تعريفية" : "Image d'introduction"}</p>
                        <IoIosCheckmarkCircle className="text-xl font-700" />
                    </div>
                    : <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-red-500`}>
                         <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "صورة تعريفية" : "Image d'introduction"}</p>
                        <RiCloseCircleFill className="text-xl font-700" />
                    </div>}
                {
                    formData.ville_FR !== "" ?
                        <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-teal-700`}>
                            <p className="md:text-lg mx-2 text-md font-semibold -mt-1">{isArabicSelected ? "المدينة أو المنطقة" : "Ville ou région"}</p>
                            <IoIosCheckmarkCircle className="text-xl font-700" />
                        </div>
                        : <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-red-500`}>
                             <p className="md:text-lg mx-2 text-md font-semibold -mt-1">{isArabicSelected ? "المدينة أو المنطقة" : "Ville ou région"}</p>
                            <RiCloseCircleFill className="text-xl font-700" />
                        </div>
                }

                {professions.length !== 0 ?
                    <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-red-500`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "المهن" : "Les professions"}</p>
                           <RiCloseCircleFill className="text-xl font-700" />
                    </div>
                    : <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-teal-700`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "المهن" : "Les professions"}</p>
                        <IoIosCheckmarkCircle className="text-xl font-700" />
                    </div>}

                {formData.experience === '' ?
                    <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-red-500`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "الخبرة" : "L'expérience"}</p>
                        <RiCloseCircleFill className="text-xl font-700" />
                    </div>
                    : <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-teal-700`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "الخبرة" : "L'expérience"}</p>
                        {formData.experience}     <IoIosCheckmarkCircle className="text-xl font-700" />
                    </div>}

                {formData.description_ouvrier !== '' ?
                    <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-red-500`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "وصف العامل" : "Description de l'ouvrier"}</p>
                        <RiCloseCircleFill className="text-xl font-700" />
                    </div>
                    : <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-teal-700`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "وصف العامل" : "Description de l'ouvrier"}</p>
                        <IoIosCheckmarkCircle className="text-xl font-700" />
                    </div>}
                {formData.idBadge === '' ?
                    <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-red-500`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "الشارة" : "Badge"}</p>
                        <RiCloseCircleFill className="text-xl font-700" />
                    </div>
                    : <div className={`${isArabicSelected ? "" : "flex-row-reverse justify-end"} flex font-700 items-center text-teal-700`}>
                        <p className="text-md md:text-lg mx-2 -mt-1 font-semibold">{isArabicSelected ? "الشارة" : "Badge"}</p>
                        <IoIosCheckmarkCircle className="text-xl font-700" />
                    </div>}
            </div>

            {open ?
                <div className="fixed z-40 flex flex-col inset-0 items-center justify-center bg-black bg-opacity-70">
                    <div className='flex overflow-auto scrollbar-thin bg-white rounded-xl tab:w-[70%] h-[90vh] py-4 w-[95%] flex-col'>
                        <EditPopUp close={onCloseComp} id={1} />
                    </div>
                </div>
                : ""}
        </div>
    )
}

export default CompleteAcount
