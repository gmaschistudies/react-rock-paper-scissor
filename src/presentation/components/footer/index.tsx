import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledFooter } from './index.styles';
import PlayButton from './sub-components/play-button/PlayButton';

const Footer: FC = (): RE => {
  return (
    <StyledFooter>
      <PlayButton text="Rock" />
      <PlayButton text="Paper" />
      <PlayButton text="Scissor" />
    </StyledFooter>
  );
};

export default Footer;
