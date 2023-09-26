import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from '../store';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
