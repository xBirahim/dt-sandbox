import { AppRoot } from "@dynatrace/strato-components/core";
import { NuqsAdapter } from "nuqs/adapters/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/App";
import { ToastContainer } from "@dynatrace/strato-components-preview/notifications";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <NuqsAdapter>
    <AppRoot>
      <BrowserRouter
        basename="ui"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ToastContainer />
        <App />
      </BrowserRouter>
    </AppRoot>
  </NuqsAdapter>,
);
