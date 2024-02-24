
interface INPUTSPROPS {
    labelText: string,
    lien: string
}

const Input = ({ labelText, lien }: INPUTSPROPS) => {
    return (
        <div className="flex  tab:px-4 px-2 md:py-2 w-full   flex-col">
            <label className=" text-sm l  py-1" htmlFor={lien}>{labelText.charAt(0).toUpperCase() + labelText.slice(1)}</label>
            <input type="text" className="h-10 sm:w-[400px] md:w-[300px] focus:outline-blue-500 border-teal500  rounded-lg border bg-transparent" id={lien} />
        </div>
    )
}

export default Input