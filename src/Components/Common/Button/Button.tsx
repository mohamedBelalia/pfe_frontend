
interface ButtonTypes {
    label : string ,
    color : string ,
    bg : "#199AFF" | "#2D62FE" | "#349292" | "#D0D3DA" | "#717E91" | "#414E5F" ,
}

const Button = ({label , color , bg}:ButtonTypes) => {
  return (
    <button className="px-5 py-2 rounded-md font-bold" style={{color:color , backgroundColor:bg}}>
        {label}
    </button>
  )
}

export default Button