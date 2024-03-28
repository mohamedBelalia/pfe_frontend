
const WorkerCardLoading = () => {
  return (
    <div className="animate-pulse p-3 flex flex-col gap-10 items-start w-[350px] shadow-xl border border-slate-400 rounded-md">
        <div className="flex items-center gap-4">
            <div className="rounded-full bg-slate-300 h-[80px] w-[80px]"></div>
            <div className="flex flex-col gap-3">
                <div className="rounded-sm bg-slate-300 h-[10px] w-[160px]"></div>
                <div className="rounded-md bg-slate-300 h-[20px] w-[130px]"></div>
            </div>
        </div>
        <div>
            <div className="rounded-sm bg-slate-300 h-[10px] w-[160px]"></div>
            <div className="mt-4 flex gap-2">
                <div className="rounded-md bg-slate-300 h-[25px] w-[90px]"></div>
                <div className="rounded-md bg-slate-300 h-[25px] w-[90px]"></div>
                <div className="rounded-md bg-slate-300 h-[25px] w-[90px]"></div>
            </div>
        </div>
        <div className="mt-4 flex justify-between w-full">
            <div className="rounded-sm bg-slate-300 h-[14px] w-[140px]"></div>
            <div className="rounded-sm bg-slate-300 h-[14px] w-[140px]"></div>
        </div>
        <div className="-mt-4 flex justify-between w-full">
            <div className="rounded-md bg-slate-300 h-[23px] w-[140px]"></div>
            <div className="rounded-md bg-slate-300 h-[23px] w-[140px]"></div>
        </div>

    </div>
  )
}

export default WorkerCardLoading