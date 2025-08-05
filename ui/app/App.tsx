import { Page } from "@dynatrace/strato-components-preview/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Examples } from "./pages/examples";
import { ParametersInUrlExample } from "./pages/examples/parameters-in-url";
import { FormValidationExample } from "./pages/examples/form-validation";
import { FeatureHighlightExample } from "./pages/examples/components/feature-highlight";

export const App = () => {
  return (
    <Page>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Main>
        <Routes>
          <Route path="/" element={<Examples />} />
          <Route path="/examples/parameters-in-url" element={<ParametersInUrlExample />} />"
          <Route path="/examples/form-validation" element={<FormValidationExample />} />
          <Route path="examples/components/feature-highlight" element={<FeatureHighlightExample />} />
        </Routes>
      </Page.Main>
    </Page>
  );
};
