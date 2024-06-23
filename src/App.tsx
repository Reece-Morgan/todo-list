import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
