import { useEffect, useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import Progress from "../OtherInfos/Progress";
import ChoiseCity from "../PopUps/ChoiseCity";
import ChoiseOccupations from "../PopUps/ChoiseOccupations";
import Api from '../../../../api/Api';
import { IoImageOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { BiSolidCity } from "react-icons/bi";
import { Config } from '../Local_Variables';

interface Props {
    onCloseComp: () => void;
}

interface Commentaire {
    commentaire_id: string;
    
  }

interface Worker {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    phone: string;
    imgProfile: string;
    description_ouvrier: string;
    ville_FR: string;
    ville_AR: string;
    professions: string[];
}

const PopUpCompleteAccount = ({ onCloseComp }: Props) => {
    const [activeStep, setActiveStep] = useState(0);
    const isArabic = false;
    const [num, setNum] = useState<number>(0);
    const [formData, setFormData] = useState<Partial<Worker>>({
        idOuvrier: '',
        nomOuvrier: '',
        prenomOuvrier: '',
        phone: '',
        imgProfile: '',
        description_ouvrier: '',
        ville_FR: '',
        ville_AR: '',
        professions: [],
    });
    const [selectedImage, setSelectedImage] = useState<string>("");

  

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Worker[]>("workers?id=2");
                const workerData = response.data[0];
                setFormData(workerData);
            } catch (error) {
                console.error("Error fetching worker:", error);
            }
        };

        fetchWorker();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Api.get<Commentaire[]>(`/commentaire?id=15`);
            setNum(response.data.length);
          } catch (error) {
            console.error("Error fetching rating:", error);
          }
        };
    
        fetchData();
      }, []);
        
    useEffect(() => {
        // setTotalPages(Math.ceil(data.length / 3));
        // setCurrentPage(1);
    }, []);


    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCityChange = (city: string) => {
        setFormData({
            ...formData,
            ville_FR: city,
        });
    };

    const handleSubmit = async () => {
        try {
            await Api.put(`workers/${formData.idOuvrier}`, formData);
            onCloseComp();
        } catch (error) {
            console.error("Error updating worker:", error);
        }
    };

    const steps = [
        {
            title: isArabic ? "المعلومات الشخصية" : "Personal Information",
            icon: <IoMdPerson className="h-12 mx-2 text-2xl" />,
            content: (
                <div className="flex flex-col md:px-6 md:mt-4">
                    <label className="text-lg flex mt-4 text-blue-700 font-semibold" htmlFor="prenom">{isArabic ? "الاسم الشخصي" : "Prenom"}</label>
                    <input
                        value={formData.prenomOuvrier || ''}
                        onChange={handleChange}
                        className="h-12 px-4  focus:outline-none border-[1.5px] focus:border-blue-500 border-blue-500 rounded-md"
                        type="text"
                        name="prenomOuvrier"
                        id="prenom"
                    />
                    <label className="text-lg flex mt-4 text-blue-700 font-semibold" htmlFor="nom">{isArabic ? "الاسم العائلي" : "Nom"}</label>
                    <input
                        value={formData.nomOuvrier || ''}
                        onChange={handleChange}
                        className="h-12 px-4 focus:outline-none  border-[1.5px] border-blue-700 rounded-md"
                        type="text"
                        name="nomOuvrier"
                        id="nom"
                    />
                    <label className="text-lg flex mt-4 text-blue-700 font-semibold" htmlFor="phone">{isArabic ? "الهاتف" : "Telephone"}</label>
                    <input
                        value={formData.phone || ''}
                        onChange={handleChange}
                        className="h-12 px-4 focus:outline-none  border-[1.5px] border-blue-700 rounded-md"
                        type="text"
                        name="phone"
                        id="phone"
                    />
                </div>
            ),
        },
        {
            title: isArabic ? "الوصف والصورة" : "Description et l'image",
            icon: <IoImageOutline className="text-2xl mx-2 h-12" />,
            content: (
                <div className="mx-1 md:px-6">
                    <label className="w-auto" htmlFor="img">
                        <p className="text-blue-700 flex w-auto text-lg font-semibold">{isArabic ? "صورة الملف الشخصي" : "Image de Profile"}</p>
                        <img src={selectedImage.length==0?Config.BaseImagesPath_Profiles + formData.imgProfile:selectedImage} alt="Profile" className="w-28 rounded-xl h-28 mt-3 m-auto border-blue-400 border-[1.5px] bg-gray-100" />
                        <input type="file" id="img" hidden onChange={handleImageChange} />
                    </label>
                    <p className="text-blue-700 flex mt-6 mb-2 text-xl font-semibold">{isArabic ? "الوصف" : "Description"}</p>
                    <textarea
                        value={formData.description_ouvrier || ''}
                        onChange={handleChange}
                        className="w-full p-4 md:px-4 md:p-0  focus:outline-none border-[1.5px] border-blue-400 rounded-md"
                        name="description_ouvrier"
                        id="description"
                        rows={6}
                    ></textarea>
                </div>
            ),
        },
        {
            title: isArabic ? "المهن" : "Professions",
            icon: <BsTools className="text-2xl mx-2 h-12" />,
            content: (
                <div className="md:px-6">
                    <p className="text-blue-700 flex mt-6 text-lg font-semibold">{isArabic ? "حدد مهنتك" : "Sélectionnez vos professions"}</p>
                    <ChoiseOccupations id={formData.idOuvrier || ''} />
                </div>
            ),
        },
        {
            title: isArabic ? "المدينة" : "Ville",
            icon: <BiSolidCity className="text-2xl mx-2 h-12" />,
            content: (
                <div className="md:px-6">
                    <p className="text-blue-700 flex mt-6 text-lg font-semibold">{isArabic ? "ادخل مدينتك" : "Entrez votre ville"}</p>
                    <ChoiseCity city={isArabic ? formData.ville_AR || '' : formData.ville_FR || ''} onCityChange={handleCityChange} />
                </div>
            ),
        },
    ];

    const renderStepContent = () => {
        return (
            <div className="md:w-2/3 px-2 md:px-2 md:pt-12 h-[85vh] md:h-[100vh] relative w-full bg-slate-100">
                <article className="mt-4 cursor-pointer text-teal-700 flex items-center text-2xl font-semibold">
                    <p className="mr-2">{steps[activeStep].icon}</p> {steps[activeStep].title}
                </article>
                {steps[activeStep].content}
                <div className="absolute py-1 w-full flex justify-around left-0  text-xl text-white bottom-10">
                    <button onClick={onCloseComp} className="bg-red-300 text-red-800 w-2/5 md:w-1/3 py-2 rounded-lg px-10">
                        {isArabic ? "إلغاء" : "Annuler"}
                    </button>
                    <button onClick={handleSubmit} className="bg-teal-600 w-2/5 md:w-1/3 py-2 rounded-lg px-10">
                        {isArabic ? "تأكيد" : "Valider"}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-black/80">
            <div dir={isArabic ? "rtl" : "ltr"} className="md:flex-row  md:bg-white m-auto flex-col z-50 inset-0 bg-white container flex h-[100vh]">
                <div className="md:w-1/3 md:h-[100vh] w-full md:px-4 mt-4">
                    <div className="md:block hidden">
                        <div className="flex md:flex-col text-blue-700 font-bold justify-center items-center mb-10">{isArabic ? "أكمل حسابك" : "Complétez votre compte"}</div>
                        <Progress num={num} />
                    </div>
                    <div className="flex w-full md:flex-col">
                        {steps.map((step, index) => (
                            <article
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`${activeStep === index ? "bg-slate-100 text-teal-900" : ""} mx-2 flex justify-center md:justify-start items-center m-auto w-full cursor-pointer hover:bg-slate-100 md:border px-3 md:pl-4 mt-6 rounded-t-md md:rounded-md text-teal-800 text-lg font-semibold`}
                            >
                                {step.icon} <p className="hidden md:flex">{step.title}</p>
                            </article>
                        ))}
                    </div>
                </div>
                {renderStepContent()}
            </div>
        </div>
    );
};

export default PopUpCompleteAccount;
