// import React from 'react'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { PiXCircleFill } from "react-icons/pi";
import Api from "../../../../api/Api"


type userData = {
    occupations: string[]
    cmpOccup: number[]
}

type OccupationsFormProps = userData & {
    updateFields: (fields: Partial<userData>) => void
}
interface Profession {
    idProfession: string;
    labelleProfession_AR: string;
    labelleProfession_FR: string;
}

const Ocupations = ({ occupations,cmpOccup, updateFields }: OccupationsFormProps) => {
    const [professions, setProfessions] = useState<Profession[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [choosedOccupations, setChoosedOccupations] = useState<string[]>([...occupations]);
    const [cmp, setCmp] = useState<number[]>([...cmpOccup]);
    const [isArabic] = useState<boolean>(true);
    // const dropdownRef = useRef<HTMLDivElement>(null);
    //  to bring occupations data
    useEffect(() => {
        const fetchProfessions = async () => {
            try {
                const response = await Api.get("/professions/");
                setProfessions(response.data);
                console.log(professions);
                
            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchProfessions();
    }, []);
    const handleClickedOccupations = (index: number, Occup: string | undefined) => {
        if (Occup && cmpOccup.length < 3 && !choosedOccupations.includes(Occup)) {
            setCmp([...cmpOccup, index]);
            setChoosedOccupations([...choosedOccupations, Occup])
            
            

            // Pass the updated state to updateFields
            updateFields({ occupations: [...choosedOccupations, Occup] });
            updateFields({ cmpOccup: [...cmp, index] });

            if (cmpOccup.length === 2) {
                setIsClicked(!isClicked);
            }
        }
    };




    const deleteOccup = (indexToDelete: number) => {
      
    
        setChoosedOccupations(prevItems => {
            // Create a new array without the item at the specified index
            const updateOccup = prevItems.filter((_, index) => index !== indexToDelete);
            updateFields({ occupations: [...updateOccup] });
            return prevItems.filter((_, index) => index !== indexToDelete);

        });
    
        setCmp(prevItems => {
            // Create a new array without the item at the specified index
            const updatedCmp = prevItems.filter((_, index) => index !== indexToDelete);
            updateFields({ cmpOccup: [...updatedCmp] });
            return updatedCmp;
        });
    }
    

    return (
        <div className="md:w-[70%]  w-[95%] lg:mt-10 mt-4 md:mt-0 m-auto   h-[70vh] relative ">
            <h1 className="text-blue-500 text-center p-4 text-3xl font-semibold">
                {`${!isArabic ? "Vos métiers" : "مهنتك"}`}
                <p className='text-sm text-red-500'>
                    {`${!isArabic ? "Choisissez des métiers adaptés à votre activité" : "اختر المهن التى تناسب نشاطك"}`}
                </p>
            </h1>
            <div className=' flex justify-center'>
                {/* <div className='flex items-center px-2 border-2   rounded w-full pb-2'> */}


            </div>
            <div onClick={() => setIsClicked(!isClicked)}
                className={`${!isArabic ? "" : "flex-row-reverse "} px-2  border-teal500 rounded-xl md:px-2    h-[55px] justify-between lg:w-[610px] m-auto  border-2  md:h-14  flex  items-center cursor-pointer select-none `}>

                <div className='flex w-full  overflow-x-auto justify-center'>
                    {
                        choosedOccupations && choosedOccupations.length !== 0 ?
                            choosedOccupations.map((o, i) => {
                                return (
                                    <div key={o} className="flex  justify-center mr-1 px-2 py-2 items-center rounded-md  bg-teal-500 h-[30px] text-sm font-700  " >
                                        <p className="text-teal-800    md:px-4 px-2 rounded-md font-semibold  ">{o}</p>
                                        <div className='text-teal-800 w-2 bg-white  rounded-full h-2 flex justify-center items-center    text-lg md:text-xl '>
                                            <p className=''><PiXCircleFill onClick={() => deleteOccup(i)} /></p>
                                        </div>
                                    </div>
                                )
                            })
                            : `${!isArabic ? "Cliquez pour sélectionner" : "انقر للتحديد"}`

                    }
                </div>
                <IoIosArrowDown className="text-[#414E5F] md:ml-10  text-2xl" />
            </div>
            <div className={`${isClicked ? 'h-[300px] w-[611px] mt-1 overflow-y-scroll scrollbar-none border border-teal500' : 'h-0'}
             bg-gray-50 w-full  rounded-md shadow-lg   transition-all ease-in-out duration-150 overflow-hidden`}>
                {professions.map((profession ) => (
                    <div
                        dir='rtl'
                        key={profession.idProfession}
                        onClick={() => handleClickedOccupations(Number(profession.idProfession), profession.labelleProfession_AR)}
                        className={`${cmp.includes(Number(profession.idProfession)) ? 'bg-teal-400 text-white' : ''} md:h-[38px] hover:bg-blue-600 hover:text-white w-full border-b-2 flex justify-start items-center  px-8  border-gray-100 `}
                    >
                        {profession.labelleProfession_AR}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ocupations