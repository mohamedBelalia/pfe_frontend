
import { useEffect, useState } from "react"
import { btnsExplain } from "../../../assets/jsonUsed/explainedBtnHomePage.json"

const HowWeWork = () => {

    const [number , setNumber] = useState<number>(1) 

    useEffect(()=>{
        const changeNbr = () => {
            let i :number= 1 ;
            const interval = setInterval(()=>{
                setNumber(i)
                if(i >= 3){
                    i=1 
                }
                else{
                    i++
                }
            },7000)
    
            return () => clearInterval(interval)
        }
    
        changeNbr()

    },[])

  return (
    <div className="w-[80%] mx-auto pt-12">
        <h1 className="text-center text-4xl font-bold text-[#349292]">How We Work</h1>
        <div className="flex flex-col tab:flex-row items-start gap-6 mt-20">

            <div className="tab:w-1/2 w-full">
                <ExplainerVideo id={number}/>
            </div>

            <div className="tab:w-1/2 mt-6 md:mt-0 w-full ">
                <div className="md:w-[70%] mx-auto flex flex-col justify-start gap-14">
                    {   
                        btnsExplain.map((btn , _)=>(
                            <div key={btn.id}>
                                <ExplainedBtn id={btn.id} title={btn.title} description={btn.description} reachedId={number}/>
                            </div>
                        ))
                    }                           
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default HowWeWork


type ExplainedBtnTypes = {
    id : string ,
    title : string ,
    description : string ,
    reachedId : number
}

const ExplainedBtn = ({id , description , title , reachedId}:ExplainedBtnTypes) =>{
    const isReached = reachedId as unknown as string == id
    return (
        <div className="flex justify-start gap-8">
            <div className="flex justify-center items-start">
                <div className="relative">
                <div className={`${isReached ? "circleTimer absolute top-0 left-0" : ""}`}></div>
                <div className={`flex justify-center items-center text-2xl font-semibold 
                    w-[45px] h-[45px] rounded-full border border-black`}>
                    {id}
                </div>
                </div>
            </div>
            <div>
                <h1 className={`${isReached ? 'text-[#349292]' : 'text-[#242931]'} text-xl font-semibold mb-1`}>{title}</h1>
                <p className={`${isReached ? 'text-[#349292]' : 'text-gray-500'} text-sm `}>{description}</p>
            </div>
         </div> 
    )
}


type ExplainerVideo = {
    id : number ;
}
const ExplainerVideo = ({id}:ExplainerVideo) => {
    let path = "./imgTemp/explain.jpg" ;

    switch (id) {
        case 1 : path = "./imgTemp/explain.jpg" ;
            break ;
        case 2 : path = "./imgTemp/explain2.jpg" ;
            break ;
        case 3 : path = "./imgTemp/explain3.jpg" ;
            break ;
        default : path = "./imgTemp/explain.jpg" ;
            break ;
    }

    return (
        <div className="w-full h-full border-2 border-[#349292] rounded-md overflow-hidden">
            <img src={path} alt="" className="w-full h-full object-cover" />
        </div>
    )
}