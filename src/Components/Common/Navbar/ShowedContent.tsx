import { RxFramerLogo } from "react-icons/rx"

const ShowedContent = () => {
  return (
    <div className="p-7 pb-10">
        <div className="gap-2 items-center mt-3 flex md:hidden cursor-pointer">
            <RxFramerLogo className="text-4xl text-green-700"/>
            <p className="text-xl text-green-700">Tasker</p>
        </div>
        <div className="flex-col gap-3 pt-14 md:pt-0">
            <h1 className="text-xl text-[#414E5F] mb-5">Guides</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="bg-[#D0D3DA] p-4 w-full md:w-1/2 rounded-md cursor-pointer hover:bg-[#caccd1]">
                    <h1 className="font-bold text-[#414E5F]">Guide To Be a Worker</h1>
                    <p className="text-[#414E5F]">Follow The Steps To Setup Your Presence</p>
                </div>

                <div className="bg-[#D0D3DA] p-4 w-full md:w-1/2 rounded-md cursor-pointer hover:bg-[#caccd1]">
                    <h1 className="font-bold text-[#414E5F]">Guide To Find The Best Worker</h1>
                    <p className="text-[#414E5F]">Follow The Steps To Find The Best Worker For Your Task</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ShowedContent