import { FaHammer } from "react-icons/fa";
import { GiLargePaintBrush , GiConcreteBag , GiFurnace} from "react-icons/gi";
import { MdPlumbing , MdElectricBolt } from "react-icons/md";
import { CgSmartHomeBoiler } from "react-icons/cg";


export const jobs = [
    {
        nameEn: "Constructeur",
        nameAr: "بنّاء",
        id : "1",
        Icon : <GiConcreteBag/>
      },
      {
        nameEn: "Charpentier",
        nameAr: "نجار",
        id : "2",
        Icon : <FaHammer/>
      },
      {
        nameEn: "Peintre",
        nameAr: "صباغ",
        id : "3",
        Icon : <GiLargePaintBrush/>
      },
      {
        nameEn: "Plombier",
        nameAr: "سباك",
        id : "4",
        Icon : <MdPlumbing/>
      },
      {
        nameEn: "Électricien",
        nameAr: "كهربائي",
        id : "5",
        Icon : <MdElectricBolt/>
      }
      ,
      {
        nameEn: "Chauffage",
        nameAr: "التدفئة",
        id : "6",
        Icon : <CgSmartHomeBoiler/>
      }
      
]
/*
Carpenter



Chauffage
 fr
Plâtrier FR

import { CgSmartHomeBoiler } from "react-icons/cg";
import {  } from "react-icons/gi";
*/