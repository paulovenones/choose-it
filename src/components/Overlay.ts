import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  width: 100vh !important;
  height: 100vh;
  background: black url(spinner.gif) center center no-repeat;
  opacity: 0.5;
  z-index: 500;
`;
