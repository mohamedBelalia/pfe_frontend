import { FaHammer , FaTruck } from "react-icons/fa";
import { GiLargePaintBrush , GiConcreteBag } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdPlumbing } from "react-icons/md";

export const jobs = [
    {
        nameEn: "Builder",
        nameAr: "بنّاء",
        id : "1",
        Icon : <GiConcreteBag/>
      },
      {
        nameEn: "Carpenter",
        nameAr: "نجار",
        id : "2",
        Icon : <FaHammer/>
      },
      {
        nameEn: "Dyer",
        nameAr: "صباغ",
        id : "3",
        Icon : <GiLargePaintBrush/>
      },
      {
        nameEn: "Plumber",
        nameAr: "سباك",
        id : "4",
        Icon : <MdPlumbing/>
      },
      {
        nameEn: "Transporter",
        nameAr: "ناقل",
        id : "5",
        Icon : <FaTruck/>
      }
      ,
      {
        nameEn: "Trending",
        nameAr: "الاتجاه",
        id : "6",
        Icon : <FaArrowTrendUp/>
      }
]