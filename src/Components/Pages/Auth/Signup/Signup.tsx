import { useState } from "react"

type userData = {
  firstName: string
  lastName: string
  phone: string
  password: string
  confirmPassword: string
}

type UserFormProps = userData & {
  updateFields: (fields: Partial<userData>) => void
}

const Signup = ({ firstName, lastName, phone, password, confirmPassword, updateFields }: UserFormProps) => {

  const [isArabic] = useState<boolean>(false);
 

  return (
    <div className=' w-full lg:w-[80%] md:flex md:flex-col mb-4  m-auto md:h-[100%] md:mt-10 mt-4 md:items-center  rounded-xl'>
      <div className="text-center ">
        <h1 className="text-blue-500 font-semibold text-2xl lg:text-3xl ">
          {!isArabic ? "Informations personnelles" : "معلومات شخصية"}
        </h1>
        <small className="text-red-500">
          {!isArabic ? "utilisez votre numéro actif pour vous contacter*" : "* استخدم رقمك النشط للتواصل معك"}
        </small>
      </div>
      <div className='w-full  flex items-center  flex-col '> 
        {/*prenom*/}
        <div className="w-full py-2">
          <label htmlFor="prenom" className={` text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Nom Personnel *" : "الاسم الشخصي"}
          </label>
          <input required type="text" onChange={e => updateFields({ firstName: e.target.value })} value={firstName}
            className={`${!isArabic ? "" : ""} w-full  lg:w-[734px] h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
            id="confpassword"
            dir={`${!isArabic ? "ltr" : "rtl"}`}
          />
        </div>
        {/* nom */}
        <div className="w-full pt-2">
          <label htmlFor="nom" className={` text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Nom de famille" : "الاسم العائلي"}
          </label>
          <input required type="text" onChange={e => updateFields({ lastName: e.target.value })} value={lastName}
            className={`${!isArabic ? "" : ""} w-full  lg:w-[734px] h-[55px] px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
            id="confpassword"
            dir={`${!isArabic ? "ltr" : "rtl"}`}
          />
        </div>
       

        {/* Téléphone * */}
        <div className="w-full py-2">
          <label htmlFor="telephone" className={` text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Téléphone *" : "رقم الهاتف"}

          </label>
          <input required type="tel" onChange={e => updateFields({ phone: e.target.value })} value={phone}
            className={`${!isArabic ? "" : ""}  w-full lg:w-[734px] h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
            id="confpassword"
            dir={`${!isArabic ? "ltr" : "rtl"}`}
          />
        </div>
        {/* mot de pass */}
        <div className="w-full py-2">
          <label htmlFor="password" className={` text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Password *" : " كلمة السر"}

          </label>
          <input required type="password" onChange={e => updateFields({ password: e.target.value })} value={password}
            className={`${!isArabic ? "" : ""} w-full  lg:w-[734px] h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
            id="password"
            dir={`${!isArabic ? "ltr" : "rtl"}`}
          />
        </div>
        <div className="w-full">
          <label htmlFor="confpassword" className={` text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Confirmer le mot de passe *" : "تأكيد كلمة المرور"}

          </label>
          <input required type="password" onChange={e => updateFields({ confirmPassword: e.target.value })} value={confirmPassword}
            className={`${!isArabic ? "" : ""}  w-full lg:w-[734px] h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
            id="confpassword"
            dir={`${!isArabic ? "ltr" : "rtl"}`}
          />
        </div>


      </div>
    </div>

  )
}

export default Signup