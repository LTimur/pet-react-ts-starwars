import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Header } from './Header';
import { store } from '../store';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Provider store={store}>
      <Header />
      <main>{children}</main>
    </Provider>
  );
}
