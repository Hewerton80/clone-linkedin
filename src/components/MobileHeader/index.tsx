import React from 'react';
import { ReactNode } from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

interface MobileHeaderProps {
  children?: ReactNode;
}

function MobileHeader({ children }: MobileHeaderProps) {
  return (
    <Container>
      <ProfileCircle src='https://github.com/Hewerton80.png' />
      <SearchInput placeholder='Pesquisar'/>
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
