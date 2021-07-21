// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, select, object, text } from "@storybook/addon-knobs";

import { DIRECTIONS, ALIGNS, SPACINGS, JUSTIFY } from "../utils/layout/consts";
import Edit from "../icons/Edit";
import Button from "../Button";
import InputField from "../InputField";
import InputStepper from "../InputStepper";
import Text from "../Text";
import TextLink from "../TextLink";
import Airplane from "../icons/Airplane";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import ButtonGroup from "../ButtonGroup";
import Card from "../Card";
import Checkbox from "../Checkbox";
import Alert from "../Alert";
import Badge from "../Badge";
import ButtonLink from "../ButtonLink";
import CarrierLogo from "../CarrierLogo";
import Radio from "../Radio";
import CountryFlag from "../CountryFlag";
import Illustration from "../Illustration";
import ServiceLogo from "../ServiceLogo";
import Heading from "../Heading";
import Select from "../Select";
import InputGroup from "../InputGroup";
import Table from "../Table";
import TableHead from "../Table/TableHead";
import TableRow from "../Table/TableRow";
import TableCell from "../Table/TableCell";
import TableBody from "../Table/TableBody";
import Textarea from "../Textarea";
import Tile from "../Tile";
import CardSection from "../Card/CardSection";
import RatingStars from "../RatingStars";
import StopoverArrow from "../StopoverArrow";
import List from "../List";
import ListItem from "../List/ListItem";
import TripLayover from "../deprecated/TripSector/TripLayover";
import InformationCircle from "../icons/InformationCircle";
import TripSegment from "../deprecated/TripSegment";
import TripDate from "../deprecated/TripSector/TripDate";
import TripSector from "../deprecated/TripSector";
import Clock from "../icons/Clock";
import Check from "../icons/Check";
import FlightReturn from "../icons/FlightReturn";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import ChoiceGroup from "../ChoiceGroup";

import Stack from ".";

export default {
  title: "Stack",
};

export const Default = (): React.Node => (
  <Stack>
    <Button type="primary" iconLeft={<Airplane />}>
      Button
    </Button>
    <Button type="secondary">Button</Button>
  </Stack>
);

Default.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const MobileProperties = (): React.Node => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)]);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", [null, ...Object.values(ALIGNS)]);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)]);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);

  return (
    <Stack
      inline={inline}
      direction={direction}
      wrap={wrap}
      shrink={shrink}
      grow={grow}
      basis={basis}
      align={align}
      justify={justify}
      spacing={spacing}
      spaceAfter={spaceAfter}
    >
      <Button type="primary" iconLeft={<Airplane />}>
        Button
      </Button>
      <Button type="secondary">Button</Button>
    </Stack>
  );
};

MobileProperties.story = {
  name: "Mobile properties",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const MediumMobileProperties = (): React.Node => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)]);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", [null, ...Object.values(ALIGNS)], ALIGNS.END);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.LARGE);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const mediumMobile = {
    inline,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    align,
    justify,
    spacing,
    spaceAfter,
  };

  return (
    <Stack mediumMobile={mediumMobile}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

MediumMobileProperties.story = {
  name: "MediumMobile properties",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const LargeMobileProperties = (): React.Node => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)]);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", [null, ...Object.values(ALIGNS)], ALIGNS.END);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.LARGE);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const largeMobile = {
    inline,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    align,
    justify,
    spacing,
    spaceAfter,
  };

  return (
    <Stack largeMobile={largeMobile}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

LargeMobileProperties.story = {
  name: "LargeMobile properties",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const TabletProperties = (): React.Node => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)]);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", [null, ...Object.values(ALIGNS)], ALIGNS.END);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.LARGE);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const tablet = {
    inline,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    align,
    justify,
    spacing,
    spaceAfter,
  };

  return (
    <Stack tablet={tablet}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

TabletProperties.story = {
  name: "Tablet properties",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const DesktopProperties = (): React.Node => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)]);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", [null, ...Object.values(ALIGNS)], ALIGNS.END);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.LARGE);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const desktop = {
    inline,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    align,
    justify,
    spacing,
    spaceAfter,
  };

  return (
    <Stack desktop={desktop}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

DesktopProperties.story = {
  name: "Desktop properties",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const LargeDesktopProperties = (): React.Node => {
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)]);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", "auto");
  const align = select("Align", [null, ...Object.values(ALIGNS)], ALIGNS.END);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.LARGE);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const largeDesktop = {
    inline,
    direction,
    wrap,
    grow,
    shrink,
    basis,
    align,
    justify,
    spacing,
    spaceAfter,
  };

  return (
    <Stack largeDesktop={largeDesktop}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
  );
};

LargeDesktopProperties.story = {
  name: "LargeDesktop properties",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const NestedExample = (): React.Node => (
  <Stack spacing="large" direction="column" align="start">
    <Stack spacing="XSmall" direction="row" inline>
      <Text weight="bold">email@gmail.com</Text>
      <Edit size="small" color="success" />
    </Stack>
    <Stack direction="row" spaceAfter="large" align="end">
      <InputField type="password" label="Password" error="You need some help!" />
      <Button>Sign In</Button>
    </Stack>
    <Text size="small">
      <TextLink type="secondary">Forgot password?</TextLink>
    </Text>
  </Stack>
);

NestedExample.story = {
  name: "Nested example",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Playground = (): React.Node => {
  const dataTest = text("dataTest", "test");
  const flex = boolean("flex", false);
  const inline = boolean("Inline", false);
  const direction = select("Direction", [null, ...Object.values(DIRECTIONS)], DIRECTIONS.ROW);
  const wrap = boolean("Wrap", false);
  const grow = boolean("Grow", true);
  const shrink = boolean("Shrink", false);
  const basis = text("Basis", undefined);
  const align = select("Align", [null, ...Object.values(ALIGNS)]);
  const justify = select("Justify", [null, ...Object.values(JUSTIFY)]);
  const spacing = select("Spacing", [null, ...Object.values(SPACINGS)], SPACINGS.XXXSMALL);
  const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
  const mediumMobile = object("mediumMobile", {
    direction: DIRECTIONS.COLUMN,
  });
  const largeMobile = object("largeMobile", {
    align: JUSTIFY.END,
  });
  const tablet = object("tablet", {
    spacing: SPACINGS.XSMALL,
  });
  const desktop = object("desktop", {
    justify: JUSTIFY.BETWEEN,
    direction: DIRECTIONS.ROW,
    align: ALIGNS.START,
  });
  const largeDesktop = object("largeDesktop", {
    spacing: SPACINGS.XLARGE,
  });

  return (
    <Stack
      dataTest={dataTest}
      flex={flex}
      direction={direction}
      align={align}
      justify={justify}
      wrap={wrap}
      grow={grow}
      basis={basis}
      inline={inline}
      shrink={shrink}
      spacing={spacing}
      spaceAfter={spaceAfter}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
    >
      <Button type="secondary">Sign In</Button>
      <Button>Log In</Button>
    </Stack>
  );
};

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const ComponentsPreview = (): React.Node => (
  <Stack direction="column">
    <Stack direction="row" align="center">
      <Alert title="hola amigo" icon>
        My message
      </Alert>
      <Alert title="hola amigo" icon>
        My message
      </Alert>
      <Button>Hola amigo</Button>
    </Stack>
    <Stack direction="row" justify="around">
      <Button>Hola amigo</Button>
      <ButtonLink>Hola amigo</ButtonLink>
    </Stack>
    <Stack direction="row" justify="between">
      <Badge>Hola amigo</Badge>
      <Badge type="dark">Hola amigo</Badge>
    </Stack>
    <Stack direction="column" align="center">
      <ButtonGroup>
        <Button>Hola amigo</Button>
        <Button>Hola amigo</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="secondary">Hola amigo</Button>
        <Button type="secondary">Hola amigo</Button>
      </ButtonGroup>
    </Stack>
    <Stack direction="row" justify="center">
      <ButtonGroup>
        <Button>Hola amigo</Button>
        <Button>Hola amigo</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="secondary">Hola amigo</Button>
        <Button type="secondary">Hola amigo</Button>
      </ButtonGroup>
    </Stack>
    <Stack direction="row" align="center">
      <Card title="Hola amigo" />
      <Card>
        <CardSection>
          <Heading type="title3">Insert your title here...</Heading>
          <Text>subtitle</Text>
        </CardSection>
        <CardSection
          title={<Heading type="title3">Insert your title here...</Heading>}
          description="subtitle"
        >
          Content
        </CardSection>
      </Card>
    </Stack>
    <Stack direction="column" align="center">
      <Card title="Hola amigo" />
      <Card title="Insert your title here..." description="subtitle">
        <CardSection
          title={<Heading type="title3">Insert your title here...</Heading>}
          description="subtitle"
        />
        <CardSection expandable title={<Heading type="title3">Insert your title here...</Heading>}>
          Hidden content
        </CardSection>
        <CardSection
          title={<Heading type="title3">Insert your title here...</Heading>}
          description="subtitle"
        />
      </Card>
    </Stack>
    <Stack direction="row" justify="between">
      <CarrierLogo
        carriers={[
          { code: "YO", name: "Lorem ipsum", type: "bus" },
          { code: "LAL", name: "Lorem ipsum", type: "train" },
          { code: "KEK", name: "Lorem ipsum", type: "airline" },
        ]}
      />
      <CarrierLogo
        carriers={[
          { code: "YO", name: "Lorem ipsum", type: "bus" },
          { code: "LAL", name: "Lorem ipsum", type: "train" },
          { code: "KEK", name: "Lorem ipsum", type: "airline" },
        ]}
      />
    </Stack>
    <Stack direction="row">
      <Checkbox label="My Label" info="Some help" />
      <Radio label="My Label" info="Some help" />
    </Stack>
    <Stack direction="column" align="center">
      <Checkbox label="My Label" info="Some help" />
      <Radio label="My Label" info="Some help" />
    </Stack>
    <Stack direction="row">
      <ChoiceGroup
        label="What was the reason for your cancellation?"
        labelSize="normal"
        labelAs="h4"
        onChange={action("onChange")}
      >
        <Checkbox label="Reason one" value="one" />
        <Checkbox label="Reason two" value="two" />
        <Checkbox label="Reason three" value="three" />
      </ChoiceGroup>
      <ChoiceGroup
        label="What was the reason for your cancellation?"
        labelSize="normal"
        labelAs="h4"
        onChange={action("onChange")}
      >
        <Checkbox label="Reason one" value="one" />
        <Checkbox label="Reason two" value="two" />
        <Checkbox label="Reason three" value="three" />
      </ChoiceGroup>
    </Stack>
    <Stack direction="row">
      <CountryFlag code="cz" />
      <CountryFlag code="us" />
    </Stack>
    <Stack direction="column">
      <CountryFlag code="cz" />
      <CountryFlag code="us" />
    </Stack>
    <Stack direction="column" align="center">
      <Heading>Hola Amigo</Heading>
      <Heading type="title2">Hola Amigo</Heading>
    </Stack>
    <Stack direction="row" justify="start" align="end">
      <Heading>Hola Amigo</Heading>
      <Heading type="title2">Hola Amigo</Heading>
    </Stack>
    <Stack direction="row" justify="start" align="center">
      <Airplane />
      <Text>Hola Amigo</Text>
    </Stack>
    <Stack>
      <Illustration name="Accommodation" size="extraSmall" />
      <Text>Hola Amigo</Text>
    </Stack>
    <Stack direction="row" align="center">
      <Illustration name="Accommodation" size="extraSmall" />
      <Text>Hola Amigo</Text>
    </Stack>
    <Stack direction="row">
      <InputStepper label="My label" />
      <InputField label="My label" />
    </Stack>
    <Stack direction="column">
      <InputStepper label="My label" />
      <InputField label="My label" />
    </Stack>
    <Stack direction="row">
      <InputField label="My label" />
      <Select
        label="My label"
        options={[
          { value: 1, label: "First item" },
          { value: 2, label: "Second item" },
          { value: 3, label: "Third item" },
        ]}
      />
      <InputGroup label="My label">
        <InputField label="My label" />
        <Select
          label="My label"
          options={[
            { value: 1, label: "First item" },
            { value: 2, label: "Second item" },
            { value: 3, label: "Third item" },
          ]}
        />
      </InputGroup>
    </Stack>
    <Stack direction="column">
      <InputField label="My label" />
      <Select
        label="My label"
        options={[
          { value: 1, label: "First item" },
          { value: 2, label: "Second item" },
          { value: 3, label: "Third item" },
        ]}
      />
      <InputGroup label="My label" flex="1 1 100%">
        <InputField label="My label" />
        <Select
          label="My label"
          options={[
            { value: 1, label: "First item" },
            { value: 2, label: "Second item" },
            { value: 3, label: "Third item" },
          ]}
        />
      </InputGroup>
      <Textarea label="My label" />
    </Stack>
    <Stack direction="row" align="center">
      <Heading type="title3">My heading</Heading>
      <ServiceLogo name="Visa" />
    </Stack>
    <Stack>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
    <Stack direction="row">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Stack>
    <Stack direction="row">
      <Tile
        href="https://kiwi.com"
        icon={<Airplane />}
        title="My title"
        description="Some description"
      />
      <Tile
        href="https://kiwi.com"
        icon={<Airplane />}
        title="My title"
        description="Some description"
      />
    </Stack>
    <Stack>
      <Tile icon={<Airplane />} title="My title" description="Some description">
        Some children
      </Tile>
      <Tile icon={<Airplane />} title="My title" description="Some description">
        Some children
      </Tile>
    </Stack>
    <Stack direction="row" align="center">
      <Heading>Orbit Design System</Heading>
      <RatingStars rating={4} />
    </Stack>
    <Stack direction="row" align="center">
      <Text>Prague</Text>
      <StopoverArrow stops="3" />
      <Text>Barcelona</Text>
    </Stack>
    <Stack direction="row">
      <TripSector>
        <TripDate duration="15h 10m">Mon 22 Oct</TripDate>
        <TripSegment
          carrier={{
            code: "FR",
            type: "airline",
            name: "Ryanair",
          }}
          duration="2h"
          departure="Barcelona BCN"
          departureTime="6:30"
          arrival="Paris BVA"
          arrivalTime="8:30"
        >
          <List size="small" type="secondary">
            <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
              Airline: Ryanair
            </ListItem>
            <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
          </List>
        </TripSegment>
        <TripLayover>
          <List type="secondary" size="small">
            <ListItem icon={<Clock />}>4h 50m layover</ListItem>
            <ListItem icon={<Check />}>
              Transfer protected by the&nbsp;
              <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
            </ListItem>
            <ListItem icon={<FlightReturn />}>Changing airports is your responsibility</ListItem>
          </List>
        </TripLayover>
        <TripSegment
          carrier={{
            code: "REGIOJETT",
            type: "bus",
            name: "RegioJet",
          }}
          duration="3h"
          departure="Paris CDG"
          departureTime="13:20"
          arrival="Lille XDB"
          arrivalTime="16:20"
        >
          <List size="small" type="secondary">
            <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
          </List>
        </TripSegment>
        <TripLayover>
          <List type="secondary" size="small">
            <ListItem icon={<Clock />}>2h 25m layover</ListItem>
            <ListItem icon={<Check />}>
              Transfer protected by the&nbsp;
              <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
            </ListItem>
          </List>
        </TripLayover>
        <TripSegment
          carrier={{
            code: "FLIXBUS",
            type: "bus",
            name: "FLIXBUS",
          }}
          duration="1h 30m"
          departure="Lille XDB"
          departureTime="18:45"
          arrival="City of Brussels CRL"
          arrivalTime="20:15"
        >
          <List size="small" type="secondary">
            <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
          </List>
        </TripSegment>
        <TripLayover>
          <List type="secondary" size="small">
            <ListItem icon={<Clock />}>13h 05m layover</ListItem>
            <ListItem icon={<Check />}>
              Transfer protected by the&nbsp;
              <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
            </ListItem>
            <ListItem icon={<FlightReturn />}>Changing airports is your responsibility</ListItem>
          </List>
        </TripLayover>
        <TripDate>Tue 23 Oct</TripDate>
        <TripSegment
          carrier={{
            code: "UA",
            type: "airline",
            name: "United Airlines",
          }}
          duration="10h 55m"
          departure="City of Brussels BRU"
          departureTime="09:20"
          arrival="Miami MIA"
          arrivalTime="14:15"
        >
          <List size="small" type="secondary">
            <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
          </List>
        </TripSegment>
      </TripSector>
      <TripSector>
        <TripDate>Mon 22 Oct</TripDate>
        <TripSegment
          carrier={{
            code: "FR",
            type: "airline",
            name: "Ryanair",
          }}
          duration="2h"
          departure="Barcelona BCN"
          departureTime="6:30"
          arrival="Paris BVA"
          arrivalTime="8:30"
        >
          <List size="small" type="secondary">
            <ListItem icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} />}>
              Airline: Ryanair
            </ListItem>
            <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
          </List>
        </TripSegment>
        <TripLayover>
          <List type="secondary" size="small">
            <ListItem icon={<Clock />}>4h 50m layover</ListItem>
            <ListItem icon={<Check />}>
              Transfer protected by the&nbsp;
              <TextLink type="secondary">Kiwi.com Guarantee</TextLink>
            </ListItem>
            <ListItem icon={<FlightReturn />}>Changing airports is your responsibility</ListItem>
          </List>
        </TripLayover>
        <TripSegment
          carrier={{
            code: "REGIOJETT",
            type: "bus",
            name: "RegioJet",
          }}
          duration="3h"
          departure="Paris CDG"
          departureTime="13:20"
          arrival="Lille XDB"
          arrivalTime="16:20"
        >
          <List size="small" type="secondary">
            <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
          </List>
        </TripSegment>
      </TripSector>
    </Stack>
  </Stack>
);

ComponentsPreview.story = {
  name: "Components preview",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Stack spacing="large" direction="column" align="start">
      <Stack spacing="XSmall" direction="row" inline>
        <Text weight="bold">email@gmail.com</Text>
        <Edit size="small" color="success" />
      </Stack>
      <Stack direction="row" spaceAfter="large" align="end">
        <InputField type="password" label="Password" error="You need some help!" />
        <Button>Sign In</Button>
      </Stack>
      <Text size="small">
        <TextLink type="secondary">Forgot password?</TextLink>
      </Text>
    </Stack>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
