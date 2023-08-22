import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import { store } from './store';

export function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
