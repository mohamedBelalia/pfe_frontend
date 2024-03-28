import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]){

    const [currentStepIndex, setCurrentStepIndex ]= useState(0);
    function next(){
        setCurrentStepIndex(prev => {
            console.log(prev)
            if(prev >= steps.length - 1) return prev
            return prev + 1
        })
    }
console.log(currentStepIndex);

    function back(){
        setCurrentStepIndex(prev => {
            console.log(prev) 
            if(prev <= 0 ) return prev
            return prev - 1
        })
    }
    
    // function goTo(index:number){
    //     setCurrentStepIndex(index);
    // }
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirst : currentStepIndex === 0,
        isLast : currentStepIndex === steps.length - 1,
        steps,
        // goTo,
        next,
        back,
    }
}