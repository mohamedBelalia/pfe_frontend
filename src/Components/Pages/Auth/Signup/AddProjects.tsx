import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { PiXCircleFill } from "react-icons/pi";

const AddProjects = () => {
    const [btnState, setBtnState] = useState<string>("Add Project");
    const [dataArray, setDataArray] = useState<Array<{ image: File | null, title: string, description: string }>>([]);
    const [choosedImage, setChoosedImage] = useState<File | null>();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // const [infosProjects, setInfosProjects] = [{}];

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const selectedImage = files[0];
            setChoosedImage(selectedImage);
        }
    }
    const updateArray = () => {
        if (choosedImage != null && title != "") {
            // Create new object
            const newDataObject = {
                image: choosedImage,
                title: title,
                description: description
            };

            // Push the new object into the array
            const updatedArray = [...dataArray, newDataObject];

            // Update the state with the new array
            setDataArray(updatedArray);
            setChoosedImage(null);
            setTitle("");
            setDescription("");
            setBtnState("Add item");

        }
    };

    // delete an item in projects card
    const deleteItem = (indexToDelete: number) => {
        const updatedArray = dataArray.filter((_, index) => index !== indexToDelete);
        setDataArray(updatedArray);
    }

    // edit an item in projects car
    const editItem = (index: number) => {
        setBtnState("Edit");
        const itemToEdit = dataArray[index];
        setChoosedImage(itemToEdit.image);
        setTitle(itemToEdit.title);
        setDescription(itemToEdit.description);
        deleteItem(index);


    };


    return (
        <div className='flex flex-col '>

            <h1 className="text-teal-500 w-full text-center text-3xl font-[550]">Your Projects</h1>
            <div className='w-full  flex'>
                <form onSubmit={(e) => { e.preventDefault(); }} action="" method="post" className="flex   w-[60%] md:py-4 ">
                    <div className='mr-16'>
                        <label htmlFor="image">
                            <span className=''>Your Photo <span className='text-red-500'>*</span></span>
                            <input onChange={handleImageChange} type="file" name="" id="image" hidden />
                            {choosedImage != null ? <img className='object-cover bg-gray-200 border-2 rounded-lg  h-40 w-40' src={URL.createObjectURL(choosedImage)} /> : <CiImageOn className='text-gray-500  bg-gray-200 border-2 rounded-lg  h-40 w-40' />}
                        </label>

                        <button onClick={updateArray} type='button' className='px-6 text-sm transition-all ease-in-out py-1 duration-300 bg-teal500 text-white my-4 hover:bg-[#414F5F] rounded-lg'>{btnState}</button>
                    </div>
                    <div>
                        <div className='flex flex-col '>
                            <label htmlFor='title'>Project Title<span className='text-red-500'> *</span></label>
                            <input
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                autoFocus
                                placeholder='Title'
                                className='border-2 p-3 border-teal500 h-22 rounded-md bg-gray-200'
                                name="title"
                                id="title"
                            />
                        </div>
                        <div className='flex pt-4 flex-col '>
                            <label htmlFor='description'>Project Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                placeholder='Description'
                                className='border-2 border-teal500 p-3 h-22 rounded-md bg-gray-200'
                                name="description" id="description"
                                cols={30} rows={2} />
                        </div>
                    </div>
                </form>
                <div className='flex m-8  flex-wrap '>
                    {dataArray.map((data, index) => (
                        <div key={index} className='border relative m-1 flex flex-col items-center h-36 p-1 w-38  justify-center    rounded-md'>
                            <div className='absolute top-1 right-1  w-full flex  justify-end'>
                                <PiXCircleFill onClick={() => deleteItem(index)} className='text-red-500 text-xl' />
                            </div>
                            <img className='rounded-md w-24 h-12  object-cover  ' src={data.image ? URL.createObjectURL(data.image) : ''} alt="" />
                            <h1 className='text-sm'>{data.title}</h1>
                            <p className='text-[10px] text-gray-400'>{data.title}</p>
                            <input onClick={() => editItem(index)} className='bg-teal500 mt-1 text-center text-white w-[50%] text-[12px] h-4  rounded-md' value="edit" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddProjects;
