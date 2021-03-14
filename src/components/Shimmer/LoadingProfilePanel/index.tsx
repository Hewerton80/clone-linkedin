import React, { ReactNode } from 'react';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

interface LoadingProfilePanelProps {
  children?: ReactNode;
}

function LoadingProfilePanel({ children }: LoadingProfilePanelProps) {
  return (
    <Container>
      <Panel className='no-shadow'>
        <Skeleton className='bg-skeleton'/>
        <span>
          <Skeleton className='avatar-skeleton'/> 
          <Skeleton className='row-skeleton'/> 
          <Skeleton className='row-skeleton'/> 

        </span>
      </Panel>
    </Container>
  );
};

export default LoadingProfilePanel;
