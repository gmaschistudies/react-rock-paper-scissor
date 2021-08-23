import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledPlayButton } from './PlayButton.styles';

interface Props {
  text: string;
}

const PlayButton: FC<Props> = ({ text }: Props): RE => {
  return <StyledPlayButton>{text}</StyledPlayButton>;
};

export default PlayButton;
