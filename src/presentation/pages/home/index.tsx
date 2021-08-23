import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledHome, StyledHomeContainer } from './index.styles';
import Header from '@/presentation/components/header';
import Dashboard from '@/presentation/components/dashboard';
import GameResults from '@/presentation/components/game-results';
import Footer from '@/presentation/components/footer';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <StyledHome>
        <Header />
        <Dashboard />
        <GameResults />
        <Footer />
      </StyledHome>
    </StyledHomeContainer>
  );
};

export default Home;
