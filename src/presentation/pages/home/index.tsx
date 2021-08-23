import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledHome, StyledHomeContainer } from './index.styles';
import Header from '@/presentation/components/header';
import Dashboard from '@/presentation/components/dashboard';
import GameResults from '@/presentation/components/game-results';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <StyledHome>
        <Header />
        <Dashboard />
        <GameResults />
      </StyledHome>
    </StyledHomeContainer>
  );
};

export default Home;
