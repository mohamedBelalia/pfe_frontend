// import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";


type stepIndexProp = {
    stepIndex: number
}

const ProcessSignup = ({ stepIndex }: stepIndexProp) => {
    const step1 = (count: number) => {
        switch (count > 0) {
            case false:
                return <>
                    <div className="rounded-full relative w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">1</div>
                    <div className="bg-gray-200 w-[25%] h-2 " />
                </>
                break;

            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[25%] h-2 " />
                </>
                break;
        }
    }
    // this is the step two in the process
    const step2 = (count: number) => {
        switch (count > 1) {
            case false:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2  flex justify-center items-center font-semibold ">2</div>
                    <div className="bg-gray-200 w-[25%] h-2 " />
                </>
            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[25%] h-2 " />
                </>
                break;
        }
    }

    // this is the step three in the process
    const step3 = (count: number) => {
        switch (count > 2) {
            case false:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">3</div>
                    <div className="bg-gray-200 w-[25%] h-2 " />
                </>
                break;
            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className="bg-teal500 w-[25%] h-2 " />
                </>
                break;
        }
    }
    // this is the step four in the process
    const step4 = (count: number) => {
        switch (count >= 3) {
            case false:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">4</div>
                </>

            default:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2 flex justify-center items-center font-semibold ">4</div>

                </>
                break;

        }
    }
    return (
        <>

            <div className="w-[100%] bg-gray-100 px-6 rounded-xl py-6 my-6 items-center flex justify-between">
                <h1 className="flex text-2xl font-sans font-semibold mr-4"><BiLogoFlutter className="size-8  text-teal500" />Tasker</h1>
                {step1(stepIndex)}
                {step2(stepIndex)}
                {step3(stepIndex)}
                {step4(stepIndex)}
            </div>


        </>
    )
}

export default ProcessSignup