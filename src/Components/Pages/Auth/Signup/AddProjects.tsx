    import React, { useState } from 'react'
    import { CiImageOn } from "react-icons/ci";
import { PiXCircleFill } from "react-icons/pi";

    
const AddProjects = () => {

    const [choosedImage, setChoosedImage] = useState<File | null>(null);
    const [infoPro, setInfoPro] = useState<{id: number, title: string, desc: string }[]>([
        {id:1,title:"title one", desc:"Description one"},
        {id:2,title:"title two", desc:"Description two"},
        {id:3,title:"title three", desc:"Description three"},
        
    ]);
    // const [Description, setDescription] = useState<string | null>([]);
    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
          const selectedImage = files[0];
          setChoosedImage(selectedImage);
          console.log(selectedImage);
          
        }}

       
      // Function to edit an item
  const editItem = (id:number, newTitle:string, newDesc:string) => {
    // Clone the items array
    const updatedItems = [...infoPro];
    
    // Find the index of the item to edit
    const index = updatedItems.findIndex(item => item.id === id);
    
    // If the item is found
    if (index !== -1) {
      // Update the item
      updatedItems[index] = { ...updatedItems[index], title: newTitle, desc: newDesc };
      
      // Update the state with the modified array
      setInfoPro(updatedItems);
    }
  };


        return (
    
            <div className='flex flex-col items-center  tab:pt-4'>
                    <h1 className="text-teal-500 text-3xl font-semibold">Your Projects</h1>
               <div className='w-[70%] flex'> 
               <form onSubmit={(e)=>{ e.preventDefault(); }}  action="" method="post" className="flex      my-12 w-[70%] md:py-4 ">
                    <div className='mr-16'>
                        <label htmlFor="image">
                            <span className=''>Your Photo</span>
                            <input onChange={handleImageChange} type="file" name="" id="image" hidden/>
                            {choosedImage!=null?<img className='object-cover bg-gray-200 border-2 rounded-lg  h-40 w-40' src={URL.createObjectURL(choosedImage)} />:<CiImageOn className='text-gray-500  bg-gray-200 border-2 rounded-lg  h-40 w-40'/>}
                        </label>
                        {/* <input >Add Project</input> */}
                        <div>{infoPro[0].desc}</div>
                        <button  className='px-6 text-sm transition-all ease-in-out py-1 duration-300 bg-teal500 text-white my-4 hover:bg-[#414F5F] rounded-lg' >Add Project</button>


                    </div>
                    <div>
                    <div className='flex flex-col '>
                        <label  htmlFor='description'>Project Title</label>
                        <input placeholder='Title' className='border-2 p-3 border-teal500 h-22 rounded-md bg-gray-200' name="description" id="description" />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor='description'>Project Description</label>
                        <textarea placeholder='Description' className='border-2 border-teal500 p-3 h-22 rounded-md bg-gray-200' name="description" id="description" cols={30} rows={2} />
                    </div>
                    </div>
                </form>
                <div className='flex m-8  flex-wrap '>
                    {infoPro.map(()=>{
                        return <div className='border m-1 flex flex-col items-center  h-33 justify-center py-1 px-1   rounded-md'>
                         <div className='  w-full flex  justify-end'>
                             <PiXCircleFill className='text-red-500 text-xl' />
                         </div>
                         <img className='rounded-md w-14 h-14 ' src="public/imgUsed/20.jpg" alt="" />
                         <h1 className='text-sm'>Hello world</h1>
                         <p className='text-[12px] text-gray-400'>Lorem, uLorem ...</p>
                         <input className='bg-teal500 mt-1 text-center text-white w-[50%] text-[12px] h-5  rounded-md' value="edit" />
                     </div>
                    })}
                </div>
               </div>
    
            </div>
    
        )
    }
    
    

export default AddProjects