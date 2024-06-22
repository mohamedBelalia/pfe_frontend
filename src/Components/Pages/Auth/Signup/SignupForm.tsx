// import { useState } from "react"

import { useSelector } from "react-redux";
import Navbar from "../../../Common/Navbar/Navbar";
import { AppDispatch, RootState } from "../../../Store/store";
import SearchCity from "../../../Common/util/SearchCity";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import ProfessionsMulltiSelect from "../../../Common/util/ProfessionsMulltiSelect";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../../../api/Api";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../../Store/Slices/StoringUserToken";
import { BiSolidError } from "react-icons/bi";


const phoneRegex = /^\+212(5|6|7)\d{8}$/

const SignupForm = () => {

    // navigating to home page
    const navigate = useNavigate()

    // to store the user token in the 'store'
    const dispatch = useDispatch<AppDispatch>()

    // form information
    const [prenom, setPrenom] = useState<string>("");
    const [nom, setNom] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [professions, setProfessions] = useState<string[]>([]);
    const [villeId, setVilleId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [confirmPwd, setConfirmPwd] = useState<string>("");

    // states for inputs validation
    const [isValidePrenom, setIsValidePrenom] = useState<boolean | null>(null)
    const [isValidePhone, setIsValidePhone] = useState<boolean | null>(null)
    const [isValidePofessions, setIsValidePofessions] = useState<boolean | null>(null)
    const [isValideVille, setIsValideVille] = useState<boolean | null>(null)
    const [isValidePwd, setIsValidePwd] = useState<boolean | null>(null)
    const [isValideConfirmPwd, setIsValideConfirmPwd] = useState<boolean | null>(null)

    // The Slice For Change The Language
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    // handling signup
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const [isError, setIsError] = useState<boolean>(false)

    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };
    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(prevState => !prevState);
    };

    // function to validate all the fields
    const isAllFieldsValid = () => {

        // Prenom
        if (prenom.length < 2) {
            setIsValidePrenom(false)
        }
        else {
            setIsValidePrenom(true)
        }
        // Phone
        if (phoneRegex.test("+212" + phone)) {
            setIsValidePhone(true)
        }
        else {
            setIsValidePhone(false)
        }

        // professions
        if (professions.length >= 1) {
            setIsValidePofessions(true)
        }
        else {
            setIsValidePofessions(false)
        }

        // ville
        if (villeId.length == 0) {
            setIsValideVille(false)
        }
        else {
            setIsValideVille(true)
        }
        // password
        if (pwd.length >= 6) {
            setIsValidePwd(true)
        }
        else {
            setIsValidePwd(false)
        }
        // confirm password
        if (confirmPwd == pwd) {
            setIsValideConfirmPwd(true)
        }
        else {
            setIsValideConfirmPwd(false)
        }

        console.log("validated");


    }

    // the signup function
    const signup = () => {
        isAllFieldsValid()

        if ((prenom.length > 2) && phoneRegex.test("+212" + phone) && (villeId.length != 0) && (professions.length >= 1) && (pwd.length >= 6) && (confirmPwd == pwd)) {
            insertingUserInfo()
        }
    }

    // inserting data function
    const insertingUserInfo = async () => {

        const userData = {
            firstName: prenom,
            lastName: nom,
            phoneNumber: "+212" + phone,
            password: pwd,
            ville: villeId,
            profession: professions
        }
        try {
            setIsLoading(true)
            const response = await Api.post("/Signup", userData)
            if (response.data.token != "already_exist") {
                dispatch(setUserToken({ userToken: response.data.token }))

                setPrenom("")
                setPhone("")
                setNom("")
                setPwd("")
                setProfessions([])
                setVilleId("")
                setConfirmPwd("")

                navigate("/")
            }
            else {
                setIsError(true)
            }



        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }

    }

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className="border">

            <Navbar />
            <div className='pt-[100px] w-full md:w-[70%] md:flex md:flex-col mb-20  m-auto md:mt-10 md:items-center rounded-xl'>
                <div className="text-center mb-2">
                    <h1 className="text-blue-500 font-semibold text-2xl lg:text-3xl ">
                        {!isArabicSelected ? "Informations personnelles" : "معلومات شخصية"}
                    </h1>
                    <small className="text-red-500">
                        {!isArabicSelected ? "utilisez votre numéro actif pour vous contacter*" : "* استخدم رقمك النشط للتواصل معك"}
                    </small>

                </div>

                {
                    isError
                    &&
                    <div
                        dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
                        className="w-[80%] m-auto border-2 border-red-600 bg-red-100 rounded-md p-4 flex justify-start gap-2 items-center">
                        <BiSolidError className="text-2xl text-red-700" />
                        <p className="text-red-700 font-semibold">
                            {
                                isArabicSelected
                                    ? "فشل التسجيل، حاول مرة أخرى أو تحقق من صحة رقم هاتفك."
                                    : "échec de l'inscription , réessayez ou vérifiez que votre numéro de téléphone est correct ou non"
                            }
                        </p>
                    </div>
                }

                <div className="p-3 w-full flex flex-col gap-5">
                    {/* Part 1 */}
                    <div className="w-full flex flex-col md:flex-row md:gap-10 gap-4" dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>

                        {/* Prénom */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Prénom " : " الاسم الشخصي"} <span className="text-red-600"> *</span>
                            </label>
                            <input
                                value={prenom}
                                onChange={(e) => setPrenom(e.target.value)}
                                type="text"
                                placeholder={isArabicSelected ? "اسمك الشخصي" : "votre prénom"}
                                className={`h-[50px] w-full px-4 focus:outline-blue-500 ${isValidePrenom == false ? "border-red-600" : "border-teal500 "} rounded-lg border-2 bg-transparent`}
                                dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
                            />
                            {
                                isValidePrenom == false &&
                                <p className="-mt-1 text-red-600">
                                    {
                                        isArabicSelected ? "اسمك الشخصي إلزامي" : "le prénom est obligatoire"
                                    }
                                </p>
                            }
                        </div>

                        {/* Nom */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Nom " : "الاسم العائلي "}
                            </label>
                            <input
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                                type="text"
                                placeholder={isArabicSelected ? "الاسم العائلي" : "votre nom"}
                                className="h-[50px] w-full px-4 focus:outline-blue-500 border-teal500  rounded-lg border-2 bg-transparent"
                                dir={`${!isArabicSelected ? "ltr" : "rtl"}`}
                            />
                        </div>

                    </div>
                    {/* Part 2 */}
                    <div className="w-full flex flex-col md:flex-row md:gap-10 gap-4" dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>

                        {/* Phone */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Téléphone " : "هاتف"} <span className="text-red-600"> *</span>
                            </label>
                            <div className="relative">
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="612131415"
                                    dir="ltr"
                                    className={`font-semibold pl-[50px] w-full h-[50px] focus:outline-blue-500 ${isValidePhone == false ? "border-red-600" : "border-teal500 "} rounded-lg border-2 bg-transparent`}
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

                        {/* Ville */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Ville " : "المدينة"} <span className="text-red-600"> *</span>
                            </label>
                            <SearchCity getCityId={setVilleId} isValidateCity={isValideVille} />
                            {
                                isValideVille == false &&
                                <p className="-mt-1 text-red-600">
                                    {
                                        isArabicSelected ? "المدينة إلزامية" : "la ville est obligatoire"
                                    }
                                </p>
                            }
                        </div>

                    </div>
                    {/* Part 3 */}
                    <div className="w-full flex flex-col md:flex-row md:gap-10 gap-4" dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>

                        {/* Password */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Mot de passe " : "كلمة السر"} <span className="text-red-600"> *</span>
                            </label>
                            <div className="relative" >
                                <input
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    placeholder={!isArabicSelected ? "mot de passe " : "كلمة السر"}
                                    className={`h-[50px] w-full px-4 focus:outline-blue-500 ${isValidePwd == false ? "border-red-600" : "border-teal500 "} rounded-lg border-2 bg-transparent`}
                                />
                                {
                                    isValidePwd == false &&
                                    <p className="-mt-1 text-red-600">
                                        {
                                            isArabicSelected ? "أدخل كلمة مرور صالحة (على الأقل 6 أحرف)" : "entrez un mot de passe valide (6 caractères au moins)"
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

                        {/* Confirmez le mot de passe */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Confirmez le mot de passe " : "تأكيد كلمة المرور"} <span className="text-red-600"> *</span>
                            </label>
                            <div className="relative" >
                                <input
                                    value={confirmPwd}
                                    onChange={(e) => setConfirmPwd(e.target.value)}
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder={!isArabicSelected ? "Confirmez le mot de passe " : "تأكيد كلمة المرور"}
                                    className={`h-[50px] w-full px-4 focus:outline-blue-500 ${isValideConfirmPwd == false ? "border-red-600" : "border-teal500 "}  rounded-lg border-2 bg-transparent`}
                                />
                                {
                                    isValideConfirmPwd == false &&
                                    <p className="-mt-1 text-red-600">
                                        {
                                            isArabicSelected ? "كلمة المرور التأكيدية غير صحيحة" : "le mot de passe de confirmation est erroné"
                                        }
                                    </p>
                                }
                                <button
                                    type="button"
                                    onClick={toggleShowConfirmPassword}
                                    className={`absolute top-[14px] text-gray-500 focus:outline-none ${isArabicSelected ? 'left-3' : 'right-3'}`}
                                >
                                    {!showConfirmPassword ? <IoEye className="font-bold text-2xl cursor-pointer" /> : <IoMdEyeOff className="font-bold text-2xl cursor-pointer" />}
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Part 4 */}
                    <div className="w-full flex flex-col md:flex-row md:gap-10 gap-4" dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>

                        {/* Profession */}
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <label className="text-md md:text-md text-teal500 font-semibold">
                                {!isArabicSelected ? "Votre Professions" : "المهن الخاصة بك"} <span className="text-red-600"> *</span>
                            </label>

                            <ProfessionsMulltiSelect getProfessionsIDs={setProfessions} professiosIDs={professions} isValidateOccupation={isValidePofessions} />
                            {
                                isValidePofessions == false &&
                                <p className="-mt-1 text-red-600">
                                    {
                                        isArabicSelected ? "اختر مهنتك (مهنة واحدة على الأقل)" : "sélectionnez votre profession (une profession au moins)"
                                    }
                                </p>
                            }
                        </div>
                        <div className="md:w-1/2 w-full flex  flex-col gap-1">
                            <button
                                onClick={signup}
                                className="w-full h-[50px] rounded-lg mt-7 bg-teal-600 hover:bg-teal-500 font-semibold text-xl text-white">
                                {isArabicSelected ? "تسجيل" : "S'inscrire"}
                            </button>
                        </div>
                    </div>

                    <div className={`flex justify-center gap-3 mt-8 text-lg ${isArabicSelected && "flex-row-reverse"}`}>
                        <p>{isArabicSelected ? "⸮ هل لديك حساب" : "Vous avez déjà un compte ?"}</p>
                        <Link to="/Login" className="underline text-teal-900 font-bold">
                            {isArabicSelected ? "تسجيل الدخول" : "se connecter"}
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignupForm