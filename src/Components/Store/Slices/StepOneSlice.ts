import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface StepOneSliceTypes {
    cityTask : string ,
}

export interface StepOneInfo {
    stepOneInfo : StepOneSliceTypes
}

const initialState : StepOneInfo = {
    stepOneInfo : {
        cityTask : "" 
    }
}

export const StepOneInfoSlice = createSlice({
    name : "searchStepOne" ,
    initialState ,
    reducers : {
        setTheSearchStepOne : (state , action:PayloadAction<StepOneInfo>)=>{
            state.stepOneInfo = action.payload.stepOneInfo
        }
    }
})


export const { setTheSearchStepOne } = StepOneInfoSlice.actions

export default StepOneInfoSlice.reducer