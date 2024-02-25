import { FaMinusCircle , FaPlusCircle} from "react-icons/fa";

interface questionTypes {
    id : string ,
    question : string ,
    answer : string ,
    clickedId : string ,
    setClick : (id :string) => void
}

const Question = ({id , question , answer , clickedId , setClick}:questionTypes) => {

    const isClicked : boolean = id == clickedId ;

    const show = () => {
        setClick(id)
    }

    const hide = () => {
        setClick("non")
    }

  return (
    <div className="w-[100%] md:w-[80%] tab:w-[70%] lg:w-[50%] mx-auto">
        <div
            className={`w-full bg-[#d0d3daa0] border-2 border-[#3492928c]
            flex flex-col justify-between px-5 md:px-10 items-center rounded-xl`}>
            
            <div className="flex justify-between items-center h-[60px] w-full">
                <h1 className="text-center md:text-start font-semibold text-[16px] md:text-lg text-[#586374]">{question}</h1>
                {
                    isClicked ? 
                    <div className="mx-[10px]">
                        <FaMinusCircle className="cursor-pointer text-4xl md:text-3xl text-[#349292]" onClick={hide}/>
                    </div>
                    :
                    <div className="mx-[10px]">
                        <FaPlusCircle className="cursor-pointer text-4xl md:text-3xl text-[#349292]" onClick={show}/>
                    </div>
                }   
            </div>
            {
                isClicked && <hr className="h-[2px] w-[80%] bg-[#349292]"/>
            }
            <div className={`text-[#3f4855] transition-all duration-100 ease-in-out overflow-hidden 
                ${isClicked ? "py-6" : "h-0"}`}>
                    {answer}
            </div> 

        </div>
        
        
    </div>
  )
}

export default Question