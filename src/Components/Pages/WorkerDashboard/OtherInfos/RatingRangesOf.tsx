import { useEffect, useState } from "react";
import Api from "../../../../api/Api";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";

type RatingRangesOfProps = {
  ratingOf: "respect_delais" | "quality_travail" | "prix_qualite";
  workerId: string;
};

interface Commentaire {
  commentaire_id: string;
  idOuvrier: string;
  respect_delais: string;
  quality_travail: string;
  prix_qualite: string;
  moyenneEtoiles: string;
}

const RatingRangesOf = ({ workerId, ratingOf }: RatingRangesOfProps) => {
  const [ratingRanges, setRatingRanges] = useState<Commentaire[]>([]);
  const [count_Bien, setCount_Bien] = useState<number>(0);
  const [count_Tres_Bien, setCount_Tres_Bien] = useState<number>(0);
  const [count_Excellent, setCount_Excellent] = useState<number>(0);
  const [totalRate, setTotalRate] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isNoComment , setIsNoComment] = useState<boolean>(true)

  // The Slice For Change The Language
  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  const widthOf = (count: number, sum: number) => {
    return Math.round((count * 100) / sum);
  };

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await Api.get(`/comments?workerId=${workerId}`);
        if(response.data.status == "no_comments"){
          setIsNoComment(true)
        }
        else{
          setIsNoComment(false)
        }
        setRatingRanges(response.data);
      } catch (error) {
        console.error("Error fetching rating:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    fetchRating();
  }, [ratingOf, workerId]);

  useEffect(() => {
    if (ratingRanges.length > 0) {
      const bienCount = ratingRanges.filter((item) => item[ratingOf] === "Bien").length;
      const tresBienCount = ratingRanges.filter((item) => item[ratingOf] === "Tres Bien").length;
      const excellentCount = ratingRanges.filter((item) => item[ratingOf] === "Excellent").length;

      setCount_Bien(bienCount);
      setCount_Tres_Bien(tresBienCount);
      setCount_Excellent(excellentCount);
      setTotalRate(bienCount + tresBienCount + excellentCount);
    }
  }, [ratingRanges, ratingOf]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (ratingRanges.length === 0) {
    return <div>No data available</div>;
  }

  if(isNoComment){
    return <div className="w-full h-[100px] flex justify-center items-center rounded-md border-2 border-teal-600 bg-teal-50 mt-3">
      {
        isArabicSelected
        ? "لم يقم أحد بتقييم هذا الشخص"
        : "Personne n'a évalué cette personne"
      }
      </div>
  }

  return (
    <div dir={isArabicSelected ? "rtl" : "ltr"} className="flex w-full flex-col">
      <table className="h-[160px] w-full md:mx-6">
        <tbody>
          <tr className="w-full">
            <td className="font-semibold flex md:flex-row flex-col mt-3 text-[18px] w-[12%]">
              {isArabicSelected ? "جيد" : "Bien"}
            </td>
            <td className="w-full flex justify-center flex-col">
              <div className="h-[40px] w-full relative">
                <div
                  style={{ width: count_Bien === 0 ? `10%` : `${widthOf(count_Bien, totalRate)}%` }}
                  className={`${
                    count_Bien === 1 ? "text-lg" : ""
                  } ${count_Bien === 0 ? "flex text-md m-auto w-full" : "bg-[#e8975d8b]"} h-full flex justify-center items-center text-md font-semibold text-[#7c4a27] rounded-md`}
                >
                  {widthOf(count_Bien, totalRate)} %
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#E8985D] rounded-md"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-semibold flex md:block mt-3 flex-col text-[18px]">
              {isArabicSelected ? "جيد جدًا" : "Très Bien"}
            </td>
            <td className="w-full flex justify-center flex-col">
              <div className="h-[40px] relative">
                <div
                  style={{ width: count_Tres_Bien === 0 ? `10%` : `${widthOf(count_Tres_Bien, totalRate)}%` }}
                  className={`${
                    count_Tres_Bien === 1 ? "text-[10px] " : "text-sm"
                  } ${count_Tres_Bien === 0 ? "flex text-sm m-auto w-full" : " bg-[#199AFF8b]"} h-full flex justify-center items-center font-semibold text-[#214866] rounded-md`}
                >
                  {widthOf(count_Tres_Bien, totalRate)} %
                </div>
                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#199AFF] rounded-md"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="font-semibold mt-3 flex flex-col text-[18px] w-[12%]">
              {isArabicSelected ? "ممتاز" : "Excellent"}
            </td>
            <td className="w-full flex justify-center flex-col">
              <div className="h-[40px] relative">
                <div
                  style={{ width: count_Excellent === 0 ? `10%` : `${widthOf(count_Excellent, totalRate)}%` }}
                  className={`${
                    count_Excellent === 1 ? "text-[10px]" : ""
                  } ${count_Excellent === 0 ? "flex m-auto w-full" : " text-sm bg-[#47b0b0]"} h-full text-md flex justify-center items-center font-semibold text-[#214866] rounded-md`}
                >
                  {widthOf(count_Excellent, totalRate)} %
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
