import { useEffect, useRef, useState } from "react";
import RateButtons from "./RateButtons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { setIsLeveleProcessClicked, setPrixCriteriasLevels } from "../../Store/Slices/RateingProcess";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";


const rates = [
    {   
        idRate : "1",
        text : "Excellent" ,
        nbrStar : 5
    },
    {   
        idRate : "2",
        text : "Tres Bien" ,
        nbrStar : 3
    },
    {   
        idRate : "3",
        text : "Bien" ,
        nbrStar : 1
    }
]

const CriteriaThree = () => {
    const [idClicked , setIdClicked] = useState<string>("")

    const dispatch = useDispatch<AppDispatch>()

    // Start the audio
    const [isAudioPlay , setIsAudioPlay] = useState<boolean>(true)

    const audioRef = useRef<HTMLAudioElement>(null)

    const handleAudio = () => {
        if(isAudioPlay){
            audioRef.current?.play()
        }
        else{
            audioRef.current?.pause()
        }

        setIsAudioPlay((prev)=> !prev)
    }

    useEffect(()=>{
        const handleEndAudio =()=>{
            setIsAudioPlay(true)            
        } 
        audioRef.current?.addEventListener("ended" ,handleEndAudio)
        
    },[])

    // End the audio

    if(idClicked == "1" || idClicked == "2" || idClicked == "3"){
        dispatch(setIsLeveleProcessClicked(true))
    }
    else{
        dispatch(setIsLeveleProcessClicked(false))
    }

    if(idClicked == "1"){
        dispatch(setPrixCriteriasLevels("Excellent"))
    }
    else if(idClicked == "2"){
        dispatch(setPrixCriteriasLevels("Tres Bien"))
    }
    else if(idClicked == "3"){
        dispatch(setPrixCriteriasLevels("Bien"))
    }
    
  return (
    <div>

        <div className="flex items-center gap-7 mx-auto w-fit">
            <h1 className="text-teal-900 text-2xl font-bold text-center">
                Est-ce que le prix correspond au travail effectué ?
            </h1>

            <audio ref={audioRef} controls src="/quran/beslaah.mp3" className="hidden"/>
   
            <div className="p-2 border-2 active:shadow-none shadow-[-3px_3px_1px_2px_#38b2ac] border-[#2f6b69]  rounded-md cursor-pointer" onClick={handleAudio}>
                {
                    isAudioPlay
                    ? <FaRegCirclePlay  className="text-4xl text-[#2f6b69] transform rotate-[182deg] "/>
                    : <FaPause className="text-4xl text-[#2f6b69]"/>
                }
                
            </div>
        </div>

        <div className="mt-8 flex flex-col gap-7">
            {
                rates.map((rate , _) => (
                    <div key={rate.idRate}>
                        <RateButtons idRate={rate.idRate} text={rate.text} nbrStar={rate.nbrStar} getIdClicked={setIdClicked} idClicked={idClicked}/>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CriteriaThree
