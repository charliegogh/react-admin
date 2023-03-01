import { createRoot } from "react-dom/client";
import App from "./layout";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.less";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
