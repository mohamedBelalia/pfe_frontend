import { useEffect, useState } from "react";
import api from "../../../api/Api"
import { IProfessionsType } from "../../../TS";

export type professionBoxSearchProps = {
    professionNameProp : string 
    getProfessionNameProp : (profession : string) => void 
    isTyping : boolean
}

const arabicRegex = /[\u0600-\u06FF]/;

const ProfessionBoxSearch = ({professionNameProp , getProfessionNameProp , isTyping}:professionBoxSearchProps) => {

    const [isClicked , setIsClicked] = useState<boolean>(false)
    const [professions , setProfessions] = useState<IProfessionsType[]>([]);
    const [searchedProfessions , setSearchedProfessions] = useState<IProfessionsType[]>([]);
    
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
        if(!isClicked){
         professionNameSearched(professionNameProp)         
        }
    },[professionNameProp])
 

    
    // to get the profession(that we get from database) that has the same name entred in the input
    const professionNameSearched = (professionNameSearched : string) => {
        let searchedProfessionArray : IProfessionsType[] = professions?.filter((pro)=>
           professionNameSearched.length > 0 &&
           (pro.labelleProfession_AR.toLowerCase().includes(professionNameSearched.toLowerCase()) 
             || pro.labelleProfession_FR.toLowerCase().includes(professionNameSearched.toLowerCase()))
        )

        
        setSearchedProfessions(searchedProfessionArray);
     }

    const professionNameClicked = (profession : string) => {
        getProfessionNameProp(profession);
        setSearchedProfessions([]);
    }    

    useEffect(()=>{
      if(isTyping){
        setIsClicked(false)
      }
      else{
        setIsClicked(true)
      }
    },[isTyping])
    
  

  return (
    // ${searchedProfessions.length > 0 && !isClicked ? "max-h-fit border border-black" : "h-0"}
    <div className={`absolute overflow-y-scroll ${searchedProfessions.length === 0 ? "h-0" : "max-h-[200px] border border-gray-500"}
    w-full  rounded-md bg-white z-40 transition-all ease-in-out duration-300`}>
  {
     searchedProfessions.length > 0 && 
     searchedProfessions.map((pro , _)=>(

        <ProfessionDiv 
          key={pro.idProfession}
          professionClickFN={professionNameClicked}  
          loopedProfession={ // here we check if the enterd profession in arabic or in french to pass to the comp the right word
            arabicRegex.test(professionNameProp) 
             ? pro.labelleProfession_AR
            : pro.labelleProfession_FR
          } 
          isArabicInput={arabicRegex.test(professionNameProp)}
          getTheProfessionsInserter={setSearchedProfessions}
        />
      
     ))
  }
  </div>
  )
}

export default ProfessionBoxSearch


// for the searched profession (we should trensfer it to a global comp and use it also in the "search/step_one" for the cities if it possible)

type IProfessionDivTEMP = {
  professionClickFN : (profession : string) => void
  getTheProfessionsInserter : (professions : IProfessionsType[]) => void // using it only to clear the array of searched proessions (searchedProfessions) after click
  loopedProfession : string
  isArabicInput : boolean
}

const ProfessionDiv = ({isArabicInput , loopedProfession , professionClickFN , getTheProfessionsInserter}:IProfessionDivTEMP) => {
  
  const handleClick = () => {
    professionClickFN(loopedProfession)
    getTheProfessionsInserter([])
  }

  return (
      <div 
          onClick={handleClick}
          className="w-full cursor-pointer h-[60px] px-6 border-b border-gray-500 
          flex justify-start gap-3 text-lg items-center hover:bg-gray-200"
      >

          <p className={`${isArabicInput ? "text-right" : "text-left"} w-full`}>
              {loopedProfession}
          </p>

      </div>
  )
}
