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

        <div className='flex w-full flex-col mt-18 mt-4 md:mt-10 h-[70vh] items-center  '>
            <div className="text-center ">
                <h1 className="text-blue-500 text-xl md:text-3xl font-semibold">
                    {`${!isArabic ? "Informations supplémentaires sur vous" : "معلومات إضافية عنك"}`}
                </h1>
                <small className="text-red-500 ">
                    {`${!isArabic ? "Plus d'informations sur vous, Plus de clients pour vous*"
                        : ".المزيد من المعلومات عنك، المزيد من العملاء لك*"}`}
                </small>
            </div>
            <div className={`${!isArabic ? "" : "md:flex-row-reverse"} md:flex w-full md:justify-center  m-auto my-4 md:py-4`}>
                <div className={`${!isArabic ? "" : "flex justify-end"} md:mr-16 md:mx-6`}>
                    <label htmlFor="image" >
                        <span className={`${!isArabic ? "" : "flex justify-end"}`}>
                            {`${!isArabic ? "Ta photo" : "صورتك"}`}
                        </span>
                        <input onChange={handleImageChange} type="file" name="" id="image" hidden />
                        {userImage != null ? <img onChange={() => handleImageChange} className='object-cover bg-gray-200 border-2 w-[100px] h-[100px]  md:w-[200px] md:h-[200px] rounded-lg h-30 w-30' src={URL.createObjectURL(userImage)} /> : <div className="md:w-[200px] md:h-[200px] h-[130px] w-[130px] border mt-2 rounded-xl flex justify-center items-center"><CiImageOn className='text-gray-500 text-[120px] md:text-[200px] bg-gray-200 border-2 rounded-lg   md:h-40 md:w-40' /></div>}
                    </label>
                </div>
                <div className={`${!isArabic ? "" : "items-end"} flex md:mx-6 flex-col`} >
                    <label htmlFor='description'>
                        {`${!isArabic ? "À propos de vous" : "وصف عنك"}`}
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => updateFields({ description: e.target.value })}
                        placeholder={`${!isArabic ? "Description" : "وصف"}`}
                        className='border-2 p-3 md:h-[200px] w-[100%] mt-2 md:w-[450px] md:h-38  rounded-md bg-gray-200'
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
