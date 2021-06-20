import { StrictMode } from "react";
import ReactDOM from "react-dom";
import PageProvider from "./contexts/PageProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </StrictMode>,
  rootElement
);
