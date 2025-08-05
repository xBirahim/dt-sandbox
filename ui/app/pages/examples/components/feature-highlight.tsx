import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
import { FeatureHighlight } from "@dynatrace/strato-components-preview/overlays";
import { Button } from "@dynatrace/strato-components/buttons";
import { useCurrentTheme } from "@dynatrace/strato-components/core";
import { Flex } from "@dynatrace/strato-components/layouts";
import { Code, Link } from "@dynatrace/strato-components/typography";
import { FeatureTour } from "app/components/FeatureTour";
import { PageLayout } from "app/components/PageLayout";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export const FeatureHighlightExample = () => {
  const colorTheme = useCurrentTheme();
  const [step, setStep] = useState(0);

  // All button refs
  const [homeRef, setHomeRef] = useState<HTMLButtonElement | null>(null);
  const [siteRef, setSiteRef] = useState<HTMLButtonElement | null>(null);
  const [callsRef, setCallsRef] = useState<HTMLButtonElement | null>(null);
  const [issuesRef, setIssuesRef] = useState<HTMLButtonElement | null>(null);
  const [configRef, setConfigRef] = useState<HTMLButtonElement | null>(null);

  const features = [
    {
      title: "Home",
      subtitle: "Quick overview of your Microsoft Teams environment",
      anchor: homeRef,
      image: `./assets/features/home_${colorTheme}.jpeg`,
      content: (
        <>
          Have a quick overview of your Microsoft Teams environment. The{" "}
          <Link as={RouterLink} to="/">
            Home
          </Link>{" "}
          page provides a summary of key performance metrics, including call quality, network health, and user activity.
        </>
      ),
    },
    {
      title: "Sites (1/3)",
      subtitle: "Monitor your calls, streams and network by site",
      anchor: siteRef,
      image: `./assets/features/sites_calls_section_${colorTheme}.jpeg`,
      content: (
        <>
          Visualize a detailed analysis of your calls and streams by site. The{" "}
          <Link as={RouterLink} to="/examples/components/feature-highlight">
            Sites
          </Link>{" "}
          page provides insights into call quality over time, streams performance, and user activity across different
          sites. This helps you identify potential issues and identify issues related to specific locations.
        </>
      ),
    },
    {
      title: "Sites (2/3)",
      subtitle: "Monitor your calls, streams and network by site",
      anchor: siteRef,
      image: `./assets/features/sites_network_section_${colorTheme}.jpeg`,
      content: (
        <>
          The{" "}
          <Link as={RouterLink} to="/examples/components/feature-highlight">
            Sites
          </Link>{" "}
          page also provides a network section that allows you to monitor the health of your network infrastructure. You
          can see the performance of your network devices, identify potential bottlenecks, and troubleshoot issues
          related to network connectivity.
        </>
      ),
    },
    {
      title: "Sites (3/3)",
      subtitle: "Monitor your calls, streams and network by site",
      anchor: siteRef,
      image: `./assets/features/sites_npa_section_${colorTheme}.jpeg`,
      content: (
        <>
          Gain insights into network performance with the <Code>Network Performance Analysis (NPA)</Code> section. View
          latency, jitter, and packet loss metrics for each site to help identify potential issues and optimize your
          network performance.
        </>
      ),
    },
    {
      title: "Calls",
      subtitle: "Find and analyze your calls",
      anchor: callsRef,
      image: `./assets/features/calls_${colorTheme}.jpeg`,
      content: (
        <>
          List all your calls and filter them by date, time, quality, or participant's name. The{" "}
          <Link as={RouterLink} to="/examples/components/feature-highlight">
            Calls
          </Link>{" "}
          page provides a comprehensive overview of your calls, allowing you to quickly find the information you need.
          <br />
          <br />
          You can also view detailed information about each call, including the participants, duration, and quality
          metrics. This helps you identify potential issues and take appropriate actions to improve the quality of your
          calls.
        </>
      ),
    },
    {
      title: "Microsoft Issues",
      subtitle: "Recent issues from Microsoft Teams",
      anchor: issuesRef,
      image: `./assets/features/ms_issues_${colorTheme}.jpeg`,
      content: (
        <>
          Keep track of recent issues reported by Microsoft Teams. The{" "}
          <Link as={RouterLink} to="/examples/components/feature-highlight">
            Microsoft Issues
          </Link>{" "}
          page provides a list of known issues and outages that may affect your Microsoft Teams environment.
        </>
      ),
    },
    {
      title: "Configuration",
      subtitle: "Configure your Microsoft Teams Observability application",
      anchor: configRef,
      image: `./assets/features/configuration_${colorTheme}.jpeg`,
      content: (
        <>
          Here you can configure the Microsoft Teams Observability application. This includes setting up your
          environment, configuring data sources, and customizing the application settings to suit your needs.
        </>
      ),
    },
  ];

  return (
    <PageLayout
      title="Feature Highlight Example"
      subtitle="Demonstration of Feature Highlight component"
      breadcrumbs={[{ href: "/ui", label: "Home" }, { href: "/ui", label: "Examples" }, { label: "Feature Highlight" }]}
    >
      <Button variant="emphasized" onClick={() => setStep(1)}>
        Start
      </Button>

      <Flex flexDirection="row" gap={8} marginTop={16}>
        <Button variant="emphasized" ref={setHomeRef}>
          Home
        </Button>
        <Button variant="emphasized" ref={setSiteRef}>
          Sites
        </Button>
        <Button variant="emphasized" ref={setCallsRef}>
          Calls
        </Button>
        <Button variant="emphasized" ref={setIssuesRef}>
          Microsoft Issues
        </Button>
        <Button variant="emphasized" ref={setConfigRef}>
          Configuration
        </Button>
      </Flex>

      <FeatureTour features={features} step={step} setStep={setStep} />
    </PageLayout>
  );
};
