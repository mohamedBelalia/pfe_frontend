import { IoSearchSharp } from "react-icons/io5"
import Navbar from "../../../Common/Navbar/Navbar"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../Store/store"
import { useNavigate } from "react-router-dom"
import { setSelectedJobName } from "../../../Store/Slices/SelectedTask"
import NearWorkers from "./NearWorkers"
import WorkerProfilePopUp from "../Filter/workerPopUp/WorkerProfilePopUp"
import { ProfessionsType } from "../../../../TS"
import api from "../../../../api/Api"
import ProfessionBoxSearch from "../../../Common/ProfessionBoxSearch/ProfessionBoxSearch"

const SearchPage = () => {

    const [isTyping , setIsTyping] = useState<boolean>(false)

    const [professions , setProfessions] = useState<ProfessionsType[]>([]);
    const [professionName , setProfessionName] = useState<string>("");

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [searchedTask , setSearchedTask] = useState<string>("")

    // to handle the clicked worker popup profile
    const [workerClickedId , setWorkerClickedId] = useState<string>("")


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

    const searchBtn = () => {

      let professionsNamesArr = [] ;
      for(let i=0 ; i< professions.length ; i++){
        professionsNamesArr.push(professions[i].labelleProfession_AR)
        professionsNamesArr.push(professions[i].labelleProfession_FR)
      }
  
      if(professionsNamesArr.includes(professionName)){
        window.scrollTo(0,0)
        dispatch(setSelectedJobName({selectedTask:professionName}))
        navigate("/search/step_one")
      }
      else{
        alert("Saisissez correctement le nom de la profession")
      }
        
    }

  return (
    <div>
        <div className="border">
            <Navbar/>
        </div>
     
        <div className="pt-36 mb-20 mx-auto flex flex-col gap-8">
            <h1 className="text-center text-2xl font-semibold text-teal-700">Search For Your Specific Task</h1>

            <div className="md:w-full w-[80%] mx-auto md:mx-0 flex justify-center">
                <input 
                  onChange={(e)=>setProfessionName(e.target.value)}
                  onFocus={()=>setIsTyping(true)}
                    onBlur={()=>setIsTyping(false)}
                  value={professionName}
                  className="h-[55px] md:h-[70px] w-full md:w-[40%] rounded-l-full px-9 outline-none border-2 border-[#199AFF] focus:border-teal-700"
                  type="text" 
                  placeholder="Search By Task Name"/>
                <button onClick={searchBtn} className="rounded-r-full bg-teal-700 flex justify-center items-center w-[90px]">
                  <IoSearchSharp className="text-3xl text-white"/>
                </button>
            </div>

            <div className="md:w-[40%] w-[90%] mx-auto relative">
              <div className="w-full absolute top-0 left-0">
                <ProfessionBoxSearch isTyping={isTyping} getProfessionNameProp={setProfessionName} professionNameProp={professionName}/>
              </div>
            </div>

            <div className="md:w-[80%] md:mx-auto mx-0 mt-8">
              <NearWorkers getWorkerId={setWorkerClickedId}/>
            </div>

            {/* worker profile popup */}
            {
            workerClickedId != "" &&
            <div className="w-full h-screen bg-[#00000062] fixed top-0 z-50">
                
                <div className="md:w-[50%] w-[95%] mx-auto flex flex-col justify-center items-center h-full">
                    
                    <div className="flex justify-end w-full">
                      <div onClick={()=>setWorkerClickedId("")} 
                          className="hover:bg-red-100 cursor-pointer flex justify-center items-center w-[60px] h-[30px] bg-white rounded-t-lg text-xl font-bold">
                          <h1>X</h1>
                      </div>
                    </div>

                    <WorkerProfilePopUp idWorker={workerClickedId}/>
                </div>
            </div>
            }
                        
        </div>
    </div>
  )
}

export default SearchPage