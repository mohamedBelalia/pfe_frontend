import { useNavigate } from "react-router-dom"


const RegesterBar = () => {

    const navigate = useNavigate()

    // to go to the specific path in addition go to the top of the page
    const goTo = (path : string) => {
        window.scroll(0,0)
        navigate(path)
    }

  return (
    <>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full px-8">
            <button 
                onClick={()=>goTo("/Signup")}
                title="Create an account as a worker" 
                className="p-3 w-full md:w-1/3 bg-teal-300 rounded-md font-medium text-[#414E5F]">Sign up as Tasker</button>
            <button 
                onClick={()=>goTo("/Login")}
                title="Login in your Tasker account" 
                className="p-3 w-full md:w-1/3 bg-teal-300 rounded-md font-medium text-[#414E5F]">Login as Tasker</button>
        </div>

        <p className="cursor-pointer mt-6 text-sm underline">The Best Way to Regester</p>
    </>
  )
}

export default RegesterBar