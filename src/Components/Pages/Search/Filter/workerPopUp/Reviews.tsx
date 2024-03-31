import { useEffect, useState } from "react";
import { FaStar , FaUser } from "react-icons/fa";
import Api from "../../../../../api/Api";
import { IComments } from "../../../../../TS";
import CommentsLoading from "../../../../Common/LoadingLayouts/CommentsLoading";

type ReviewsProps = {
    idWorker : string
}

const Reviews = ({idWorker}:ReviewsProps) => {

    // to store the comments
    const [comments , setComments] = useState<IComments[]>();

    // handle loading comments
    const [isLoading , setIsLoading] = useState<boolean>(true)

    // handle errors
    const [isError , setIsError] = useState<boolean>(false)

    useEffect(()=>{
            const fetchWorkerComments = async ()=> {
                const response = await Api.get(`/comments?workerId=${idWorker}`)

                try{
                    if(response.data.status != "no_comments"){
                        setComments(response.data);
                    }
                }
                catch(err){
                    setIsError(true)
                }
                finally{
                    setIsLoading(false)
                }
            }

            fetchWorkerComments()

    },[idWorker])

    if(isError){
        return(
            <div>
                SOMETHING WRONG !!
            </div>
        )
    }

    if(isLoading){
        return (
            <div className="flex flex-col gap-4">
                <CommentsLoading/>
                <CommentsLoading/>
            </div>
        )
    }

  return (
    <div className="flex flex-col gap-4">
        {
            comments != null && comments.length > 0 
            ?
            <>
            <div className="w-full flex flex-col gap-3">
            {
                comments.map((comment , _) => (
                    <ReviewUi commentInfo={comment} key={comment.idCommentaire} />
                ))
            }
            </div>

            <button className="px-[20px] py-2 rounded-md text-white bg-teal-600 w-fit mx-auto">
                {
                    "Plus de commentaires"
                }
            </button>

            </>
            :
            <div>
                no comment
            </div>
        }
    </div>
  )
}


export default Reviews


type ReviewUIProps = {
    commentInfo : IComments
}

const ReviewUi = ({commentInfo}:ReviewUIProps) => {

    const lightStars : number = commentInfo.nbrEtoile as number
    const darkStars : number= 5 - lightStars 

    let lightStarsArr : number[] = [] ;
    let darkStarsArr : number[] = [] ;

    for(let i=0 ; i<lightStars ; i++){
        lightStarsArr.push(i)
    }
    for(let i=0 ; i<darkStars ; i++){
        darkStarsArr.push(i)
    }
    

    console.log(typeof lightStars + " cc");

  

    return (
        <div className="w-full mx-auto flex flex-col gap-2 px-5 py-4 rounded-md border-2 border-teal500">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center border-2 border-teal-600 p-1 overflow-hidden">
                        <FaUser className="text-[55px] mt-2 text-teal-600"/>
                        {/* <img className="w-full h-full object-cover" src="/imgUsed/user.png" alt="" /> */}
                    </div>
                    <div>
                        <h1 className="font-semibold text-gray-700">Client</h1>
                        <p className="text-xs font-bold text-gray-500">{commentInfo.dateCommentaire}</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    {
                        lightStarsArr.map(()=>(
                            <FaStar className="text-xl text-yellow-500"/>
                        ))
                    }

                    {
                        darkStarsArr.map(()=>(
                            <FaStar className="text-xl text-gray-500"/>
                        ))
                    }
                    
                </div>
            </div>
            
            <div>
                <p>
                {
                    commentInfo.textCommentaire
                }
                </p>
            </div>

        </div>
    )

}
