   import ComplateAcount from "./ComplateAcount/ComplateAcount"
   import Card from "./Card/Card";
   import OtherInfos from "./OtherInfos/OtherInfos";
 import AllPosts from "./AllPosts/AllPosts";
import Comments from "./Comments/Comments"
const Dashboard = () => {
    
    
  return (
    <div>
        <div className='md:px-24 px-2 items-center md:flex  my-10 mx-auto bg-gray-50 '>
          <div className="md:w-2/5" >
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
