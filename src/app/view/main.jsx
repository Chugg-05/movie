import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../../router/app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
