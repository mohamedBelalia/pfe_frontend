import { IoMdSettings } from "react-icons/io";
import { TbStars } from "react-icons/tb";

const Card = () => {
    const Occupations = (props: { text: string })=>{
        return (
            <div className=" m-2 px-4 py-1 border-2 border-teal500 bg-gray-200  rounded-full">{props.text}</div>
        )}
  return (
    
            <div className='p-4 pb-6 mb-3 border text-center  bg-gray-100 rounded-xl'>
                <div className='flex  text-left w-2/3 text-blue500 '>
                    <IoMdSettings />
                    <div className='-mt-1 ml-1'>Edit Profile</div>
                </div>
                <img className=' w-24 md:w-32 m-auto mt-6 mb-3 rounded-full ' src="public\imgUsed\portrait-man-laughing.jpg" alt="" />
                <div className="text-teal500 text-lg md:text-xl font-semibold flex justify-center pb-4">
                    <div >Ahmed Akrami </div>
                    <TbStars className="ml-3  text-yellow-500"/>
                </div>
                <div className="text-sm md:text-md w-72 m-auto text-600 font-semibold text-gray700">I will be happy to help you and do everything quickly and efficiently. I like my job and I like helping people</div>
                <div>
                    <div className="font-semibold ml-7 mt-5 text-teal500 text-left">Occupations</div>
                    <div className="flex flex-wrap">
                        <Occupations text={"Plumber"}/>
                        <Occupations text={"Builder"}/>
                        <Occupations text={"Hv Technician"}/>
                       
                    </div>
                </div>
            </div>
           
  )
}

export default Card