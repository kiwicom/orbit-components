// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../../icons";
import Heading from "../../Heading";
import Text from "../../Text";
import Loading from "../../Loading";
import Button from "../../Button";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import RenderInRtl from "../../utils/rtl/RenderInRtl";
import Clock from "../../icons/Clock";
import CarrierLogo from "../../CarrierLogo";
import Stack from "../../Stack";
import Badge from "../../Badge";
import TripSector, { TripDate } from "../TripSector";
import TripSegment from "../TripSegment";
import List, { ListItem } from "../../List";

import Card, { CardHeader, CardSection, CardSectionHeader, CardSectionContent } from ".";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "Deprecated Card",
};

export const Default = (): React.Node => {
  const title = text("Title", "Card with title");
  const description = text("Description");
  return (
    <Card>
      <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
    </Card>
  );
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const CardWithDescription = (): React.Node => {
  const title = text("Title", "Card with title & description");
  const description = text("Description", "This is a description of the card.");
  return (
    <Card>
      <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
    </Card>
  );
};

CardWithDescription.story = {
  name: "Card with description",

  parameters: {
    info:
      "Card component is a simple container for grouping some relevant information. It’s possible to add title and description. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithOnlySection = (): React.Node => {
  const content = text("Content", "This is a content of the card.");
  return (
    <Card>
      <CardSection>
        <Text>{content}</Text>
      </CardSection>
    </Card>
  );
};

CardWithOnlySection.story = {
  name: "Card with only section",

  parameters: {
    info:
      "Card component is a simple container for grouping some relevant information. You can add a content to Card. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithSections = (): React.Node => {
  const title = text("Title", "Card with sections");
  const description = text("Description", "This is a description of the card.");
  return (
    <Card>
      <CardSection>
        <Heading type="title3" as="h3">
          {title}
        </Heading>
        <Text>{description}</Text>
      </CardSection>
      <CardSection>
        <Heading type="title3" as="h3">
          {title}
        </Heading>
        <Text>{description}</Text>
      </CardSection>
      <CardSection>
        <Heading type="title3" as="h3">
          {title}
        </Heading>
        <Text>{description}</Text>
      </CardSection>
    </Card>
  );
};

CardWithSections.story = {
  name: "Card with sections",

  parameters: {
    info:
      "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithExpandableSections = (): React.Node => {
  const title = text("Title", "Card with sections");
  const description = text("Description", "This is a description of the card.");
  return (
    <Card>
      <CardHeader title={title} subTitle={description} />
      <CardSection expandable>
        <CardSectionHeader>
          <Heading type="title3" as="h3">
            {title}
          </Heading>
        </CardSectionHeader>
        <CardSectionContent>
          <Text>{description}</Text>
        </CardSectionContent>
      </CardSection>
      <CardSection expandable>
        <CardSectionHeader>
          <Heading type="title3" as="h3">
            {title}
          </Heading>
        </CardSectionHeader>
        <CardSectionContent>
          <Text>{description}</Text>
        </CardSectionContent>
      </CardSection>
      <CardSection expandable>
        <CardSectionHeader>
          <Heading type="title3" as="h3">
            {title}
          </Heading>
          <Text>{description}</Text>
        </CardSectionHeader>
        <CardSectionContent>
          <Text>{description}</Text>
        </CardSectionContent>
      </CardSection>
    </Card>
  );
};

CardWithExpandableSections.story = {
  name: "Card with expandable sections",

  parameters: {
    info:
      "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithDefaultExpanded = (): React.Node => {
  const initialExpanded = boolean("initialExpended", true);
  return (
    <Card>
      <CardSection expandable>
        <CardSectionHeader>
          <Stack direction="row" align="center" justify="between">
            <div>
              <CarrierLogo size="large" carriers={[{ code: "FR", name: "Ryanair" }]} />
            </div>
            <div>
              <Stack direction="row" align="center">
                <Text type="secondary">Trip length: 1h55m</Text>
                <Badge icon={<Clock />} type="warning">
                  Unavailable
                </Badge>
              </Stack>
            </div>
          </Stack>
        </CardSectionHeader>
        <CardSectionContent>Hidden content</CardSectionContent>
      </CardSection>
      <CardSection
        expandable
        initialExpanded={initialExpanded}
        onExpand={action("onExpand")}
        onClose={action("onClose")}
      >
        <CardSectionHeader
          actions={
            <div>
              <Button type="secondary" size="small">
                Close
              </Button>
            </div>
          }
        >
          <Stack direction="row" align="center" justify="between">
            <div>
              <CarrierLogo size="large" carriers={[{ code: "FR", name: "Ryanair" }]} />
            </div>
            <div>
              <Stack direction="row" align="center">
                <Text type="secondary">Trip length: 1h55m</Text>
              </Stack>
            </div>
          </Stack>
        </CardSectionHeader>
        <CardSectionContent visible>By default visible content</CardSectionContent>
      </CardSection>
    </Card>
  );
};

CardWithDefaultExpanded.story = {
  name: "Card with default expanded",

  parameters: {
    info:
      "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithMixedSections = (): React.Node => {
  const title = text("Title", "Card with sections");
  const description = text("Description", "This is a description of the card.");
  return (
    <Card>
      <CardHeader
        title={title}
        subTitle={description}
        actions={<Button size="small">Button</Button>}
      />
      <CardSection>
        <CardSectionHeader>
          <Heading type="title3" as="h3">
            {title}
          </Heading>
          <Text>Test</Text>
        </CardSectionHeader>
        <CardSectionContent>{description}</CardSectionContent>
      </CardSection>
      <CardSection expandable>
        <CardSectionHeader>
          <Heading type="title3">{title}</Heading>
        </CardSectionHeader>
        <CardSectionContent>{description}</CardSectionContent>
      </CardSection>
      <CardSection>
        <CardSectionHeader>
          <Heading type="title3">{title}</Heading>
        </CardSectionHeader>
        <CardSectionContent>{description}</CardSectionContent>
      </CardSection>
    </Card>
  );
};

CardWithMixedSections.story = {
  name: "Card with mixed sections",

  parameters: {
    info:
      "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const LoadingCard = (): React.Node => (
  <Card>
    <Loading type="boxLoader" loading>
      {true && (
        <>
          <CardHeader title="Test" />
          <CardSection>kek</CardSection>
        </>
      )}
    </Loading>
  </Card>
);

LoadingCard.story = {
  parameters: {
    info:
      "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const TripSectorCard = (): React.Node => (
  <Card>
    <CardSection expandable initialExpanded>
      <CardSectionHeader>Expandable dynamic height of Card</CardSectionHeader>
      <CardSectionContent>
        <TripSector dataTest="test">
          <TripDate>Mon 22 Oct</TripDate>
          <TripSegment
            carrier={{ code: "FR", type: "airline", name: "Ryanair" }}
            duration="2h"
            departure="Barcelona BCN"
            departureTime="6:30"
            arrival="Paris BVA"
            arrivalTime="8:30"
          >
            <List size="small" type="secondary">
              <ListItem>Airline: Ryanair</ListItem>
              <ListItem>Flight no: D8 1762</ListItem>
            </List>
          </TripSegment>
        </TripSector>
      </CardSectionContent>
    </CardSection>
  </Card>
);

TripSectorCard.story = {
  name: "TripSector Card",

  parameters: {
    info: "TripSector in expandable Card to test if Whole TripSector is visible after expand",
  },
};

export const Playground = (): React.Node => {
  const title = text("Title", "Customisable card title");
  const description = text("Description", "This is a customisable description of the card.");
  const Icon = getIcon(getIcons("Airplane"));
  const closable = boolean("Closable", false);
  const dataTest = text("dataTest", "test");
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  return (
    <Card closable={closable} onClose={action("Close")} dataTest={dataTest} spaceAfter={spaceAfter}>
      <CardHeader icon={<Icon />} title={title} subTitle={description} dataTest={dataTest} />
      <CardSection dataTest={dataTest}>
        <Heading type="title3" as="h3">
          Content with Heading and text
        </Heading>
        <Text>Text in content</Text>
      </CardSection>
      <CardSection dataTest={dataTest}>
        <Heading type="title3" as="h3">
          Section with Heading and text
        </Heading>
        <Text>Text in section</Text>
      </CardSection>
    </Card>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Accessibility = (): React.Node => {
  const title = text("Title", "Card with title");
  const dataA11ySection = text("dataA11ySection", "ID-OF-CARD");
  return (
    <Card>
      <CardHeader dataA11ySection={dataA11ySection} title={title} />
    </Card>
  );
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Card closable onClose={action("Close")}>
      <CardHeader
        icon={<Icons.Airplane />}
        title="Title of the CardHeader"
        subTitle="Description of the CardHeader"
      />
      <CardSection>
        <Heading type="title3" as="h3">
          Content with Heading and text
        </Heading>
        <Text>Text in content</Text>
      </CardSection>
      <CardSection>
        <Heading type="title3" as="h3">
          Section with Heading and text
        </Heading>
        <Text>Text in section</Text>
      </CardSection>
      <CardSection expandable>
        <CardSectionHeader>
          <Heading type="title3" as="h3">
            Content with Heading and text
          </Heading>
          <Text>Text in content</Text>
        </CardSectionHeader>
        <CardSectionContent>
          <Text>Text in content</Text>
        </CardSectionContent>
      </CardSection>

      <CardSection expandable initialExpanded>
        <CardSectionHeader actions={<Button size="small">Action</Button>}>
          <Heading type="title3" as="h3">
            Content with Heading and text
          </Heading>
          <Text>Text in content</Text>
        </CardSectionHeader>
        <CardSectionContent>
          <Text>Text in content</Text>
        </CardSectionContent>
      </CardSection>
    </Card>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
