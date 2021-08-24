import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useSelector } from 'react-redux';
import {
  selectLastPlays,
  selectResultMessage,
} from '@/presentation/store/features/game-score/GameScore';
import { StyledGameResults, Container } from './index.styles';
import LastPlayCard from './sub-components/last-play-card/LastPlayCard';

const GameResults: FC = (): RE => {
  const resultMessage = useSelector(selectResultMessage);
  const { lastPlayerHand, lastOpponentHand } = useSelector(selectLastPlays);
  return (
    <StyledGameResults>
      <Container>
        <LastPlayCard lastHand={lastPlayerHand} player="You" />
        <p>X</p>
        <LastPlayCard lastHand={lastOpponentHand} player="Opponent" />
      </Container>
      <h3>{resultMessage}</h3>
    </StyledGameResults>
  );
};

export default GameResults;
