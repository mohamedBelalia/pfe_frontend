
import Btn from "../BTN/Btn.tsx"
interface TOOLPROPS {
  onClose: () => void;
}
const ReplayTool = ({ onClose }: TOOLPROPS) => {

  // Function to handle close button click
  const handleClick = () => {
    onClose(); // Call onClose function to close the child component

  };



  return (

    <div className="flex md:mt-2 mt-1 w-full justify-between lg:m-2  lg:mx-10 ">
      <input className="border-2 outline-teal500 mr-[2%] text-sm md:text-lg px-10 border-teal500  w-[80%]  rounded-md" placeholder="Replay" type="text" />
      <div onClick={handleClick} className="w-[20%] px-10 flex justify-center bg-teal500 rounded-md" ><Btn text="Replay" /></div>
    </div>
  )
}

export default ReplayTool