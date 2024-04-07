import { useSelector } from "react-redux"
import { RootState } from "../../Store/store"
import { IRatingCriteriasType } from "../../Store/Slices/RateingProcess"

const ValideTheRate = () => {

    const criteriasLevels : IRatingCriteriasType = useSelector((state:RootState)=> state.ratingProcessSlice.ratingCriterias)

  return (
    <div className="">
        <h1 className="text-center text-2xl font-semibold">Merci Pour Votre Avis</h1>
        <table className="w-full mt-5">
            <tr className="border border-black h-[50px]">
                <th className="text-start px-5 text-teal-800">Respect des délais</th>
                <td className="text-blue-600 font-semibold">{criteriasLevels.delais}</td>
            </tr>

            <tr className="border border-black h-[50px]">
                <th className="text-start px-5 text-teal-800">Qualité du travail</th>
                <td className="text-blue-600 font-semibold">{criteriasLevels.maitrise}</td>
            </tr>

            <tr className="border border-black h-[50px]">
                <th className="text-start px-5 text-teal-800">Prix Avec la qualité du travail</th>
                <td className="text-blue-600 font-semibold">{criteriasLevels.prix}</td>
            </tr>

        </table>
    </div>
  )
}

export default ValideTheRate
