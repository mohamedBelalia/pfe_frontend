import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Api from "../../../../api/Api";

interface Props {
    city: string;
    onCityChange: (city: string) => void;
}

interface Cities {
    idVille: string;
    ville_AR: string;
    ville_FR: string;
}

const ChoiseCity = ({ city, onCityChange }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>(city);
    const [fetchedCities, setFetchedCities] = useState<Cities[]>([]);
    const isArabic = true; // Adjust this based on your application logic

   

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setSelectedCity(value); // Update selectedCity based on input value
        setIsOpen(value.length > 0); // Open dropdown if input has value
    };

    const handleChoiseCity = (city: string) => {
        setSelectedCity(city); // Update selectedCity
        onCityChange(city); // Call the callback function passed from parent
        setIsOpen(false); // Close dropdown after selecting a city
    };

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await Api.get<Cities[]>("villes");
                setFetchedCities(response.data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".absolute")) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div dir={`${isArabic ? "rtl" : "ltr"}`} className="relative z-50 cursor-pointer h-[60px] w-full flex justify-start text-lg items-center">
            <input
                onChange={handleInput}
                className='border-blue-700 px-4 focus:outline-none w-full pl-6 bg-gray-200 md:pl-3 border-[1.5px] rounded-md h-12'
                type="text"
                value={selectedCity}
            />
            {isOpen && (
                <div className='h-[200px] sm:w-[100%] z-10 overflow-y-scroll scrollbar-none border border-gray-400 bg-gray-200 rounded-md shadow-lg absolute w-full top-14 -mt-1 transition-all ease-in-out duration-150 overflow-hidden'>
                    {fetchedCities
                        .filter(city =>
                            isArabic ? city.ville_AR.toLowerCase().includes(inputValue.toLowerCase()) : city.ville_FR.toLowerCase().includes(inputValue.toLowerCase())
                        )
                        .map((city, index) => (
                            <div
                                onClick={() => handleChoiseCity(isArabic ? city.ville_AR : city.ville_FR)}
                                key={index}
                                className="w-full cursor-pointer h-[60px] px-6 border-b border-gray-500 flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
                            >
                                <FaLocationDot className="text-gray-700" /> {isArabic ? city.ville_AR : city.ville_FR}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default ChoiseCity;
