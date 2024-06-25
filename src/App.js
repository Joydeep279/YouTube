import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import Test from "./components/Test";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainComponent />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path:"/test",
        element:<Test/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter}>
        <MainComponent />
      </RouterProvider>
    </Provider>
  );
}

export default App;
