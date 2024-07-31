import { BsFillPersonCheckFill } from "react-icons/bs";
import { useEffect, useState } from "react";
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
    
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)
    
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
                const response = await Api.get(`workers?id=${idWorker}`);
                const workerData = response.data[0];
                setFormData(workerData);
            } catch (error) {
                console.error("Error fetching worker:", error);
            }
        };

        fetchWorker();
    });

    const [open, setOpen] = useState<boolean>(false);
    const onCloseComp = () => {
        setOpen(false);
    }

    return (
        <div className="relative">
            <div 
                onClick={() => setOpen(true)} 
                className={`${isArabicSelected ? "justify-end " : "justify-end flex-row-reverse"} flex items-center cursor-pointer rounded-md border-2 border-teal-600 bg-teal-50 h-[55px] p-3 hover:text-blue-700 flex-nowrap font-bold text-blue500`}>
                <div className='text-md mr-2 md:text-lg'>{isArabicSelected ? "أكمل حسابك" : "Complétez votre compte"}</div>
                <BsFillPersonCheckFill className="text-3xl mr-2 font-semibold" />
            </div>
            
            {open ?
                <div className="fixed z-40 flex flex-col inset-0 items-center justify-center bg-black bg-opacity-70">
                    <div className='flex overflow-auto scrollbar-thin bg-white rounded-xl tab:w-[70%] h-[90vh] py-4 w-[95%] flex-col'>
                        <EditPopUp close={onCloseComp} id={idWorker} />
                    </div>
                </div>
                : ""}
        </div>
    )
}

export default CompleteAcount
