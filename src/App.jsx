import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/reactjs-avana-hotel/",
    element: <Home />,
  },
  {
    path: "/reactjs-avana-hotel/room/:id",
    element: <RoomDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;