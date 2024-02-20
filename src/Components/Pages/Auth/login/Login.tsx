import { useNavigate } from "react-router-dom";
import Input from "../Signup/Input"
import Navbar from "../../../Common/Navbar/Navbar";

const Login = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate signup page
    navigate('/signup');
  };

  return (
    <div className="border">
    <Navbar/>
    <div className='flex my-6 justify-between mt-40 lg:w-[70%] w-[90%] m-auto' >
      <div className="flex flex-col border-2 rounded-xl rounded-r-none border-r-0 justify-center items-center w-[60%]">

        <div className="flex flex-col items-center">
          <h1 className="text-teal-500 text-3xl font-semibold">Login To Account</h1>
          <small className="text-red-500">*use your active number to conecting with you</small>
        </div>
        <form className=" w-[60%]   justify-center items-center" action="">

          <Input labelText="email" lien="email" />
          <Input labelText="password" lien="confPass" />
          <button type="submit" className=" lg:ml-16 lg:mt-10 mt-6 flex justify-center transition-all ease-in-out  duration-300 bg-teal-600 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   w-48 rounded-2xl py-3 px-8">Login up</button>

        </form>
      </div>


      {/* welcome side */}
      <div className='flex  relative h-96  overflow-hidden text-white rounded-r-xl items-center  flex-col justify-center w-[40%]' style={{ background: "#414F5F" }}>
        <h1 className="text-xl lg:text-4xl font-bold">Create Account</h1>
        <small className="mb-10  mt-2">Create A Personnel Acount</small>
        <button onClick={handleClick} className='border-2 w-40 rounded-full transition-all  ease-in-out  duration-300 hover:bg-teal-600 px-10 py-3'>Sign up</button>
        <div className="w-36 h-36 absolute top-0 opacity-20 left-0 -mt-16 -ml-16  bg-gray-400 rounded-full "></div>
        <div className="w-16 h-16 absolute -mt-64 ml-60  opacity-10  bg-gray-400 rounded-full "></div>
        <div className="w-16 h-16 absolute mt-64 mr-60 opacity-20   bg-gray-400 rounded-full "></div>
        <div className="w-36 h-36 absolute  bottom-0 opacity-20 right-0 -mb-16 -mr-16  bg-gray-400 rounded-full "></div>
      </div>



    </div>
    </div>



  )
}

export default Login