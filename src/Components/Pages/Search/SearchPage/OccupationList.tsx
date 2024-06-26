import { useSelector } from "react-redux"
import { jobs } from "../../../../assets/jsonUsed/JobsIconsNames"
import { AppDispatch, RootState } from "../../../Store/store"
import { setSelectedJobName } from "../../../Store/Slices/SelectedTask"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const OccupationList = () => {

  // The Slice For Change The Language
  const isArabicSelected: boolean = useSelector((state: RootState) => state.selectedLanguageSlice.isArabicSelected)

  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()

  const clickedOccupation = (idOccupation : string) => {
      window.scrollTo(0,0)
      dispatch(setSelectedJobName({selectedTask : idOccupation}))
      navigate("/search/step_one")
  }

  return (
    <div className="flex flex-wrap gap-10 md:mx-0 mx-6">
      {
        jobs.map((job, _) => (
          <OccupationButton key={job.id} idOccupation={job.id} imgPath={job.imgPath} name={isArabicSelected ? job.nameAr : job.nameEn} setIdOccupation={clickedOccupation} />
        ))
      }
    </div>
  )
}

export default OccupationList


// ############## OccupationButtonProps #################
type OccupationButtonProps = {
  idOccupation : string
  imgPath: string,
  name: string ,
  setIdOccupation : (idOccup : string) => void
}

const OccupationButton = ({ idOccupation , imgPath, name , setIdOccupation }: OccupationButtonProps) => {
  return (
    <div
      onClick={()=>setIdOccupation(name)} 
      className="flex flex-col items-center gap-3 cursor-pointer p-2 w-[120px] px-2 mx-auto md:mx-5 hover:bg-blue-100 rounded-md">
      <div className={`text-[40px] md:text-[50px] flex justify-center items-center`}>
        <img className="w-[70%]" src={imgPath} alt={name} />
      </div>
      <p className={`font-bold text-lg text-center`}>{name}</p>
    </div>
  )
}

