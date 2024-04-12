
interface cityNameTypes {
    cityName : string ,
}

const CityName = ({cityName}:cityNameTypes) => {
  return (
    <div className="flex-none test w-[200px] md:h-[60px] h-[45px] px-2 py-3 md:rounded-2xl rounded-xl 
        border border-[#414E5F] flex justify-center items-center text-xl font-semibold text-[#414E5F]">
        {cityName}
    </div>
  )
}

export default CityName