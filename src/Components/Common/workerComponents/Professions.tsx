import { useEffect, useState } from "react"
import Api from "../../../api/Api"
import { IProfessionsType } from "../../../TS";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";

type professionProps = {
    idWorker : string
}

const Professions = ({idWorker}:professionProps) => {

    // state to store the professions
    const [professions , setProfessions] = useState<IProfessionsType[]>();

    // to know if the worker had professions or not
    const [hadProfessions , setHadPorfessions] = useState<boolean>(true)

    // for the loading of professions
    const [isProfessionsLoaded , setIsProfessionsLoaded] = useState<boolean>(false)

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    useEffect(()=>{
        const fetchProfessions = async()=>{
          try{
              const response = await Api.get(`/professions?workerId=${idWorker}`)
              if(response.data.status == "not found"){
                  setHadPorfessions(false)
              }
              else{
                setProfessions(response.data)
              }
  
          }catch(exception){
              console.log(exception);
          }
          finally{
            setIsProfessionsLoaded(true)
          }
        }
  
        fetchProfessions()
  
    },[])

  return (
    <div className={`flex flex-wrap gap-2 mt-2 ${isArabicSelected && "flex-row-reverse"}`}>
    {
        isProfessionsLoaded 
        ?
        ( 
            hadProfessions 
            ?
            professions?.map((profession , _)=>(
            <div className="px-10 py-1 rounded-md bg-blue-500 text-white" key={profession.idProfession}>
                {
                    isArabicSelected 
                    ? profession.labelleProfession_AR
                    : profession.labelleProfession_FR}
            </div>
            ))
            :
            <div className="px-4 py-1 rounded-md bg-gray-500 text-white">
            {
                isArabicSelected
                ? "بدون مهنة"
                : "Sans Profession"
            }
            </div>
        )
        :
        <div className="animate-pulse flex gap-4">
            <div className="rounded-md bg-slate-300 h-[35px] w-[90px]"></div>
            <div className="rounded-md bg-slate-300 h-[35px] w-[90px]"></div>
            <div className="rounded-md bg-slate-300 h-[35px] w-[90px]"></div>
        </div>
    }
</div>
  )
}

export default Professions