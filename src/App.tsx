import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./pages/home";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
