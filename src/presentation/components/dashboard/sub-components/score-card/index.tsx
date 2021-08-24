import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledScoreCard } from './index.styles';

interface Props {
  player: string;
  score: number;
}

const ScoreCard: FC<Props> = ({ player, score }: Props): RE => {
  return (
    <StyledScoreCard>
      <h3>{player}</h3>
      <h4>{score}</h4>
    </StyledScoreCard>
  );
};

export default ScoreCard;
