import { useEffect, useRef, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import EditPostPopup from './EditPostPopup';
import DeletePstPopup from './DeletePstPopup';
import Api from '../../../../api/Api';


interface Props {
  idOuvrier: string;
  imageProjet: string;
  description_projet: string;
  titre: string;
  idProjet: string;
}

const AllPosts: React.FC = () => {
  const cardsContainer = useRef<HTMLDivElement>(null);
  const [openPostId, setOpenPostId] = useState<string | null>(null);
  const [deletePostId, setDeletePostId] = useState<string | null>(null);
  const [projet, setProjet] = useState<Props[]>([]);
  const [currentData, setCurrentData] = useState<Props | null>(null);

  useEffect(() => {
    const fetchImgPosts = async () => {
      try {
        const response = await Api.get<Props[]>(`projects?workerId=4`);
        setProjet(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchImgPosts();
  }, []);

  const scrollToLeft = () => {
    if (cardsContainer.current) {
      cardsContainer.current.scrollLeft -= 500; // Adjust the scroll amount as needed
    }
  };

  const scrollToRight = () => {
    if (cardsContainer.current) {
      cardsContainer.current.scrollLeft += 500; // Adjust the scroll amount as needed
    }
  };

  const toggleEditPopup = (postId: string | null) => {
    setOpenPostId(postId);
    const postData = projet.find(item => item.idOuvrier === postId);
    setCurrentData(postData || null);
  };

  const toggleDeletePopup = (postId: string | null) => {
    setDeletePostId(postId);
  };

  const handleDelete = async (idProjet: string) => {
    try {
      await Api.delete(`projects?idProject=${idProjet}`);
      setProjet(projet.filter(item => item.idProjet !== idProjet));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
    toggleDeletePopup(null);
  };

  return (
    <div className="m-auto ">
      <div
        ref={cardsContainer}
        className="flex overflow-x-scroll scrollbar-none items-center"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projet.map((item) => (
          <div
            key={item.idProjet}
            // style={{ minWidth: cardWidth, minHeight: cardHeight }}
            className="mx-4  shadow-xl w-[400px] my-4 h-[300px] relative rounded-md"
          >
            {openPostId === item.idOuvrier && currentData && (
              <EditPostPopup id={Number(item.idOuvrier)} onClose={() => toggleEditPopup(null)} data={currentData} />
            )}
            {deletePostId === item.idOuvrier && (
              <DeletePstPopup
                id={item.idProjet}
                onClose={() => toggleDeletePopup(null)}
                onConfirm={handleDelete}
              />
            )}
            <div className="absolute w-[55%] top-4 right-4 flex justify-around z-30">
              <button
                onClick={() => toggleDeletePopup(item.idOuvrier)}
                className="bg-red-300 text-red-950 hover:bg-red-400 font-semibold py-1 px-4 rounded"
              >
                Supprimer
              </button>
              <button
                onClick={() => toggleEditPopup(item.idOuvrier)}
                className="bg-teal-100 hover:bg-teal-400 text-teal-700 font-semibold py-1 px-4 rounded"
              >
                Modifier
              </button>
            </div>
            <p className="absolute left-2 right-2 font-semibold bottom-2 w-full text-md text-white z-10">
              {item.titre}
            </p>
            <img
              className="absolute inset-0 h-full w-full rounded-md object-cover"
              src={`uploads/Projects/${item.imageProjet}`}
              alt="img"
            />
            <div className="absolute rounded-md inset-0 bg-gradient-to-t from-teal-900 via-teal-900/30 to-teal-900/50 transition-all duration-300 hover:bg-gradient-to-t hover:from-teal-800 hover:via-gray-700/40 hover:to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="flex my-4 justify-center">
        <button
          className="text-4xl hidden md:block text-teal-500 border-2 rounded-lg px-4 mx-4 hover:bg-teal-500 hover:text-white transition duration-200 ease-in-out"
          onClick={scrollToLeft}
        >
          <GrFormPrevious />
        </button>
        <button
          className="text-4xl hidden md:block text-teal-500 border-2 rounded-lg px-4 mx-4 hover:bg-teal-500 hover:text-white transition duration-300 ease-in-out"
          onClick={scrollToRight}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
