import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import OtherInfos from "./OtherInfos/OtherInfos";
import AllPosts from "./AllPosts/AllPosts";
import Comments from "./Comments/Comments";
import { useState } from "react";
const Dashboard = () => {

const [isArabic,setIsArabic] = useState(true);

if(!isArabic)
return (
     <div className="bg-gray-50">
       <div className='md:px-24  px-2  md:flex  my-10 mx-auto'>
         <div className="md:w-2/5" >
           <Card />
           <ComplateAcount />
         </div>
         <OtherInfos />
       </div>
       <AllPosts />
       <Comments />

     </div>
    )
    else{

      return(
        <div className="bg-gray-50">
      <div className='md:px-24 px-2  md:flex flex-row-reverse  my-10 mx-auto'>
        <div className="md:w-2/5" >
          <Card />
          <ComplateAcount />
        </div>
        <OtherInfos />
      </div>
      <AllPosts />
      <Comments />

    </div>
      )
    }
}

export default Dashboard
