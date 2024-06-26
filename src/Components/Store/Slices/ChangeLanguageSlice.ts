import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface SelectedLanguage {
    isArabicSelected : boolean
}

const initialState : SelectedLanguage = {
    isArabicSelected : false 
}

export const SelectedLanguageSlice = createSlice({
    name : "languageSelected" ,
    initialState , 
    reducers : {
        setIsArabicLanguageSelected : (state , action : PayloadAction<SelectedLanguage>)=>{
            state.isArabicSelected = action.payload.isArabicSelected
        }
    }
})


export const { setIsArabicLanguageSelected } = SelectedLanguageSlice.actions

export default SelectedLanguageSlice.reducer ;