import { RxFramerLogo } from "react-icons/rx"
import { FaCheck } from "react-icons/fa6";


const StepsPath = () => {
  return (
    <div className="ourContainer mt-7 mb-8">
        <div className="h-[70px] w-[80%] mx-auto bg-gray-300 rounded-xl px-5 flex gap-8">
            <div className="w-[10%] h-full flex justify-center items-center gap-2">
                <RxFramerLogo className="text-4xl text-green-700"/>
                <p className="text-xl text-green-700">Tasker</p>
            </div>

            <div className=" w-full flex justify-center items-center px-4">
                <div className="h-[80%] w-full flex items-center gap-2">

                    <div className="w-[30px] h-[30px] bg-[#349292] text-white rounded-full flex justify-center items-center">
                        <FaCheck className="font-bold"/>
                    </div>

                    <div className="w-[25%] rounded-full overflow-hidden relative">
                        <div className="w-full h-[6px] bg-gray-400"></div>
                        <div className="w-[100%] transition-all ease-in-out duration-700 h-[6px] bg-[#349292] absolute top-0 left-0"></div>
                    </div>

                    <div className="w-[30px] h-[30px] bg-gray-300 text-[#349292] border-2 border-[#349292] rounded-full flex justify-center items-center">
                        <p className="font-bold">2</p>
                    </div>

                    <div className="w-[25%] rounded-full overflow-hidden relative">
                        <div className="w-full h-[6px] bg-gray-400"></div>
                        <div className="w-[0%] transition-all ease-in-out duration-700 h-[6px] bg-[#349292] absolute top-0 left-0"></div>
                    </div>

                    <div className="-ml-1 w-[30px] h-[30px] bg-gray-300 text-gray-400 border-2 border-gray-400 rounded-full flex justify-center items-center">
                        <p className="font-bold">3</p>
                    </div>

                    <div className="w-[25%] rounded-full overflow-hidden relative">
                        <div className="w-full h-[6px] bg-gray-400"></div>
                        <div className="w-[0%] transition-all ease-in-out duration-700 h-[6px] bg-[#349292] absolute top-0 left-0"></div>
                    </div>

                    <div className="-ml-1 w-[30px] h-[30px] bg-gray-300 text-gray-400 border-2 border-gray-400 rounded-full flex justify-center items-center">
                        <p className="font-bold">4</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default StepsPath