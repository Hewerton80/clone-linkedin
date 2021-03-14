import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { LeftColumn, MiddleColumn, RightColumn } from '../../stories/Columns.stories';
import AdBanner from '../AdBanner';
import DescktopHeader from '../DescktopHeader';
import MobileHeader from '../MobileHeader';

import { Container } from './styles';

interface LayoutProps {
  children?: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false)
    }, 1500);
  }, []);

  return (
    <Container>
      <MobileHeader />
      <DescktopHeader />
      <span>
        <AdBanner />
      </span>
      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>

  );
};

export default Layout;
