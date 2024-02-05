import WorkerCard from "./WorkerCard"
import workersInfo from "../../../../assets/jsonTemp/cardsInfoFil.json"

interface listWorkersProps{
  getClickedWorkerId : (id : string)=>void
}

const ListWorkers = ({getClickedWorkerId}:listWorkersProps) => {
  return (
    <div className="">
          <div className="flex flex-col gap-8">
              {
                workersInfo.workers.map((worker,index)=>(
                  <WorkerCard key={worker.id} workerInf={worker} getClickedWorkerId={getClickedWorkerId}/>
                ))
              }
          </div>
    </div>
  )
}

export default ListWorkers