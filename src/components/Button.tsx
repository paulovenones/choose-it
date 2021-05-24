/* eslint-disable react/button-has-type */
import React from 'react';

interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  fontSize: 'normal' | 'large';
  onClick: () => void;
  size?: 'small' | 'large';
  buttonStyle?: 'primary' | 'secondary' | 'attention';
}

export const Button: React.FC<IButtonProps> = ({
  type,
  size,
  fontSize,
  onClick,
  children,
  buttonStyle = 'primary',
}) => {
  const buttonWidth = size === 'large' ? 'w-72' : 'w-20';
  const textStyle = fontSize === 'large' ? 'text-4xl' : 'text-sm';

  let buttonColor = '';
  let buttonHoverColor = '';

  switch (buttonStyle) {
    case 'secondary':
      buttonColor = 'bg-orange-500';
      buttonHoverColor = 'bg-orange-400';
      break;
    case 'attention':
      buttonColor = 'bg-red-500';
      buttonHoverColor = 'bg-red-400';
      break;
    default:
      buttonColor = 'bg-blue-500';
      buttonHoverColor = 'bg-blue-400';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonColor} uppercase h-12 ${buttonWidth} rounded font-bold ${textStyle} text-white border-none shadow focus:outline-none hover:${buttonHoverColor} transition-colors`}
    >
      {children}
    </button>
  );
};
