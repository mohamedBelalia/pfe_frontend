import workers from "../../../../../assets/jsonTemp/cardsInfoFil.json"
import { workerDataProps } from "../WorkerCard"

type workerPopUpTypes = {
    idWorker : string ,
    idWorkerSetter : (id : string) => void
}

const WorkerProfilePopUp = ({idWorker , idWorkerSetter}:workerPopUpTypes) => {

    const clickedWorkerData : workerDataProps= workers.workers.filter((worker)=> worker.id == idWorker)[0] ;

  return (
    <div className="w-[50%] h-[80%] rounded-lg py-4 px-8 bg-white overflow-y-scroll overflow-x-hidden">
        <div className="flex justify-end text-3xl font-semibold text-gray-600">
            <h1 
                onClick={()=>idWorkerSetter("")}
                className="w-[20px] cursor-pointer">X</h1>
        </div>

        <div>
            <div>
                <img src={clickedWorkerData.imgProfile} alt="" />
            </div>
            <div>
                <div>
                    {clickedWorkerData.name } {clickedWorkerData.badge}
                </div>
                <div>   
                    {clickedWorkerData.rate} (832 reviews)
                </div>
            </div>
            <div>
                <h1>{clickedWorkerData.price} Dh/Day</h1>
            </div>
        </div>

    </div>
  )
}

export default WorkerProfilePopUp