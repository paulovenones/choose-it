import styled from 'styled-components';

type SpacingBoxProps = {
  height?: string;
  width?: string;
};

export const SpacingBox = styled.div<SpacingBoxProps>`
  height: ${(props) => props.height ?? '0px'};
  width: ${(props) => props.width ?? '0px'};
  background-color: red;
`;
