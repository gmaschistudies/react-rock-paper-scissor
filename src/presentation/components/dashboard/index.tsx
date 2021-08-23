import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledDashboard, ScoreCardContainer } from './index.styles';
import ScoreCard from '@/presentation/components/dashboard/sub-components/score-card';

const Dashboard: FC = (): RE => {
  return (
    <StyledDashboard>
      <h1>Score</h1>
      <ScoreCardContainer>
        <ScoreCard />
        <ScoreCard />
      </ScoreCardContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
