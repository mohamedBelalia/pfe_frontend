import { useState } from "react";
import Input from "./Input";

interface PropsSignup {
  validation: () => void
}


const Signup = () => {

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    password: '',
    confpassword: '',
    phone:'',
  });

  const handleChange = (e: { target: { value: any; }; })=>{
    console.log(e.target.value);
    
  }

  return (

    <div className=' md:flex md:flex-col md:items-center  rounded-xl  tab:pt-4'>
      <div className="text-center ">
        <h1 className="text-teal-500 text-3xl font-semibold">Personal Information</h1>
        <small className="text-red-500">use your active number to conecting with you*</small>
      </div>
      <form action="" method="post" className=" w-[70%] md:py-4 ">

        <div className="flex py-4 justify-between">
          <div className="flex flex-col">
            <label htmlFor="fname" className=" text-sm color text-teal500 font-semibol" >First Name</label>
            <input type="text" onChange={handleChange} className="h-10 w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="fname" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lname" className=" text-sm text-teal500 font-semibold " >Last Name</label>
            <input type="text" value={formData.lname} className="h-10 w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="lname" />
          </div>
        </div>
        <div className="flex py-4 justify-between">
          <div className="">
            <label htmlFor="phone" className=" text-sm text-teal500 font-semibold " >Phone Number</label>
            <input type="text"  className="h-10 w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="phone" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className=" text-sm text-teal500 font-semibold " >Password</label>
            <input type="text" value={formData.password} className="h-10 w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="password" />
          </div>
        </div>
       
          <div className="flex  flex-col">
            <label htmlFor="confpassword" className=" text-sm  text-teal500 font-semibold" >Confirm Password</label>
            <input  type="text" value={formData.confpassword} className="h-10 w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="confpassword" />
          </div>

         

       

      </form>

    </div>

  )
}

export default Signup