import Badge from "./Badge";
import SortedBy from "./SortedBy";


const SideCriterias = () => {


  return (
    <div className="w-full p-8 bg-gray-200 rounded-lg border border-gray-400 flex flex-col gap-5">
      
        <SortedBy/>

        <hr className="h-[3px] rounded-full w-[80%] mx-auto bg-gray-500"/>

        <Badge/>

    </div>
  )
}

export default SideCriterias