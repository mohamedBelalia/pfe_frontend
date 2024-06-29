import { useRef, useState } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import data from "./data.json";
import EditPostPopup from './EditPostPopup';
import DeletePstPopup from './DeletePstPopup';

const cardWidth = 400;
const cardHeight = 300;

const AllPosts: React.FC = () => {
  const cardsContainer = useRef<HTMLDivElement>(null);
  const [openPostId, setOpenPostId] = useState<number | null>(null);
  const [deletePostId, setDeletePostId] = useState<number | null>(null);

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

  const toggleEditPopup = (postId: number | null) => {
    setOpenPostId(postId);
  };

  const toggleDeletePopup = (postId: number | null) => {
    setDeletePostId(postId);
  };

  const handleDelete = (id: number) => {
    // Handle the deletion logic here
    console.log("Deleted post id:", id);
    toggleDeletePopup(null);
  };

  return (
    <div className="m-auto">
      <div
        ref={cardsContainer}
        className="flex overflow-x-scroll scrollbar-none items-center"
        style={{ scrollBehavior: 'smooth' }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            // style={{ minWidth: cardWidth, minHeight: cardHeight }}
            className="mr-2 min-w-full min-h-[250px] md:min-w-[400px] md:min-h-[300px] shadow-xl relative rounded-md"
          >
            {openPostId === Number(item.id)&& (
              <EditPostPopup id={Number(item.id)} onClose={() => toggleEditPopup(null)} />
            )}
            {deletePostId === Number(item.id) && (
              <DeletePstPopup
                id={Number(item.id)}
                onClose={() => toggleDeletePopup(null)}
                onConfirm={handleDelete}
              />
            )}
            <div className="absolute w-[55%] top-4 right-4 flex justify-around z-30">
              <button
                onClick={() => toggleDeletePopup(Number(item.id))}
                className="bg-red-300 text-red-950 hover:bg-red-400 font-semibold md:py-1 py-[2px] px-2 md:px-4 rounded"
              >
                Supprimer
              </button>
              <button
                onClick={() => toggleEditPopup(Number(item.id))}
                className="bg-teal-100 hover:bg-teal-400 text-teal-700 font-semibold py-1 px-4 rounded"
              >
                Modifier
              </button>
            </div>
            <p className="absolute font-semibold bottom-2 px-1 w-full text-md text-white z-10">
              {item.text}
            </p>
            <img
              className="absolute inset-0 h-full w-full rounded-md object-cover"
              src="imgUsed/00.jpg"
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
