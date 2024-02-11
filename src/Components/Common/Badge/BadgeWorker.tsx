import { SlBadge } from "react-icons/sl"

type badgeProps = {
    badgeName : string
}

const BadgeWorker = ({badgeName}:badgeProps) => {
  return (
    <div className="border-dashed border border-[#2d61fea1] rounded-md bg-gray-300 font-bold text-[#2b4b64] p-1 w-[120px] flex items-center justify-around">
        <SlBadge className="text-xl"/>
        {badgeName}
    </div>
  )
}

export default BadgeWorker