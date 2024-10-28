import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Restaurant from "./pages/Restaurant";
import Spa from "./pages/Spa";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/room/:id",
      element: <RoomDetails />,
    },
    {
      path: "/restaurant",
      element: <Restaurant />,
    },
    {
      path: "/spa",
      element: <Spa />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/reactjs-avana-hotel",
  }
);

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
