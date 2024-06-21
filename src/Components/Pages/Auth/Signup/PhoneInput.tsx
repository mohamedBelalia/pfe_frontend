// src/components/PhoneInput.tsx
import React, { useState } from 'react';

const PhoneInput: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('+212');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Ensure the value always starts with '+212'
    if (!input.startsWith('+212')) {
      setPhoneNumber('+212');
    } else {
      setPhoneNumber(input);
    }
  };

  const handleFocus = () => {
    if (!phoneNumber.startsWith('+212')) {
      setPhoneNumber('+212');
    }
  };

  return (
    <div className='w-1/2 border border-red-800 h-[50px]'>
        <div className="relative">
      <input
        type="text"
        className="pl-12 p-2 w-full"
      />
      <span className="absolute left-3 pr-3 top-2 text-gray-500 pointer-events-none">+212 {" "}</span>
    </div>
    </div>
  );
};

export default PhoneInput;
