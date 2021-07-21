// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";
import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import TripSector, { TripDate } from "../deprecated/TripSector";
import TripSegment from "../deprecated/TripSegment";
import List, { ListItem } from "../List";
import Badge from "../Badge";
import Heading from "../Heading";
import CountryFlag from "../CountryFlag";

import Tile from ".";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export default {
  title: "Tile",
};

export const DefaultJustWrapper = (): React.Node => {
  const content = text("content", "Lorem ipsum dolor sit amet");
  const noPadding = boolean("noPadding", false);
  return (
    <Tile onClick={action("clicked")} noPadding={noPadding}>
      {content}
    </Tile>
  );
};

DefaultJustWrapper.story = {
  name: "Default - just wrapper",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const DefaultWithHeaderProps = (): React.Node => {
  const title = text("Title", "Expandable");
  const description = text(
    "Description",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  );
  const Icon = getIcon(getIcons("Airplane"));
  const noHeaderIcon = boolean("noHeaderIcon", false);
  return (
    <Tile
      onClick={action("clicked")}
      icon={Icon && <Icon />}
      title={title}
      description={description}
      noHeaderIcon={noHeaderIcon}
    />
  );
};

DefaultWithHeaderProps.story = {
  name: "Default - with header props",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const DefaultWithHeaderPropsAsHref = (): React.Node => {
  const title = text("Title", "Expandable");
  const description = text(
    "Description",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  );
  const Icon = getIcon(getIcons("Airplane"));
  const href = text("href", "#");
  const external = boolean("external", false);
  return (
    <Tile
      icon={Icon && <Icon />}
      title={title}
      description={description}
      href={href}
      external={external}
    />
  );
};

DefaultWithHeaderPropsAsHref.story = {
  name: "Default - with header props, as href",

  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const TripSectorTile = (): React.Node => (
  <Tile
    title="Dynamic Tile height"
    description="This is a example of dynamic Tile height with TripSector"
    expandable
  >
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
  </Tile>
);

TripSectorTile.story = {
  name: "TripSector Tile",

  parameters: {
    info: "TripSector in expandable Card to test if Whole TripSector is visible after expand",
  },
};

export const ExpandableWithCustomDescription = (): React.Node => {
  const showMore = boolean("showMore", false);
  const Icon = getIcon(getIcons("GenderMan"));

  return (
    <Tile
      icon={Icon && <Icon />}
      onClick={action("clicked")}
      expandable
      header={
        <Stack justify="between" align="center" direction="row" shrink>
          <Stack spacing="none" direction="column" shrink>
            <Stack direction="row" align="center" spacing="XSmall">
              <Heading type="title4" as="h4">
                Mr. Hot potato
              </Heading>
              <CountryFlag code="cz" />
            </Stack>
            <Text>13/37/1337</Text>
          </Stack>
          <Stack align="center" basis="0%">
            <Badge type="info">You</Badge>
          </Stack>
        </Stack>
      }
    >
      This is example of expanded content
      {showMore && (
        <Text>
          Etiam posuere lacus quis dolor. Mauris elementum mauris vitae tortor. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aenean id
          metus id velit ullamcorper pulvinar. Mauris metus. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
        </Text>
      )}
    </Tile>
  );
};

ExpandableWithCustomDescription.story = {
  name: "Expandable with custom description",

  parameters: {
    info: "This is the playground configuration of this component.",
  },
};

export const Playground = (): React.Node => {
  const href = text("Href", "https://www.kiwi.com/");
  const title = text("Title", "Tile with title");
  const external = boolean("External", false);
  const Icon = getIcon(getIcons("Airplane"));
  const description = text(
    "Description",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  );
  const header = text("header", null);
  const expandable = boolean("expandable", false);
  const initialExpanded = boolean("initialExpanded", false);
  const noPadding = boolean("noPadding", false);
  const dataTest = text("dataTest", "test");
  const children = text("children", null);
  const htmlTitle = text("htmlTitle", "Title for more info");

  return (
    <Tile
      href={href}
      onClick={action("clicked")}
      icon={Icon && <Icon />}
      title={title}
      description={description}
      header={header}
      external={external}
      expandable={expandable}
      initialExpanded={initialExpanded}
      noPadding={noPadding}
      dataTest={dataTest}
      htmlTitle={htmlTitle}
    >
      {children}
    </Tile>
  );
};

Playground.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <Tile
      onClick={action("clicked")}
      description={
        <Stack justify="between" direction="row">
          <Text>Mr. John Smith</Text>
          <Text>20 kg</Text>
        </Stack>
      }
      expandable
    >
      This is example of expanded content
    </Tile>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
