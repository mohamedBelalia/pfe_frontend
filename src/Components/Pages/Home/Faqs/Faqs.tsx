import { useState } from "react";
import {faQuestions} from "../../../../assets/jsonUsed/Faqs.json"
import Question from "./Question";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";


const Faqs = () => {
    // The Slice For Change The Language
    const isArabicSelected : boolean = useSelector((state:RootState)=> state.selectedLanguageSlice.isArabicSelected)

    const [clickedId , setClickedId] = useState<string>("non")
    
  return (
    <div className="md:w-[80%] w-[95%] mx-auto mt-24 pt-3">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#349292]">
            {isArabicSelected ? "الأسئلة الشائعة" : "Les Questions Fréquentes"}
        </h1>

        <div className="mt-11 flex flex-col gap-5"  dir={`${!isArabicSelected ? "ltr" : "rtl"}`}>
            {
                faQuestions.map((faq,_)=>(
                    <Question key={faq.id} setClick={setClickedId} id={faq.id} question={
                        isArabicSelected ? faq.question_AR : faq.question_FR
                    } answer={
                        isArabicSelected ? faq.answer_AR : faq.answer_FR
                    } clickedId={clickedId} />
                ))
            }
        </div>

    </div>
  )
}

export default Faqs