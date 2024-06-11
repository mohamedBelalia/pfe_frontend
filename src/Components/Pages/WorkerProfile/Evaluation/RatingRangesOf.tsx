import { useEffect, useState } from "react";
import Api from "../../../../api/Api";

type RatingRangesOfProps = {
    ratingOf: "respect_delais" | "quality_travail" | "prix_qualite"
    workerId: string
}

const RatingRangesOf = ({ ratingOf, workerId }: RatingRangesOfProps) => {

    const [ratingRanges, setRatingRanges] = useState<{
        count_Bien: number;
        count_Excellent: number;
        count_Tres_Bien: number;
    } | null>(null);

    const [totalRate, setTotalRate] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const widthOf = (count: number, sum: number) => {
        return (count * 100) / sum;
    };

    useEffect(() => {
        const fetchRating = async () => {
            try {
                const response = await Api.get(`/commentaire?rateOf=${ratingOf}&workerId=${workerId}`);
                setRatingRanges(response.data[0]);
            } catch (error) {
                console.error("Error fetching rating:", error);
            } finally {
                setIsLoaded(true);
            }
        };

        fetchRating();
    }, [ratingOf, workerId]);

    useEffect(() => {
        if (ratingRanges) {
            setTotalRate(+ratingRanges.count_Bien + +ratingRanges.count_Excellent + +ratingRanges.count_Tres_Bien);
        }
    }, [ratingRanges]);

    // TODO Handling a nice UI for this cases
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!ratingRanges) {
        return <div>No data available</div>;
    }

    return (
        <div className="flex flex-col gap-5">
            <table className="h-[160px] mx-12">
                <tbody>
                    <tr>
                        <td className="font-semibold text-[18px] w-[12%]">Bien</td>
                        <td className="w-full">
                            <div className="h-[35px] w-[430px] relative">
                                <div style={{ width: `${widthOf(ratingRanges.count_Bien, totalRate)}%` }} className="h-full flex justify-center items-center font-semibold text-[#7c4a27] bg-[#e8975d8b] rounded-md">
                                    {widthOf(ratingRanges.count_Bien, totalRate)} %
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#E8985D] rounded-md"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-[18px] w-[12%]">Tres Bien</td>
                        <td className="w-full">
                            <div className="h-[35px] w-[430px] relative">
                                <div style={{ width: `${widthOf(ratingRanges.count_Tres_Bien, totalRate)}%` }} className="h-full flex justify-center items-center font-semibold text-[#214866] bg-[#199AFF8b] rounded-md">
                                    {widthOf(ratingRanges.count_Tres_Bien, totalRate)} %
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#199AFF] rounded-md"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-semibold text-[18px] w-[12%]">Excellent</td>
                        <td className="w-full">
                            <div className="h-[35px] w-[430px] relative">
                                <div style={{ width: `${widthOf(ratingRanges.count_Excellent, totalRate)}%` }} className="h-full flex justify-center items-center font-semibold text-[#195656] bg-[#3492928b] rounded-md">
                                    {widthOf(ratingRanges.count_Excellent, totalRate)} %
                                </div>
                                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#349292] rounded-md"></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RatingRangesOf;
