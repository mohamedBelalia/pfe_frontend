import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../Store/store"


const RegesterBar = () => {

    const navigate = useNavigate()

        // The Slice For Change The Language
        const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    // to go to the specific path in addition go to the top of the page
    const goTo = (path : string) => {
        window.scroll(0,0)
        navigate(path)
    }

  return (
    <>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full px-8">
            <button 
                onClick={()=>goTo("/Signup")}
                title="Create an account as a worker" 
                className="p-3 w-full md:w-1/3 bg-teal-300 rounded-md font-medium text-[#414E5F]">
                    {
                        isArabicSelected
                        ? "سجل كعامل"
                        : "S'inscrire en tant que ouvrier"
                    }
                </button>
            <button 
                onClick={()=>goTo("/Login")}
                title="Login in your Tasker account" 
                className="p-3 w-full md:w-1/3 bg-teal-300 rounded-md font-medium text-[#414E5F]">
                        {
                            isArabicSelected 
                            ? "تسجيل الدخول كعامل"
                            : "Connectez-vous en tant que ouvrier"
                        }
                </button>
        </div>
    </>
  )
}

export default RegesterBar