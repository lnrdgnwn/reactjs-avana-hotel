import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoomProvider from "./context/RoomProvider.jsx";
import "./input.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </RoomProvider>
);
