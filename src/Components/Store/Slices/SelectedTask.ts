import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface SelectedTask {
    selectedTask : string
}

const initialState : SelectedTask = {
    selectedTask : ""
}

export const SelectedTaskSlice = createSlice({
    name : "selected_task",
    initialState ,
    reducers : {
        setSelectedTask : (state , action:PayloadAction<SelectedTask>)=>{
                state.selectedTask = action.payload.selectedTask
        }
    }
})

export const { setSelectedTask } = SelectedTaskSlice.actions

export default SelectedTaskSlice.reducer
