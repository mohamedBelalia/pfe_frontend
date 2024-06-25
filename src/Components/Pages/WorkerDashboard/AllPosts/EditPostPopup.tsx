import React, { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';

interface PropsPopup {
    id: number;
    onClose: () => void;
}

const EditPostPopup = ({ id, onClose }: PropsPopup) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="rounded-md w-full bg-white md:w-[600px] py-6 px-2  shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="w-auto  hidden md:block" htmlFor="img">
                            <p className="text-sm font-medium mb-2 text-gray-700">Image de Profile</p>
                            <div className='border-[1.5px]  shadow-lg md:h-[250px] overflow-hidden md:w-[270px] rounded-md  flex items-center justify-center bg-gray-100 border-blue-400'>
                                {selectedImage ? (
                                    <img src={selectedImage} alt="Selected" className="w-full  aspect-h-1 object-cover" />
                                ) : (
                                    <LuImagePlus className="text-gray-600 m-auto rounded-md text-9xl" />
                                )}
                                <input type="file" id="img" hidden onChange={handleImageChange} />
                            </div>
                        </label>
                    </div>
                    <div className="flex flex-col md:gap-4 ">
                        <div className="space-y-2  h-20 items-center flex md:flex-col">
                            <label className="md:w-auto w-[20%]   h-full pt-1 flex md:flex" htmlFor="img">
                                
                                <div className='border-[1.5px] w-full aspect-h-1 md:hidden shadow-lg md:h-[250px] overflow-hidden md:w-[270px] rounded-md  flex items-center justify-center bg-gray-100 border-blue-400'>
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected" className="w-full aspect-h-1  object-cover" />
                                    ) : (
                                        <LuImagePlus className="text-gray-600 m-auto w-[50px] h-[50px] rounded-md text-4xl md:text-9xl" />
                                    )}
                                    <input type="file" id="img" hidden onChange={handleImageChange} />
                                </div>
                            </label>
                            <p className='md:space-y-2  h-full md:w-full w-[80%] pl-1'>
                                <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                    Titre de projet {id}
                                </label>
                                <input
                                    id="title"
                                    placeholder="Saisir un titre"
                                    className="w-full pl-2 h-12 rounded-md border-[1.5px]  md:px-3 py-1 text-sm border-blue-400 focus:outline-none"
                                /></p>
                        </div>
                        <div className="md:space-y-2 space-y-1 md:mt-0 mt-4">
                            <label htmlFor="description" className="text-sm  font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="Saisir une description"
                                className="w-full rounded-md border-[1.5px] border-blue-400 px-3 py-1 text-sm focus:outline-none min-h-[100px]"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={onClose}
                                className="w-full rounded-md px-4 py-3 text-sm font-medium text-gray-700 shadow-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Annuler
                            </button>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPostPopup;
