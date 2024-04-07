import { PayloadAction, createSlice } from "@reduxjs/toolkit"


export interface IVideoTools {
    isVideoPlayed : boolean 
    videoType : string 
}

const initialState : IVideoTools = {
    isVideoPlayed : false ,
    videoType : ""
} 


export const VideoPlaySlice = createSlice({
    name : "Video_Played",
    initialState ,
    reducers : {
        setIsVideoClicked : (state , action: PayloadAction<{videoClicked : boolean}>) => {
            state.isVideoPlayed = action.payload.videoClicked
        } ,

        setVideoType : (state , action: PayloadAction<{videoType : "worker" | "client"}>) => {
            state.videoType = action.payload.videoType
        }

    }
})

export const {setIsVideoClicked , setVideoType} = VideoPlaySlice.actions

export default VideoPlaySlice.reducer