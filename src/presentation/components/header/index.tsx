import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledHeader } from './index.styles';
import RestartButton from '@/presentation/components/buttons/restart-button';

const Header: FC = (): RE => {
  return (
    <StyledHeader>
      <h1>Rock-Paper-Scissor</h1>
      <RestartButton />
    </StyledHeader>
  );
};

export default Header;
