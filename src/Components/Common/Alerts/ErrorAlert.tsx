
interface errorAlertProps {
    message : string ,
    width : string ,
    height : string 
}

const ErrorAlert = ({width , height , message}:errorAlertProps) => {
  return (
    <div
        className={`${width} ${height} mx-auto flex justify-center items-center 
            border-2 border-red-700 bg-red-400 text-white font-semibold rounded-lg p-6`}>
        {message}
    </div>
  )
}

export default ErrorAlert