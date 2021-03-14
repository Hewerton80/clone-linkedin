import React from 'react';
import { ReactNode } from 'react';

import { 
  Container,
  Wrapper,
  LinkedinIcon,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
  SearchInput

} from './styles';

interface DescktopHeaderProps {
  children?: ReactNode;
}

function DescktopHeader({ children }: DescktopHeaderProps) {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder='Pesquisar'/>
        </div>
        <div className="right">
          <nav>
            <button className='active'>
              <HomeIcon />
              <span>Início</span>
            </button>
            <button >
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src='https://github.com/Hewerton80.png'/>
              <span> Eu <CaretDownIcon /> </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DescktopHeader;
