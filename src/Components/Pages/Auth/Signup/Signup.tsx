// import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import data from "./dataSignup.json"
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
    <div className='flex m-auto w-[90%] lg:w-[80%]' >
      {/* welcome side */}
      <div className='lg:flex lg:justify-center lg:items-center w-[60%] relative hidden overflow-hidden text-white rounded-l-xl flex-col ' style={{ background: "#414F5F" }}>
        <h1 className="lg:text-4xl text-xl font-bold">Welcome Back !</h1>
        <small className="mb-10 mt-4">Login to your account</small>
        <button className='border-2 w-40 rounded-full transition-all  ease-in-out  duration-300 hover:bg-teal-600 px-10 py-3'>Login</button>

        <div className="w-40 h-40 absolute top-0 opacity-20 left-0 -mt-16 -ml-16  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute -mt-64 ml-60  opacity-20  bg-gray-400 rounded-full "></div>
        <div className="w-20 h-20 absolute mt-64 mr-60 opacity-20   bg-gray-400 rounded-full "></div>
        <div className="w-40 h-40 absolute  bottom-0 opacity-20 right-0 -mb-16 -mr-16  bg-gray-400 rounded-full "></div>

      </div>

      {/* Login side */}

      <div className='w-[90%] flex  flex-col items-center border-2 rounded-xl lg:rounded-l-none lg:border-l-0 lg:pt-4'>
        <div className="text-center ">
          <h1 className="text-teal-500 text-3xl font-semibold">Create Account</h1>
          <small className="text-red-500">*use your active number to conecting with you</small>
        </div>
        <form className="grid gap-4  p-4 grid-cols-2" action="" method="post">

          <Input labelText="first name" lien="fname" />
          <Input labelText="last name" lien="lname" />
          <Input labelText="email" lien="email" />
          <Input labelText="phone number" lien="phone" />
          <div className="h-38 rounded-xl ">
            <label className="flex flex-col text-sm " htmlFor="job">Job</label>

            <div className="border-2 rounded-lg border-t-0 ">
              <div className="h-10 relative px-2 rounded-lg border-2  border-x-0  bg-transparent">
                <small className="text-[8px] text-gray-500 font-bold absolute">Selected Job</small>
                <div className="flex w-46   ">

                  {professions.map((item, index) => (
                    <small key={index} className="border flex cursor-pointer mx-1 mt-4 px-2 bg-slate-300 text-[10px] rounded-full">
                      {item}
                      <IoCloseSharp onClick={() => deleteProfession(index)} className="mt-1 ml-1  text-teal-500" /></small>

                  ))}
                </div>
              </div>
              <div className="scrollbar overflow-auto scrollbar-track-slate-50 pl-6 h-40 text-teal-500  rounded-lg  bg-transparent flex flex-col "  >
                {data.map((item, index) => {
                  return <label key={index} onClick={() => { addProfessions(item.name) }} htmlFor={item.name} className="flex items-center">
                    <input value={item.name} type="checkbox" id={item.name} className=" mr-2" />
                    <span className="text-sm">{item.name}</span>
                  </label>
                })}
              </div>

            </div>
          </div>
          <div>
            <Input labelText="Password" lien="pass" />
            <Input labelText="confirm password" lien="confPass" />
          </div>
        </form>
        <div className="my-4">
          <button type="submit" className="px-16 transition-all ease-in-out py-4 duration-300 bg-teal-600 text-white font-semibold text-xl hover:bg-[#414F5F] hover:text-white   rounded-2xl ">Sign Up</button>
        </div>
      </div>


    </div>

  )
}

export default Signup