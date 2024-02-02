// CardComponent.tsx
import React from 'react';
import { HiDotsHorizontal } from "react-icons/hi";

interface CardProps {
  index: number;
  onCardClick: (index: number) => void;
}

const CardComponent: React.FC<CardProps> = ({ index, onCardClick }) => {
  const handleClick = () => {
    onCardClick(index);
  };

  return (
      <button onClick={handleClick}><HiDotsHorizontal className='text-4xl border px-2 w-14 rounded-lg mr-5 cursor-pointer text-teal500' /></button>
  );
};

export default CardComponent;