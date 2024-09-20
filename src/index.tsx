import ThemeProvider from "components/providers/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "router";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
