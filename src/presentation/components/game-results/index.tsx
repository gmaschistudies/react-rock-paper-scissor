import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledGameResults, Container } from './index.styles';
import LastPlayCard from './sub-components/last-play-card/LastPlayCard';

const GameResults: FC = (): RE => {
  return (
    <StyledGameResults>
      <Container>
        <LastPlayCard />
        <p>X</p>
        <LastPlayCard />
      </Container>
      <h3>You Won!</h3>
    </StyledGameResults>
  );
};

export default GameResults;
