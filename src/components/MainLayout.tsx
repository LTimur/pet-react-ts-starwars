import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { store } from '../store';

export function MainLayout() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}
