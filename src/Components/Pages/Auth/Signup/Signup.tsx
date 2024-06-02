import { useState } from "react"

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import HeadlessUI from "./HeadlessUI";
import Input from "./Input";
import { useState } from "react";
import Navbar from "../../../Common/Navbar/Navbar";


const Signup = () => {

  const [professions, setProfessions] = useState<string[]>([]);


 

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a login page
    navigate('/login');
  };
=======
type userData = {
  firstName: string
  lastName: string
  phone: string
  password: string
  confirmPassword: string
}
>>>>>>> ayoub

type UserFormProps = userData & {

  updateFields: (fields: Partial<userData>) => void
}

const Signup = ({ firstName, lastName, phone, password, confirmPassword, updateFields }: UserFormProps) => {

  const [isArabic] = useState<boolean>(true);

  return (
<<<<<<< HEAD
    <div className="border">
      <Navbar/>
    {/* // lg:w-[80%]  flex items-center  m-auto mt-[1%]  */}
    <div className='flex mt-32 m-auto w-[95%] my-10 lg:w-[80%]' >
      {/* welcome side */}
      <div className='tab:flex  tab:justify-center tab:items-center w-[60%] relative hidden overflow-hidden text-white rounded-l-xl flex-col ' style={{ background: "#414F5F" }}>
        <h1 className="lg:text-4xl text-xl font-bold">Welcome Back !</h1>
        <small className="mb-10 mt-4">Login to your account</small>
        <button onClick={handleClick} className='border-2 w-40 rounded-full transition-all  ease-in-out  duration-300 hover:bg-teal-600 px-10 py-3'>Login</button>

        <div className="w-40 h-40 absolute top-0 opacity-20 left-0 -mt-16 -ml-16  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute -mt-64 ml-60  opacity-20  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute mt-64 mr-60 opacity-20   bg-gray-400 rounded-full "></div>
        <div className="w-40 h-40 absolute  bottom-0 opacity-20 right-0 -mb-16 -mr-16  bg-gray-400 rounded-full "></div>

=======
    <div className=' md:flex md:flex-col mt-10 md:mt-4 md:items-center  rounded-xl'>
      <div className="text-center ">
        <h1 className="text-teal-500 text-3xl font-[50px]">
          {!isArabic ? "Informations personnelles" : "معلومات شخصية"}
        </h1>
        <small className="text-red-500">
          {!isArabic ? "utilisez votre numéro actif pour vous contacter*" : "* استخدم رقمك النشط للتواصل معك"}
        </small>
>>>>>>> ayoub
      </div>
      <div className={`w-full flex-col`}>
        <div className={`${!isArabic ? "md:flex-row" : "md:flex-row-reverse"} flex py-2 w-full md:flex  flex-col  items-center justify-around`}>
          <div className={`${!isArabic ? "" : " items-end "} flex  w-[97%] flex-col`}>
            <label htmlFor="fname" className="text-sm color text-teal500 font-semibold" >
              {!isArabic ? "Prenom" : "الاسم الشخصي"}
            </label>
            <input onChange={e => updateFields({ firstName: e.target.value })} autoFocus value={firstName} required type="text"
              className=" h-8 md:h-10  md:w-[400px] w-full px-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent"
              id="fname"
              dir={`${!isArabic ? "ltr" : "rtl"}`}
            />

          </div>

          <div className={`${!isArabic ? "" : "items-end"} flex w-[97%] flex-col`}>
            <label htmlFor="lname" className=" text-sm text-teal500 font-semibold " >
              {!isArabic ? "Nom" : "الاسم العائلي"}
            </label>
            <input required type="text" onChange={e => updateFields({ lastName: e.target.value })} value={lastName}
              className="h-8 md:h-10 w-full md:w-[400px]  px-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="lname"
              dir={`${!isArabic ? "ltr" : "rtl"}`}

            />
          </div>
        </div>
        <div className={`${!isArabic ? " md:flex-row" : " md:flex-row-reverse"} flex  flex-col items-center justify-around`}>
          <div className={`${!isArabic ? "" : "items-end"} flex w-[97%] flex-col`}>
            <label htmlFor="phone" className="text-sm text-teal500 font-semibold " >
              {!isArabic ? "Telephone" : "الهاتف"}
            </label>

            <input required type="text" onChange={e => updateFields({ phone: e.target.value })} value={phone}
              className="h-8 md:h-10 w-full md:w-[400px]  px-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent"
              id="phone"
              dir={`${!isArabic ? "ltr" : "rtl"}`}

            />
          </div>

          <div className={`${!isArabic ? "" : "items-end"} flex w-[97%] flex-col`}>
            <label htmlFor="password" className={!isArabic ? " text-sm text-teal500 font-semibold " : " text-sm flex justify-end text-teal500 font-semibold "} >
              {!isArabic ? "Mot de passe" : "كلمة السر"}
            </label>
            <input required type="password" onChange={e => updateFields({ password: e.target.value })} value={password}
              className="h-8 md:h-10 w-full md:w-[400px]  px-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent"
              id="password"
              dir={`${!isArabic ? "ltr" : "rtl"}`}

            />
          </div>
        </div>

        <div className={`${!isArabic ? "" : "items-end "} w-[97%] md:w-full m-auto py-2  flex  flex-col`}>
          <label htmlFor="confpassword" className={` text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Confirmez le mot de passe" : "تأكيد كلمة المرور"}
          </label>
          <input required type="password" onChange={e => updateFields({ confirmPassword: e.target.value })} value={confirmPassword}
            className={`${!isArabic ? "" : ""} h-8 md:h-10  w-full md:w-[400px]  px-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent`}
            id="confpassword"
            dir={`${!isArabic ? "ltr" : "rtl"}`}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signup