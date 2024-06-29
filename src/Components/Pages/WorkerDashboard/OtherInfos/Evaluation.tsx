import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import RatingRangesOf from './RatingRangesOf';

// Step 1: Define the type
type ReviewType = "respect_delais" | "quality_travail" | "prix_qualite";

type EvaluationProps = {
    workerId: string;
}

const Evaluation = ({ workerId }: EvaluationProps) => {
    const [currentPage, setCurrentPage] = useState(0);
    const isArabic = false; // Assume this value might be derived from some context or props

    // Step 2: Use the type for the pages array
    const pages: { title_AR: string, title_FR: string, ratingOf: ReviewType }[] = [
        {
            title_AR: "احترام الوقت",
            title_FR: "Le Respect des Délais",
            ratingOf: "respect_delais"
        },
        {
            title_AR: "جودة العمل",
            title_FR: "Qualité du Travail",
            ratingOf: "quality_travail"
        },
        {
            title_AR: "جودة السعر",
            title_FR: "Prix Qualité",
            ratingOf: "prix_qualite"
        }
    ];

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    };

    const handlePrevious = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
    };

    return (
        <div className="h-full mx-2 mt-8 flex flex-col gap-7">
            <div dir={isArabic ? "rtl" : "ltr"}>
                <p className="font-bold text-lg text-blue-600 mb-1">
                    {isArabic ? pages[currentPage].title_AR : pages[currentPage].title_FR}
                </p>
                <RatingRangesOf workerId={workerId} ratingOf={pages[currentPage].ratingOf} />
            </div>

            <div className="flex m-auto">
                <button onClick={handlePrevious}>
                    <GrFormPrevious className="bg-blue-700 text-white rounded w-12 text-3xl mr-4" />
                </button>
                <button onClick={handleNext}>
                    <GrFormNext className="bg-blue-700 text-white rounded w-12 text-3xl ml-4" />
                </button>
            </div>
        </div>
    );
};

export default Evaluation;
