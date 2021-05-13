import styled from 'styled-components';
import theme from '../styles/theme';

type ButtonProps = {
  width: string;
  height: string;
  fontSize: string;
  backgroundColor: keyof typeof theme.colors;
};

export const Button = styled.button<ButtonProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};

  font-size: ${(props) => props.fontSize};
  font-family: Quicksand;

  /* background-color: red; */
`;
