import { FaHammer , FaTruck } from "react-icons/fa";
import { GiLargePaintBrush , GiConcreteBag } from "react-icons/gi";
import { PiTreePalmFill } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";

export const jobs = [
    {
        name: "Builder",
        id : "1",
        Icon : <FaHammer/>
      },
      {
        name: "Carpenter",
        id : "2",
        Icon : <FaArrowTrendUp/>
      },
      {
        name: "Dyer",
        id : "3",
        Icon : <PiTreePalmFill/>
      },
      {
        name: "Plumber",
        id : "4",
        Icon : <GiLargePaintBrush/>
      },
      {
        name: "Transporter",
        id : "5",
        Icon : <GiConcreteBag/>
      }
      ,
      {
        name: "Trending",
        id : "6",
        Icon : <FaTruck/>
      }
]