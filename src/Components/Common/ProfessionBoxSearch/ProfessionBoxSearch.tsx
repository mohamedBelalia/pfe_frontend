import { useEffect, useState } from "react";
import api from "../../../api/professions"
import { ProfessionsType } from "../../../TS";

export type professionBoxSearchProps = {
    professionNameProp : string 
    getProfessionNameProp : (profession : string) => void
}

const arabicRegex = /[\u0600-\u06FF]/;

const ProfessionBoxSearch = ({professionNameProp , getProfessionNameProp}:professionBoxSearchProps) => {

    const [isClicked , setIsClicked] = useState<boolean>(false)
    const [professions , setProfessions] = useState<ProfessionsType[]>([]);
    const [searchedProfessions , setSearchedProfessions] = useState<ProfessionsType[]>([]);
    
    useEffect(()=>{
      const fetchProfessions = async()=>{
        try{
          const response = await api.get("/professions/")

          setProfessions(response.data);

        }catch(error){
          console.log(error);
        }
      }

      fetchProfessions()

    },[])

    useEffect(()=>{
        // if(!isClicked){
         professionNameSearched(professionNameProp)
        // }
    },[professionNameProp])

    
    // to get the profession(that we get from database) that has the same name entred in the input
    const professionNameSearched = (professionNameSearched : string) => {
        let searchedProfessionArray : ProfessionsType[] = professions?.filter((pro)=>
           professionNameSearched.length > 0 &&
           (pro.labelleProfession_AR.toLowerCase().includes(professionNameSearched.toLowerCase()) 
             || pro.labelleProfession_FR.toLowerCase().includes(professionNameSearched.toLowerCase()))
        )
 
        setSearchedProfessions(searchedProfessionArray);
     }

    const professionNameClicked = (profession : string) => {
        getProfessionNameProp(profession);
        setSearchedProfessions([]);

        // setIsClicked((prev)=>!prev)
    }    

  return (
    <div className={`${searchedProfessions.length > 0 ? "h-[250px] border border-black" : "h-0"} overflow-y-scroll 
    w-full  rounded-md bg-white z-40 transition-all ease-in-out duration-300`}>
  {
     searchedProfessions.length > 0 && 
     searchedProfessions.map((pro , _)=>(
        
      <div 
          key={pro.idProfession}
          onClick={()=>professionNameClicked(
            arabicRegex.test(professionNameProp) 
            ? pro.labelleProfession_AR
            : pro.labelleProfession_FR
          )}

          className="cursor-pointer h-[60px] px-6 border-b border-gray-500 
          flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
      >
        <p className={`${arabicRegex.test(professionNameProp) ? "text-right" : "text-left"} w-full`}>
        {
          arabicRegex.test(professionNameProp) 
          ? pro.labelleProfession_AR
          : pro.labelleProfession_FR
        }
        </p>
      </div>
     ))
  }
  </div>
  )
}

export default ProfessionBoxSearch