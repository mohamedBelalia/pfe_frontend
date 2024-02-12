import { Listbox } from '@headlessui/react';
import { useState } from 'react';

type Option = {
    id: number;
    value: string;
};

    const data = [
        {"id": 1, "name": "Carpenter"},
      {"id": 2, "name": "Plumber"},
      {"id": 3, "name": "Electrician"},
      {"id": 4, "name": "Welder"},
      {"id": 5, "name": "Mason"},
      {"id": 6, "name": "Blacksmith"},
      {"id": 7, "name": "Painter"},
      {"id": 8, "name": "Mechanic"},
      {"id": 9, "name": "Tailor"},
      {"id": 10, "name": "Barber"},
      {"id": 11, "name": "Chef"},
      {"id": 12, "name": "Baker"},
      {"id": 13, "name": "Florist"},
      {"id": 14, "name": "Carpenter"},
      {"id": 15, "name": "Plasterer"},
      {"id": 16, "name": "Upholsterer"},
      {"id": 17, "name": "Locksmith"},
      {"id": 18, "name": "Glazier"},
      {"id": 19, "name": "Landscaper"},
      {"id": 20, "name": "Potter"}]

function HeadlessUI() {
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const toggleOption = (option: Option) => {
        const index = selectedOptions.findIndex((o) => o.id === option.id);
        if (index === -1) {
            setSelectedOptions([...selectedOptions, option]);
        } else {
            setSelectedOptions(selectedOptions.filter((e) => e.id !== option.id));
        }
    };

    return (
        <Listbox<Option[]> value={selectedOptions} onChange={setSelectedOptions} multiple>
            {({ open }) => (
                <>
                        <Listbox.Button className="bg-white w-full  flex  border rounded-md px-4 py-2">

                            {selectedOptions.length > 0
                                ? selectedOptions.map(e => (<div>{e.value}</div>))
                                : 'Select Occupations'}
                        </Listbox.Button>
                    {open && (
                        <Listbox.Options className="absolute z-10 mt-2 py-1 bg-white border rounded-md">
                            {data.map((option) => (
                                <Listbox.Option key={option.id} value={option.name}>
                                    {({ selected }) => (
                                        <div
                                            className={`${selected ? 'bg-blue-500 m-1 text-white' : 'text-gray-900'
                                                } cursor-pointer select-none relative flex items-center py-2 px-4`}
                                            onClick={() => toggleOption(option)}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selected}
                                                className="mr-2  cursor-pointer"
                                                onChange={() => { }}
                                            />
                                            <span className={`${selected ? 'font-medium' : 'font-normal'} truncate`}>
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
