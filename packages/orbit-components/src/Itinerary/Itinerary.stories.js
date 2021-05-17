// @flow
import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import Airplane from "../icons/AirplaneUp";
import Stack from "../Stack";
import CarrierLogo from "../CarrierLogo";
import Badge from "../Badge";
import Text from "../Text";

import Itinerary, { ItinerarySegment, ItinerarySegmentDetail, ItinerarySegmentStop } from ".";

const BadgeGroup = () => {
  const carrier = [{ code: "FR", name: "Ryanair" }];

  return (
    <Stack inline align="center" spacing="medium">
      <CarrierLogo size="medium" carriers={carrier} />
      <Badge icon={<Airplane />} />
      <Badge>1 stop</Badge>
    </Stack>
  );
};

const CollapsedContent = (): React.Node => {
  return (
    <Stack direction="column">
      <Text weight="bold">Connection info</Text>
      <Text>Connection number</Text>
      <Text weight="bold">Seating info</Text>
      <Text>Seat pitch</Text>
      <Text>Seat width</Text>
    </Stack>
  );
};

export const Part = (): React.Node => {
  return (
    <Itinerary>
      <ItinerarySegment>
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItinerarySegmentDetail>
        <ItinerarySegmentStop
          city="Milan"
          station="Milan Bergamo International Airport (BGY)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItinerarySegment>
    </Itinerary>
  );
};

export const Status = (): React.Node => {
  const label = text("label", "Canceled");
  const type = select("type", ["critical", "warning"], "critical");

  return (
    <Itinerary>
      <ItinerarySegment status={type} label={label}>
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItinerarySegmentDetail>
        <ItinerarySegmentStop
          city="Milan"
          station="Milan Bergamo International Airport (BGY)"
          date="Fri, 19.10"
          time="16:35"
        />
        <ItinerarySegmentStop
          city="Moscow"
          station="Moscow Sheremetyevo International Airport (SVO)"
          date="Mon, 22.10"
          time="10:15"
          hidden
        />
      </ItinerarySegment>
    </Itinerary>
  );
};

export const Stop = (): React.Node => {
  const date = text("date", "Fr, 19.10");
  const time = text("time", "14:05");
  const station = text("place", "Václav Havel Airport Prague (PRG)");
  const city = text("city", "Prague");
  const warning = boolean("warning", false);

  return (
    <ItinerarySegmentStop city={city} station={station} date={date} time={time} warning={warning} />
  );
};

export const Detail = (): React.Node => {
  return (
    <ItinerarySegment>
      <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
        <CollapsedContent />
      </ItinerarySegmentDetail>
    </ItinerarySegment>
  );
};

export const Default = (): React.Node => {
  return (
    <Itinerary>
      <ItinerarySegment spaceAfter="large">
        <ItinerarySegmentStop
          city="Moscow"
          station="Sheremetyevo International Airport (SVO)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItinerarySegmentDetail>
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItinerarySegment>
      <ItinerarySegment spaceAfter="large">
        <ItinerarySegmentStop
          city="Prague"
          station="Václav Havel Airport Prague (PRG)"
          date="Sat, 20.10"
          time="11:05"
        />
        <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItinerarySegmentDetail>
        <ItinerarySegmentStop
          city="Milan"
          station="Milan Bergamo International Airport (BGY)"
          date="Fri, 20.10"
          time="16:35"
        />
      </ItinerarySegment>
    </Itinerary>
  );
};

export default {
  title: "Itinerary",
  component: Itinerary,
  includeStories: ["Default", "Status", "Part", "Place", "Detail"],
};
