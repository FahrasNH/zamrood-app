"use client";

import { QueryClientProvider } from 'react-query';
import queryClient from '../lib/queryClient';
import { ReactNode } from 'react';

interface ClientProvidersProps {
  children: ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ClientProviders;
