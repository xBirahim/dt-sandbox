import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
import { FeatureHighlight, type FeatureHighlightPlacement } from "@dynatrace/strato-components-preview/overlays";
import { Button } from "@dynatrace/strato-components/buttons";
import React from "react";

type Feature = {
  title: string;
  subtitle: string;
  image: string;
  content: React.ReactNode;
  anchor: HTMLElement | null;
  placement?: FeatureHighlightPlacement;
};

interface NavigationFeatureHighlightProps {
  features: Feature[];
  step: number;
  setStep: (step: number) => void;
}

export const FeatureTour = ({ features, step, setStep }: NavigationFeatureHighlightProps) => {
  return (
    <>
      {features.map((feature, index) => {
        console.log(`Rendering feature highlight for step ${index + 1}: ${feature.title}`);
        console.log("step:", step);
        return (
          <FeatureHighlight
            key={index}
            open={step === index + 1}
            onClose={() => setStep(0)}
            anchor={feature.anchor}
            placement={feature.placement || "bottom-right"}
          >
            <FeatureHighlight.Title>
              <TitleBar showDivider={false}>
                <TitleBar.Title>{feature.title}</TitleBar.Title>
                <TitleBar.Subtitle>{feature.subtitle}</TitleBar.Subtitle>
              </TitleBar>
            </FeatureHighlight.Title>

            <FeatureHighlight.Visual>
              <img src={feature.image} alt={feature.title} />
            </FeatureHighlight.Visual>

            <FeatureHighlight.Content>{feature.content}</FeatureHighlight.Content>

            <FeatureHighlight.Actions>
              {index > 0 && (
                <Button color="neutral" variant="default" onClick={() => setStep(index - 1)}>
                  Previous
                </Button>
              )}
              <Button
                color="primary"
                variant="emphasized"
                onClick={() => setStep(index === features.length - 1 ? 0 : index + 1)}
              >
                {index === features.length - 1 ? "Close" : "Next"}
              </Button>
            </FeatureHighlight.Actions>
          </FeatureHighlight>
        );
      })}
    </>
  );
};
