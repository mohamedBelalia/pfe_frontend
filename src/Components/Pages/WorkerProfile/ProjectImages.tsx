import { useEffect, useState } from "react"
import Carousel from "../../Common/Carousel/Carousel"
import Api from "../../../api/Api"


type ProjectImagesProps = {
    idProject : string
    firstImg : string
}

type LoadedImagesType = {
    imgPath : string
}

const ProjectImages = ({idProject , firstImg}:ProjectImagesProps) => {

    // to store the images
    const [images , setImages] = useState<string[]>()

    // handle not found images
    const [isNotFound , setIsNotFound] = useState<boolean>(false)

    useEffect(()=>{
        const fetchProjectImages = async()=>{
            try{
                const response = await Api.get(`/projects?id=${idProject}&images=all`)
                if(response.data.status == "not_found"){
                    setIsNotFound(true)
                }
                else{
                    let loadedImgs : LoadedImagesType[] = response.data
                    let storedImaged : string[] = [firstImg];

                    for(let i = 0 ; i<loadedImgs.length ; i++){
                        storedImaged.push(loadedImgs[i].imgPath);
                    }

                    setImages(storedImaged);   
                }
            }
            catch(err){
                console.log(err);
            }
        }
        fetchProjectImages()
    },[idProject])
    
    
    
  return (
    <>
        {
            images != undefined
            ?
            <Carousel slides={images}/>
            :
            <Carousel slides={[firstImg]}/>
        }
    </>
  )
}

export default ProjectImages
