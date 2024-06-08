// import { useState } from "react";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import cities from "./Cities.json";
import { FaLocationDot } from "react-icons/fa6";


interface PROPSPopUp {
    close: () => void,

}

const EditPopUp = ({ close }: PROPSPopUp) => {


    // const { steps, currentStepindex, step, isFirstStep, isLastStep, back, next } = useMultistepsForm([
    //     <ChoiseCity />,
    //     <ChoiseOccupations />,
    //     <textarea placeholder="Your Description Here" className="h-24 focus:outline-dashed pt-4 pl-4 md:h-28 w-[253px] text-black md:w-[400px] rounded-md mt-3 mb-3" name="description" />
    // ])

    const [passVisible, setPassVisible] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [cityOpen, setCityOpen] = useState<boolean>(false);
    const handlePassVisibility = () => {
        setPassVisible(!passVisible)
    }
    const onsubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }


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
                    <div className="md:flex md:justify-around sm:w-[90%] w-[95%]  m-auto md:w-full">
                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="prenom" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                                Nom Personnel
                            </label>
                            <input type="text"
                                className={` w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="prenom"
                            />
                        </div>
                        <div className=" md:w-[45%]  py-2">
                            <label htmlFor="nom" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                                Nom de Famille
                            </label>
                            <input type="text"
                                className={` w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="nom"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:justify-around m-auto  sm:w-[90%] w-[95%] md:w-full">
                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="dateNaiss" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                                Date De Naissence
                            </label>
                            <input type="date"
                                className={` w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="dateNaiss"
                            />
                        </div>
                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="telephone" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                                Telephone
                            </label>
                            <input type="number"
                                className={` w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="telephone"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:justify-around sm:w-[90%]   w-[95%] m-auto md:w-full">
                        <div className="relative md:w-[45%] py-2">
                            <label htmlFor="ville" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                                Ville
                            </label>
                            <input type="text"
                                className={` w-full h-[50px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
                                id="ville"
                                onChange={(e) => { handleInputCity(e.target.value) }}
                                value={inputValue}
                            />

                            {/* choose city helper */}
                            <div className="absolute top-20 w-full z-10 left-0 ">
                                {cityOpen && (
                                    <div className='h-[250px]  sm:w-[100%] z-10 overflow-y-scroll scrollbar-none border border-gray-400 bg-gray-200 rounded-md shadow-lg  w-full transition-all ease-in-out duration-150 overflow-hidden'>

                                        {cities.filter(city => city.toLowerCase().includes(inputValue.toLowerCase()))
                                            .map((city, index) => (
                                                <div
                                                    onClick={() => handleClose(city)}
                                                    key={index}
                                                    className="w-full cursor-pointer h-[60px] px-6 border-b border-gray-500 
                                                                    flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
                                                >
                                                    <FaLocationDot className="text-gray-700" /> {city}
                                                </div>
                                            ))

                                        }
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className=" md:w-[45%] py-2">
                            <label htmlFor="badge" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                                Badge
                            </label>
                            <select
                                name="badge" id="badge"
                                className={` w-full h-[50px] px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}

                            >
                                <option className="" value="1">Maalem</option>
                                <option value="1">Kheddam</option>
                            </select>

                        </div>
                    </div>
                    <div className={`flex flex-col items-center m-auto sm:w-[95%]  w-full `} >

                        <label htmlFor="description" className={`md:w-full w-[95%] after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                            À ProPos de vous
                        </label>
                        <textarea
                            placeholder={`Description" `}
                            className='border-2 w-[95%] md:w-full  p-3 focus:outline-blue-500  md:h-38  rounded-xl border-teal500 '
                            name="description"
                            id="description" cols={50} rows={4}
                        // dir={`${!isArabic ? "ltr" : "rtl"}`}
                        />
                    </div>
                    <div className="mx-6 w-[95%]  m-auto  py-2">
                        <label htmlFor="password" className={` after:text-red-500  text-sm md:text-md flex  text-teal500 font-semibold `} >
                            Mot de Passe
                        </label>
                        <div className="relative border-teal500  flex rounded-xl border-2 ">
                            <input type={passVisible ? "text" : "password"}

                                className={` w-full h-[50px]  px-4 focus:outline-blue-500  rounded-xl  bg-transparent`}
                                id="password"
                            />
                            {passVisible ? <MdVisibilityOff onClick={handlePassVisibility} className="absolute top-1/3 right-4 text-xl text-teal500" />
                                : <MdVisibility onClick={handlePassVisibility} className="absolute  top-1/3 right-4 text-xl text-teal500" />}
                        </div>
                    </div>
                </div>

                <div className=" mt-10 flex md:justify-end m-auto w-[95%] justify-between md:mx-6 pb-10 ">
                    <button className="px-10 py-[4px]  rounded-md bg-red-900 opacity-75 text-sm text-white border " onClick={close}>Annuler</button>
                    <button className="px-10 py-[4px]  rounded-md bg-teal-900 opacity-75 text-sm text-white border">Modifier</button>
                </div>

            </div>
        </form>
    )
}

export default EditPopUp