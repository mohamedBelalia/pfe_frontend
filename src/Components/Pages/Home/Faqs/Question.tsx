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
    <div className="md:w-[50%] mx-auto">
        <div
            className={`w-full h-[60px] bg-[#D0D3DA] border-2 border-[#3492928c] 
            flex justify-between py-8 px-10 items-center ${isClicked ? 'rounded-t-xl' : 'rounded-xl'}`}>
            
            <h1 className="font-bold text-lg text-[#586374]">{question}</h1>
            {
                isClicked ? 
                <FaMinusCircle className="cursor-pointer text-3xl text-[#349292]" onClick={hide}/>
                :
                <FaPlusCircle className="cursor-pointer text-3xl text-[#349292]" onClick={show}/>
            }
        </div>
        
        <div className={` bg-[#D0D3DA] text-[#3f4855] rounded-b-xl transition-all duration-100 ease-in-out  overflow-hidden 
                ${isClicked ? " border-r-2 border-b-2 border-l-2 border-[#3492928c] p-6" 
                : "h-0"}`}>
            {answer}
        </div>
    </div>
  )
}

export default Question