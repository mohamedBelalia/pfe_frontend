import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import OtherInfos from "./OtherInfos/OtherInfos";
import AllPosts from "./AllPosts/AllPosts";
import Comments from "./Comments/Comments";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import Navbar from "../../Common/Navbar/Navbar";
const Dashboard = () => {

// The Slice For Change The Language
const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)


return (
     <>
      <div className="border md:mb-28">
      <Navbar/>
      </div>
      <div className="bg-gray-50">

      <div className={`md:px-24 px-2 md:flex my-10 mx-auto ${isArabicSelected && "flex-row-reverse"}`}>
        <div className="md:w-2/5" >
          <Card />
          <ComplateAcount />
        </div>
        <OtherInfos />
      </div>
      <AllPosts />
      <Comments />

      </div>
     </>
)
   
}

export default Dashboard
