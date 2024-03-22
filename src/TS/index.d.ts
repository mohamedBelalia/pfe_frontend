export interface ProfessionsType {
    idProfession: string,
    labelleProfession_AR: string,
    labelleProfession_FR: string
}

// for the video player 
export interface IVideoPlayerTools{
    isVideoPlayed : boolean
    getIsVideoPlayed : (videoPlayed : boolean) => void
} 