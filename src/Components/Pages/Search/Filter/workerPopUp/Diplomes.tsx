import { useEffect, useState } from "react"
import Api from "../../../../../api/Api"
import { IDiplomsWorker } from "../../../../../TS"
import { useSelector } from "react-redux"
import { RootState } from "../../../../Store/store"


type DiplomsProps = {
    workerId : string
}

const Diplomes = ({workerId}:DiplomsProps) => {

    // to store the fetched diploms 
    const [diplomes , setDiploms] = useState<IDiplomsWorker[]>()

    // if there is an error
    const [isError , setIsError] = useState<boolean>(false)

    // handle the loading
    const [isLoading , setIsLoading] = useState<boolean>(true)

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    useEffect(()=>{
        const fetchWorkerDiploms = async() => {
            try{
                const response = await Api.get(`/diplomes?workerId=${workerId}`)
                if(response.data.status != "not found"){
                    setDiploms(response.data)
                }
            }
            catch(err){
                setIsError(true)
            }
            finally{
                setIsLoading(false)
            }
        }

        fetchWorkerDiploms()

    },[workerId])


    if(isError){
        return(
            <div className="w-full h-[200px] bg-white border-2 border-red-600 rounded-md flex justify-center items-center">
                <img className="w-[100px]" src="/imgUsed/connection_error.png" alt="connection error" />
            </div>
        )
    }

    if(isLoading){
        return(
            <div className="animate-pulse flex gap-4">
                <div className="rounded-md bg-slate-300 h-[35px] w-[90px]"></div>
                <div className="rounded-md bg-slate-300 h-[35px] w-[90px]"></div>
                <div className="rounded-md bg-slate-300 h-[35px] w-[90px]"></div>
            </div>
        )
    }

  return (
    <>
    {
    diplomes != undefined && diplomes.length > 0
    &&
    <div  className={`flex flex-col gap-2 mt-2 ${isArabicSelected && "items-end"}`}>
            <div className="flex flex-wrap gap-2">
            {
                diplomes?.slice(0,3).map((diplome,_)=>(
                    <div key={diplome.idDiplome} className="px-4 py-1 rounded-md bg-teal-600 text-white">
                        {
                            isArabicSelected
                            ?   diplome.labelleDiplome_AR
                            :   diplome.labelleDiplome_FR
                        }
                    </div>
                ))
            }
            </div>
    </div>
    }
    </>
  )
}

export default Diplomes