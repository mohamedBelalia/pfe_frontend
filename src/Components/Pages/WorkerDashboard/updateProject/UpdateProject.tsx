import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store"
import { useEffect, useState } from "react"
import { BiImageAdd } from "react-icons/bi"
import Api from "../../../../api/Api"
import { IProjectWorker } from "../../../../TS"
import { Config } from "../../../../../config/Local_Variables"

type UpdateProjectProps = {
    idProject: string
}

const UpdateProject = ({ idProject }: UpdateProjectProps) => {

    const tempIdProject = "54"

    // The Slice For Change The Language
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

    const [isPorjectPosted, setIsProjectPosted] = useState<boolean | null>(null)
    const [isError, setIsError] = useState<boolean>(false)
    const [isUpdatingLoading, setIsUpdatingLoading] = useState<boolean | null>(null)
    const [emptyFields, setEmptyFields] = useState<boolean>(false)

    // fetched project
    const [fetchedProject, setFetchedProject] = useState<IProjectWorker>();
    const [fetchedProjectImages, setFetchedProjectImages] = useState<string[]>([])
    const [isProjectNotFound, setIsProjectNotFound] = useState<boolean>();
    const [isFetchingUpload, setIsFetchingUpload] = useState<boolean>(true)

    const [selectedImages, setSelectedImages] = useState<string[]>([])
    const [projectTitle, setProjectTitle] = useState<string>("")
    const [projectDescription, setProjectDescription] = useState<string>("")

    const [isFileNotImage, setIsFileNotImage] = useState<boolean>(false)

    // deleted images that came from database
    const [deletedImages , setDeletedImages] = useState<string[]>([])

    const [toRender, setToRender] = useState<number>(0)

    const removeImage = (index: number) => {
        selectedImages.splice(index, 1)
        setToRender((prev) => prev + 1)
    }

    const removeDatabaseImage = (imgName : string) => {
        
        setDeletedImages((prev) => prev.concat(fetchedProjectImages.filter((img) => img == imgName)))
        setFetchedProjectImages(fetchedProjectImages.filter((img) => img != imgName))        
    }

    useEffect(() => {
        const fetchProject = async (idProjectPassed: string) => {
            try {

                // for the project
                const responseProject = await Api.get(`/projects?id=${idProjectPassed}`)

                if (responseProject.data.status == "not found") {
                    setIsProjectNotFound(true)
                }
                else {
                    setFetchedProject(responseProject.data);
                }
                // for the project images
                const responseProjectImages = await Api.get(`/projects?id=${tempIdProject}&images=all`)

                if (responseProjectImages.data.status != "not_found") {
                    setFetchedProjectImages(responseProjectImages.data)
                }


            } catch (exception) {
                console.log(exception);
            }
            finally {
                setIsFetchingUpload(false)
            }
        }

        fetchProject(tempIdProject);

        if (fetchedProject != undefined) {
            setProjectTitle(fetchedProject.titre)
            setProjectDescription(fetchedProject.description_projet)
        }

    }, [fetchedProject?.titre, fetchedProject?.description_projet])

    useEffect(() => { }, [toRender])

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('title', projectTitle);
        formData.append('description', projectDescription);
        selectedImages.forEach((image: string, index: number) => {
            // Extract the base64 part of the image data
            const base64Image = image.split(',')[1];
            const blob = base64ToBlob(base64Image, 'image/jpeg');
            formData.append(`images[]`, blob, `image${index}.jpg`);
        });

        if (projectTitle.length > 0 && projectDescription.length > 0) {
            setEmptyFields(false)
            try {
                setIsUpdatingLoading(true)

                const deleteImgsResponse = await Api.put(`/porject-images?idProject=${tempIdProject}` , deletedImages)

                console.log(deleteImgsResponse);
                

                const response = await Api.post(`/projects?updateProject=${tempIdProject}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

                console.log(response.data);
                

                if (response.data.status == "done") {
                    setIsProjectPosted(true)
                }
                else if (response.data.status == "something_wrong") {
                    setIsProjectPosted(false)
                }

            } catch (error) {
                setIsError(true)
            }
            finally {
                setIsUpdatingLoading(false)
                setProjectTitle("")
                setProjectDescription("")
                setSelectedImages([])
                setFetchedProjectImages([])
            }
        }
        else {
            setEmptyFields(true)
        }
        
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {

            const fileName = file.name;
            const fileExtension = fileName.split('.').pop()?.toLowerCase();

            if (fileExtension != "png" && fileExtension != "jpeg" && fileExtension != "jpg" && fileExtension != "webp") {
                setIsFileNotImage(true)
            }
            else {
                setIsFileNotImage(false)
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSelectedImages((prev) => [...prev, reader.result as string]);                    
                };
                reader.readAsDataURL(file);
            }

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

    if (isFetchingUpload) {
        return <div>loading ...</div>
    }

    return (
        <div className="w-full h-[800px] flex justify-center items-center bg-[#bababa]">
            <div className="bg-white w-[80%] rounded-lg md:px-6 px-3 py-10">
                <div className="w-full flex gap-10 flex-col items-start md:flex-row">
                    <div className="md:w-1/2 w-full bg-[#f5f5f5c9] rounded-md border border-[#8f8e8e] flex flex-col gap-7 px-4 md:px-8 md:py-8 py-6" dir={isArabicSelected ? "rtl" : "ltr"}>
                        <div className="flex flex-col ">
                            <label className="text-teal-700 font-semibold text-xl mb-1">{isArabicSelected ? "عنوان المشروع" : "Titre De Projet"}</label>
                            <input
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                                className="border-2 border-teal-600 rounded-md outline-none p-2"
                                type="text"
                                placeholder={isArabicSelected ? "العنوان" : "le titre"}
                            />
                        </div>

                        <div className="flex flex-col ">
                            <label className="text-teal-700 font-semibold text-xl mb-1">{isArabicSelected ? "وصف المشروع" : "Description du projet"}</label>
                            <textarea
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}
                                className="border-2 border-teal-600 rounded-md outline-none p-2"
                                placeholder={isArabicSelected ? "وصف المشروع" : "Description du projet"}
                                rows={6}
                            />
                        </div>

                    </div>

                    <div className="md:w-1/2 w-full ">
                        <p className="text-teal-700 font-semibold text-xl mb-4">Ajouter des images <span className="text-blue-500">{selectedImages.length + fetchedProjectImages.length}/6</span> </p>
                        <input id="addImg" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                        <div className="flex flex-wrap gap-5">
                            {
                                fetchedProjectImages.map((img, index) => (
                                    <div key={index} className="w-[46%] p-3 md:w-[150px] h-[150px] object-cover overflow-hidden relative">
                                        <div className="w-full p-1 absolute top-0 left-0 flex justify-end items-start">
                                            <button
                                                onClick={() => removeDatabaseImage(img)}
                                                className="bg-red-600 text-white px-2 rounded-full">X</button>
                                        </div>
                                        <img
                                            className="w-full h-full object-cover"
                                            src={Config.BaseImagesPath_Projects + img} alt="" key={index} />
                                    </div>
                                ))
                            }
                            {
                                selectedImages.map((img, index) => (
                                    <div key={index} className="w-[46%] p-3 md:w-[150px] h-[150px] object-cover overflow-hidden relative">
                                        <div className="w-full p-1 absolute top-0 left-0 flex justify-end items-start">
                                            <button
                                                onClick={() => removeImage(index)}
                                                className="bg-red-600 text-white px-2 rounded-full">X</button>
                                        </div>
                                        <img
                                            className="w-full h-full object-cover"
                                            src={img} alt="" key={index} />
                                    </div>
                                ))
                            }

                            {
                                selectedImages.length + fetchedProjectImages.length <= 5
                                &&
                                <label htmlFor="addImg" >
                                    <BiImageAdd className="text-[150px] opacity-40 cursor-pointer" />
                                </label>
                            }
                        </div>
                    </div>

                </div>
                <div className="mt-10 flex justify-end gap-3">
                    {
                        isUpdatingLoading == true
                            ?
                            <button disabled type="button" className="bg-teal-900 px-10 py-2 rounded-md text-xl text-white font-semibold flex gap-3 cursor-progress">
                                mise à jour...
                                <svg aria-hidden="true" role="status" className="inline w-8 h-8 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                            </button>
                            :
                            <button
                                onClick={handleUpload}
                                className="bg-teal500 px-10 py-2 rounded-md text-xl text-white font-semibold hover:bg-teal-700"
                            >mise à jour</button>
                    }
                    <button
                        className="bg-blue500 px-10 py-2 rounded-md text-xl text-white font-semibold hover:bg-blue-600"
                    >Annuler</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProject
