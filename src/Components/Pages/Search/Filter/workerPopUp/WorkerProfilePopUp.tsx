import workers from "../../../../../assets/jsonTemp/cardsInfoFil.json"
import Button from "../../../../Common/Button/Button"
import { workerDataProps } from "../WorkerCard"
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import Reviews from "./Reviews";
import { useState } from "react";


type workerPopUpTypes = {
    idWorker : string ,
}

const aaTest = [{
                    id : "1",
                    photo : "./imgTemp/workDone2.jpg"
                },
                {
                    id : "2",
                    photo : "./imgTemp/workDone3.jpeg"
                },
                {
                    id : "3",
                    photo : "./imgTemp/workDone3.jpeg"
                }
            ] ;

const skillsTemp = ["Storytelling" , "Editing" , "Teaching"]
const DiplomsTemp = ["Couture traditionnelle" , "Tapis" ]

const WorkerProfilePopUp = ({idWorker}:workerPopUpTypes) => {

    const clickedWorkerData : workerDataProps= workers.workers.filter((worker)=> worker.id == idWorker)[0] ;

    const [isProjectHovered , setIsProjectHovered] = useState<boolean>(false)
    const [idProjectHovered , setIdProjectHovered] = useState<string>("")


    const handleMouseOver = (idProject : string) => {
        setIsProjectHovered(true)
        setIdProjectHovered(idProject)
    }   

  return (
    <div className="w-full h-[80%] rounded-lg pt-4 pb-10 px-6 bg-white overflow-y-scroll overflow-x-hidden">

        <div className="flex flex-col gap-7">

        <div className="flex flex-col md:flex-row justify-between items-start mt-3">
            <div className="flex md:flex-row flex-col gap-4 md:mx-0 mx-auto">
                <div className="md:w-[80px] w-[100px] md:h-[80px] h-[100px] mx-auto md:mx-0 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={clickedWorkerData.imgProfile} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="font-bold text-lg text-teal500">{clickedWorkerData.name }</p> 
                    </div>
                    <div className="flex items-center gap-1 text-gray700 font-semibold ">   
                        <IoIosStar/> {clickedWorkerData.rate} <span className="text-xs">(832 reviews)</span>
                    </div>
                    <div className="border-dashed border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] py-0.5 px-1 text-sm  flex gap-3 items-center justify-center">
                        <SlBadge/>
                        {clickedWorkerData.badge}
                    </div>
                    <div className="block md:hidden mt-2">
                        <h1 className="text-xl font-bold text-end text-[#2d7d7d]">{clickedWorkerData.price} Dh/Day</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:mx-0 mx-auto md:mt-0 mt-5 gap-4">
                <a href="tel:+212 632-602326">
                    <div className="hidden md:flex justify-end gap-3 items-center text-xl font-semibold text-end text-[#2d7d7d]">
                        <FaPhoneAlt/>
                        +212 789-761589
                    </div>
                </a>
                <div>
                    <Button bg="#349292" color="white" label={`Continue with ${clickedWorkerData.name}`}/>
                </div>
            </div>
        </div>


        <div>
            <h1 className="font-bold text-lg text-gray700">How Can I Help You</h1>
            <p className=" text-gray700">
                {clickedWorkerData.description}
            </p>
        </div>

        <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg text-gray700">Skills</h1>
            <div className="flex flex-wrap gap-2">
            {
                skillsTemp.map((skill,index)=>(
                    <div key={index} className="px-4 py-1 rounded-md bg-blue500 text-white">
                        {skill}
                    </div>
                ))
            }
            </div>
        </div>

        <div className="flex flex-col gap-1 my-5">
            <h1 className="font-bold text-lg text-gray700">Projects</h1>
            <div className="w-full h-[150px] flex gap-7">
                
                {
                    aaTest.map((project , index)=>(
                       aaTest.length == index+1 
                       ?
                        <div key={index} className="h-full relative w-[160px] rounded-md overflow-hidden cursor-pointer">
                            <div className="w-full flex justify-center items-center h-full bg-[#0000008b] absolute top-0 left-0">
                                <p className="text-white font-bold">Plus de Projets</p>
                            </div>
                            <img src={project.photo} className="w-full h-full object-cover" />
                        </div>
                        :
                        <div 
                            key={index} 
                            onMouseOver={()=>handleMouseOver(project.id)} 
                            onMouseOut={()=>setIsProjectHovered(false)}
                            className="h-full relative w-[160px] rounded-md overflow-hidden cursor-pointer">
                            <img src={project.photo} className="w-full h-full object-cover" />
                            <div className={`${isProjectHovered && (idProjectHovered == project.id ) ? "h-[100%]" : "h-0"} w-full flex justify-center items-center 
                                            overflow-hidden bg-[#0e605a70] 
                                            absolute top-0 left-0 transition-all ease-in-out duration-300`}>
                                <button className="px-5 py-1 bg-teal-300 rounded-md hover:bg-teal-400">
                                    Afficher
                                </button>
                            </div>
                        </div> 
                    ))
                }
                
            </div>
        </div>
        

        <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg text-gray700">Diploms</h1>
            <div className="flex flex-wrap gap-2">
            {
                DiplomsTemp.map((skill,index)=>(
                    <div key={index} className="px-4 py-1 rounded-md bg-teal-600 text-white">
                        {skill}
                    </div>
                ))
            }
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg text-gray700">Reviews</h1>
            <Reviews idWorker={idWorker}/>
        </div>

        </div>

    </div>
  )
}

export default WorkerProfilePopUp