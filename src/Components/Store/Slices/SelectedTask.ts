import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface SelectedTask {
    selectedTask : string ,
    selectedTask_id : string
}

const initialState : SelectedTask = {
    selectedTask : "" ,
    selectedTask_id : ""
}

export const SelectedTaskSlice = createSlice({
    name : "selected_task",
    initialState ,
    reducers : {
        setSelectedJobName : (state , action:PayloadAction<{selectedTask : string}>)=>{
                state.selectedTask = action.payload.selectedTask
        }
    }
})

export const { setSelectedJobName } = SelectedTaskSlice.actions

export default SelectedTaskSlice.reducer
