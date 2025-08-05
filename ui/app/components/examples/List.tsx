import { Flex, Grid } from "@dynatrace/strato-components/layouts";
import React from "react";
import { ExampleCard } from "./Card";

type Example = {
  title: string;
  description: string;
  href: string;
};

interface ExampleListProps {
  examples: Example[];
}

export const ExampleList = ({ examples }: ExampleListProps) => {
  return (
    <Flex>
      <Grid gridTemplateColumns="repeat(4, 1fr)">
        {examples.map((example) => (
          <ExampleCard key={example.href} title={example.title} description={example.description} href={example.href} />
        ))}
      </Grid>
    </Flex>
  );
};
