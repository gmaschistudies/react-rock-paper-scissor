import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useSelector } from 'react-redux';
import { StyledDashboard, ScoreCardContainer } from './index.styles';
import ScoreCard from '@/presentation/components/dashboard/sub-components/score-card';
import {
  selectGameScore,
  selectNumberOfMatches,
} from '@/presentation/store/features/game-score/GameScore';

const Dashboard: FC = (): RE => {
  const { playerScore, opponentScore } = useSelector(selectGameScore);
  const numberOfMatches = useSelector(selectNumberOfMatches);

  return (
    <StyledDashboard>
      <h1>Total Matches: {numberOfMatches}</h1>
      <ScoreCardContainer>
        <ScoreCard player="You" score={playerScore} />
        <ScoreCard player="Opponent" score={opponentScore} />
      </ScoreCardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
