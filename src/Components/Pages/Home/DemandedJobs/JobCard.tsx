type JobCardTypes = {
    img : string ,
    jobName : string ,
    smallDescription : string 
}

const JobCard = ({img , jobName , smallDescription}:JobCardTypes) => {
  return (
    <div>
       
        <div className="flex-none md:flex-1 md:h-[220px] w-[300px] bg-[#717e9153] rounded-xl overflow-hidden">
            <img src={img} alt={jobName} className="w-full md:h-[150px] h-[180px] object-cover" />
            <div className="md:h-[25%] h-[80px] flex justify-center items-center flex-col text-[#2b3441]">
                <h1>{jobName}</h1>
                <p className="text-[13px]">{smallDescription}</p>
            </div>
        </div>
    </div>
  )
}

export default JobCard