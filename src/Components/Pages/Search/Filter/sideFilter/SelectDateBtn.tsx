import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

interface selectedDateBtnProps {
    getSelectedDate : (date:DateValueType) => void ,
    selectedDate : DateValueType
}

const SelectDateBtn = ({getSelectedDate , selectedDate}:selectedDateBtnProps) => {


  const handleSelectedDate = (newSelectedDate : DateValueType) => {
      getSelectedDate(newSelectedDate)
  }


  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold text-[#414E5F]">Date</h1>
      <div className="border-2 border-[#349292] rounded-lg">
        <Datepicker 
          primaryColor={"teal"}
          separator="To"
          readOnly
          useRange={false}
          value={selectedDate}
          onChange={handleSelectedDate}
        />
      </div>
    </div>
  )
}

export default SelectDateBtn