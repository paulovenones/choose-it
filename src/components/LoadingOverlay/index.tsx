import React from 'react';
import { Overlay } from '../Overlay';
import { LoadingSpinner } from './style';

const Loading: React.FC = () => {
  return (
    <Overlay>
      <LoadingSpinner />
    </Overlay>
  );
};

export default Loading;
