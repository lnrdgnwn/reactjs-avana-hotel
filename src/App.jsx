import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />, // Fallback for undefined routes
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
