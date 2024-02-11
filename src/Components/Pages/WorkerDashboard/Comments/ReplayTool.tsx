
import Btn from "../BTN/Btn.tsx"

const ReplayTool = () => {

  return (

    <div className="flex  justify-around lg:m-2  lg:mx-56 ">
      <input className="border outline-teal500 text-sm md:text-lg px-10  w-3/4  rounded-xl" placeholder="Replay" type="text" />
      <Btn text="Replay" />
    </div>
  )
}

export default ReplayTool