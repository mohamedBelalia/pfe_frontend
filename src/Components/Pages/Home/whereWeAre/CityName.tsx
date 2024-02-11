
interface cityNameTypes {
    cityName : string ,
}

const CityName = ({cityName}:cityNameTypes) => {
  return (
    <div className="flex-none test w-[200px] h-[60px] px-2 py-3 rounded-2xl 
        border border-[#414E5F] flex justify-center items-center text-xl font-semibold text-[#414E5F]">
        {cityName}
    </div>
  )
}

export default CityName