import { configureStore } from "@reduxjs/toolkit";
import { StepOneInfoSlice } from "./Slices/StepOneSlice";
import { SelectedTaskSlice } from "./Slices/SelectedTask";


export const store = configureStore({
    reducer : {
        searchStepOne : StepOneInfoSlice.reducer ,
        selectedTask : SelectedTaskSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

