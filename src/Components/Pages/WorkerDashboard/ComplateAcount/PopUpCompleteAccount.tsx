import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Api from "../../../../api/Api";


interface PROPSPopUp {
    close: () => void,
    id: number

}
interface Worker {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    phone: string;
    imgProfile: string;
    description_ouvrier: string
    dateNaissance: string
    ville: string
    badge: string
}
interface WorkerDiplomes {
    idDiplome: string;
    labelleDiplome_FR: string;
    labelleDiplome_AR: string;
}
interface City {
    idVille: string;
    ville_AR: string;
    ville_FR: string;
}


const PopUpCompleteAccount = ({ close, id }: PROPSPopUp) => {


    const [worker, setWorker] = useState<Worker[]>([]);
    const [diplomes, setDiplomes] = useState<WorkerDiplomes[]>([]);

    const [passVisible, setPassVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [cities, setCities] = useState<City[]>([]);
    const [cityOpen, setCityOpen] = useState<boolean>(false);
    const [dateNaiss, setDateNaiss] = useState<string>('');
    const isArabic = true;
    const handlePassVisibility = () => {
        setPassVisible(!passVisible)
    }
    const onsubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }


    // bring worker infos 
    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Worker[]>(`workers?id=${id}`);
                setWorker(response.data);



            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchWorker();
    }, []);
    useEffect(() => {
        setInputValue(worker[0]?.ville)
    }, [worker])

    // bring worker diplomes 
    useEffect(() => {
        const fetchDiplomes = async () => {
            try {
                const response = await Api.get<WorkerDiplomes[]>(`diplomes?workerId=${id}`);
                setDiplomes(response.data);



            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchDiplomes();
    }, []);
    // bring cities  
    useEffect(() => {
        const fetchCitiesr = async () => {
            try {
                const response = await Api.get<City[]>("villes");
                setCities(response.data);


            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCitiesr();
    }, []);

    // handle birth day
    useEffect(() => {
        const originalDate = "09/04/2000"; // Sample date string
        const parts = originalDate.split("/");
        const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
        setDateNaiss(formattedDate);

    }, []); // Run this effect only once after the initial render

    const handleInputCity = (data: string) => {
        setInputValue(data);
        setCityOpen(true);
    }
    const handleClose = (city: string) => {
        setInputValue(city);
        setCityOpen(false);

    }
    window.document.addEventListener("click", () => { setCityOpen(false) })

    return (
        <form onSubmit={onsubmit} className='flex  relative h-[70vh] mt-0 flex-col rounded-sm w-full'>
            <div className='relative  h-full'>
                <div className='flex  items-center flex-col    '>
                    <label htmlFor="profileImg" className="group items-center flex flex-col relative ">
                        <img className='w-20   object-cover  rounded-full border-2  ' src="imgUsed\portrait-man-laughing.jpg" alt="" />
                        <div className=" hidden   group-hover:opacity-30 w-full h-full  rounded-full bg-black border-4 items-center justify-center "></div>
                        <FaCamera className='text-white absolute p-6  group-hover:block hidden  h-full w-full ' />
                        <FaCamera className='z-10 -mt-7 absolute top-16 pb-4 w-6 ml-14 group-hover:hidden   h-full  text-black' />
                        <input id="profileImg" name="profileImg" type="file" className="hidden" />
                    </label>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className={`${isArabic ? "flex flex-row-reverse" : ""} md:flex md:justify-around sm:w-[90%] w-[95%]  m-auto md:w-full`}>
                        <div className=" md:w-[45%] py-2">

                            <label htmlFor="prenom" className={`${isArabic ? "flex justify-end " : ""} after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `} >
                                {isArabic ? "الاسم الشخصي" : "Nom Personnel"}

                            </label>
                            <input type="text"
                                dir={`${isArabic ? "rtl" : ""}`}
                                readOnly={worker[0]?.prenomOuvrier !== '' && worker[0].prenomOuvrier !==null ? false : true}

                                className={`${worker[0]?.prenomOuvrier === '' ? "" : "opacity-50"} w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="prenom"
                                value={worker[0]?.prenomOuvrier}
                            />
                        </div>
                        <div className=" md:w-[45%]  py-2">
                            <label htmlFor="nom" className={`${isArabic ? "flex justify-end " : ""} after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `}>
                                {isArabic ? "الاسم العائلي" : "Nom de Famille"}
                            </label>
                            <input type="text"
                                readOnly={worker[0]?.nomOuvrier !== '' ? true : false}

                                dir={`${isArabic ? "rtl" : ""}`}

                                className={`${worker[0]?.nomOuvrier === '' ? "" : "opacity-50"} w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="nom"
                                value={worker[0]?.nomOuvrier}

                            />
                        </div>
                    </div>
                    <div className="md:flex md:justify-around m-auto  sm:w-[90%] w-[95%] md:w-full">
                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="dateNaiss" className={`${isArabic ? "flex justify-end " : ""} after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `}>

                                {isArabic ? "تاريخ الازدياد" : "Date De Naissence"}

                            </label>
                            <input type="date"
                                dir={`${isArabic ? "rtl" : ""}`}

                                className={`${worker[0]?.dateNaissance === '' ? "opacity-50" : ""} w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="dateNaiss"
                                value={dateNaiss}
                            />
                        </div>
                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="telephone" className={`${isArabic ? "flex justify-end " : ""} after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `} >

                                {isArabic ? "رقم الهاتف" : "Téléphone"}
                            </label>
                            <input type="text"
                                dir={`${isArabic ? "rtl" : ""}`}

                                className={`${worker[0]?.phone === '' ? "opacity-50" : ""} w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="telephone"
                                value={worker[0]?.phone}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:justify-around sm:w-[90%]   w-[95%] m-auto md:w-full">
                        <div className="relative md:w-[45%] py-2">
                            <label htmlFor="ville" className={`${isArabic ? "flex justify-end " : ""} after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `} >
                                {isArabic ? "المدينة" : "Ville"}
                            </label>
                            <input type="text"
                                dir={`${isArabic ? "rtl" : ""}`}

                                className={`${worker[0]?.ville === '' ? "opacity-50" : ""} w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="ville"
                                onChange={(e) => { handleInputCity(e.target.value) }}
                                value={inputValue}
                            />

                            {/* choose city helper */}
                            <div className="absolute top-20 w-full z-10 left-0 ">
                                {cityOpen && (
                                    <div className='h-[250px]  sm:w-[100%] z-10 overflow-y-scroll scrollbar-none border border-gray-400 bg-gray-200 rounded-md shadow-lg  w-full transition-all ease-in-out duration-150 overflow-hidden'>
                                        {cities.filter(city => city.ville_FR.toLowerCase().includes(inputValue.toLowerCase()))
                                            .map((city, index) => (
                                                <div
                                                    onClick={() => handleClose(city.ville_FR)}
                                                    key={index}
                                                    className="w-full cursor-pointer h-[60px] px-6 border-b border-gray-500 
                                                                    flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
                                                >
                                                    <FaLocationDot className="text-gray-700" /> {city.ville_FR}
                                                </div>
                                            ))

                                        }
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="badge" className={`${isArabic ? "flex justify-end " : ""} after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `} >

                                {isArabic ? "الشارة" : "Badge"}

                            </label>
                            <select
                                dir={`${isArabic ? "rtl" : ""}`}

                                name="badge" id="badge"
                                className={`${worker[0]?.ville === '' ? "opacity-50" : ""} w-full h-[50px] px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}

                            >
                                <option className="" value="1">Maalem</option>
                                <option value="1">Kheddam</option>
                            </select>

                        </div>
                    </div>
                    <div className={`flex flex-col items-center m-auto sm:w-[95%]  w-full `} >

                        <label htmlFor="description" className={`${isArabic ? "flex justify-end " : ""}  w-full after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `} >

                            {isArabic ? " نبذة عنك" : " À ProPos de vous"}

                        </label>
                        <textarea
                            dir={`${isArabic ? "rtl" : ""}`}

                            placeholder={`Description" `}
                            className={`${worker[0]?.description_ouvrier !== '' ? "opacity-50" : ""} border-2 w-[95%] md:w-full  p-3 focus:outline-blue-500  md:h-38  rounded-xl border-teal500`}
                            name="description"
                            id="description" cols={50} rows={4}
                            value={worker[0]?.description_ouvrier}
                        // dir={`${!isArabic ? "ltr" : "rtl"}`}
                        />
                    </div>
                    <div className="mx-6 w-[95%]  m-auto  py-2">
                        <label htmlFor="password" className={`${isArabic ? "flex justify-end " : ""}  w-full after:text-red-500 mb-1 text-sm md:text-md flex  text-teal500 font-semibold `} >
                            {isArabic ? "كلمة السر" : "Mot de Passe"}

                        </label>
                        <div
                            className={` relative border-teal500  flex rounded-xl border-2`}>
                            <input type={passVisible ? "text" : "password"}
                                dir={`${isArabic ? "rtl" : ""}`}


                                className={` w-full h-[50px]  px-4 focus:outline-blue-500  rounded-xl  bg-transparent`}
                                id="password"
                            />
                            {passVisible ? <MdVisibilityOff onClick={handlePassVisibility} className={`${isArabic ? "left-4" : "right-4 "} absolute top-1/3 text-xl text-teal500`} />
                                : <MdVisibility onClick={handlePassVisibility} className={`${isArabic ? "left-4" : "right-4 "} absolute top-1/3 text-xl text-teal500`} />}
                        </div>
                    </div>
                </div>

                <div className=" mt-10 flex md:justify-end m-auto w-[95%] justify-between md:mx-6 pb-10 ">
                    <button className="px-14 py-[10px] mr-4 rounded-md bg-red-900 opacity-75 text-sm text-white border " onClick={close}>Annuler</button>
                    <button className="px-14 py-[10px]  rounded-md bg-teal-900 opacity-75 text-sm text-white border">Modifier</button>
                </div>

            </div>
        </form>
    )
}


export default PopUpCompleteAccount