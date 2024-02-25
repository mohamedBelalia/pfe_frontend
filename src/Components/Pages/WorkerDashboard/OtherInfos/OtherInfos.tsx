import Progress from "./Progress"

const OtherInfos = () => {
    return (
        <div className='lg:px-10 w-full md:ml-10'>

            {/* Complete You Profile Informations To Get Clients */}
            <div className='w-full py-5 md:-mt-0 rounded-md bg-red-300 text-sm lg:text-xl text-center text-red-700 font-semibold'>Complete You Profile Informations To Get Clients</div>
            
          
        <Progress />
            {/* Rates */}
            <div className='flex items-center justify-center text-teal500 '>
                <div className=" flex flex-col justify-center items-center">
                    <img className="lg:w-16 w-12 ml-2" src="icons/starsRate.png" />
                    <div className=" relative flex justify-center items-center ">

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




        </div>
    )
}

export default OtherInfos

