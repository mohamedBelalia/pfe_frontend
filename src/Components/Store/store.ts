import { configureStore } from "@reduxjs/toolkit";
import { StepOneInfoSlice } from "./Slices/StepOneSlice";
import { SelectedTaskSlice } from "./Slices/SelectedTask";
import { StepsFilterFollowSlice } from "./Slices/StepsFilterFollowSlice";
import { SelectedLanguageSlice } from "./Slices/ChangeLanguageSlice";


export const store = configureStore({
    reducer : {
        searchStepOne : StepOneInfoSlice.reducer ,
        selectedTask : SelectedTaskSlice.reducer ,
        stepsFilterFollowSlice : StepsFilterFollowSlice.reducer ,
        selectedLanguageSlice : SelectedLanguageSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

