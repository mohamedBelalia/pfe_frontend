import { useSelector } from "react-redux"
import Navbar from "../../Common/Navbar/Navbar"
import { RootState } from "../../Store/store"
import { useEffect, useState } from "react"
import { CiCircleRemove } from "react-icons/ci";
import { BiImageAdd } from "react-icons/bi";



const AddProject = () => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [selectedImages , setSelectedImages] = useState<string[]>([])

    const [toRender , setToRender] = useState<number>(0)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string);
          setSelectedImages((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      }
    };

    
    const removeImage = (index:number)=>{
        selectedImages.splice(index, 1)
        setToRender((prev) => prev+1)
    }
    
    useEffect(()=>{},[toRender])
  

  return (
    <>
        <div className="border md:mb-28">
            <Navbar/> 
        </div>

        <div className="p-10 md:mx-32 px-5 md:mb-8 md:mt-40 flex gap-10 flex-col items-start md:flex-row">

            <div className="md:w-1/2 bg-[#f5f5f5] rounded-md border border-[#414141] flex flex-col gap-7 md:px-8 py-8 " dir={isArabicSelected ? "rtl" : "ltr" }>
                 <div className="flex flex-col ">
                    <label className="text-teal-700 font-semibold text-xl mb-1">{isArabicSelected ? "عنوان المشروع" : "Titre De Projet"}</label>
                    <input 
                        className="border-2 border-teal-600 rounded-md outline-none p-2"
                        type="text" 
                        placeholder={isArabicSelected ? "العنوان" : "le titre"}/>
                 </div>

                 <div className="flex flex-col ">
                    <label className="text-teal-700 font-semibold text-xl mb-1">{isArabicSelected ? "وصف المشروع" : "Description du projet"}</label>
                    <textarea 
                        className="border-2 border-teal-600 rounded-md outline-none p-2"
                        placeholder={isArabicSelected ? "وصف المشروع" : "Description du projet"}/>
                 </div>

            </div>

            <div className="md:w-1/2  ">
                <p className="text-teal-700 font-semibold text-xl mb-4">Ajouter des images <span className="text-blue-500">{selectedImages.length}/6</span> </p>
                <input id="addImg" type="file" accept="image/*" className="hidden" onChange={handleFileChange}/>
                <div className="flex flex-wrap gap-5">
                {
                    selectedImages.map((img , index)=>(
                        <div key={index} className="w-[46%] p-3 md:w-[150px] h-[150px] object-cover overflow-hidden relative">
                            <div className="w-full p-1 absolute top-0 left-0 flex justify-end items-start">
                                <button  
                                onClick={()=>removeImage(index)}
                                className="bg-red-600 text-white px-2 rounded-full">X</button>
                            </div>
                            <img
                                className="w-full h-full" 
                                src={img} alt=""  key={index}/>
                        </div>
                    ))
                }

                {
                   selectedImages.length <= 5
                   && 
                    <label htmlFor="addImg" >
                        <BiImageAdd className="text-[150px] opacity-40 cursor-pointer"/>
                    </label>
                }
                </div>
            </div>

        </div>
        
       <div className="flex justify-center items-center mb-14">
        <button 
            className="bg-teal500 px-24 py-3 rounded-md text-xl text-white font-semibold hover:bg-teal-700"
            >Ajouter</button>
       </div>

    </>
  )
}

export default AddProject