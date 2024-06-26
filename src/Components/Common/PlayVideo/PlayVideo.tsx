import { ImCancelCircle } from "react-icons/im";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { setIsVideoClicked } from "../../Store/Slices/VideoPlaySlice";

interface IplayVideo {
    videoType : "worker" | "client"
}

const PlayVideo = ({videoType}:IplayVideo) => {

    const dispatch = useDispatch<AppDispatch>()

    let videoSrc = "./videos/" ;

    if(videoType == "client"){
        videoSrc += "explianTest.mp4"
    }
    else{
        videoSrc += "explianTest.mp4"
    }

    const handleCancelBtn = () => {
        dispatch(setIsVideoClicked({videoClicked : false}))
    }

  return (
    <div className="w-full h-screen bg-[#000000c6] fixed top-0 z-50 flex justify-center items-center">
        <div className="relative w-[75%] h-[80%]">
            <div 
                onClick={handleCancelBtn}
                className="absolute -top-14 -right-14 m-2 bg-white p-2 z-50 cursor-pointer rounded-lg">
                <ImCancelCircle className="text-[35px] text-red-600 "/>
            </div>
            <div className="w-full h-full">
                <video className="w-full h-full object-cover border-2 border-white rounded-md" controls autoPlay muted>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo