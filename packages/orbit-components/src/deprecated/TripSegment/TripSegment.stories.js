// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, object, boolean } from "@storybook/addon-knobs";

import List from "../../List";
import ListItem from "../../List/ListItem";
import CarrierLogo from "../../CarrierLogo";
import InformationCircle from "../../icons/InformationCircle";
import RenderInRtl from "../../utils/rtl/RenderInRtl";

import TripSegment from ".";

export default {
  title: "Deprecated TripSegment",
};

export const Default = (): React.Node => (
  <TripSegment
    duration="3h"
    carrier={{
      code: "FR",
      type: "airline",
      name: "Ryanair",
    }}
    departure="Berlin TXL"
    departureTime="11:20"
    arrival="Moscow VKO"
    arrivalTime="4:20"
    onClick={action("clicked")}
  >
    <List size="small" type="secondary">
      <ListItem
        icon={
          <CarrierLogo
            carriers={[
              {
                code: "FR",
                type: "airline",
                name: "Ryanair",
              },
            ]}
          />
        }
      >
        Airline: Ryanair
      </ListItem>
      <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
    </List>
  </TripSegment>
);

Default.story = {
  parameters: {
    info: "TripSegments are used for showing information about one trip.",
  },
};

export const ShownByDefault = (): React.Node => (
  <TripSegment
    initialExpanded
    duration="3h"
    carrier={{
      code: "FR",
      type: "airline",
      name: "Ryanair",
    }}
    departure="Berlin TXL"
    departureTime="11:20"
    arrival="Moscow VKO"
    arrivalTime="4:20"
    onClick={action("clicked")}
  >
    <List size="small" type="secondary">
      <ListItem
        icon={
          <CarrierLogo
            carriers={[
              {
                code: "FR",
                type: "airline",
                name: "Ryanair",
              },
            ]}
          />
        }
      >
        Airline: Ryanair
      </ListItem>
      <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
    </List>
  </TripSegment>
);

ShownByDefault.story = {
  name: "Shown by default",

  parameters: {
    info: "TripSegments are used for showing information about one trip.",
  },
};

export const Playground = (): React.Node => {
  const initialExpanded = boolean("initialExpanded", false);
  const duration = text("duration", "3h");
  const carrier = object("carrier", {
    code: "FR",
    type: "airline",
    name: "Ryanair",
  });
  const departure = text("departureCity", "Berlin TXL");
  const arrival = text("arrivalCity", "Moscow VKO");
  const departureTime = text("departureTime", "11:20");
  const arrivalTime = text("arrivalTime", "14:20");
  const dataTest = text("dataTest", "test");
  const tabIndex = text("TabIndex", "0");

  return (
    <TripSegment
      initialExpanded={initialExpanded}
      duration={duration}
      carrier={carrier}
      departure={departure}
      departureTime={departureTime}
      arrival={arrival}
      arrivalTime={arrivalTime}
      onClick={action("clicked")}
      dataTest={dataTest}
      tabIndex={tabIndex}
    >
      <List size="small" type="secondary">
        <ListItem icon={<CarrierLogo carriers={[carrier]} />}>Airline: {carrier.name}</ListItem>
        <ListItem icon={<InformationCircle color="secondary" />}>Flight no: D8 1762</ListItem>
      </List>
    </TripSegment>
  );
};

Playground.story = {
  parameters: {
    info: "TripSegments are used for showing information about one trip.",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
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
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
