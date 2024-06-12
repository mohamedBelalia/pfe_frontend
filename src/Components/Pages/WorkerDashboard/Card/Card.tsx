import { IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
import { TbStars } from "react-icons/tb";
import EditProfile from "../PopUps/EditProfile";
import Api from "../../../../api/Api";

interface Worker {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    phone: string;
    imgProfile: string;
    description_ouvrier:string
    // Add any other properties if needed
}
interface Profession  {
    idProfession: number,
    labelleProfession_AR: string,
    labelleProfession_FR: string
};
const Card = () => {
    const [worker,setWorker]= useState<Worker[]>([]);
    const [professions,setProfessions]= useState<Profession[]>([]);
    // const [idNum,setIdNum]= useState<number>(0);
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

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Worker[]>("workers?id=13");
                setWorker(response.data);
                // console.log(worker[0]);
                // setIdNum(Number(worker[0].idOuvrier))
                
            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchWorker();
    }, []);

    useEffect(() => {
        const fetchProfessions = async () => {
            try {
                const response = await Api.get<Profession[]>(`professions?workerId=${worker[0].idOuvrier}`);
                setProfessions(response.data);

                // console.log(professions[1]);
                
            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchProfessions();
    }, []);
    

    return (


        <div className={`${isArabic?"flex flex-col items-end":""}  p-6 w-full m-auto sm:w-[70%] tab:w-[400px] md:w-[300px] pb-6 mb-3 border text-center  rounded-md`}>

            <EditProfile id={2} isOpen={isOpen} onClose={togglePopup} />
            <div onClick={togglePopup} className={ `${isArabic?"flex-row-reverse":""} flex cursor-pointer  text-blue500`}>
                <IoMdSettings />
                <div className='-mt-1 font-semibold mx-1'>{isArabic ? "تعديل الملف الشخصي" : "Edit Profile"}</div>

            </div>
            <img className=' w-32 md:w-32 m-auto mt-6 mb-3 rounded-full ' src="imgUsed\portrait-man-laughing.jpg" alt="" />
            <div className="text-teal500 w-full text-lg md:text-xl font-semibold flex justify-center pb-4">
                <div >{worker[0]?.nomOuvrier+" "+ worker[0]?.prenomOuvrier}</div>

                <TbStars className="ml-3  text-yellow-500" />
            </div>
            <div className="m-auto">
                <div>{worker[0]?.description_ouvrier}</div>
            </div>

            {/* <div className={`${isArabic:"rtl"}`}>I will be happy to help you and do everything quickly and efficiently. I like my job and I like helping people</div> */}
            <div className={`${isArabic?"flex flex-col  items-end":""}`}>
                <div className="font-semibold ml-1 mt-5 text-teal500 text-left">{isArabic? "المهن" : "Occupations"}</div>

                <div className={`${isArabic?"justify-end":""} flex  flex-wrap`}>
                    {professions.map(prof=>{
                   return <Occupations text={isArabic?prof.labelleProfession_AR:prof.labelleProfession_FR} key={prof.idProfession}/>


                    })}
                    

                </div>
            </div>
        </div>
       

    )
}

export default Card