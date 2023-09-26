import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { MantineProvider, Container } from '@mantine/core';
import { ErrorBoundary } from 'react-error-boundary';
import { Header } from './Header';
import { store } from '../store';
import '@mantine/core/styles.css';
import { FullPageError } from '../shared/Ui/FullPageError/FullPAgeError';

const queryClient = new QueryClient();

export function MainLayout() {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>
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
    </ErrorBoundary>
  );
}
