import React, { useState, useEffect } from 'react';
// import OtherInfos from './OtherInfos.tsx'; // Adjust the import path according to your project structure
import Progress from './Progress.tsx';
import Api from '../../../../api/Api.ts';

interface Ouvrier {
    idOuvrier: string;
    nomOuvrier: string;
    prenomOuvrier: string;
    phone: string;
    imgProfile: string;
    motDePasse: string;
    ville: string;
    description_ouvrier: string;
    badgeId: string;
}

interface Projet {
    idProjet: string;
    titre: string;
    description_projet: string;
    imageProjet: string;
    idOuvrier: string;
}

interface Commentaire {
    commentaire_id: string;
    idOuvrier: string;
    respect_delais: string;
    quality_travail: string;
    prix_qualite: string;
    moyenneEtoiles: string;
}

const PaginationPage: React.FC = () => {
    const [data, setData] = useState<Projet[]>([]);
    const [dataWorker, setDataWorker] = useState<Ouvrier | null>(null);
    const [num, setNum] = useState<number>(0);
    const isArabic = false;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsResponse, workerResponse, commentsResponse] = await Promise.all([
                    Api.get<Projet[]>("projects?workerId=1"),
                    Api.get<Ouvrier>("workers?id=1"),
                    Api.get<Commentaire[]>(`/commentaire?id=15`)
                ]);

                setData(projectsResponse.data);
                setDataWorker(workerResponse.data);
                setNum(commentsResponse.data.length);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const isProfileComplete = dataWorker?.description_ouvrier  && dataWorker?.imgProfile && dataWorker?.ville && dataWorker?.badgeId;
    console.log(data);
    
    return (
        <div className="ml-4 hidden md:block relative w-full mx-auto">
            {!isProfileComplete && (
                <div className='w-full hidden md:block py-5 md:mt-0 rounded-md bg-red-300 text-lg text-center text-red-700 font-semibold'>
                    {isArabic ? "أكمل معلومات ملفك الشخصي للحصول على عملاء" : "Complete Your Profile Informations To Get Clients"}
                </div>
            )}
            <p className='mt-6'></p>
            <Progress num={num} />
        </div>
    );
};

export default PaginationPage;
