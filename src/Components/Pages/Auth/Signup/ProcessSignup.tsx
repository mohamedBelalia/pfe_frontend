import { FaCheckCircle } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import "./ProcessAnimation.css"

// the index of step that we need to define the step
type stepIndexProp = {
    stepIndex: number
}

const ProcessSignup = ({ stepIndex }: stepIndexProp) => {


    const isArabic = false;

    const step1 = (count: number) => {
        switch (count > 0) {
            case false:
                return <>
                    <div className="rounded-full relative w-[25px] h-[25px] md:w-8 md:h-8 text-gray-400  border-teal500 border-2  flex justify-center items-center font-bold ">1</div>
                    <div className="w-[30%] " >
                        <div className="bg-gray-200 rounded  h-2 " />
                    </div>
                </>
                break;

            default:
                return <>
                    <FaCheckCircle className="text-teal500 text-2xl md:text-4xl  " />
                    <div className={`${!isArabic ? "" : " flex-row-reverse"} bg-gray-200 rounded-full w-[30%] h-2 flex `} >
                        <div className="bg-teal500 progress h-2  rounded" />
                    </div>
                </>
                break;
        }
    }
    // this is the step two in the process
    const step2 = (count: number) => {
        switch (count) {
            case 0:
                return <>
                    <div className="rounded-full w-[25px] h-[25px] md:w-8  md:h-8 border-gray-400 border-2 text-gray-400  flex justify-center items-center font-bold ">2</div>
                    <div className="bg-gray-200 rounded w-[30%] h-2 " />
                </>
            case 1:
                return <>
                    <div className="rounded-full md:w-8 md:h-8 w-[25px] h-[25px] border-teal500 border-2 text-gray-400  flex justify-center items-center font-bold ">2</div>
                    <div className="bg-gray-200 rounded w-[30%] h-2 " />
                </>
            default:
                return <>
                    <FaCheckCircle className="text-teal500 text-2xl md:text-4xl " />
                    <div className={`${!isArabic ? "" : " flex-row-reverse"} rounded-full w-[30%] h-2 flex `}>
                        <div className="bg-teal500 rounded progress  h-2 " />
                    </div>
                </>
                break;
        }
    }

    // this is the step three in the process
    const step3 = (count: number) => {
        switch (count) {
            case 0:
                return <>
                    <div className="rounded-full  md:w-8 md:h-8 w-[25px] h-[25px] border-gray-400 text-gray-400 border-2 flex justify-center items-center font-bold ">3</div>
                </>
                break;
            case 1:
                return <>
                    <div className="rounded-full  md:w-8 md:h-8 w-[25px] h-[25px] text-gray-400 font-bold border-gray-400 border-2 flex justify-center items-center ">3</div>
                </>
                break;
            case 2:
                return <>
                    <div className="rounded-full  md:w-8 md:h-8 w-[25px] h-[25px] border-teal500 text-gray-400 border-2 flex justify-center items-center font-bold ">3</div>
                </>
                break;
            default:
                return <>
                    <FaCheckCircle className="text-teal500 text-2xl md:text-4xl " />
                </>
                break;
        }
    }
    return (
        <>
            <div className={`${!isArabic ? "" : "flex-row-reverse"} h-[70px] tab:w-[80%] justify-center  w-[95%]  mx-auto items-center bg-gray-300 rounded-xl px-5 flex gap-4`}>
                <h1 className={`${!isArabic ? "" : "flex-row-reverse"} hidden md:flex w-[20%] items-center text-xl font-sans `}>
                    <BiLogoFlutter className="size-4 mr-2 text-teal500" />
                    {!isArabic ? "Mo9f" : "الموقف"}
                </h1>
                {step1(stepIndex)}
                {step2(stepIndex)}
                {step3(stepIndex)}
            </div>
        </>
    )
}

export default ProcessSignup