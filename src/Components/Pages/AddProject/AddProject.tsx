import { useSelector } from "react-redux"
import Navbar from "../../Common/Navbar/Navbar"
import { RootState } from "../../Store/store"
import { useEffect, useState } from "react"
import { BiImageAdd } from "react-icons/bi";
import Api from "../../../api/Api";



const AddProject = () => {

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const [selectedImages , setSelectedImages] = useState<string[]>([])

    const [toRender , setToRender] = useState<number>(0)

    const [projectTitle , setProjectTitle] = useState<string>("")
    const [projectDescription , setProjectDescription] = useState<string>("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
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

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('title', projectTitle);
        formData.append('description', projectDescription);
        selectedImages.forEach((image: string, index: number) => {
            // Extract the base64 part of the image data
            const base64Image = image.split(',')[1];
            const blob = base64ToBlob(base64Image, 'image/jpeg'); // Convert base64 to Blob with JPEG MIME type
            formData.append(`images[]`, blob, `image${index}.jpg`);
        });
    
        try {
            console.log(formData);
    
            const response = await Api.post("/projects", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
    
            console.log(response);
    
        } catch (error) {
            console.error('Error uploading files', error);
        }
    };
    

    // base64 to blob
    const base64ToBlob = (base64: string, mimeType: string): Blob => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType });
    };
    

  return (
    <>
        <div className="border md:mb-28">
            <Navbar/> 
        </div>

        <div className="p-10 md:mx-32 px-5 md:mb-8 md:mt-40 flex gap-10 flex-col items-start md:flex-row">

            <div className="md:w-1/2 bg-[#f5f5f5c9] rounded-md border border-[#8f8e8e] flex flex-col gap-7 md:px-8 py-8 " dir={isArabicSelected ? "rtl" : "ltr" }>
                 <div className="flex flex-col ">
                    <label className="text-teal-700 font-semibold text-xl mb-1">{isArabicSelected ? "عنوان المشروع" : "Titre De Projet"}</label>
                    <input 
                        className="border-2 border-teal-600 rounded-md outline-none p-2"
                        type="text" 
                        placeholder={isArabicSelected ? "العنوان" : "le titre"}
                        onChange={(e)=>setProjectTitle(e.target.value)}
                        />
                 </div>

                 <div className="flex flex-col ">
                    <label className="text-teal-700 font-semibold text-xl mb-1">{isArabicSelected ? "وصف المشروع" : "Description du projet"}</label>
                    <textarea 
                        className="border-2 border-teal-600 rounded-md outline-none p-2"
                        placeholder={isArabicSelected ? "وصف المشروع" : "Description du projet"}
                        onChange={(e)=>setProjectDescription(e.target.value)}
                        rows={6}
                        />
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
        onClick={handleUpload}
            className="bg-teal500 px-24 py-3 rounded-md text-xl text-white font-semibold hover:bg-teal-700"
            >Ajouter</button>
       </div>

    </>
  )
}

export default AddProject