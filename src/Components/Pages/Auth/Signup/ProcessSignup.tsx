import { FaCheckCircle } from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import "./ProcessAnimation.css"

// the index of step that we need to define the step
type stepIndexProp = {
    stepIndex: number
}

const ProcessSignup = ({ stepIndex }: stepIndexProp) => {


    const isArabic = true;

    const step1 = (count: number) => {
        switch (count > 0) {
            case false:
                return <>
                    <div className="rounded-full relative w-8 h-8  border-teal500 border-4 flex justify-center items-center font-semibold ">1</div>
                    <div className="w-[30%] " >
                        <div className="bg-gray-200 rounded  h-2 " />
                    </div>
                </>
                break;

            default:
                return <>
                    <FaCheckCircle className="text-teal500 text-4xl  " />
                    <div className={`${!isArabic?"":" flex-row-reverse"} bg-gray-200 w-[30%] h-2 flex `} >
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
                    <div className="rounded-full w-8  h-8 border-gray-200 border-2  flex justify-center items-center font-semibold ">2</div>
                    <div className="bg-gray-200 rounded w-[30%] h-2 " />
                </>
            case 1:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500 border-2  flex justify-center items-center font-semibold ">2</div>
                    <div className="bg-gray-200 rounded w-[30%] h-2 " />
                </>
            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                    <div className={`${!isArabic?"":" flex-row-reverse"} bg-gray-200 w-[30%] h-2 flex `}>
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
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">3</div>
                </>
                break;
            case 1:
                return <>
                    <div className="rounded-full w-8 h-8 border-gray-200 border-2 flex justify-center items-center font-semibold ">3</div>
                </>
                break;
            case 2:
                return <>
                    <div className="rounded-full w-8 h-8 border-teal500  border-2 flex justify-center items-center font-semibold ">3</div>
                </>
                break;
            default:
                return <>
                    <FaCheckCircle className="text-teal500 size-8 " />
                </>
                break;
        }
    }
    return (
        <>
            <div className={`${!isArabic?"":"flex-row-reverse"} w-[100%] hidden  bg-gray-100 px-6 rounded-xl py-6 mt-4 items-center md:flex justify-between`}>
                <h1 className={`${!isArabic?"":"flex-row-reverse"} flex w-[20%] text-3xl font-sans font-bold justify-center mr-4`}>
                    <BiLogoFlutter className="size-8 mr-2 text-teal500" />
                    {!isArabic?"Tasker":"الموقف"}
                    </h1>
                {step1(stepIndex)}
                {step2(stepIndex)}
                {step3(stepIndex)}
            </div>
        </>
    )
}

export default ProcessSignup