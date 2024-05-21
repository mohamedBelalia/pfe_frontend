import { useState } from "react";
import Progress from "./Progress";

const OtherInfos = () => {
    const [isArabic, setIsArabic] = useState(true);

    return (
        <div className='lg:px-10 px-4 w-full md:ml-10'>
            {/* Complete Your Profile Informations To Get Clients */}
            <div className='w-full py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {isArabic?"أكمل معلومات ملفك الشخصي للحصول على عملاء":"Complete Your Profile Informations To Get Clients"}
            </div>

            <Progress />

            {/* Rates */}
            <div className='flex items-center justify-center text-teal500'>
                <div className="flex flex-col justify-center items-center">
                    <img className="lg:w-16 w-12 ml-2" src="icons/starsRate.png" alt="Rating" />
                    <div className="relative flex justify-center items-center"></div>

                    {isArabic ? <div className="flex flex-row">
                        <span>شخص قاموا بتقييمك</span><span>47</span></div>
                        : <div>47 people rated you</div>}
                </div>
            </div>

            {/* Your Works */}
            <div>
                <div className={`flex text-teal500 text-2xl font-semibold pb-2 ${isArabic ? "justify-end" : "justify-start"}`}>
                    <div className={`flex text-sm md:text-md lg:text-lg md:text-2xl items-center ${isArabic ? "flex-row-reverse" : ""}`}>
                        <img className="lg:w-16 md:w-12 w-10" src="icons/post.png" alt="Post" />
                        {!isArabic ? "Your Works" : "أعمالك"}
                    </div>
                </div>
                <div className={`flex flex-wrap ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="md:w-44 md:h-44  w-32 h-32 m-2 rounded">
                        <img className="rounded-xl object-cover h-full w-full" src="public/imgUsed/portrait-man-laughing.jpg" alt="img" />
                    </div>
                    <div className="md:w-44 md:h-44  w-32 h-32 m-2 rounded">
                        <img className="rounded-xl object-cover h-full w-full" src="public/imgUsed/portrait-man-laughing.jpg" alt="img" />
                    </div>
                    <div className="md:w-44 md:h-44  w-32 h-32 m-2 rounded">
                        <img className="rounded-xl object-cover  h-full w-full " src="public/imgUsed/portrait-man-laughing.jpg" alt="img" />
                    </div>
                    <div className="md:w-44 w-32 cursor-pointer m-2 md:h-44 h-32 relative bg-black rounded-xl">
                        <img className="rounded-xl object-cover w-full opacity-50 h-full" src="public/imgUsed/portrait-man-laughing.jpg" alt="img" />
                        <div className="absolute hover:text-2xl hover:text-gray-300 text-white inset-0 m-auto flex items-center justify-center md:text-xl">+25 Posts</div>
                    </div>
              
                </div>
            </div>
        </div>
    );
};

export default OtherInfos;
