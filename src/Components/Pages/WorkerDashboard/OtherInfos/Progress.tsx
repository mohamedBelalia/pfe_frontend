import { useEffect, useState } from 'react'
import "./Progress.css"
interface NUMPROPS {
    num: number
}
const Progress = ({ num }: NUMPROPS) => {

    const [progressContent, setProgressContent] = useState<number>(0);
    const speed = 10;
    const isArabic = true;



    useEffect(() => {
        const progress = setInterval(() => {
            // Update count every second
            if (progressContent >= num) {
                clearInterval(progress);
            } else {
                setProgressContent(prevCount => prevCount + 1);
            }
        }, speed);

        // Clear interval on component unmount
        return () => clearInterval(progress);
    }, [progressContent, num, setProgressContent]); // Include progressContent and setProgressContent in the dependency array



    return (
        <>
            <div className="flex relative p-4 pb-2 justify-center ">
                <div
                    style={{
                        background: `conic-gradient(#349292 ${(progressContent * 360) / 50}deg, #D0D3DA 0deg)`
                    }}
                    className="w-24 rounded-full h-24 bg-teal500 " id="progress"></div>
                <div className="bg-white w-20 h-20 mt-2 flex items-center justify-center text-xl text-teal500 font-bold rounded-full absolute">{progressContent}%</div>

            </div>
            {/* Rates */}
            <div className='flex mb-6 items-center justify-center text-teal500'>
                <div className="flex flex-col justify-center items-center">
                    <img className="lg:w-16 w-12 ml-2" src="icons/starsRate.png" alt="Rating" />
                    <div className="relative flex justify-center items-center"></div>

                    {isArabic ? <div className="flex font-semibold flex-row">
                        <span>شخص قاموا بتقييمك </span><span>{" " + num}</span></div>
                        : <div>47 personnes vous ont noté</div>}
                </div>
            </div></>
    )
}

export default Progress