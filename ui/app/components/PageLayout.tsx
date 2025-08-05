import { Container, Flex } from "@dynatrace/strato-components/layouts";
import { TitleBar } from "@dynatrace/strato-components-preview/layouts";
import { Breadcrumbs } from "@dynatrace/strato-components-preview/navigation";
import { GridIcon } from "@dynatrace/strato-icons";
import React from "react";

type BreadcrumbsItem = {
  href?: string;
  label: string;
};

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  breadcrumbs?: BreadcrumbsItem[];
  children?: React.ReactNode;
}
export const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, icon, breadcrumbs, children }) => {
  return (
    <Flex flexDirection="column" gap={32}>
      <TitleBar>
        <TitleBar.Navigation>
          <Breadcrumbs>
            {breadcrumbs?.map((item) => (
              <Breadcrumbs.Item key={item.label} href={item.href}>
                {item.label}
              </Breadcrumbs.Item>
            ))}
          </Breadcrumbs>
        </TitleBar.Navigation>
        <TitleBar.Prefix>
          <Container as={Flex}>{icon || <GridIcon />}</Container>
        </TitleBar.Prefix>
        <TitleBar.Title>{title}</TitleBar.Title>
        <TitleBar.Subtitle>{subtitle}</TitleBar.Subtitle>
      </TitleBar>
      {children}
    </Flex>
  );
};
