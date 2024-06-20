import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import Store from "./utils/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <MainComponent />
      </Provider>
    </>
  );
}
export default App;
