import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useAppDispatch } from '@/data/store/hooks';
import { StyledPlayButton } from './PlayButton.styles';
import { validateScore } from '@/presentation/store/features/game-score/GameScore';

interface Props {
  text: string;
}

const PlayButton: FC<Props> = ({ text }: Props): RE => {
  const dispacth = useAppDispatch();

  return (
    <StyledPlayButton onClick={() => dispacth(validateScore(text))}>
      {text}
    </StyledPlayButton>
  );
};

export default PlayButton;
