import { AppHeader } from "@dynatrace/strato-components-preview/layouts";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FeatureTour } from "./FeatureTour";

export const Header = () => {
  const [step, setStep] = useState(0);
  const [examplesRef, setExamplesRef] = useState<HTMLElement | null>(null);

  console.log("Header component rendered");

  const featuresTour = [
    {
      title: "Feature Tour",
      subtitle: "Explore the features of this application",
      image: "./assets/features/feature_tour.png",
      content: (
        <p>
          This application showcases various features. Click through to learn more about each feature and how to use
          them effectively.
        </p>
      ),
      anchor: examplesRef,
    },
  ];
  return (
    <>
      <AppHeader>
        <AppHeader.NavItems>
          <AppHeader.AppNavLink as={Link} to="/" />
          <AppHeader.NavItem as={Link} to="/">
            <span ref={setExamplesRef}>Examples</span>
          </AppHeader.NavItem>
          <AppHeader.NavItem
            onClick={() => {
              console.log("Mhmmm");
              setStep(1);
            }}
          >
            Start Tour
          </AppHeader.NavItem>
        </AppHeader.NavItems>
      </AppHeader>
      <FeatureTour features={featuresTour} step={step} setStep={setStep} />
    </>
  );
};
