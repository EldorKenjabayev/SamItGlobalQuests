import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Routers from "./routers/routers.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routers/>
  </BrowserRouter>
);
