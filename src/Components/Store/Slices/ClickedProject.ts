import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface IClickedProject {
    idProject : string
}

const initialState : IClickedProject = {
    idProject : "" 
}

export const ClickedProjectSlice = createSlice({
    name : "clicked project" ,
    initialState , 
    reducers : {
        setClickedProject : (state , action : PayloadAction<IClickedProject>)=>{
            state.idProject = action.payload.idProject
        }
    }
})


export const { setClickedProject } = ClickedProjectSlice.actions

export default ClickedProjectSlice.reducer ;