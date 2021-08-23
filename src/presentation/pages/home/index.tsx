import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledHome, StyledHomeContainer } from './index.styles';
import Header from '@/presentation/components/header';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <StyledHome>
        <Header />
      </StyledHome>
    </StyledHomeContainer>
  );
};

export default Home;
