import styled from 'styled-components';
import theme from '../styles/theme';

type ButtonProps = {
  size?: 'small' | 'large';
  fontSize: 'normal' | 'large';
  backgroundColor: keyof typeof theme.colors;
};

export const Button = styled.button<ButtonProps>`
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
