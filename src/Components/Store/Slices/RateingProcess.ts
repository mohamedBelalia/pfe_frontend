import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface IRatingCriteriasType {
        delais : string | null
        maitrise : string | null
        prix : string | null
}

export interface IRatingProcess {
   levelClicked : boolean
   ratingCriterias : IRatingCriteriasType
}

const initialState : IRatingProcess = {
    levelClicked : false, 
    ratingCriterias : {
        delais : null,
        maitrise : null,
        prix : null
    }
}


export const RatingProcessSlice = createSlice({
    name : "rating_process" ,
    initialState ,
    reducers : {
        setIsLeveleProcessClicked : (state , action : PayloadAction<boolean>) => {
            state.levelClicked = action.payload
        } ,

        setDelaisCriteriasLevels : (state , action : PayloadAction<string>) => {
            state.ratingCriterias.delais = action.payload
        }
        ,
        setMaitriseCriteriasLevels : (state , action : PayloadAction<string>) => {
            state.ratingCriterias.maitrise = action.payload
        }
        ,
        setPrixCriteriasLevels : (state , action : PayloadAction<string>) => {
            state.ratingCriterias.prix = action.payload
        }
    }
})

export const { setIsLeveleProcessClicked , setDelaisCriteriasLevels , setMaitriseCriteriasLevels , setPrixCriteriasLevels} = RatingProcessSlice.actions

export default RatingProcessSlice.reducer
