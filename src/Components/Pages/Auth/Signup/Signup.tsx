
import { useNavigate } from "react-router-dom";
import Input from "./Input";


const Signup = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to a login page
    navigate('/login');
  };

  return (
    // lg:w-[80%]  flex items-center  m-auto mt-[1%] 
    <div className='flex  m-auto w-[95%] my-10 lg:w-[80%]' >
      {/* welcome side */}
      <div className='tab:flex  tab:justify-center tab:items-center w-[60%] relative hidden overflow-hidden text-white rounded-l-xl flex-col ' style={{ background: "#414F5F" }}>
        <h1 className="lg:text-4xl text-xl font-bold">Welcome Back !</h1>
        <small className="mb-10 mt-4">Login to your account</small>
        <button onClick={handleClick} className='border-2 w-40 rounded-full transition-all  ease-in-out  duration-300 hover:bg-teal-600 px-10 py-3'>Login</button>

        <div className="w-40 h-40 absolute top-0 opacity-20 left-0 -mt-16 -ml-16  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute -mt-64 ml-60  opacity-20  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute mt-64 mr-60 opacity-20   bg-gray-400 rounded-full "></div>
        <div className="w-40 h-40 absolute  bottom-0 opacity-20 right-0 -mb-16 -mr-16  bg-gray-400 rounded-full "></div>

      </div>

      {/* Login side */}

      <div className='w-[70%] md:flex md:flex-col m-auto md:items-center border-2 rounded-xl tab:rounded-l-none lg:border-l-0 tab:pt-4'>
        <div className="text-center ">
          <h1 className="text-teal-500 text-3xl font-semibold">Create Account</h1>
          <small className="text-red-500">*use your active number to conecting with you</small>
        </div>
        <form action="" method="post">
          <div className="md:grid flex flex-col  items-center w-full md:grid-cols-2 md:py-4 ">
            <Input labelText="first name" lien="fname" />
            <Input labelText="last name" lien="lname" />
            <Input labelText="phone" lien="phone" />
            <Input labelText="Password" lien="pass" />
            <Input labelText="confirm password" lien="confPass" />
          </div>
        </form>
        <div>
        </div>
        <div>


          <div className="h-38 rounded-xl ">
          </div>
          <div>

          </div>
        </div>
        <div className="my-4 flex justify-center">
          <button type="submit" className="px-16 transition-all ease-in-out py-4 duration-300 bg-teal-600 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-2xl ">Sign Up</button>
        </div>
      </div>


    </div>

  )
}

export default Signup