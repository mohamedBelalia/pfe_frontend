// import React from 'react'
import Signup from "./Signup";
import Add_InfosAbout_You from "./Add_InfosAbout_You";
import Ocupations from "./Ocupations";
import { FaCheckCircle } from "react-icons/fa";
import AddProjects from "./AddProjects";
import {   useState } from "react";
import Forms from "./Forms";

const ProcessSignup = () => {
    const [countSteps, setCountSteps] = useState<number>(0);
    const [NextText, setNextText] = useState<string>("Next");
    const steps = [<Signup />, <Ocupations />, <Add_InfosAbout_You />,<AddProjects />]



    const nextHandler = () => {
        if (countSteps >= 2) {
            setNextText("Finish")
        }

        else {
            setNextText("Next")
        }
        if(countSteps < 3){
            setCountSteps(prev => prev + 1);

        }

    }

    const backHandler = () => {
        if (countSteps > 0) setCountSteps(prev => prev - 1);
        setNextText("Next")

    }
   
    // this is the step one in the process
    const step1 = (count: number) => {
        switch (count) {
            case 0:
                return <>
                    
                    <div className="rounded-full relative w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">1</div>
                    <div className="bg-gray-200 w-[20%] h-2 " />
                       
                    
                </>
                break;

            case 1:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[20%] h-2 " />

                </>
                break;

            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[20%] h-2 " />
                </>
                break;
        }
    }
    // this is the step two in the process
    const step2 = (count: number) => {
        switch (count) {
            case 0:
                return <>
                    
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2  flex justify-center items-center font-semibold ">2</div>
                    <div className="bg-gray-200 w-[20%] h-2 " /> 


                    
                </>
                break;
            case 1:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">2</div>
                    <div className="bg-gray-200 w-[20%] h-2 " />
                </>
                break;

            case 2:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[20%] h-2 " />
                </>
                break;

            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[20%] h-2 " />
                </>
                break;
        }
    }

    // this is the step three in the process
    const step3 = (count: number) => {
        switch (count) {
            case 0:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">3</div>
                    <div className="bg-gray-200 w-[20%] h-2 " />
                </>
                break;
            case 1:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">3</div>
                    <div className="bg-gray-200 w-[20%] h-2 " />
                </>
                break;

            case 2:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">3</div>
                    <div className="bg-gray-200 w-[20%] h-2 " />
                </>
                break;
            case 3:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[20%] h-2 " />
                </>
                break;

            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[20%] h-2 " />
                </>
                break;
        }
    }
    // this is the step four in the process
    const step4 = (count: number) => {
        switch (count) {
            case 0:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">4</div>
                </>
                break;
            case 1:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">4</div>
                </>
                break;

            case 2:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">4</div>
                </>
                break;
            case 3:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">4</div>
                </>
                break;
            case 4:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">4</div>
                </>
                break;
            default:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">4</div>
                </>
                break;

        }
    }






    return (
        <>
        <div className="h-[100%] flex my-6 flex-col items-center">
            <div className="w-[70%] bg-gray-100 px-6 rounded-xl py-4 items-center flex justify-between">
         <h1 className="flex"><FaCheckCircle className="size-8 text-teal500"/> Logo here</h1>
                {step1(countSteps)}
                {step2(countSteps)}
                {step3(countSteps)}
                {step4(countSteps)}
            </div>
            {/* <div className=" h-[400px] w-full">{steps[countSteps]}</div> */}

            <div className="my-4  w-[70%] flex justify-between m-auto  ">
                {/* <button onClick={backHandler} type="submit" className=" px-8 transition-all ease-in-out py-1 duration-300 bg-blue-400 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-lg  ">Back</button> */}
                <Forms />
                {/* <div>
                    <button onClick={nextHandler} type="submit" className="px-8 mr-4 transition-all ease-in-out py-1 duration-300 bg-gray-300 text-gray-400  font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-lg  ">Skip</button>
                    <button onClick={nextHandler} type="submit" className="px-8 transition-all ease-in-out py-1 duration-300 bg-teal500 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-lg  ">{NextText}</button>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default ProcessSignup