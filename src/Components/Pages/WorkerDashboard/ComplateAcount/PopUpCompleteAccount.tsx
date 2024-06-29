import { useEffect, useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import { HiOutlineViewList } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import Progress from "../OtherInfos/Progress";
import ChoiseCity from "../PopUps/ChoiseCity";
import ChoiseOccupations from "../PopUps/ChoiseOccupations";
import Api from '../../../../api/Api';
import { LuImagePlus } from 'react-icons/lu';

interface Props {
    onCloseComp: () => void;
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
    professions: string[]; // Adjusted to match the actual structure returned by the API
}

const PopUpCompleteAccount = ({ onCloseComp }: Props) => {
    const [activeStep, setActiveStep] = useState(0);
    const isArabic  = true;
    const [formData, setFormData] = useState<Partial<Worker>>({
        idOuvrier: '',
        nomOuvrier: '',
        prenomOuvrier: '',
        phone: '',
        imgProfile: '',
        description_ouvrier: '',
        ville_FR: '',
        ville_AR: '',
        professions: [], // Initialize professions as an empty array
    });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Worker[]>("workers?id=1");
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
            title: "Personal Information",
            icon: <IoMdPerson className="h-12 text-2xl" />,
            content: (
                <div className="flex flex-col md:px-6 md:mt-4">
                    <label className="text-lg flex mt-4 text-blue-700 font-semibold" htmlFor="prenom">Prenom</label>
                    <input
                        value={formData.prenomOuvrier || ''}
                        onChange={handleChange}
                        className="h-12 px-4 bg-gray-200 focus:outline-none border-[1.5px] focus:border-blue-500 border-blue-500 rounded-md"
                        type="text"
                        name="prenomOuvrier"
                        id="prenom"
                    />
                    <label className="text-lg flex mt-4 text-blue-700 font-semibold" htmlFor="nom">Nom</label>
                    <input
                        value={formData.nomOuvrier || ''}
                        onChange={handleChange}
                        className="h-12 px-4 focus:outline-none bg-gray-200 border-[1.5px] border-blue-700 rounded-md"
                        type="text"
                        name="nomOuvrier"
                        id="nom"
                    />
                    <label className="text-lg flex mt-4 text-blue-700 font-semibold" htmlFor="phone">Telephone</label>
                    <input
                        value={formData.phone || ''}
                        onChange={handleChange}
                        className="h-12 px-4 focus:outline-none bg-gray-200 border-[1.5px] border-blue-700 rounded-md"
                        type="text"
                        name="phone"
                        id="phone"
                    />
                </div>
            ),
        },
        {
            title: "Description et l'image",
            icon: <HiOutlineViewList className="text-2xl h-12" />,
            content: (
                <div className="mx-1 md:px-6">
                    <label className="w-auto" htmlFor="img">
                        <p className="text-blue-700  flex w-auto text-lg font-semibold">Image de Profile </p>
                        {selectedImage ? (
                            <img src={`C:/wamp64/www/pfeApi/api/uploads/profiles/pic1.jpg`} alt="Profile" className="w-28 h-28 mt-3 m-auto border-blue-400  border-[1.5px] bg-gray-100" />
                        ) : (
                            <LuImagePlus className="text-gray-600 m-auto  w-28 h-28 mt-3 border-blue-400  border-[1.5px] rounded-md bg-gray-100 text-9xl" />
                        )}
                        <input type="file" id="img" hidden onChange={handleImageChange} />
                    </label>
                    <p className="text-blue-700 flex mt-6 mb-2 text-xl font-semibold">Description</p>
                    <textarea
                        value={formData.description_ouvrier || ''}
                        onChange={handleChange}
                        className="w-full p-4 md:px-4 md:p-0 bg-gray-100 focus:outline-none border-[1.5px] border-blue-400 rounded-md"
                        name="description_ouvrier"
                        id="description"
                        rows={6}
                    ></textarea>
                </div>
            ),
        },
        {
            title: "Professions",
            icon: <GrUserWorker className="text-2xl h-12" />,
            content: (
                <div className="md:px-6">
                    <p className="text-blue-700 flex mt-6 text-lg font-semibold">Sélectionnez vos professions</p>
                    <ChoiseOccupations id={formData.idOuvrier || ''} />
                </div>
            ),
        },
        {
            title: "Ville",
            icon: <FaCity className="text-2xl h-12" />,
            content: (
                <div className="md:px-6">
                    <p className="text-blue-700 flex mt-6 text-lg font-semibold">Entrez votre ville</p>
                    <ChoiseCity city={formData.ville_FR || ''} onCityChange={handleCityChange} />
                </div>
            ),
        },
    ];

    const renderStepContent = () => {
        return (
            <div className="md:w-2/3 px-2 md:px-2 w-[100%] md:pt-12 h-[100vh] relative  bg-slate-300">
                <article className="mt-4 cursor-pointer text-teal-700 flex items-center text-2xl font-semibold">
                    <p className="mr-2">{steps[activeStep].icon}</p> {steps[activeStep].title}
                </article>
                {steps[activeStep].content}
                <div className="absolute py-1 w-full flex justify-around left-0 rounded-md text-xl text-white bottom-10">
                    <button onClick={onCloseComp} className="bg-red-300 text-red-800 w-2/5 md:w-1/3 py-2 rounded px-10">
                        Anuller
                    </button>
                    <button onClick={handleSubmit} className="bg-teal-600 w-2/5 md:w-1/3 py-2 rounded px-10">
                        Valider
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 w-full h-full bg-black/80">
            <div className="bg-teal-400 md:bg-white md:flex-row m-auto flex-col z-50 inset-0 bg-hite container flex h-[100vh]">
                <div className="md:w-1/3 md:h-[100vh] w-full md:px-4 md:mt-2">
                    <div className="md:block hidden">
                        <Progress num={10} />
                        <div className="flex md:flex-col -mt-2 text-teal-700 font-bold justify-center items-center mb-10">{!isArabic?"Complétez votre compte":"أكمل حسابك"}</div>
                    </div>
                    <div className="flex w-full md:flex-col">
                        {steps.map((step, index) => (
                            <article
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`${activeStep === index ? "bg-slate-300 text-teal-900" : ""} mx-2 flex justify-center md:justify-start items-center m-auto w-full cursor-pointer hover:bg-slate-300 md:border px-3 md:pl-4 mt-6 rounded-t-md md:rounded-md text-teal-800 text-lg font-semibold`}
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
