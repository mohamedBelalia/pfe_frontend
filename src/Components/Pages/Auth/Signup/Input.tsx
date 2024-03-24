import "./input.css"

interface INPUTSPROPS {
    labelText: string,
    lien: string
}

const Input = ({ labelText, lien }: INPUTSPROPS) => {
    return (
        <div className="flex py-1  flex-col">
            <label className=" text-sm   py-1" htmlFor={lien}>{labelText.charAt(0).toUpperCase() + labelText.slice(1)}</label>
            <input type="text" className="h-10 w-[400px]  pl-4 focus:outline-blue-500 border-teal500  rounded-lg border-2  bg-transparent" id={lien} />
        </div>
    )
}

export default Input