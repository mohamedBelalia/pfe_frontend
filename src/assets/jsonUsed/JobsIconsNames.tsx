import { FaHammer , FaTruck } from "react-icons/fa";
import { GiLargePaintBrush , GiConcreteBag } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdPlumbing } from "react-icons/md";

export const jobs = [
    {
        name: "Builder",
        id : "1",
        Icon : <GiConcreteBag/>
      },
      {
        name: "Carpenter",
        id : "2",
        Icon : <FaHammer/>
      },
      {
        name: "Dyer",
        id : "3",
        Icon : <GiLargePaintBrush/>
      },
      {
        name: "Plumber",
        id : "4",
        Icon : <MdPlumbing/>
      },
      {
        name: "Transporter",
        id : "5",
        Icon : <FaTruck/>
      }
      ,
      {
        name: "Trending",
        id : "6",
        Icon : <FaArrowTrendUp/>
      }
]