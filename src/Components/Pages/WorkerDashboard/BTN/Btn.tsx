

    interface BTNtext{
        text:string,
        
    }
const Btn = ({text}:BTNtext) => {



    return (
        <button className="  rounded-lg py-2 md:py-3 text-center md:text-xl text-white ">
            {text}
        </button>
    )
}

export default Btn