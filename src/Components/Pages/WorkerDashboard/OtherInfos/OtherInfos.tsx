import Doughnut from "./Doughnut";
import { MdOutlineGroupAdd } from "react-icons/md";

const OtherInfos = () => {
    return (

        <div className='lg:px-10 text-center w-full md:ml-10'>
            <div className='w-full py-5 rounded-2xl bg-red-300 text-sm lg:text-xl text-center text-red-700 font-semibold'>Complete You Profile Informations To Get Clients</div>

            {/* Rates */}
            <div className='p-6 flex items-center justify-center  text-teal500 '>
                <div className=" flex flex-col justify-center items-center">
                    <img className="lg:w-16 w-12 ml-2" src="icons/starsRate.png" />
                    <div className=" relative flex justify-center items-center ">
                        <Doughnut />
                        <div className="absolute ">91.5</div>
                    </div>
                    <div  >47 person rated you</div>
                </div>
            </div>

            {/* Your Works */}
            <div>
                <div className="flex justify-between  text-teal500 text-2xl font-semibold  pb-2">
                    <div className="flex text-sm md-text-md lg:text-lg md:text-2xl items-center">
                        <img className=" lg:w-16 md:w-12 w-10" src="icons/post.png" />
                        Your Works
                    </div>
                    <button><img className="lg:w-12 w-8 md:w-10 mr-4  object-cover border-2 rounded-md" src="icons/addPost.png" /></button>
                </div>
                <div className="w-full flex  flex-wrap">
                    <div className="w-32 md:w-48 m-1 rounded"><img className="rounded-xl object-cover h-26 md:h-40  " src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                    <div className="md:w-48 w-32 m-1 rounded"><img className="rounded-xl object-cover h-26  md:h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                    <div className="md:w-44 w-32 m-1 relative bg-black rounded-xl">
                        <img className="rounded-xl object-cover w-full opacity-50 h-26 md:h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="img" />
                        <div className="absolute text-white top-12 right-8 md:text-xl lg:-mt-24 lg:ml-12 ">+25 Posts</div>

                    </div>


                </div>
            </div>

            {/* Groups */}
            <div className="flex justify-between mt-10 text-teal-500 font-semibold  pt-4">
                <div className="flex items-center">
                    <img className="w-12 lg:w-14  " src="icons/group.png" />
                    <div className=" lg:text-xl">Groups</div>
                </div>
                <MdOutlineGroupAdd className="lg:text-4xl  text-2xl rounded-md w-14" />
                {/* <button><img  className="text-4xl object-cover  w-20 border-2 h-10 rounded-xl" src="icons/addGroup.png"/></button> */}
            </div>
            <div className="flex w-full mt-4">
                <button className="w-1/2 relative rounded">
                    <img className="rounded-xl w-10/12 object-cover  h-40" src="public/imgUsed/tubes.jpg" alt="" />
                    <div className="absolute w-10/12 rounded-xl h-40  bg-opacity-70  -mt-40 bg-black text-white flex justify-center items-center md:text-2xl">Mejme3 Lplumyen</div>
                </button>

                <button className="w-1/2 rounded relative">
                    <img className="rounded-xl w-10/12 h-40 object-cover" src="public/imgUsed/tubes.jpg" alt="" />
                    <div className="absolute w-10/12 rounded-xl h-40  bg-opacity-70  -mt-40 bg-black text-white flex justify-center items-center text-lg  md:text-3xl">+3 Groups</div>
                </button>
            </div>

        </div>
    )
}

export default OtherInfos