import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledLastPlayCard } from './LastPlayCard.styles';

interface Props {
  lastHand: string;
  player: string;
}

const LastPlayCard: FC<Props> = ({ lastHand, player }: Props): RE => {
  return (
    <StyledLastPlayCard>
      <h3>{player}</h3>
      <h4>{lastHand}</h4>
    </StyledLastPlayCard>
  );
};

export default LastPlayCard;
