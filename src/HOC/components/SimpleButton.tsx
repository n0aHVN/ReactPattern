import React from 'react';

export interface SimpleButtonProps {
  text: string;
  onClick?: () => void;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ text, onClick }) => (
  <button 
    onClick={onClick}
    style={{ 
      padding: '10px 20px', 
      backgroundColor: '#007bff', 
      color: 'white', 
      border: 'none', 
      borderRadius: '4px',
      cursor: 'pointer'
    }}
    className="simple-button"
  >
    {text}
  </button>
);

SimpleButton.displayName = 'SimpleButton';

export default SimpleButton;
