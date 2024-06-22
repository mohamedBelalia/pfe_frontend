export interface IProfessionsType {
    idProfession: string,
    labelleProfession_AR: string,
    labelleProfession_FR: string
}

// for the video player 
export interface IVideoPlayerTools{
    isVideoPlayed : boolean
    getIsVideoPlayed : (videoPlayed : boolean) => void
} 

// for the Best Workers incoming data
export interface IWorkerInfromation {
    idOuvrier :  string,
    nomOuvrier :  string,
    prenomOuvrier :  string,
    imgProfile : string ,
    phone :  string,
    idBadge :  string,
    labelleBadge_AR :  string,
    labelleBadge_FR :  string ,
    nbrCommentair : string ,
    avgEtoile : string
    description_ouvrier? : string,
    ville_AR : string ,
    ville_FR : string
}
export interface ISingleWorker{
    singleWorker : IWorkerInfromation
}
export interface IBestWorkers{
   workerInfo : IWorkerInfromation
}

export interface ICommunWorkerInfo {
    id : string,
    phoneNumber: string,
    firstName: string ,
    imgPath : string,
}


// for the sended data of the filter
export interface IFilterNeededData{
    profession : string
    ville : string
    badge : string[]
}

// only for the Badge props in the filter components 
interface IBadgeProps {
    getBadgeNbr : (nbrBadge : string[]) => void
}


// for the Projects of each worker
interface IProjectWorker {
    idProjet: string
    imageProjet: string
    titre: string
    description_projet: string
    idOuvrier ?: string
}


// for the Diploms of each worker
interface IDiplomsWorker {
    idDiplome : string
    labelleDiplome_AR : string
    labelleDiplome_FR : string
}

// for the Comments of each worker
interface IComments {
    idCommentaire : string 
    textCommentaire : string 
    nbrEtoile : number
    dateCommentaire : string
    idOuvrier : string
}

// for the coming cities from databse
interface ICity{
    idVille: string;
    ville_AR: string;
    ville_FR: string;
}