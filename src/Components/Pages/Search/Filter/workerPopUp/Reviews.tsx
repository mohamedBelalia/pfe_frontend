import { FaStar } from "react-icons/fa";

type ReviewsProps = {
    idWorker : string
}

const Reviews = ({idWorker}:ReviewsProps) => {
  return (
    <div className="flex flex-col gap-4">
        <ReviewUi/>
        <ReviewUi/>
        <ReviewUi/>
        <ReviewUi/>
    </div>
  )
}

export default Reviews

const ReviewUi = () => {

    return (
        <div className="w-[80%] mx-auto flex flex-col gap-2 px-5 py-4 rounded-md border-2 border-teal500">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://astonrx.com/cdn/shop/articles/72d43020875e58e0cb92cd6ac4568052.jpg?v=1695190657" alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-gray-700">Hassan Nouri</h1>
                        <p className="text-xs font-bold text-gray-500">24/07/2023</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-yellow-500"/>
                    <FaStar className="text-xl text-gray-500"/>
                </div>
            </div>
            
            <div>
                <p>
                Khedma n9aaaya alm3elm ahmed lah i3tik se7a , 
                rak nsiti wa7ed lmtir9a ta trje3 liha
                </p>
            </div>

        </div>
    )

}