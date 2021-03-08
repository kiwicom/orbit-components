// @flow
import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import Airplane from "../icons/AirplaneUp";
import Stack from "../Stack";
import CarrierLogo from "../CarrierLogo";
import Badge from "../Badge";
import Text from "../Text";

import Itinerary, { ItineraryPart, ItineraryPartDetail, ItineraryPartPlace } from ".";

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

const CollapsedContent = () => {
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

export const Part = () => {
  return (
    <Itinerary>
      <ItineraryPart>
        <ItineraryPartPlace
          city="Prague"
          place="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItineraryPartDetail>
        <ItineraryPartPlace
          city="Milan"
          place="Milan Bergamo International Airport (BGY)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItineraryPart>
    </Itinerary>
  );
};

export const Status = () => {
  const label = text("label", "Canceled");
  const type = select("type", ["critical", "warning"], "critical");

  return (
    <ItineraryPart status={type} label={label}>
      <ItineraryPartPlace
        city="Prague"
        place="Václav Havel Airport Prague (PRG)"
        date="Fri, 19.10"
        time="14:05"
      />
      <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
        <CollapsedContent />
      </ItineraryPartDetail>
      <ItineraryPartPlace
        city="Milan"
        place="Milan Bergamo International Airport (BGY)"
        date="Fri, 19.10"
        time="16:35"
      />
      <ItineraryPartPlace
        city="Moscow"
        place="Moscow Sheremetyevo International Airport (SVO)"
        date="Mon, 22.10"
        time="10:15"
        hidden
      />
    </ItineraryPart>
  );
};

export const Place = () => {
  const date = text("date", "Fr, 19.10");
  const time = text("time", "14:05");
  const place = text("place", "Václav Havel Airport Prague (PRG)");
  const city = text("city", "Prague");
  const warning = boolean("warning", false);

  return <ItineraryPartPlace city={city} place={place} date={date} time={time} warning={warning} />;
};

export const Detail = () => {
  return (
    <ItineraryPart>
      <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
        <CollapsedContent />
      </ItineraryPartDetail>
    </ItineraryPart>
  );
};

export const Default = () => {
  return (
    <Itinerary>
      <ItineraryPart spaceAfter="large">
        <ItineraryPartPlace
          city="Moscow"
          place="Sheremetyevo International Airport (SVO)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItineraryPartDetail>
        <ItineraryPartPlace
          city="Prague"
          place="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItineraryPart>
      <ItineraryPart spaceAfter="large">
        <ItineraryPartPlace
          city="Prague"
          place="Václav Havel Airport Prague (PRG)"
          date="Sat, 20.10"
          time="11:05"
        />
        <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
          <CollapsedContent />
        </ItineraryPartDetail>
        <ItineraryPartPlace
          city="Milan"
          place="Milan Bergamo International Airport (BGY)"
          date="Fri, 20.10"
          time="16:35"
        />
      </ItineraryPart>
    </Itinerary>
  );
};

export default {
  title: "Itinerary",
  component: Itinerary,
  includeStories: ["Default", "Status", "Part", "Place", "Detail"],
};
