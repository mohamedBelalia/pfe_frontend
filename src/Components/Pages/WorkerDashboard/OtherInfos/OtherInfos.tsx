
const OtherInfos = () => {
  return (
    
    <div className='px-28 md:px-10 text-center w-full md:ml-10'>
        <div className='py-5 rounded-2xl bg-red-300 text-xl text-center text-red-700 font-semibold'>Complete You Profile Informations To Get Clients</div>
    
        {/* Rates */}
        <div className='rates p-6 flex items-center justify-center  text-teal500 '>
           <div>
                <img className="text-4xl w-16 ml-2" src="icons/starsRate.png"/>
                <div className="p-6 rounded-full border-4 w-20  border-teal500 flex items-center justify-center ">9.1/10</div>
                <div className="-ml-5" >47 person rated you</div>
           </div>
        </div>
    
        {/* Your Works */}
        <div>
            <div className="flex justify-between  text-teal500 text-2xl font-semibold  pb-2">
                <div className="flex text-xl md:text-2xl items-center">
                    <img className=" w-16 " src="icons/post.png" />
                    Your Works
                </div>
                <button><img className="text-4xl mr-4 w-20 px-4 object-cover border-2 rounded-xl" src="icons/addPost.png" /></button>
            </div>
            <div className="w-full flex  flex-wrap">
                <div className="w-32 md:w-48 m-1 rounded"><img className="rounded-xl object-cover h-26 md:h-40  " src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                <div className="md:w-48 w-32 m-1 rounded"><img className="rounded-xl object-cover h-26  md:h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                <div className="md:w-44 w-32 m-1 relative bg-black rounded-xl">
                    <img className="rounded-xl object-cover w-full opacity-50 h-26 md:h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="img" />
                    <div className="absolute text-white -mt-24 ml-12 ">+25 Posts</div>

                </div>
                
                
            </div>
        </div>

        {/* Groups */}
        <div className="flex justify-between mt-10 text-teal-500 font-semibold  pt-4">
            <div className="flex items-center">
                <img className="text-4xl w-14  " src="icons/group.png"/>
                <div className=" md:text-2xl text-xl">Groups</div>
            </div>
            <button><img  className="text-4xl object-cover mr-20 w-20 border-2 h-10 rounded-xl" src="icons/addGroup.png"/></button>
        </div>
        <div className="flex justify-between mt-2">
            <button className="w-2/4 relative rounded">
                <img className="rounded-xl w-10/12 object-cover  h-40" src="public/imgUsed/tubes.jpg" alt="" />
                <div className="absolute w-10/12 rounded-xl h-40  bg-opacity-70 z-10  -mt-40 bg-black text-white flex justify-center items-center md:text-2xl text-xl">Mejme3 Lplumyen</div>
            </button>
           
            <button className="w-2/4 rounded relative">
                <img className="rounded-xl w-10/12 h-40 object-cover" src="public/imgUsed/tubes.jpg" alt="" />
                <div className="absolute w-10/12 rounded-xl h-40  bg-opacity-70  -mt-40 bg-black text-white flex justify-center items-center text-xl  md:text-3xl">+3 Groups</div>
            </button>
        </div>
         
    </div>
  )
}

export default OtherInfos