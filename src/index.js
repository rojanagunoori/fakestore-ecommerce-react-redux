import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* or simply use <App /> if you handle routing inside App */}
    </Provider>
  </React.StrictMode>
);
