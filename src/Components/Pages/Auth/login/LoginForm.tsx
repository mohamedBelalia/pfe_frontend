import { useState } from 'react';
import Navbar from '../../../Common/Navbar/Navbar'
import { AppDispatch, RootState } from '../../../Store/store';
import { useSelector } from 'react-redux';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';
import { HiOutlineLogin } from 'react-icons/hi';
import Api from '../../../../api/Api';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../../Store/Slices/StoringUserToken';
import { Link, useNavigate } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';
import AlertLogin from './AlertLogin';

const phoneRegex = /^\+212(5|6|7)\d{8}$/

const LoginForm = () => {

    // to store the user token in the 'store'
    const dispatch = useDispatch<AppDispatch>()

    // navigating to home page
    const navigate = useNavigate()

    // The Slice For Change The Language
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
    const [phone, setPhone] = useState<string>("");
    const [isValidePhone, setIsValidePhone] = useState<boolean | null>(null)

    const [pwd, setPwd] = useState<string>("");
    const [isValidePwd, setIsValidePwd] = useState<boolean | null>(null)
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [errorMessage, setErrorMessage] = useState<string>("")

    const [isLoaded, setIsLoaded] = useState<boolean | null>(null)

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };

    // login btn clicked
    const login = () => {
        const isPhoneValid = phoneRegex.test("+212" + phone);
        const isPwdValid = pwd.length > 0;

        setIsValidePhone(isPhoneValid);
        setIsValidePwd(isPwdValid);

        if (isPhoneValid && isPwdValid) {
            fetchWorkerInfo();
        }
    }

    // login to database function
    const fetchWorkerInfo = async () => {
        const userInfo = {
            phone: "+212" + phone,
            pwd: pwd
        }
        try {
            setIsLoaded(true)
            const response = await Api.post("/Login", userInfo);
            if (response.data.status == "connection_error") {
                setErrorMessage("connection_error")
            }
            else if (response.data.status == "uncomplate_data") {
                setErrorMessage("uncomplate_data")
            }
            else if (response.data.status == "not_found") {
                setErrorMessage("not_found")
            }
            else if (response.data.status == "founded") {
                dispatch(setUserToken({ userToken: response.data.token }))
                navigate("/")
            }
        } catch (error) {
            setErrorMessage("something_wrong")
        }
        finally {
            setIsLoaded(false)
        }
    }


    return (
        <div className='border'>
            <Navbar />
            <div className='md:pt-40 pt-20 pb-20'>

                {
                    errorMessage.length > 0
                    &&
                    <AlertLogin message={errorMessage} />
                }

                <div className='md:w-[80%] w-[95%] mx-auto flex gap-5'>
                    <div className='w-1/2 rounded-lg overflow-hidden relative md:block hidden'>
                        <img src="./imgUsed/door11.jpg" alt="" />
                        <div className='w-full h-full bg-[#102d2da2] absolute top-0 left-0 pt-10'>
                            <div className='w-full h-full flex justify-start gap-4 items-center flex-col'>
                                <img src="./imgUsed/builder_mostach.png" className='w-[110px]' />
                                <p className='text-4xl font-bold text-white w-[80%] text-center'>
                                    {
                                        isArabicSelected ? "مرحباً بعودتك إلى الموقع"
                                            : "Bienvenue de retour sur lmoqef"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
                        className='md:w-1/2 w-full p-6 bg-[#ececec] flex flex-col gap-8 rounded-lg'>

                        {/* Telephone */}
                        <div className="flex flex-col gap-2 md:px-8">
                            <label className="text-md md:text-md text-blue-600 font-semibold">
                                {!isArabicSelected ? "Téléphone " : "هاتف"}
                            </label>
                            <div className="relative">
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="612131415"
                                    dir="ltr"
                                    className={`font-semibold pl-[50px] w-full h-[50px] focus:outline-blue-500 ${isValidePhone == false ? "border-red-600" : "border-teal500 "} rounded-lg border-2 bg-white`}
                                />
                                <span className="absolute left-3 pr-3 top-[13px] text-gray-800 pointer-events-none" dir="ltr">+212 {" "}</span>
                            </div>
                            {
                                isValidePhone == false &&
                                <p className="-mt-1 text-red-600">
                                    {
                                        isArabicSelected ? "أدخل رقم هاتف صالح" : "entrez un numéro de téléphone valide"
                                    }
                                </p>
                            }
                        </div>

                        {/* Password */}
                        <div className="flex md:px-8 flex-col gap-2">
                            <label className="text-md md:text-md text-blue-600 font-semibold">
                                {!isArabicSelected ? "Mot de passe " : "كلمة السر"}
                            </label>
                            <div className="relative" >
                                <input
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    placeholder={!isArabicSelected ? "mot de passe " : "كلمة السر"}
                                    className={`h-[50px] w-full px-4 focus:outline-blue-500 ${isValidePwd == false ? "border-red-600" : "border-teal500 "} rounded-lg border-2 bg-white`}
                                />
                                {
                                    isValidePwd == false &&
                                    <p className="-mt-1 text-red-600">
                                        {
                                            isArabicSelected ?
                                                "كلمة المرور مهمة"
                                                : "Le mot de passe est important"
                                        }
                                    </p>
                                }
                                <button
                                    type="button"
                                    onClick={toggleShowPassword}
                                    className={`absolute top-[14px] text-gray-500 focus:outline-none ${isArabicSelected ? 'left-3' : 'right-3'}`}
                                >
                                    {!showPassword ? <IoEye className="font-bold text-2xl cursor-pointer" /> : <IoMdEyeOff className="font-bold text-2xl cursor-pointer" />}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        {
                            isLoaded
                                ?
                                <button
                                    className='px-3 py-2 cursor-not-allowed bg-teal500 md:w-[200px] w-full mx-auto rounded-lg text-white flex items-center justify-center gap-3'>
                                    {
                                        isArabicSelected ? "تسجيل الدخول" : "se connecter"
                                    }
                                    <FiLoader className='text-2xl' />
                                </button>
                                :
                                <button
                                    onClick={login}
                                    className='px-3 py-2 bg-teal500 md:w-[200px] w-full mx-auto rounded-lg text-white flex items-center justify-center gap-3'>
                                    {
                                        isArabicSelected ? "تسجيل الدخول" : "se connecter"
                                    }
                                    <HiOutlineLogin className='text-2xl' />
                                </button>
                        }

                        <div 
                        className="flex justify-center gap-3 mt-8 text-lg">
                            <p> 
                                {   
                                    isArabicSelected 
                                    ? "هل أنت جديد هنا ؟"
                                    : "Vous êtes nouveau ici ?"}
                            </p>

                            <Link to="/Signup" className="underline text-teal-900 font-bold">
                                {isArabicSelected ? "سجل الآن" : "Inscrivez-vous"}
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm