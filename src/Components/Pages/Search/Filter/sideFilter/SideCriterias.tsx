import Badge from "./Badge";
import { IBadgeProps } from "../../../../../TS";


const SideCriterias = ({getBadgeNbr}:IBadgeProps) => {

  return (
    <div className="w-full p-8 bg-gray-200 rounded-lg border border-gray-400 flex flex-col gap-5">
        
        <Badge getBadgeNbr={getBadgeNbr}/>
    </div>
  )
}

export default SideCriterias