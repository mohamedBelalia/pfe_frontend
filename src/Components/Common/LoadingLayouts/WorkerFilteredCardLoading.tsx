
const WorkerFilteredCardLoading = () => {
  return (
    <div>
      {/* For Large Screens */}
      <div className='w-full h-[300px] rounded-md animate-pulse px-10 py-7 border border-gray-500 hidden md:block'>
        <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
            <div className="rounded-full bg-slate-300 h-[150px] w-[150px]"></div>
            <div className="flex flex-col gap-3 mt-4">
                <div className="rounded-sm bg-slate-300 h-[10px] w-[170px]"></div>
                <div className="rounded-md bg-slate-300 h-[20px] w-[130px]"></div>
                <div className="rounded-sm bg-slate-300 h-[10px] w-[150px]"></div>
            </div>
        </div>
        <div className="rounded-md bg-slate-300 h-[14px] w-[180px] mt-3"></div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3 mt-5 w-1/4">
            <div className="rounded-sm bg-slate-300 h-[10px] w-[170px]"></div>
            <div className="rounded-md bg-slate-300 h-[20px] w-[130px]"></div>
          </div>          
            <div className="rounded-md bg-slate-300 h-[100px] w-[60%]"></div>
        </div>
    </div>

    {/* For Small Screens */}
    <div className='w-full rounded-md animate-pulse px-10 py-7 ourBorder md:hidden flex flex-col items-center gap-3'>
        <div className="rounded-full bg-slate-300 h-[150px] w-[150px]"></div>
        <div className="rounded-sm bg-slate-300 h-[10px] w-[170px]"></div>
        <div className="rounded-md bg-slate-300 h-[20px] w-[130px]"></div>
        <div className="rounded-sm bg-slate-300 h-[10px] w-[150px]"></div>
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="rounded-sm bg-slate-300 h-[10px] w-[150px]"></div>
          <div className="rounded-sm bg-slate-300 h-[10px] w-[190px]"></div>
        </div>
        <div className="w-[80%] mt-8">
          <div className="rounded-md bg-slate-300 h-[100px] w-full"></div>
        </div>
    </div>
    </div>
  )
}

export default WorkerFilteredCardLoading