import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface IWorkerID {
    idWorker : string
}

const initialState : IWorkerID = {
    idWorker : "" 
}

export const ChangeIdWorkerUrl = createSlice({
    name : "idWorker change" ,
    initialState , 
    reducers : {
        setTheIdWorkerUrl : (state , action : PayloadAction<IWorkerID>)=>{
            state.idWorker = action.payload.idWorker
        }
    }
})


export const { setTheIdWorkerUrl } = ChangeIdWorkerUrl.actions

export default ChangeIdWorkerUrl.reducer ;