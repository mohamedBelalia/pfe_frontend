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

  const [isArabic] = useState<boolean>(true);

  return (
    <div className=' md:flex md:flex-col mt-10 md:mt-4 md:items-center  rounded-xl'>
      <div className="text-center ">
        <h1 className="text-teal-500 text-3xl font-[50px]">
          {!isArabic ? "Informations personnelles" : "معلومات شخصية"}
        </h1>
        <small className="text-red-500">
          {!isArabic ? "utilisez votre numéro actif pour vous contacter*" : "* استخدم رقمك النشط للتواصل معك"}
        </small>

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
  )
}

export default Signup