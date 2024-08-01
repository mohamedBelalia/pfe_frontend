import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { IoIosArrowDown } from "react-icons/io";
import { PiXCircleFill } from "react-icons/pi";
import { IProfessionsType } from "../../../TS";
import Api from "../../../api/Api";


type ProfessionsMulltiSelectProps = {
    getProfessionsIDs : (professiosIDs : string[]) => void
    professiosIDs : string[] ,
    isValidateOccupation : boolean | null ,
    initProfessions ?: IProfessionsType[] ,
    // ctr
    addCtr? : (nbr : number) => void ,
    ctrPourMiseJour?: number
}

const ProfessionsMulltiSelect = ({getProfessionsIDs , professiosIDs , isValidateOccupation , initProfessions , ctrPourMiseJour}:ProfessionsMulltiSelectProps) => {

    const [isInit , setIsInit] = useState<boolean>(true)

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [choosedOccupations, setChoosedOccupations] = useState<string[]>([]);
    const [cmp, setCmp] = useState<string[]>([]);

    // retrived professionas from database
    const [professions, setProfessions] = useState<IProfessionsType[]>([]);

    // The Slice For Change The Language
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    useEffect(()=>{
        const fetchProfessions = async () => {
            const response = await Api.get("/professions")
            setProfessions(response.data)
        }
        fetchProfessions()
    },[])

    useEffect(() => {  
        if(initProfessions){
            let oldProfessionsIDs: string[] = [];
            initProfessions.map((prf , _)=>{
                oldProfessionsIDs.push(prf.idProfession)
            })
            
            let oldProfessionsNames: string[] = [] ;
            initProfessions.map((prf , _)=>{
                oldProfessionsNames.push(isArabicSelected ? prf.labelleProfession_AR : prf.labelleProfession_FR)
            })
            setCmp(oldProfessionsIDs)
            setChoosedOccupations(oldProfessionsNames)
            getProfessionsIDs(oldProfessionsIDs)
        }
    }, [initProfessions?.length]);


    const handleClickedOccupations = (index: string, Occup: string | undefined) => {
        if (Occup && cmp.length < 3 && !choosedOccupations.includes(Occup)) {
            setCmp([...cmp, index]);
            getProfessionsIDs([...professiosIDs, index])
            setChoosedOccupations([...choosedOccupations, Occup])

            if (cmp.length === 2) {
                setIsClicked(!isClicked);
            }
        }
    };
    
    const deleteOccup = (indexToDelete: number) => {  
    
        setChoosedOccupations(prevItems => {
            // Create a new array without the item at the specified index
            return prevItems.filter((_, index) => index !== indexToDelete);
        });
    
        setCmp(prevItems => {
            // Create a new array without the item at the specified index
            const updatedCmp = prevItems.filter((_, index) => index !== indexToDelete);
            return updatedCmp;
        });
    }

  return (
    <div className="relative">
         <div onClick={() => setIsClicked(!isClicked)}
                className={`${!isArabicSelected? "" : "flex-row-reverse "} ${ isValidateOccupation == false ? "border-red-600" : "border-teal500 "} rounded-lg h-[50px] justify-between border-2 flex items-center cursor-pointer select-none`}>

                <div className='flex ml-2 overflow-x-scroll hideScrollBar justify-center overflow-hidden'>
                    {
                        choosedOccupations && choosedOccupations.length !== 0 ?
                            choosedOccupations.map((o, i) => {
                                return (
                                    <div key={o} className="flex justify-center mr-1 px-2 py-2 items-center rounded-md  bg-teal-400 h-[30px] text-sm font-700">
                                        <p className="text-teal-800 md:px-4 px-2 rounded-md font-semibold">{o}</p>
                                        <div className='text-teal-800 w-2 bg-white rounded-full h-2 flex justify-center items-center text-lg md:text-xl'>
                                            <p className=''><PiXCircleFill onClick={() => deleteOccup(i)} /></p>
                                        </div>
                                    </div>
                                )
                            })
                            : `${!isArabicSelected? "Cliquez pour sélectionner" : "انقر للتحديد"}`
                    }
                </div>
                <IoIosArrowDown className="text-[#414e5f] mr-3 text-2xl" />
            </div>
            <div className={`${isClicked ? 'max-h-[300px] pb-4 mt-1 overflow-y-scroll border border-teal500 absolute w-full' : 'h-0'}
             bg-gray-50 rounded-md shadow-lg transition-all ease-in-out duration-150 overflow-hidden`}>
                {professions.map((profession, _) => (
                    <div
                        key={profession.idProfession}
                        onClick={() => handleClickedOccupations(profession.idProfession, isArabicSelected ? profession.labelleProfession_AR : profession.labelleProfession_FR)}
                        className={`${cmp.includes(profession.idProfession) ? 'bg-teal-400 text-white' : ''} md:h-[38px] cursor-pointer hover:bg-blue-400 hover:text-white w-full border-b-2 flex justify-start items-center px-8 border-gray-100 `}
                    >
                        {isArabicSelected ? profession.labelleProfession_AR : profession.labelleProfession_FR}
                    </div>
                ))}
            </div>
    </div>
  )
}

export default ProfessionsMulltiSelect
