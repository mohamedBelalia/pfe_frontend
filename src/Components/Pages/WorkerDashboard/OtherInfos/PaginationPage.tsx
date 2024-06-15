import React, { useState, useEffect } from 'react';
import OtherInfos from './OtherInfos.tsx'; // Adjust the import path according to your project structure
import Progress from './Progress.tsx';
import Api from '../../../../api/Api.ts';


// interface Ouvrier {
//     idOuvrier: string;
//     nomOuvrier: string;
//     prenomOuvrier: string;
//     dateNaissance: string;
//     phone: string;
//     imgProfile: string;
//     motDePasse: string;
//     ville: string;
//     description_ouvrier: string;
//     badgeId: string;
// }
interface Projet {
    idProjet: string;
    titre: string;
    description_projet: string;
    imageProjet: string;
    idOuvrier: string;
}



const PaginationPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const [shortDescription, setShortDescription] = useState<string>();
    const [data, setData] = useState<Projet[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const isArabic = true;

    useEffect(() => {
        const fetchWorker = async () => {
            try {
                const response = await Api.get<Projet[]>("projects?workerId=15");
                setData(response.data);

            } catch (error) {
                console.error("Error fetching professions:", error);
            }
        };

        fetchWorker();
    }, []);


    useEffect(() => {
        setTotalPages(Math.ceil(data.length / 3));
        setCurrentPage(1);
    }, [data]);



    // useEffect(() => {
    //     setShortDescription(data[0]?.description_ouvrier.substring(0, 25));

    // }, [data]); // Empty dependency array to run this effect only once


    // Slice the data array to get only the items for the current page
    const paginatedData = data.slice((currentPage - 1) * 3, currentPage * 3);

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

            <div className="my-4  justify-between flex ">
                {paginatedData.map((item) => (

                    <div  dir={`${isArabic ? "rtl" : "ltr"}`} key={item.idProjet} className={`border w-[40%] shadow-lg mx-2 rounded-xl  aspect-1 `}>
                        <img className="rounded-t-xl w-full aspect-1 object-cover    " src={`./imgUsed/${item.imageProjet}`} alt="img" />
                        <h1 className='text-center p-1 font-semibold'>
                            {item.description_projet.length > 20
                                ? `${item.description_projet.substring(0, 20)}...`
                                : item.description_projet}
                        </h1>
                        <p className='p-1 text-center flex justify-center'>
                            {item.description_projet.length > 20
                                ? `${item.description_projet.substring(0, 20)}...`
                                : item.description_projet}
                        </p>

                        <div className='my-2  w-full flex justify-center'><button className=' py-1 hover:bg-slate-600 rounded-md bg-teal-700 text-white px-4'>Aficher les detaille</button></div>
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
