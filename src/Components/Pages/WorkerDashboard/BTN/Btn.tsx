

    interface BTNtext{
        text:string,
        
    }
const Btn = ({text}:BTNtext) => {



    return (
        <button
        className=" rounded-lg md:w-1/6 w-28 bg-teal500 py-3 text-sm md:text-xl text-white ">{text}</button>
    )
}

export default Btn