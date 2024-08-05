import { useState, useEffect, useRef } from "react";
import SearchCity from "../../Common/util/SearchCity";
import Api from "../../../api/Api";
import LoadingPage from "../../Common/Loading/LoadingPage";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { Config } from "../WorkerDashboard/Local_Variables";

type updateFormType = {
    workerID: string,
    getIsUpdateInfo: (isUpdate: boolean) => void
}

const phoneRegex = /^[567]\d{8}$/;

const UpdateForm = ({ workerID, getIsUpdateInfo }: updateFormType) => {

    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    //  ############## pour la validation ##############
    const [isValideVille, setIsValideVille] = useState<boolean | null>(null);
    const [isPrenomEmpty, setIsPrenomEmpty] = useState<boolean | null>(null)
    const [isExpEmpty, setIsExpEmpty] = useState<boolean | null>(null)
    const [isValidePhone, setIsValidePhone] = useState<boolean | null>(null)

    const [villeId, setVilleId] = useState<string>("");
    const [oldCityName, setOldCityName] = useState<string>("")
    const [oldImg, setOldImg] = useState<string>("defaultUserImage.png")


    // loading
    const [isLoading, setIsLoading] = useState<boolean>(true)

    // new info
    const prenomRef = useRef<HTMLInputElement>(null)
    const nomRef = useRef<HTMLInputElement>(null)
    const experienceRef = useRef<HTMLInputElement>(null)
    const telephoneRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const fetchOldUserInfo = async () => {
            const response = await Api.get(`/workers?id=${workerID}`)

            try {
                setOldImg(response.data[0].imgProfile)

                if (prenomRef.current) {
                    prenomRef.current.value = response.data[0].prenomOuvrier;
                }
                if (nomRef.current) {
                    nomRef.current.value = response.data[0].nomOuvrier;
                }
                if (experienceRef.current) {
                    experienceRef.current.value = response.data[0].experience;
                }
                if (telephoneRef.current) {
                    telephoneRef.current.value = response.data[0].phone.substring(4);
                }
                if (descriptionRef.current) {
                    descriptionRef.current.value = response.data[0].description_ouvrier;
                }

                setOldCityName(isArabicSelected ? response.data[0].ville_AR : response.data[0].ville_FR)

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

        let isValid = true

        // Prenom 
        if (prenomRef.current && prenomRef.current.value.trim().length > 0) {
            setIsPrenomEmpty(false)
        }
        else {
            setIsPrenomEmpty(true)
            isValid = false
        }

        // Experience
        if (experienceRef.current && experienceRef.current.value.trim().length > 0) {
            setIsExpEmpty(false)
        }
        else {
            setIsExpEmpty(true)
            isValid = false
        }

        // Téléphone
        if (telephoneRef.current && phoneRegex.test(telephoneRef.current.value)) {
            setIsValidePhone(true)
        }
        else {
            setIsValidePhone(false)
            isValid = false
        }

        return isValid
    }

    const updateInfo = () => {

        let isValid = isValideInputs()

        if (isValid) {
            const updatedData = { // TODO update the image profile
                "prenomOuvrier": prenomRef.current?.value,
                "nomOuvrier": nomRef.current?.value,
                "experience": experienceRef.current?.value,
                "phone": "+212" + telephoneRef.current?.value,
                "villeId": villeId,
                "description": descriptionRef.current?.value
            }

            updateWorkerInfoFromDB(updatedData);
        }

        console.log(isPrenomEmpty);
    }

    const updateWorkerInfoFromDB = async (updatedData : any) => {
        const respons = await Api.put(`/workers?id=${workerID}` , updatedData)
        if(respons.data.status == "updated successfully"){
            location.reload()
        }
        console.log(respons);
        
    }  

    return (
        <div className="md:w-[60%] w-[95%] px-8 md:py-4 py-7 bg-white rounded-md md:mt-16">
            <div className="flex justify-center">
                <img
                    src={Config.BaseImagesPath_Profiles + oldImg}
                    className="w-[80px] h-[80px] rounded-full border-2 border-teal-700"
                />
            </div>
            <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-5 mt-4">
                <div className="md:w-1/2 w-full">
                    <label className="font-semibold text-teal-700">Prenom</label>
                    <input
                        ref={prenomRef}
                        type="text"
                        placeholder="votre Prenom"
                        className={`w-full py-2 px-2 border-2 ${isPrenomEmpty ? "border-red-700" : "border-teal500"} rounded-lg focus:outline-none focus:border-blue-700`} />
                    {
                        isPrenomEmpty && <small className="text-red-600">Prenom est obligatoir</small>
                    }
                </div>
                <div className="md:w-1/2 w-full">
                    <label className="font-semibold text-teal-700">Nom</label>
                    <input
                        ref={nomRef}
                        type="text"
                        placeholder="votre Nom"
                        className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-5 mt-4">
                <div className="md:w-1/2 w-full">
                    <label className="font-semibold text-teal-700">Experience</label>
                    <input
                        ref={experienceRef}
                        type="number"
                        min={0} max={70}
                        placeholder="Experience"
                        className={`w-full py-2 px-2 border-2 ${isExpEmpty ? "border-red-700" : "border-teal500"} rounded-lg focus:outline-none focus:border-blue-700`} />
                        {
                            isExpEmpty && <small className="text-red-600">Experience est obligatoir</small>
                        }
                </div>
                <div className="md:w-1/2 w-full">
                    <label className="font-semibold text-teal-700">Téléphone</label>
                    <div className="relative">
                        <input
                            ref={telephoneRef}
                            type="text"
                            placeholder="votre téléphone"
                            dir="ltr"
                            className={`w-full py-2 px-2 pl-[50px] border-2 rounded-lg focus:outline-none focus:border-blue-70 ${isValidePhone == false ? "border-red-600" : "border-teal500 "}`}
                        />
                        <span className="absolute left-3 pr-3 top-[9.5px] text-gray-800 font-semibold pointer-events-none" dir="ltr">+212 {" "}</span>
                        {
                            isValidePhone == false && <small className="text-red-600">Saisier Une Numero de Téléphone Correct</small>
                        }
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-5 mt-4">
                <div className="md:w-1/2 w-full">
                    <label className="font-semibold text-teal-700">Description</label>
                    <textarea
                        ref={descriptionRef}
                        rows={3}
                        placeholder="Votre Description"
                        className="w-full py-2 px-2 border-2 border-teal500 rounded-lg focus:outline-none focus:border-blue-700" id=""></textarea>
                </div>
                <div className="md:w-1/2 w-full -mt-3 md:mt-0">
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

                {/* <div className="w-1/2">
                    <label className="text-md md:text-md text-teal-700 font-semibold">Votre Professions</label>

                    <ProfessionsMulltiSelect initProfessions={oldProfessions} getProfessionsIDs={setProfessions} professiosIDs={professions} isValidateOccupation={isValidePofessions} ctrPourMiseJour={ctrProfessions} />
                    {
                        isValidePofessions == false &&
                        <p className="-mt-1 text-red-600">
                            {
                                false ? "اختر مهنتك (مهنة واحدة على الأقل)" : "sélectionnez votre profession (une profession au moins)"
                            }
                        </p>
                    }
                </div> */}
            </div>

            <div className="flex md:justify-end justify-center gap-4 md:mt-2 mt-4">
                <button onClick={() => getIsUpdateInfo(false)} className="md:px-14 px-10 py-2 rounded-md text-white bg-red-700">Annuler</button>
                <button onClick={updateInfo} className="md:px-14 px-10 py-2 rounded-md text-white bg-teal-700">Modifier</button>
            </div>
        </div>
    );
};

export default UpdateForm;
