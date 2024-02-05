import { useState } from 'react'
import Slider from "react-slider"


const MIN = 100 
const MAX = 1000

const RangePrice = () => {

    const [rangeValue , setRangeValue] = useState([MIN , MAX])

  return (
    <div className='flex flex-col gap-3'>
        <h1 className="text-xl font-semibold text-[#414E5F]">Price</h1>
        <Slider 
            className="slider" 
            onChange={setRangeValue} 
            value={rangeValue} 
            min={MIN} 
            max={MAX}/>

        <div className='text-center mt-2 font-semibold text-[#349292]'>
            <p>{rangeValue[0]} Dh - {rangeValue[1]} Dh</p>
        </div>
        
    </div>
  )
}

export default RangePrice