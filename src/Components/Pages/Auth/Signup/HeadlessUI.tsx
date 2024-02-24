import { MdOutlineExpandMore } from "react-icons/md";
import { Listbox } from '@headlessui/react';
import { useState } from 'react';

// Define the type for each option
type Option = {
    id: number;
    name: string;
};

// Array of options
const data: Option[] = [
    { id: 1, name: "Carpenter" },
    { id: 2, name: "Plumber" },
    { id: 3, name: "Electrician" },
    { id: 8, name: "Mechanic" },
    { id: 9, name: "Tailor" },
    { id: 10, name: "Barber" },
    { id: 11, name: "Chef" },
    { id: 12, name: "Baker" },
    { id: 13, name: "Florist" },
    { id: 14, name: "Carpenter" },
    { id: 15, name: "Plasterer" },
    { id: 16, name: "Upholsterer" },
    { id: 17, name: "Locksmith" },
    { id: 18, name: "Glazier" },
    { id: 19, name: "Landscaper" },
    { id: 20, name: "Potter" }
];

function HeadlessUI() {
    // State to track selected options
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    // Function to toggle an option's selection
    const toggleOption = (option: Option) => {
        const index = selectedOptions.findIndex((o) => o.id === option.id);
        if (index === -1) {
            if (selectedOptions.length < 3) {
                setSelectedOptions([...selectedOptions, option]);
            }
        } else {
            const newOptions = [...selectedOptions];
            newOptions.splice(index, 1);
            setSelectedOptions(newOptions);
        }
    };

    return (
        <Listbox<Option> value={selectedOptions} onChange={setSelectedOptions} multiple>
            {({ open }) => (
                <>
                    {/* Dropdown button MELK */}
                    <Listbox.Button className="bg-white md:w-[400px] my-2 ml-4 overflow-auto  scrollbar-thin   flex border rounded-md py-2">
                        {/* Display selected options or placeholder */}
                        {selectedOptions.length > 0
                            ? selectedOptions.map(e => (
                                <div className='border mx-1 bg-gray-300 rounded-xl px-3 ' key={e.id}>{e.name}</div>
                            ))
                            : <div className="flex w-full   justify-around">
                                <p>Select Occupations </p>
                                <MdOutlineExpandMore className="text-xl mt-1" />
                            </div>}
                    </Listbox.Button>
                    {/* Dropdown options */}
                    {open && (
                        <Listbox.Options className="absolute h-40 overflow-auto bg-gray-200  scrollbar-thin z-10 w-[300px] ml-4 py-1  border rounded-md">
                            {/* Map over options */}
                            {data.map((option) => (
                                // Each option
                                <Listbox.Option key={option.id} value={option} disabled={selectedOptions.length >= 3 && !selectedOptions.find(o => o.id === option.id)}>
                                    {({ selected }) => (
                                        <div
                                            // Styling and interaction handling
                                            className={`${selected ? 'bg-blue-500  text-white' : 'text-gray-900'
                                                } cursor-pointer select-none relative flex items-center py-2 px-4`}
                                            onClick={() => toggleOption(option)}
                                        >
                                            {/* Checkbox */}
                                            <input
                                                type="checkbox"
                                                checked={selected}
                                                className="mr-2 cursor-pointer"
                                                onChange={() => { }}
                                            />
                                            {/* Option name */}
                                            <span >
                                                {option.name}
                                            </span>
                                        </div>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    )}
                </>
            )}
        </Listbox>
    );
}

export default HeadlessUI;
