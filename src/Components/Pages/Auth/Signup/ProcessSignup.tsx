// import React from 'react'
import Signup from "./Signup";
import Add_InfosAbout_You from "./Add_InfosAbout_You";
import Ocupations from "./Ocupations";
import { FaCheckCircle } from "react-icons/fa";

import { useState } from "react";
const Process = () => {
    const [countSteps, setCountSteps] = useState<number>(0);
    const [NextText, steNextText] = useState<string>("Next");
    const steps = [<Signup />, <Ocupations />, <Add_InfosAbout_You />]



    const nextHandler = () => {
        test();
        if (countSteps === 1) {
            steNextText("Finish")
        }

        else {
            steNextText("Next")
        }
        setCountSteps(prev => prev + 1);

    }

    const backHandler = () => {
        if (countSteps > 0) setCountSteps(prev => prev - 1);
    }

    const test = () =>{
        
        
    }

    


    return (
        <div className="h-[100%] flex my-6 flex-col items-center">
            <div className="w-[60%] items-center flex justify-around">
                {countSteps > 1
                    ? <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center bg font-semibold ">1</div>
                    : <FaCheckCircle className="text-teal500 size-8 " />}
                <div className="bg-teal500 w-[40%] h-2 " />
                <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center bg font-semibold ">2</div>
                <div className="bg-gray-200 w-[40%] h-2" />
                <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center bg font-semibold ">3</div>

            </div>
            <div className=" h-[400px] w-full">{steps[countSteps]}</div>

            <div className="my-4  w-[70%] flex justify-between m-auto  ">
                <button onClick={backHandler} type="submit" className=" px-8 transition-all ease-in-out py-1 duration-300 bg-blue-400 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-lg  ">Back</button>
                <div>
                    <button onClick={nextHandler} type="submit" className="px-8 mr-4 transition-all ease-in-out py-1 duration-300 bg-gray-300 text-gray-400  font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-lg  ">Skip</button>
                    <button onClick={nextHandler} type="submit" className="px-8 transition-all ease-in-out py-1 duration-300 bg-teal500 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-lg  ">{NextText}</button>
                </div>
            </div>
        </div>
    )
}

export default Process