// import { useState } from "react"


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

  const isArabic = false;

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
        <div className="flex gap-8  w-full">
          <div className=" w-1/2 py-2">
            <label htmlFor="prenom" className={`${isArabic ? "flex justify-end" : ""} after:content-['*'] after:text-red-500  text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
              {!isArabic ? "Nom Personnel" : "الاسم الشخصي"}
            </label>
            <input type="text" onChange={e => updateFields({ firstName: e.target.value })} value={firstName}
              className={`${!isArabic ? "" : ""}  h-[55px] w-full  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
              id="confpassword"
              dir={`${!isArabic ? "ltr" : "rtl"}`}
            />
          </div>
          {/* nom */}
          <div className="w-1/2 pt-2">
            <label htmlFor="nom" className={`${isArabic ? "flex justify-end" : ""} text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
              {!isArabic ? "Nom de famille" : "الاسم العائلي"}
            </label>
            <input type="text" onChange={e => updateFields({ lastName: e.target.value })} value={lastName}
              className={`${!isArabic ? "" : ""}  h-[55px] w-full px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
              id="confpassword"
              dir={`${!isArabic ? "ltr" : "rtl"}`}
            />
          </div>
        </div>

        {/* // TODO API authentification*/} 
        <div className="flex  w-full gap-8">
          {/* Téléphone * */}
          <div className="w-1/2 ">
            <label htmlFor="telephone" className={`${isArabic ? "flex justify-end" : ""} text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
              {!isArabic ? "Téléphone *" : "رقم الهاتف"}

            </label>
            <input type="tel" onChange={e => updateFields({ phone: e.target.value })} value={phone}
              className={`${!isArabic ? "" : ""}  w-full h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
              id="confpassword"
              dir={`${!isArabic ? "ltr" : "rtl"}`}
            />
          </div>
          {/* mot de pass */}
          <div className="w-1/2 ">
            <label htmlFor="password" className={`${isArabic ? "flex justify-end" : ""} text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
              {!isArabic ? "Password *" : " كلمة السر"}

            </label>
            <input type="password" onChange={e => updateFields({ password: e.target.value })} value={password}
              className={`${!isArabic ? "" : ""} w-full  h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
              id="password"
              dir={`${!isArabic ? "ltr" : "rtl"}`}
            />
          </div>
        </div>
        <div className="w-full flex gap-8">
          <div className="w-1/2">
          <label htmlFor="confpassword" className={`${isArabic ? "flex justify-end" : ""} text-sm md:text-md flex justify-start text-teal500 font-semibold `} >
            {!isArabic ? "Confirmer le mot de passe *" : "تأكيد كلمة المرور"}

          </label>
          <input type="password" onChange={e => updateFields({ confirmPassword: e.target.value })} value={confirmPassword}
            className={`${!isArabic ? "" : ""}  w-full  h-[55px]  px-4 focus:outline-blue-500 border-teal500  rounded-xl border-2  bg-transparent`}
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