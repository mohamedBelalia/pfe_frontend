
const OtherInfos = () => {
  return (
    
    <div className='rightSide text-center w-full ml-10'>
        <div className='py-5 px-10 rounded-2xl bg-red-300 text-xl text-center text-red-700 font-semibold'>Complete You Profile Informations To Get Clients</div>
    
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
                <div className="flex items-center">
                    <img className="text-4xl w-16 " src="icons/post.png" />
                    Your Works
                </div>
                <button><img className="text-4xl mr-4 w-20 px-4 object-cover border-2 rounded-xl" src="icons/addPost.png" /></button>
            </div>
            <div className="flex justify-between">
                <div className="w-1/4  rounded"><img className="rounded-xl object-cover h-40 w-11/12 " src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                <div className="w-1/4 rounded"><img className="rounded-xl object-cover w-11/12 h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                <div className="w-1/4 rounded"><img className="rounded-xl object-cover w-11/12  h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="img" /></div>
                <button className="w-1/4 rounded relative">
                    <img className="rounded-xl object-cover  relative w-11/12 h-40" src="public\imgUsed\portrait-man-laughing.jpg" alt="" />
                    <div className="absolute flex items-center justify-center text-3xl bg-black w-11/12 h-40 -mt-40 bg-opacity-50 rounded-xl text-white">+25 Posts</div>
                </button>
            </div>
        </div>

        {/* Groups */}
        <div className="flex justify-between mt-10 text-teal500 text-2xl font-semibold  pt-4">
            <div className="flex items-center">
                <img className="text-4xl w-14  " src="icons/group.png"/>
                <div className="">Groups</div>
            </div>
            <button><img  className="text-4xl mr-20 w-20 border-2 px-4 rounded-xl" src="icons/addGroup.png"/></button>
        </div>
        <div className="flex justify-between mt-2">
            <button className="w-2/4 relative rounded">
                <img className="rounded-xl w-10/12 object-cover  h-40" src="public/imgUsed/tubes.jpg" alt="" />
                <div className="absolute w-10/12 rounded-xl h-40  bg-opacity-70 z-10 -mt-40 bg-black text-white flex justify-center items-center  text-3xl">Mejme3 Lplumyen</div>
            </button>
           
            <button className="w-2/4 rounded relative">
                <img className="rounded-xl w-10/12 h-40 object-cover" src="public/imgUsed/tubes.jpg" alt="" />
                <div className="absolute w-10/12 rounded-xl h-40  bg-opacity-70  -mt-40 bg-black text-white flex justify-center items-center  text-3xl">+3 Groups</div>
            </button>
        </div>
         
    </div>
  )
}

export default OtherInfos