import { Link } from "@dynatrace/strato-components/typography";
import { Link as RouterLink } from "react-router-dom";
import { Container, type ContainerProps } from "@dynatrace/strato-components/layouts";
import React from "react";

interface ExampleCardProps extends ContainerProps<"div"> {
  title: string;
  description: string;
  href: string;
}
export const ExampleCard = ({ title, description, href, ...props }: ExampleCardProps) => {
  return (
    <Container {...props}>
      <Link as={RouterLink} to={href}>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
    </Container>
  );
};
