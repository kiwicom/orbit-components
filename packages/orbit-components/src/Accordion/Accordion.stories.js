// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";

import Text from "../Text";
import Button from "../Button";
import Stack from "../Stack";
import AccordionSection from "./AccordionSection";

import Accordion from "./index";

const tmpFooter = (
  <Stack direction="row" justify="between">
    <Button type="secondary">Back to previous segment</Button>
    <Button type="primarySubtle">Continue to next segment</Button>
  </Stack>
);

storiesOf("Accordion", module)
  .add("Default", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          header={
            <Stack spacing="compact">
              <Text type="primdary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          This is a section content
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={
            <Stack spacing="compact">
              <Text type="primdary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          This is a section content
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={
            <Stack spacing="compact">
              <Text type="primdary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          This is a section content
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with disabled sections", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          expandable={false}
          header={<Stack>Default Accordion with header</Stack>}
        >
          This is a section content
        </AccordionSection>
        <AccordionSection id="0X1" header={<Stack>Default Accordion with header</Stack>}>
          This is a section content
        </AccordionSection>
        <AccordionSection
          id="0X2"
          expandable={false}
          header={<Stack>Default Accordion with header</Stack>}
        >
          This is a section content
        </AccordionSection>
        <AccordionSection id="0X3" header={<Stack>Default Accordion with header</Stack>}>
          This is a section content
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with custom actions", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          header={<Stack>This is a header label</Stack>}
          actions={<Button>Open</Button>}
        >
          This is a content
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={<Stack>This is a header label</Stack>}
          actions={<Button>Open</Button>}
        >
          This is a content
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={<Stack>This is a header label</Stack>}
          actions={
            <Stack direction="row">
              <Button type="secondary">Edit</Button>
              <Button>Custom close</Button>
            </Stack>
          }
        >
          Ja sam content 3
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Accordion with sticky footer", () => {
    const [expandedSection, setExpandedSection] = React.useState("0X1");

    return (
      <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(id)}>
        <AccordionSection
          id="0X0"
          header={
            <Stack>
              <Text type="primdary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
        >
          This is a content
        </AccordionSection>
        <AccordionSection
          id="0X1"
          header={
            <Stack spacing="compact">
              <Text type="primdary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          footer={tmpFooter}
        >
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
          <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
        </AccordionSection>
        <AccordionSection
          id="0X2"
          header={
            <Stack spacing="compact">
              <Text type="primdary">This is a header label</Text>
              <Text size="small">This is a header label</Text>
            </Stack>
          }
          footer={tmpFooter}
        >
          This is a content <br />
          This is a content <br />
          This is a content <br />
          This is a content <br />
        </AccordionSection>
      </Accordion>
    );
  })
  .add("Loading Accordion", () => {
    return (
      <Accordion loading>
        <AccordionSection>This is a section content</AccordionSection>
      </Accordion>
    );
  });
