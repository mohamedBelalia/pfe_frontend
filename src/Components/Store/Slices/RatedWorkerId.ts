import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface IRatedWorkerId {
    idWorker : string
}

const initialState : IRatedWorkerId = {
    idWorker : ""
}

export const RatedWorkerIdSlice = createSlice({
    name : "rated_worker" ,
    initialState ,
    reducers : {
        setRatedWorkerId : (state , action:PayloadAction<IRatedWorkerId> ) => {
            state.idWorker = action.payload.idWorker
        }
    }
})

export const { setRatedWorkerId } = RatedWorkerIdSlice.actions

export default RatedWorkerIdSlice.reducer