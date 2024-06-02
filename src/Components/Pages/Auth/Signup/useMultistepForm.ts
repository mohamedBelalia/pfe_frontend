import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]){

    const [currentStepIndex, setCurrentStepIndex ]= useState(0);
    function next(){
        setCurrentStepIndex(prev => {
            if(prev >= steps.length - 1) return prev
            return prev + 1
        })
    }

    function back(){
        setCurrentStepIndex(prev => {
            if(prev <  1) return prev
            return prev - 1
        })
    }
    
    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        isFirst : currentStepIndex === 0,
        isLast : currentStepIndex === steps.length - 1,
        steps,
        next,
        back,
    }
}