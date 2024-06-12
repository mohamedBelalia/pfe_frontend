import React, { useState, useEffect } from 'react';
import OtherInfos from './OtherInfos.tsx'; // Adjust the import path according to your project structure
import Progress from './Progress.tsx';
import Api from '../../../../api/Api.ts';

interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}
interface Ouvrier {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    dateNaissance: string;
    phone: string;
    imgProfile: string;
    motDePasse: string;
    ville: string;
    description_ouvrier: string;
    badgeId: string;
}


const PaginationPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [data, setData] = useState<Ouvrier[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const isArabic = true;

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Ouvrier[]>("workers");
                setData(response.data);

            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchWorker();
    }, []);


    useEffect(() => {
        setTotalPages(Math.ceil(data.length / 3));
        setCurrentPage(1); // Reset to first page when items per page changes
    }, [data]);

    
    // Slice the data array to get only the items for the current page
    const paginatedData = data.slice((currentPage - 1) * 3, currentPage *3);

    return (
        <div className="ml-4 relative  mx-auto ">




            {/* Complete Your Profile Informations To Get Clients */}
            <div className='w-full hidden md:block  py-5 md:mt-0 rounded-md bg-red-300 sm:md tab:text-lg text-center text-red-700 font-semibold'>
                {isArabic ? "أكمل معلومات ملفك الشخصي للحصول على عملاء" : "Complete Your Profile Informations To Get Clients"}
            </div>

            <Progress />

            {/* Rates */}
            <div className='flex items-center justify-center text-teal500'>
                <div className="flex flex-col justify-center items-center">
                    <img className="lg:w-16 w-12 ml-2" src="icons/starsRate.png" alt="Rating" />
                    <div className="relative flex justify-center items-center"></div>

                    {isArabic ? <div className="flex font-semibold flex-row">
                        <span>شخص قاموا بتقييمك</span><span>47</span></div>
                        : <div>47 people rated you</div>}
                </div>
            </div>

            <div className="my-4 justify-between flex ">
                {paginatedData.map((item) => (

                    <div className="  w-[32%]   aspect-1  rounded">
                        <img className="rounded-xl w-full object-cover  h-full  " src="./imgUsed/00.jpg" alt="img" />
                    </div>
                    

                ))}
            </div>
            <OtherInfos
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default PaginationPage;
