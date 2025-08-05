import { Flex } from "@dynatrace/strato-components/layouts";
import { ExampleList } from "app/components/examples/List";
import { PageLayout } from "app/components/PageLayout";
import React from "react";

const examples = [
  {
    title: "Parameters in URL Example",
    description: "Demonstration of query parameters in URL",
    href: "/examples/parameters-in-url",
  },
  {
    title: "Form Validation Example",
    description: "Demonstration of form validation features",
    href: "/examples/form-validation",
  },
  {
    title: "Data Fetching Example",
    description: "Demonstration of data fetching and display",
    href: "/examples/data-fetching",
  },

  {
    title: "Feature Highlight Example",
    description: "Demonstration of Feature Highlight component",
    href: "/examples/components/feature-highlight",
  },
];

export const Examples = () => {
  return (
    <PageLayout
      title={"Examples"}
      subtitle="Demonstration of various UI components and features"
      breadcrumbs={[{ href: "/ui", label: "Home" }]}
    >
      <Flex>
        <ExampleList examples={examples} />
      </Flex>
    </PageLayout>
  );
};
