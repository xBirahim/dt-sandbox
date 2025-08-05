import { getAppVersion } from "@dynatrace-sdk/app-environment";
import { Page } from "@dynatrace/strato-components-preview/layouts";
import { Flex } from "@dynatrace/strato-components/layouts";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Examples } from "./pages/examples";
import { FeatureHighlightExample } from "./pages/examples/components/feature-highlight";
import { FormValidationExample } from "./pages/examples/form-validation";
import { ParametersInUrlExample } from "./pages/examples/parameters-in-url";

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
        <Flex
          justifyContent={"center"}
          flexDirection="row"
          style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <p style={{ padding: 20 }}>SandBox v{getAppVersion()}</p>
        </Flex>
      </Page.Main>
    </Page>
  );
};
