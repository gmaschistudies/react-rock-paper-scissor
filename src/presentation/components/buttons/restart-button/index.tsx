import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledRestartButton } from './index.styles';
import { useAppDispatch } from '@/data/store/hooks';
import { restartGame } from '@/presentation/store/features/game-score/GameScore';

const RestartButton: FC = (): RE => {
  const dispatch = useAppDispatch();

  return (
    <StyledRestartButton onClick={() => dispatch(restartGame())}>
      Restart
    </StyledRestartButton>
  );
};

export default RestartButton;
