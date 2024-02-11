
import Btn from "../BTN/Btn.tsx"

const ReplayTool = () => {

  return (

    <div className="flex  w-[80%] justify-between m-auto lg:m-2  lg:mx-56 ">
      <input className="border outline-teal500 text-sm md:text-lg px-10  lg:w-[80%]  w-9/12  rounded-xl" placeholder="Replay" type="text" />
      <Btn text="Replay" />
    </div>
  )
}

export default ReplayTool