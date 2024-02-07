import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface filterSteps {
    reachedSteps : string[]
}

const initialState : filterSteps= {
    reachedSteps : ["step_one"]
}


export const StepsFilterFollowSlice = createSlice({
    name : "stepsFilterFollowSlice" ,
    initialState ,
    reducers : {
        addTheReachedStepName : (state , action:PayloadAction<{stepName : string}>)=>{
            let reachedStepName = action.payload.stepName
            if(state.reachedSteps.includes(reachedStepName)){
                let tempArr : string[] = [] 
                let i =0 

                while (i < state.reachedSteps.length && state.reachedSteps[i] !== reachedStepName) {
                    tempArr.push(state.reachedSteps[i]);
                    i++;
                }

                tempArr.push(reachedStepName)

                state.reachedSteps = tempArr
            }
            else{
                state.reachedSteps.push(reachedStepName)
            }
        }
    }
})

export const { addTheReachedStepName } = StepsFilterFollowSlice.actions

export default StepsFilterFollowSlice.reducer
