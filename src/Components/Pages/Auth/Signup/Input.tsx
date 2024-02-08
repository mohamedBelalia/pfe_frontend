
interface INPUTSPROPS {
    labelText: string,
    lien: string
}

const Input = ({ labelText, lien }: INPUTSPROPS) => {
    return (
        <div className="flex  flex-col">
            <label className=" text-sm  py-1" htmlFor={lien}>{labelText.charAt(0).toUpperCase() + labelText.slice(1)}</label>
            <input type="text" className="h-8 pl-3  focus:outline-blue-500 border-teal500  rounded-lg border bg-transparent" id={lien} />
        </div>
    )
}

export default Input