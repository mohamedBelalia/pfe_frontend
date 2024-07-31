import { useState, useEffect, useRef } from "react";
import SearchCity from "../../Common/util/SearchCity";
import ProfessionsMulltiSelect from "../../Common/util/ProfessionsMulltiSelect";
import Api from "../../../api/Api";
import LoadingPage from "../../Common/Loading/LoadingPage";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { IProfessionsType } from "../../../TS";

type updateFormType = {
    workerID: string,
    getIsUpdateInfo: (isUpdate: boolean) => void
}

const UpdateForm = ({ workerID, getIsUpdateInfo }: updateFormType) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    const [villeId, setVilleId] = useState<string>("");
    const [isValideVille, setIsValideVille] = useState<boolean | null>(null);
    const [professions, setProfessions] = useState<string[]>([]);
    const [isValidePofessions, setIsValidePofessions] = useState<boolean | null>(null)
    const [oldCityName , setOldCityName] = useState<string>("")

    const [oldProfessions , setOldProfessions] = useState<IProfessionsType[]>()

    const [isLoading, setIsLoading] = useState<boolean>(true)

    // new info
    const prenomRef = useRef<HTMLInputElement>(null)
    const nomRef = useRef<HTMLInputElement>(null)
    const experienceRef  = useRef<HTMLInputElement>(null)
    const telephoneRef = useRef<HTMLInputElement>(null)
    const villeRef = useRef<HTMLInputElement>(null)
    const newProfessionsRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)

    useEffect(()=>{
        const fetchOldProfessions = async () => {
            const response = await Api.get(`/professions?workerId=${workerID}`)
            try{
                setOldProfessions(response.data)
            }catch(error){
                console.log(error);
            }
        }

        fetchOldProfessions()
    },[])    

    useEffect(() => {
        const fetchOldUserInfo = async () => {
            const response = await Api.get(`/workers?id=${workerID}`)
            try {
                if (prenomRef.current) {
                    prenomRef.current.value = response.data[0].prenomOuvrier;                    
                }
                if(nomRef.current){
                    nomRef.current.value = response.data[0].nomOuvrier;  
                }
                if(experienceRef.current){
                    experienceRef.current.value = response.data[0].experience;  
                }
                if(telephoneRef.current){
                    telephoneRef.current.value = response.data[0].phone;  
                }
                if(descriptionRef.current){
                    descriptionRef.current.value = response.data[0].description_ouvrier;  
                }

                setOldCityName(isArabicSelected ? response.data[0].ville_AR : response.data[0].ville_FR)

                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false)
            }
        }

        fetchOldUserInfo()
        
    }, [])


    if (isLoading) {
        return <div className="w-[60%] h-[200px] flex justify-center items-center px-8 py-4 bg-white rounded-md mt-16">
            <LoadingPage />
        </div>
    }
    

    const isValideInputs = () => {
        if (villeId.length === 0) {
            setIsValideVille(false);
        } else {
            setIsValideVille(true);
        }

        if (professions.length === 0) {
            setIsValidePofessions(false)
        }
        else {
            setIsValidePofessions(true)
        }
    }

    const updateInfo = () => {
        console.log(professions);
    }

    return (
        <div className="w-[60%] px-8 py-4 bg-white rounded-md mt-16">
            <div className="flex justify-center">
                <img
                    src="http://localhost/pfeApi/api/uploads/profiles/pic15.jpg"
                    className="w-[80px] h-[80px] rounded-full border-2 border-teal-700"
                />
            </div>
            <div className="flex justify-between gap-10 mt-4">
                <div className="w-1/2">
                    <label className="font-semibold text-teal-700">Prenom</label>
                    <input
                        ref={prenomRef} 
                        type="text" 
                        placeholder="votre Prenom" 
                        className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
                <div className="w-1/2">
                    <label className="font-semibold text-teal-700">Nom</label>
                    <input 
                        ref={nomRef}
                        type="text" 
                        placeholder="votre Nom" 
                        className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
            </div>
            <div className="flex justify-between gap-10 mt-4">
                <div className="w-1/2">
                    <label className="font-semibold text-teal-700">Experience</label>
                    <input 
                        ref={experienceRef}
                        type="number" 
                        min={0} max={70} 
                        placeholder="Experience" 
                        className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
                <div className="w-1/2">
                    <label className="font-semibold text-teal-700">Téléphone</label>
                    <input 
                        ref={telephoneRef}
                        type="text" 
                        placeholder="votre téléphone" 
                        className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
            </div>
            <div className="flex justify-between gap-10 mt-4">
                <div className="w-1/2">
                    <label className="text-md md:text-md text-teal-700 font-semibold">
                        Ville
                    </label>
                    <SearchCity getCityId={setVilleId} isValidateCity={isValideVille} initCityName={oldCityName} />
                    {
                        isValideVille === false &&
                        <p className="-mt-1 text-red-600">
                            {
                                false ? "المدينة إلزامية" : "la ville est obligatoire"
                            }
                        </p>
                    }
                </div>
                <div className="w-1/2">
                    <label className="text-md md:text-md text-teal-700 font-semibold">Votre Professions</label>

                    <ProfessionsMulltiSelect initProfessions={oldProfessions} getProfessionsIDs={setProfessions} professiosIDs={professions} isValidateOccupation={isValidePofessions} />
                    {
                        isValidePofessions == false &&
                        <p className="-mt-1 text-red-600">
                            {
                                false ? "اختر مهنتك (مهنة واحدة على الأقل)" : "sélectionnez votre profession (une profession au moins)"
                            }
                        </p>
                    }
                </div>
            </div>
            <div className="mt-4">
                <label className="font-semibold text-teal-700">Description</label>
                <textarea 
                    ref={descriptionRef}
                    rows={3} 
                    placeholder="Votre Description" 
                    className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" id=""></textarea>
            </div>
            <div className="flex justify-end gap-4 mt-2">
                <button onClick={() => getIsUpdateInfo(false)} className="px-14 py-2 rounded-md text-white bg-red-700">Annuler</button>
                <button onClick={updateInfo} className="px-14 py-2 rounded-md text-white bg-teal-700">Modifier</button>
            </div>
        </div>
    );
};

export default UpdateForm;
