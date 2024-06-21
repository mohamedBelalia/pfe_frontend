import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {setCookie} from "../../../../config/Cookies"


export interface StoredUserToken {
    userToken : string
}

const initialState : StoredUserToken = {
    userToken : ""
}


export const StoredUserTokenSlice = createSlice({
    name : "userStoredToken" ,
    initialState ,
    reducers : {
        setUserToken : (state , action : PayloadAction<StoredUserToken>) => {
            state.userToken = action.payload.userToken
            setCookie("auth_token" , action.payload.userToken , 30)
        }
    }
})


export const { setUserToken } = StoredUserTokenSlice.actions

export default StoredUserTokenSlice.reducer
