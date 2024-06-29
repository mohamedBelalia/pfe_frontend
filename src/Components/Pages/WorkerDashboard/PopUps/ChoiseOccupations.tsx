import { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import Api from '../../../../api/Api';

interface Profession {
    idProfession: string;
    labelleProfession_FR: string;
    labelleProfession_AR: string;
}

interface IdWorker {
    id: string;
    // isArabic: boolean; // Add isArabic prop
}

const ChoiseOccupations = ({ id }: IdWorker) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [selectedOccupations, setSelectedOccupations] = useState<Profession[]>([]);
    const [occupations, setOccupations] = useState<Profession[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const isArabic = true;
    useEffect(() => {
       
        
        const fetchOccupations = async () => {
            try {
                const response = await Api.get<Profession[]>('professions'); // Assuming you have an endpoint for all occupations
                setOccupations(response.data);
            } catch (error) {
                console.error("Error fetching occupations:", error);
            }
        };

        const fetchWorkerOccupations = async () => {
            try {
                const response = await Api.get<Profession[]>(`professions?workerId=${id}`); // Assuming you have an endpoint for worker's occupations
                setSelectedOccupations(response.data);
                
            } catch (error) {
                console.error("Error fetching worker occupations:", error);
            }
        };

        fetchOccupations();
        fetchWorkerOccupations();
    }, [id]);
    
    const handleClickedOccupations = (occupation: Profession) => {
        let updatedOccupations;
        if (selectedOccupations.find(item => item.idProfession === occupation.idProfession)) {
            updatedOccupations = selectedOccupations.filter((item) => item.idProfession !== occupation.idProfession);
        } else if (selectedOccupations.length < 3) {
            updatedOccupations = [...selectedOccupations, occupation];
            if (updatedOccupations.length === 3) {
                setIsClicked(false);
            }
        }
        setSelectedOccupations(updatedOccupations || []);
    };

    const handleRemoveOccupation = (occupation: Profession) => {
        const updatedOccupations = selectedOccupations.filter((item) => item.idProfession !== occupation.idProfession);
        setSelectedOccupations(updatedOccupations);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsClicked(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div  className="pt-3 relative" ref={dropdownRef}>
            <div
                onClick={() => setIsClicked(!isClicked)}
                className=" -z-10 border-[1.5px] border-blue-700 rounded-md h-12 flex items-center cursor-pointer"
            >
                <div className="text-[#414E5F] justify-center w-[90%] m-auto flex pl-4 font-semibold">
                    {selectedOccupations.length > 0 ? selectedOccupations.map((item) => (
                        <span
                        
                            className={`${isArabic?"flex-row-reverse":""} border-2 m-au flex  justify-center items-center bg-teal-300 rounded-md px-2 py-1 mr-2`}
                            key={item.idProfession}
                        >
                            {isArabic ? item.labelleProfession_AR : item.labelleProfession_FR}
                            <IoMdCloseCircle
                                className='mx-2 text-lg cursor-pointer'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveOccupation(item);
                                }}
                            />
                        </span>
                    )) : ''}
                </div>
                <IoIosArrowDown className="text-blue-700 text-2xl mx-8" />
            </div>

            <div className={`${isClicked ? 'h-[200px] overflow-y-scroll mt-5 scrollbar-none border border-gray-400' : 'h-0'} bg-gray-200 rounded-md shadow-lg absolute w-full top-10 transition-all ease-in-out duration-150 overflow-hidden`}>
                <div className="items-center flex flex-col">
                    {occupations.length > 0 ? occupations.map((occupation, index) => (
                        <div
                            key={index}
                            onClick={() => handleClickedOccupations(occupation)}
                            className={`${selectedOccupations.find(item => item.idProfession === occupation.idProfession) ? 'bg-teal-400' : ''} h-[38px] w-full border-b-2 flex justify-start items-center pl-6 font-semibold border-gray-300`}
                        >
                            {isArabic ? occupation.labelleProfession_AR : occupation.labelleProfession_FR}
                        </div>
                    )) : <div>Loading...</div>}
                </div>
            </div>
        </div>
    );
};

export default ChoiseOccupations;
