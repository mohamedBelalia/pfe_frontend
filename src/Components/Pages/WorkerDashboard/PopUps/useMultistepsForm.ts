import React, { ReactElement, useState } from 'react'

export const useMultistepsForm = ( steps: ReactElement[] ) => {

    const [currentStepindex, setCurrentStepIndex] = useState(0)

    const back = ()=>{
      setCurrentStepIndex((i)=>{
            if(i<=0) return i
            return i-1
        });
      }

    const next = ()=>{
        setCurrentStepIndex(i=>{
          if(i >= steps.length-1) return i;
          return i+1
        })
      }


  return {
    currentStepindex,
    step: steps[currentStepindex],
    steps,
    length : steps.length,
    isFirstStep: currentStepindex === 0,
    isLastStep: currentStepindex === steps.length,
    back,
    next,
  }



 
}

