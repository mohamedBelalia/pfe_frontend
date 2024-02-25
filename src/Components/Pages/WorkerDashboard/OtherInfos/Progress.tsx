import React, { useEffect, useState } from 'react'
import "./Progress.css"

const Progress = () => {
    var [progressContent, setProgressContent] = useState<number>(0);
    const endProgressContent = 90;
    const speed = 10;


    

    useEffect(() => {
        const progress = setInterval(() => {
            // Update count every second
            if (progressContent >= endProgressContent) {
                clearInterval(progress);
            } else {
                setProgressContent(prevCount => prevCount + 1);
            }
        }, speed);
    
        // Clear interval on component unmount
        return () => clearInterval(progress);
    }, [progressContent, setProgressContent]); // Include progressContent and setProgressContent in the dependency array
    


    return (

        <div className="flex relative p-4 justify-center ">
            <div
                style={{
                    background: `conic-gradient(#349292 ${(progressContent*360)/100}deg, #D0D3DA 0deg)`
                }}
                className="w-24 rounded-full h-24 bg-teal500 " id="progress"></div>
            <div className="bg-white w-20 h-20 mt-2 flex items-center justify-center text-xl text-teal500 font-bold rounded-full absolute">{progressContent}%</div>
        </div>
    )
}

export default Progress