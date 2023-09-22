import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { MantineProvider, Container } from '@mantine/core';
import { Header } from './Header';
import { store } from '../store';
import '@mantine/core/styles.css';

const queryClient = new QueryClient();

export function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Provider store={store}>
          <Header />
          <Container>
            <Outlet />
          </Container>
        </Provider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
