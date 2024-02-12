
import HeadlessUI from "./HeadlessUI";
import Input from "./Input";
import { useState } from "react";


const Signup = () => {

  const [professions, setProfessions] = useState<string[]>([]);


  const addProfessions = (item: string) => {
    const isElementInArray = professions.includes(item);
    { !isElementInArray && (setProfessions([...professions, item])) }

  };

  const deleteProfession = (index: number) => {
    const updateProfession = [...professions];
    updateProfession.splice(index, 1);
    setProfessions(updateProfession);
  }







  return (
    // lg:w-[80%]  flex items-center  m-auto mt-[1%] 
    <div className='flex m-auto w-[95%] my-10 lg:w-[80%]' >
      {/* welcome side */}
      <div className='tab:flex  tab:justify-center tab:items-center w-[60%] relative hidden overflow-hidden text-white rounded-l-xl flex-col ' style={{ background: "#414F5F" }}>
        <h1 className="lg:text-4xl text-xl font-bold">Welcome Back !</h1>
        <small className="mb-10 mt-4">Login to your account</small>
        <button className='border-2 w-40 rounded-full transition-all  ease-in-out  duration-300 hover:bg-teal-600 px-10 py-3'>Login</button>

        <div className="w-40 h-40 absolute top-0 opacity-20 left-0 -mt-16 -ml-16  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute -mt-64 ml-60  opacity-20  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute mt-64 mr-60 opacity-20   bg-gray-400 rounded-full "></div>
        <div className="w-40 h-40 absolute  bottom-0 opacity-20 right-0 -mb-16 -mr-16  bg-gray-400 rounded-full "></div>

      </div>

      {/* Login side */}

      <div className='w-[90%] md:flex md:flex-col md:items-center border-2 rounded-xl tab:rounded-l-none lg:border-l-0 tab:pt-4'>
        <div className="text-center ">
          <h1 className="text-teal-500 text-3xl font-semibold">Create Account</h1>
          <small className="text-red-500">*use your active number to conecting with you</small>
        </div>
        <form className="flex " action="" method="post">
          <div>
            <Input labelText="first name" lien="fname" />
            <Input labelText="email" lien="email" />
              <label className="flex flex-col text-sm " htmlFor="job">Selected Job</label>
            <HeadlessUI />
          </div>
          <div>
            <Input labelText="last name" lien="lname" />
            <Input labelText="phone number" lien="phone" />
            <div className="h-38 rounded-xl ">
            </div>
            <div>
              <Input labelText="Password" lien="pass" />
              <Input labelText="confirm password" lien="confPass" />
            </div>
          </div>
        </form>
        <div className="my-4 flex justify-center">
          <button type="submit" className="px-16 transition-all ease-in-out py-4 duration-300 bg-teal-600 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-2xl ">Sign Up</button>
        </div>
      </div>


    </div>

  )
}

export default Signup