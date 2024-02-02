   import ComplateAcount from "./ComplateAcount/ComplateAcount"
   import Card from "./Card/Card";
   import OtherInfos from "./OtherInfos/OtherInfos";
 import AllPosts from "./AllPosts/AllPosts";
import Comments from "./Comments/Comments"
const Dashboard = () => {
    
    
  return (
    <div>
        <div className='px-16 flex flex-col items-center md:flex-row  my-10 mx-auto bg-gray-50 '>
          <div className="w-2/5" >
              <Card />
              <ComplateAcount/>
          </div>
          <OtherInfos />
      </div>   
         <AllPosts />  
       <Comments />
      
    </div>
  )
}

export default Dashboard
