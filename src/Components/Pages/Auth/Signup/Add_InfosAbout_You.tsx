import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import "./add_info_style.css"


// type userData = {
//     about_me: string
//      image: File
//   }
  
//   type infoFormProps = userData &{
    
//     updateFields: (fields: Partial<userData>) => void
//   }
const Add_InfosAbout_You = () => {

const [choosedImage, setChoosedImage] = useState<File | null>(null);

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedImage = files[0];
      setChoosedImage(selectedImage);
      
    }}

    return (

        <div className='flex flex-col items-center  '>
            <div className="text-center ">
                <h1 className="text-teal-500 text-3xl font-semibold">Additional Information About You</h1>
                <small className="text-red-500">More Information about you , More clients for you*</small>
            </div>
            <form action="" method="post" className="flex justify-center  my-4 w-[70%] md:py-4 ">
                <div className='mr-16'>
                    <label htmlFor="image">
                        <span className=''>Your Photo</span>
                        <input onChange={handleImageChange} type="file" name="" id="image" hidden/>
                        {choosedImage!=null?<img onChange={()=> handleImageChange}  className='object-cover bg-gray-200 border-2 rounded-lg  h-40 w-40' src={URL.createObjectURL(choosedImage)} />:<CiImageOn className='text-gray-500  bg-gray-200 border-2 rounded-lg  h-40 w-40'/>}
                    </label>
                </div>
                <div className='flex flex-col '>
                    <label htmlFor='description'>Description About You</label>
                    <textarea  placeholder='Description' className='border-2 p-3 h-22 rounded-md bg-gray-200' name="description" id="description" cols={50} rows={6} />
                </div>
            </form>

        </div>

    )
}



export default Add_InfosAbout_You
