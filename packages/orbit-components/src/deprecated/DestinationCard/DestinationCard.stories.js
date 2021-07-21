// @flow

import * as React from "react";
import { text, object, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../../utils/rtl/RenderInRtl";

import DestinationCard from ".";

export default {
  title: "DestinationCard",
};

export const Direct = (): React.Node => (
  <DestinationCard
    departureCity="Prague"
    destinationCity="Dubai"
    destinationCountry="United Arab Emirates"
    image="dubai_ae"
    price="5,563 Kč"
    outbound={{ text: "One-way", type: "Direct", duration: "6h 10m" }}
    onClick={action("onClick")}
  />
);

Direct.story = {
  parameters: {
    info:
      "DestinationCard is a component which is used on the landing page and also on the search page.",
  },
};

export const Return = (): React.Node => (
  <DestinationCard
    departureCity="Prague"
    destinationCity="Dubai"
    destinationCountry="United Arab Emirates"
    image="dubai_ae"
    price="5,563 Kč"
    timeOfStay="10 nights"
    outbound={{ date: "Wed 31 Oct", type: "Direct", duration: "6h 10m" }}
    inbound={{ date: "Fri 9 Nov", type: "Direct", duration: "6h 50m" }}
    onClick={action("onClick")}
  />
);

Return.story = {
  parameters: {
    info:
      "DestinationCard is a component which is used on the landing page and also on the search page.",
  },
};

export const GermanyMutation = (): React.Node => (
  <DestinationCard
    departureCity="Amsterdam"
    destinationCity="Dubai"
    destinationCountry="United Arab Emirates"
    image="dubai_ae"
    price="NT$3.695"
    timeOfStay="10 nights"
    outbound={{ date: "Di. 24.12", type: "Zwischenstopp", duration: "20h 10m" }}
    inbound={{ date: "Do. 25.12", type: "Zwischenstopp", duration: "20h 50m" }}
    onClick={action("onClick")}
  />
);

GermanyMutation.story = {
  name: "Germany mutation",

  parameters: {
    info:
      "DestinationCard is a component which is used on the landing page and also on the search page.",
  },
};

export const Playground = (): React.Node => {
  const image = text("image", "paris_fr");
  const destinationCity = text("destinationCity", "Paris");
  const dataTest = text("dataTest", "test");
  const height = number("height", 300);
  const departureCity = text("departureCity", "Prague");
  const destinationCountry = text("destinationCountry", "United Arab Emirates");
  const price = text("price", "5,563 Kč");
  const timeOfStay = text("timeOfStay", "10 nights");
  const outbound = object("outbound", {
    date: "Wed 31 Oct",
    type: "Direct",
    duration: "6h 10m",
  });
  const inbound = object("inbound", { date: "Fri 9 Nov", type: "Direct", duration: "6h 50m" });
  const tabIndex = text("TabIndex", "0");

  return (
    <DestinationCard
      dataTest={dataTest}
      departureCity={departureCity}
      destinationCity={destinationCity}
      destinationCountry={destinationCountry}
      image={image}
      height={height}
      price={price}
      timeOfStay={timeOfStay}
      outbound={outbound}
      inbound={inbound}
      onClick={action("onClick")}
      tabIndex={tabIndex}
    />
  );
};

Playground.story = {
  parameters: {
    info:
      "DestinationCard is a component which is used on the landing page and also on the search page.",
  },
};

export const Rtl = (): React.Node => {
  const image = text("image", "paris_fr");
  const destinationCity = text("destinationCity", "Paris");
  const dataTest = text("dataTest", "test");
  const height = number("height", 300);
  const departureCity = text("departureCity", "Prague");
  const destinationCountry = text("destinationCountry", "United Arab Emirates");
  const price = text("price", "5,563 Kč");
  const timeOfStay = text("timeOfStay", "10 nights");
  const outbound = object("outbound", {
    date: "Wed 31 Oct",
    type: "Direct",
    duration: "6h 10m",
  });
  const inbound = object("inbound", { date: "Fri 9 Nov", type: "Direct", duration: "6h 50m" });

  return (
    <RenderInRtl>
      <DestinationCard
        dataTest={dataTest}
        departureCity={departureCity}
        destinationCity={destinationCity}
        destinationCountry={destinationCountry}
        image={image}
        height={height}
        price={price}
        timeOfStay={timeOfStay}
        outbound={outbound}
        inbound={inbound}
        onClick={action("onClick")}
      />
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of DestinationCard in RTL setup.",
  },
};
