import React from "react"


interface INPUTSPROPS {
    labelText: string,
    lien: string
}

const InputEdit =  ({ labelText, lien }: INPUTSPROPS) => {
        return (
            <div className="flex px-2 md:py-2   flex-col">
                <label className=" flex font-semibold py-1" htmlFor={lien}>{labelText.charAt(0).toUpperCase() + labelText.slice(1)}</label>
                <input type="text" className="h-10 sm:w-[400px] md:w-[400px] focus:outline-blue-500 border-teal500  rounded-lg border bg-transparent" id={lien} />
            </div>
        )
    }
    
export default InputEdit