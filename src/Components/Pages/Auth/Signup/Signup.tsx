
type userData = {
  firstName: string
  lastName: string
  phone: string
  password: string
  confirmPassword: string
}

type UserFormProps = userData & {

  updateFields: (fields: Partial<userData>) => void
}

const Signup = ({ firstName, lastName, phone, password, confirmPassword, updateFields }: UserFormProps) => {

  return (
    <div className=' md:flex md:flex-col mt-10 md:mt-0 md:items-center  rounded-xl'>
      <div className="text-center ">
        <h1 className="text-teal-500 text-3xl font-[50px]">Personal Information</h1>
        <small className="text-red-500">use your active number to conecting with you*</small>
      </div>
      <div className="w-full   flex flex-col ">
        <div className="flex py-2 w-full md:flex-row flex-col items-center   justify-around">
          <div className="flex w-[97%] flex-col">
            <label htmlFor="fname" className=" text-sm color text-teal500 font-semibold" >First Name</label>
            <input onChange={e => updateFields({ firstName: e.target.value })} autoFocus value={firstName} required type="text" className="h-8 md:h-10 w-full md:w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="fname" />
          </div>

          <div className="flex w-[97%] flex-col">
            <label htmlFor="lname" className=" text-sm text-teal500 font-semibold " >Last Name</label>
            <input required type="text" onChange={e => updateFields({ lastName: e.target.value })} value={lastName} className="h-8 md:h-10 w-full md:w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="lname" />
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center w-full justify-arround  justify-around">
          <div className="flex w-[97%] flex-col">
            <label htmlFor="phone" className=" text-sm text-teal500 font-semibold " >Phone Number</label>
            <input required type="text" onChange={e => updateFields({ phone: e.target.value })} value={phone} className="h-8 md:h-10 w-full md:w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="phone" />
          </div>

          <div className="flex w-[97%] flex-col">
            <label htmlFor="password" className=" text-sm text-teal500 font-semibold " >Password</label>
            <input required type="password" onChange={e => updateFields({ password: e.target.value })} value={password} className="h-8 md:h-10 w-full md:w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="password" />
          </div>
        </div>

        <div className=" flexmd:flex-row flex-col items-center w-full justify-arround  justify-around ">
        <div className="flex  w-[97%]  py-2 m-auto md:m-0 flex-col">
          <label htmlFor="confpassword" className=" text-sm md:text-md flex justify-start text-teal500 font-semibold" >Confirm Password</label>
          <input required type="password" onChange={e => updateFields({ confirmPassword: e.target.value })} value={confirmPassword} className="h-8 md:h-10  w-full md:w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id="confpassword" />
        </div>
          <div className="w-[400px]"></div>
        </div>
      </div>
    </div>

  )
}

export default Signup