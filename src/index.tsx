import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { TodoProvider } from "./context/TodoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <TodoProvider>
      <App />
    </TodoProvider>
  </>
);