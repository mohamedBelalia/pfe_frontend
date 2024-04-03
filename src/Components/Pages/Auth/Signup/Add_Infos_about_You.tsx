// import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import "./add_info_style.css"

type userData = {
    userImage:File|null,
    description: string,
    
}
type UserFormProps = userData & {
    updateFields: (fields: Partial<userData>) => void
}
  

const Add_Infos_about_You = ({userImage,description,updateFields}:UserFormProps) => {


const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {

      const selectedImage = files[0];
      updateFields({userImage:selectedImage})
    }}
    
    return (

        <div className='flex flex-col mt-12 md:mt-0  items-center  '>
            <div className="text-center ">
                <h1 className="text-teal-500 text-xl md:text-3xl font-semibold">Additional Information About You</h1>
                <small className="text-red-500 ">More Information about you , More clients for you*</small>
            </div>
            <div className="md:flex w-full md:justify-center my-4 md:py-4 ">
                <div className='md:mr-16 mx-6 '>
                    <label htmlFor="image" >
                        <span className=''>Your Photo</span>
                        <input onChange={handleImageChange} type="file" name="" id="image" hidden/>
                        {userImage!=null?<img onChange={()=> handleImageChange}  className='object-cover bg-gray-200 border-2 h-20 w-20 rounded-lg md:h-40 md:w-40' src={URL.createObjectURL(userImage)} />:<CiImageOn className='text-gray-500  bg-gray-200 border-2 rounded-lg h-20 w-20   md:h-40 md:w-40'/>}
                    </label>
                </div>
                <div className='flex mx-6 flex-col '>
                    <label className='' htmlFor='description'>Description About You</label>
                    <textarea value={description} onChange={(e)=>updateFields({description: e.target.value})} required  placeholder='Description' className='border-2 p-3 h-24 md:h-36 sm:w-80 rounded-md bg-gray-200' name="description" id="description" cols={50} rows={6} />
                </div>
            </div>

        </div>

    )
}



export default Add_Infos_about_You
