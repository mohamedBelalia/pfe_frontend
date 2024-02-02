import React from 'react'

interface ChildProps {
        sharedRef: React.MutableRefObject<string>;
        onClose: () => void;
      }

const ChildToolType:React.FC<ChildProps> = ({ sharedRef, onClose })  => {

    
    const handleClick = () => {
        sharedRef.current = 'New Value from Child';
        console.log('Value changed from Child:', sharedRef.current);
        onClose();
      };
    
      
  return (
    <button onClick={handleClick}>close</button>
  )
}

export default ChildToolType