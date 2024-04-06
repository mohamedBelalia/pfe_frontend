import { IoSearchSharp } from "react-icons/io5";
import { jobs } from "../../../assets/jsonUsed/JobsIconsNames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { setSelectedJobName } from "../../Store/Slices/SelectedTask";
import { useSelector } from "react-redux";
import Api from "../../../api/Api"
import ProfessionBoxSearch from "../../Common/ProfessionBoxSearch/ProfessionBoxSearch";
import { IProfessionsType } from "../../../TS";

type LandingPageTypes = {
  getTheCoosenJob : (idJob:string) => void
}


const LandingPage = ({getTheCoosenJob}:LandingPageTypes) => {

    const [isTyping , setIsTyping] = useState<boolean>(false)
    const [professions , setProfessions] = useState<IProfessionsType[]>([]);
    
    useEffect(()=>{
      const fetchProfessions = async()=>{
        try{
          const response = await Api.get("/professions/")

          setProfessions(response.data);

        }catch(error){
          console.log(error);
        }
      }

      fetchProfessions()

    },[])

    // Profession
    const [professionName , setProfessionName] = useState<string>("");

    const onProfessionNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setProfessionName(event.target.value)
    }    

    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [jobClicked , setJobClicked] = useState<string>("1")
    const [isSmallPhone , setIsSmallPhone] = useState<boolean>(false) ;


    const searchBtn = () => {

      let professionsNamesArr = [] ;
      for(let i=0 ; i< professions.length ; i++){
        professionsNamesArr.push(professions[i].labelleProfession_AR)
        professionsNamesArr.push(professions[i].labelleProfession_FR)
      }

      if(professionsNamesArr.includes(professionName.trim())){
        window.scrollTo(0,0)
        dispatch(setSelectedJobName({selectedTask:professionName}))        
        navigate("/search/step_one")
      }
      else{
        alert("Saisissez correctement le nom de la profession")
      }
      
    }

    const clicked = (id : string) => {
        setJobClicked(id)
        getTheCoosenJob(id)
      }
    
      useEffect(()=>{
        setIsSmallPhone(()=>window.innerHeight <= 740 && window.innerWidth <= 640)
      },[])
      
      
   
  return (
    <div className={`w-full ${isSmallPhone ? "h-[90vh]" : "h-[65vh]"} md:h-[95vh] relative bg-[#414E5F] flex 
          justify-center items-end`}>

      <div className="w-full h-full absolute top-0 left-0 overflow-hidden zelijeBg"></div>
      <div className="md:h-[70%] h-full relative ourContainer flex flex-col justify-around md:justify-end items-center">
          
          {/* The Part Of The Title and the input */}
            <div className="w-full h-full  flex flex-col gap-16 pb-36 md:pb-0 md:gap-10 justify-center items-center relative">
              
              <div className={`flex gap-6 md:flex-row flex-col-reverse ${isArabicSelected && "md:flex-row-reverse"}`}>
                <h1 className={`${isArabicSelected && "arabicFont"} font-bold text-4xl md:text-5xl text-white text-center`}>
                  {
                    isArabicSelected 
                    ? "ابحث عن حرفي متخصص"
                    : "Trouvez Votre Travailleur Expert" 
                  }
                  
                </h1>
                <img src="./icons/workerImg.png" className="w-[60px] object-cover mx-auto" alt="worker morocco" />
              </div>
              <div className="w-full flex justify-center">
                  <input 
                    onFocus={()=>setIsTyping(true)}
                    onBlur={()=>setIsTyping(false)}
                    onChange={onProfessionNameChange}
                    className="h-[55px] md:h-[75px] w-full md:w-[40%] rounded-l-full px-9 outline-none border-2 focus:border-[#199AFF]"
                    type="text" 
                    value={professionName}
                    placeholder={isArabicSelected ? "البحث حسب اسم المهمة" : "Rechercher par nom de tâche"}/>
                  <button onClick={searchBtn} className="rounded-r-full bg-[#199AFF] flex justify-center items-center w-[90px]">
                    <IoSearchSharp className="text-3xl text-white"/>
                  </button>
              </div> 
               
              <div className="md:w-[40%] w-[90%] mx-auto relative">
                <div className="w-full absolute z-40 md:-top-5 -top-14 left-0">
                  <ProfessionBoxSearch isTyping={isTyping} getProfessionNameProp={setProfessionName} professionNameProp={professionName}/>
                </div>
              </div>
              
            </div> 

          {/* The Part Of The Jobs to choose */}
          <div className="md:w-full w-[95vw] md:static absolute bottom-0 mb-8 md:mb-12">
            <div className="flex justify-between gap-10 md:gap-1 px-4 overflow-scroll hideScrollBar">
                {
                  jobs.map((job , _)=>(
                    <div onClick={()=>clicked(job.id)} key={job.id}>
                      <JobBtn Icon={job.Icon} name={isArabicSelected ? `${job.nameAr}` : `${job.nameEn}`} id={job.id} clickedId={jobClicked}/>
                    </div>
                  ))
                }
            </div>
          </div>


      </div> 
    </div>
  )
}

export default LandingPage


// The Part Of JobBtn Component

interface JobBtnTypes {
  Icon : React.ReactNode ,
  name : string ,
  id : string ,
  clickedId : string
}

const JobBtn = ({Icon , name , id , clickedId} : JobBtnTypes) =>{

    return (
      <div className="flex flex-col items-center gap-3 cursor-pointer p-2 w-[60px] relative z-[-2px] ">
        <div className={`${id === clickedId ? "text-[#48d1d1]" : "text-white"} text-[40px] md:text-[50px]`}>
          {Icon}
        </div>
        <p className={`${id === clickedId ? "text-[#48d1d1]" : "text-white"} font-bold text-lg`}>{name}</p>

          {
            id === clickedId 
            && 
            <div className="bg-[#349292b9] w-[30px] h-[30px] top-8 rounded-full absolute"></div>
          }

      </div>
    )
}