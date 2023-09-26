import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import { ErrorBoundary } from 'react-error-boundary';
import { Header } from './Header';
import '@mantine/core/styles.css';
import { FullPageError } from '../shared/Ui/FullPageError/FullPageError';
import { Providers } from '../app/Providers';

export function MainLayout() {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>
      <Providers>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </Providers>
    </ErrorBoundary>
  );
}
