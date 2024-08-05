import { useSelector } from "react-redux"
import { RootState } from "../../../Store/store"
import Api from "../../../../api/Api"
import { useState } from "react"
import LoadingPage from "../../../Common/Loading/LoadingPage"
import { FaCheck } from "react-icons/fa6"

type deletingPopUpProps = {
    projectID: string,
    setProjectIdClicked: (id: string) => void,
}

const DeletingPopUp = ({ projectID, setProjectIdClicked }: deletingPopUpProps) => {
    const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)
    const [isDeletedSuccessfuly, setIsDeletedSuccessfuly] = useState<boolean | null>(null)
    const [isDeletingLoading, setIsDeletingLoading] = useState<boolean>(false)

    const cancelBtn = () => {
        setProjectIdClicked("")
    };

    const deleteBtn = () => {
        deleteProjectFromDB(projectID)
    }

    const okDeleted = () => {
        setProjectIdClicked("")
        location.reload()
    }

    const deleteProjectFromDB = async (projectID: string) => {
        const response = await Api.delete(`/projects?idProject=${projectID}`)
        try {
            setIsDeletingLoading(true)
            if (response.data.status == "done") {
                setIsDeletedSuccessfuly(true)
            }
        } catch (error) {
            setIsDeletedSuccessfuly(false)
        }
        finally {
            setIsDeletingLoading(false)
        }
    }

    return (
        isDeletingLoading ?
            <div className="w-[40%] h-[150px] p-4 bg-white rounded-lg flex flex-col justify-center items-center">
                <LoadingPage />
            </div>
            :
            isDeletedSuccessfuly == true ?
                <div className="w-[40%] p-6 bg-white rounded-lg flex flex-col justify-center items-center">
                    <FaCheck className="text-7xl text-green-600" />
                    <p className="text-xl text-green-800 font-semibold mt-2">
                        {
                            isArabicSelected ? "تم الحذف بنجاح" : "Suppression réussie"
                        }
                    </p>
                    <button onClick={okDeleted} className="mt-10 bg-blue-400 w-[80%] py-1 rounded-lg font-semibold">
                        {
                            isArabicSelected ? "تم" : "Ok"
                        }
                    </button>
                </div>
                :
                <div className="w-[40%] p-4 bg-white rounded-lg flex flex-col justify-center items-center">
                    <h1 className="text-center font-semibold text-xl w-[80%] ">
                        {
                            isArabicSelected ? "⸮ هل أنت متأكد من رغبتك في حذف هذا المشروع" : "Êtes-vous sûr de vouloir supprimer ce projet ?"
                        }
                    </h1>
                    <img src="./icons/delete_project.png" alt="delete project" className="w-48 my-10" />
                    <div className="flex justify-center w-full gap-5">
                        <button onClick={cancelBtn} className="bg-blue-400 text-blue-950  px-12 py-1 rounded-lg font-semibold ">
                            {
                                isArabicSelected ? "إلغاء" : "Annuler"
                            }
                        </button>
                        <button onClick={deleteBtn} className="bg-red-400 text-red-950 px-12 py-1 rounded-lg font-semibold ">
                            {
                                isArabicSelected ? "حذف" : "Supprimer"
                            }
                        </button>
                    </div>
                </div>
    )
}

export default DeletingPopUp
