import UpdateProject from "../updateProject/UpdateProject"

type UpdateProjectProps = {
    projectId : string,
    removeId : (id: string) => void
}

const UpdateProjectOOO = ({projectId , removeId} : UpdateProjectProps) => {
  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-75 flex justify-center items-center z-50">
        <UpdateProject idProject={projectId} cancelIt={removeId}/>
    </div>
  )
}

export default UpdateProjectOOO