import ComplateAcount from "./ComplateAcount/ComplateAcount"
import Card from "./Card/Card";
import OtherInfos from "../OtherInfos/OtherInfos";
const Dashboard = () => {
    
    
  return (
    <div className='container flex justify-start my-10 mx-auto bg-gray-50 '>
        <div className="w-2/5" >
            <Card />
            <ComplateAcount/>
        </div>
        <OtherInfos />
    
    </div>
  )
}

export default Dashboard