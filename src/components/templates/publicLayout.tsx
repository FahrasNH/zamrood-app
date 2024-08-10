"use client";

// React
import { Fragment, ReactNode } from 'react';

// Radix UI
import { Box } from '@radix-ui/themes';

// Components
import { Footer, Header } from '../molecules';

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <Fragment>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Fragment>
  );
};

export default PublicLayout;
