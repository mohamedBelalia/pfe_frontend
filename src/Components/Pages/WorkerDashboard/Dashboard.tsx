import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import OtherInfos from "./OtherInfos/OtherInfos";
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
     <div className="bg-gray-50">
       <div className='md:px-24  px-2  md:flex  my-10 mx-auto'>
         <div className="md:w-2/5" >
            <div className='w-full mb-2 md:hidden px-2 sm:w-[70%] m-auto py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {"Complétez votre informations pour obtenir des clients"}
            </div>
           <Card />
           <ComplateAcount />
         </div>
         <OtherInfos />
       </div>
       {/* <AllPosts /> */}
       {/* <Comments /> */}

     </div>

     </div>
     </div>
     </>
    )   
}

export default Dashboard
