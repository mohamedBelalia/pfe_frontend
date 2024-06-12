import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import OtherInfos from "./OtherInfos/OtherInfos";
import PaginationPage from "./OtherInfos/PaginationPage";
// import AllPosts from "./AllPosts/AllPosts";
// import Comments from "./Comments/Comments";
// import { useState } from "react";
const Dashboard = () => {

const isArabic =  false;

if(!isArabic)
return (
     <div className="bg-gray-50">
       <div className='md:px-24  px-2  md:flex  my-10 mx-auto'>
         <div className="md:w-2/5" >
            <div className='w-full mb-2 md:hidden px-2 sm:w-[70%] m-auto py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {"Complétez votre informations pour obtenir des clients"}
            </div>
           <Card />
           <ComplateAcount />
         </div>
         <PaginationPage />
       </div>
       {/* <AllPosts /> */}
       {/* <Comments /> */}

     </div>
    )
    else{

      return(
        <div className="">
      <div className='md:px-24 px-2  md:flex flex-row-reverse  my-10 mx-auto'>
        <div className="md:w-2/5" >
            <div className='w-full md:hidden  mb-2 mx-1  py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {"أكمل معلومات ملفك الشخصي للحصول على عملاء"}
            </div>
          <Card />
          <ComplateAcount />
        </div>
        <PaginationPage />
      </div>
      {/* <AllPosts /> */}
      {/* <Comments /> */}

    </div>
      )
    }
}

export default Dashboard
