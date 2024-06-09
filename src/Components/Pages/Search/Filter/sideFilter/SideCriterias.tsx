import { useState } from "react";
import SelectDateBtn from "./SelectDateBtn";
import { DateValueType } from "react-tailwindcss-datepicker";
import Badge from "./Badge";


const SideCriterias = () => {

  const [selectedDate , setSelectedDate] = useState<DateValueType>({
    endDate : null ,
    startDate : null
  })


  return (
    <div className="w-full p-8 bg-gray-200 rounded-lg border border-gray-400 flex flex-col gap-5">

        <SelectDateBtn getSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
        <hr className="h-[3px] rounded-full w-[80%] mx-auto bg-gray-500"/>

        <Badge/>

    </div>
  )
}

export default SideCriterias