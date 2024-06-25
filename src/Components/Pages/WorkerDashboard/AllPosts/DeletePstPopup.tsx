import React from 'react';

interface DeletePstPopupProps {
  id: number;
  onClose: () => void;
  onConfirm: (id: number) => void;
}

const DeletePstPopup: React.FC<DeletePstPopupProps> = ({ id, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white mx-2 rounded-lg shadow-lg overflow-hidden md:w-1/3">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Confirmer la suppression</h2>
        </div>
        <div className="p-4">
          <p>Êtes-vous sûr de vouloir supprimer ce message?</p>
        </div>
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={() => onConfirm(id)}
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          >
            Supprimer
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePstPopup;
