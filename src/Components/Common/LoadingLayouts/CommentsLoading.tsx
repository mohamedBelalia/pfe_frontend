
const CommentsLoading = () => {
  return (
    <div className="w-full h-[140px] flex flex-col gap-3 px-5 py-4 animate-pulse border-2 border-gray-400 rounded-md">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <div className="rounded-full bg-slate-300 h-[60px] w-[60px]"></div>
                <div className="flex flex-col gap-2">
                    <div className="rounded-md bg-slate-300 h-[10px] w-[100px]"></div>
                    <div className="rounded-md bg-slate-300 h-[10px] w-[80px]"></div>
                </div>
            </div>
            <div className="rounded-md bg-slate-300 h-[14px] w-[100px]"></div>
        </div>
        <div className="rounded-md bg-slate-300 h-[14px] w-[140px]"></div>
    </div>
  )
}

export default CommentsLoading