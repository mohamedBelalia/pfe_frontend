
const WorkerFilteredCardLoading = () => {
  return (
    <div className='w-full h-[300px] rounded-md animate-pulse px-10 py-7 ourBorder'>
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
        <div className="flex justify-between w-full ourBorder">
        <div className="flex flex-col gap-2 mt-5 w-1/4">
        <div className="rounded-sm bg-slate-300 h-[10px] w-[170px]"></div>
        <div className="rounded-md bg-slate-300 h-[20px] w-[130px]"></div>
        </div>
        <div className="w-full">
        <div className="rounded-md bg-slate-300 h-[20px] w-[130px]"></div>
        </div>
        </div>
    </div>
  )
}

export default WorkerFilteredCardLoading