"use client";

import { Fragment, ReactNode } from 'react';
import { Footer, Header } from '../molecules';
import { Box } from '@radix-ui/themes';

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
