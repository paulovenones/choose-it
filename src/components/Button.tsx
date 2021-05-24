/* eslint-disable react/button-has-type */
// import styled from 'styled-components';
import React from 'react';
import styled from 'styled-components';
// import theme from '../styles/theme';
import tailwindProps from '../../tailwind.config';
import theme from '../styles/theme';

interface IButtonProps {
  type: 'button' | 'submit' | 'reset';
  fontSize: 'normal' | 'large';
  backgroundColor: keyof typeof tailwindProps.theme.colors;
  onClick: () => void;
  size?: 'small' | 'large';
}

export const Button: React.FC<IButtonProps> = ({
  type,
  size,
  fontSize,
  backgroundColor,
  onClick,
  children,
}) => {
  const buttonWidth = size === 'large' ? '72' : '20';
  const textStyle = fontSize === 'large' ? '4xl' : 'sm';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${backgroundColor}-500 uppercase h-12 w-${buttonWidth} rounded font-bold text-${textStyle} text-white border-none shadow focus:outline-none hover:bg-${backgroundColor}-400 transition-colors`}
    >
      {children}
    </button>
  );
};

type ButtonProps = {
  size?: 'small' | 'large';
  fontSize: 'normal' | 'large';
  backgroundColor: keyof typeof theme.colors;
};

export const Buttona = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${(props) => props.theme.sizes.buttons[props.size].height};
  width: ${(props) => props.theme.sizes.buttons[props.size].width};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};

  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize === 'normal' ? '18px' : '36px')};
  line-height: 0px;
  /* identical to box height */

  text-transform: uppercase;

  color: ${(props) => props.theme.colors.buttonText};

  border: none;
  outline: none;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  &:active {
    opacity: 0.8;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.colors[`${props.backgroundColor}Light`]};
  }

  cursor: pointer;

  transition: background-color 0.2s;
`;
