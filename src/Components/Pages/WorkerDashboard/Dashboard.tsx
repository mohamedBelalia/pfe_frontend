import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import PaginationPage from "./OtherInfos/PaginationPage";
import Evaluation from "./OtherInfos/Evaluation";
import AllPosts from "./AllPosts/AllPosts";

const Dashboard = () => {

const isArabic =  false;

if(!isArabic)
return (
     <div className="container m-auto ">
       <div className=' md:flex justify-between flex my-10 mx-auto'>
         <div className="" >
            <div className='w-full mb-2 md:hidden px-2 sm:w-[70%] m-auto py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {"Complétez votre informations pour obtenir des clients"}
            </div>
           <Card />
           <ComplateAcount />
         </div>
         <div className="flex mx-10 flex-col">
         <PaginationPage />
         <Evaluation workerId={"3"} />
         </div>

       </div>
       <AllPosts />
       {/* <Comments /> */}

     </div>
    )
    
}

export default Dashboard
