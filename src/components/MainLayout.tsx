import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { store } from '../store';

const queryClient = new QueryClient();

export function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </QueryClientProvider>
  );
}
