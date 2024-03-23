
interface ButtonWithIcon {
  label: string;
  color: string;
  bg: "#199AFF" | "#2D62FE" | "#349292" | "#D0D3DA" | "#717E91" | "#414E5F";
  icon?: JSX.Element;
  imgIcon?: never;
}

interface ButtonWithImage {
  label: string;
  color: string;
  bg: "#199AFF" | "#2D62FE" | "#349292" | "#D0D3DA" | "#717E91" | "#414E5F";
  icon?: never;
  imgIcon?: HTMLImageElement;
}

type ButtonTypes = ButtonWithIcon | ButtonWithImage;

const Button = ({label , color , bg ,icon , imgIcon}:ButtonTypes) => {
  return (
    <button className="px-5 py-2 rounded-md font-bold" style={{color:color , backgroundColor:bg}}>
        {label}
        <div>
          {icon}
          
        </div>
    </button>
  )
}

export default Button