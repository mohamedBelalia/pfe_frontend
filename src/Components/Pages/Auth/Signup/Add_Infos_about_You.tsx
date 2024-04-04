import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import "./add_info_style.css"

type userData = {
    userImage: File | null,
    description: string,

}
type UserFormProps = userData & {
    updateFields: (fields: Partial<userData>) => void
}


const Add_Infos_about_You = ({ userImage, description, updateFields }: UserFormProps) => {

    const [isArabic] = useState<boolean>(true)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {

            const selectedImage = files[0];
            updateFields({ userImage: selectedImage })
        }
    }

    return (

        <div className='flex flex-col mt-18 md:mt-4  items-center  '>
            <div className="text-center ">
                <h1 className="text-teal-500 text-xl md:text-3xl font-semibold">
                    {`${!isArabic ? "Informations supplémentaires sur vous" : "معلومات إضافية عنك"}`}
                </h1>
                <small className="text-red-500 ">
                    {`${!isArabic ? "Plus d'informations sur vous, Plus de clients pour vous*"
                        : ".المزيد من المعلومات عنك، المزيد من العملاء لك*"}`}
                </small>
            </div>
            <div className={`${!isArabic ? "" : "md:flex-row-reverse"} md:flex w-full md:justify-center my-4 md:py-4`}>
                <div className={`${!isArabic ? "" : "flex justify-end"} md:mr-16 mx-6`}>
                    <label htmlFor="image" >
                        <span className={`${!isArabic ? "" : "flex justify-end"}`}>
                            {`${!isArabic ? "Ta photo" : "صورتك"}`}
                        </span>
                        <input onChange={handleImageChange} type="file" name="" id="image" hidden />
                        {userImage != null ? <img onChange={() => handleImageChange} className='object-cover bg-gray-200 border-2 h-20 w-20 rounded-lg md:h-40 md:w-40' src={URL.createObjectURL(userImage)} /> : <CiImageOn className='text-gray-500  bg-gray-200 border-2 rounded-lg h-20 w-20   md:h-40 md:w-40' />}
                    </label>
                </div>
                <div className={`${!isArabic ? "" : "items-end"} flex mx-6 flex-col`} >
                    <label htmlFor='description'>
                        {`${!isArabic ? "À propos de vous" : "وصف عنك"}`}
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => updateFields({ description: e.target.value })}
                        required
                        placeholder={`${!isArabic ? "Description" : "وصف"}`}
                        className='border-2 p-3 h-30 md:h-38 sm:w-80 rounded-md bg-gray-200'
                        name="description"
                        id="description" cols={50} rows={6}
                        dir={`${!isArabic ? "ltr" : "rtl"}`}
                    />
                </div>
            </div>

        </div>

    )
}



export default Add_Infos_about_You
