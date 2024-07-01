import Api from "../../../../api/Api";

interface DeletePstPopupProps {
  id: string;
  removeId : (id : string) => void
}

const DeletePstPopup: React.FC<DeletePstPopupProps> = ({ id, removeId }) => {

  const deletePost = () => {
    handleDelete(id)
    removeId("")
  }

  const annuler = () => {
    removeId("")
  }

  const handleDelete = async (idProjet: string) => {

    try {
      const resp = await Api.delete(`/projects?idProject=${idProjet}`);    
      if(resp.data.status == "done"){
        location.reload()
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-75 flex justify-center items-center z-50">
     <div className="bg-white mx-2 rounded-lg shadow-lg overflow-hidden md:w-1/3">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Confirmer la suppression</h2>
        </div>
        <div className="p-4">
          <p>Êtes-vous sûr de vouloir supprimer ce Projet?</p>
        </div>
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={deletePost} // Pass the idProjet to onConfirm
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Supprimer
          </button>
          <button onClick={annuler} className="bg-gray-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePstPopup;
