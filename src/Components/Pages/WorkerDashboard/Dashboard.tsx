import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import PaginationPage from "./OtherInfos/PaginationPage";
import Evaluation from "./OtherInfos/Evaluation";
import AllPosts from "./AllPosts/AllPosts";
import Progress from "./OtherInfos/Progress";

const Dashboard = () => {

const isArabic =  false;

if(!isArabic)
return (
     <div className="md:w-[80%]  lg:w-[1000px]  w-[95%] m-auto ">
       <div className=' md:flex  flex md:flex-row flex-col my-10 mx-auto'>
         <div className=" " >
            <div className='w-full mb-2 md:hidden px-2 sm:w-[70%] m-auto py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {"Complétez votre informations pour obtenir des clients"}
            </div>
            <p className="md:hidden"><Progress num={4} /></p>
           <Card />
           <ComplateAcount />
         </div>
         <div className="flex  md:w-[800px] md:mx-10 flex-col">
         <PaginationPage />
         <Evaluation workerId={"1"} />
         </div>

       </div>
       <AllPosts />
       {/* <Comments /> */}

     </div>
    )
    
}

export default Dashboard
