

    interface BTNtext{
        text:string
    }
const Btn = ({text}:BTNtext) => {



    return (
        <button  className=" rounded-lg w-1/6 bg-teal500 py-3 text-xl text-white ">{text}</button>
    )
}

export default Btn