// @flow

import * as React from "react";
import { select, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { SIZE_OPTIONS } from "./consts";
import Stack from "../Stack";
import SeatLegend from "./components/SeatLegend";

import Seat from ".";

export const Default = (): React.Node => <Seat type="default" />;

export const Mixed = (): React.Node => {
  const label = text("label", "XY");
  const size = select("Size", Object.values(SIZE_OPTIONS), "medium");

  return (
    <Stack direction="column">
      <Stack align="end">
        <Seat size={size} onClick={action("onClick")} label={label} price="12$" />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          type="unavailable"
        />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          selected
          type="legroom"
        />
      </Stack>
      <Stack align="end">
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          type="unavailable"
        />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          selected
          type="legroom"
        />
        <Seat size={size} onClick={action("onClick")} label={label} price="12$" />
      </Stack>
      <Stack align="end">
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          selected
          type="legroom"
        />
        <Seat size={size} onClick={action("onClick")} label={label} price="12$" />
        <Seat
          size={size}
          onClick={action("onClick")}
          label={label}
          price="12$"
          type="unavailable"
        />
      </Stack>
    </Stack>
  );
};

export const Selected = (): React.Node => {
  const size = select("Size", Object.values(SIZE_OPTIONS), "medium");
  const dataTest = text("dataTest", "test");
  const label = text("label", "XY");

  return (
    <Stack direction="row">
      <Seat size={size} onClick={action("onClick")} label={label} selected dataTest={dataTest} />
      <Seat
        size={size}
        onClick={action("onClick")}
        label={label}
        selected
        type="legroom"
        dataTest={dataTest}
      />
      <Seat size={size} onClick={action("onClick")} label={label} selected dataTest={dataTest} />
    </Stack>
  );
};

export const Playground = (): React.Node => {
  const dataTest = text("dataTest", "test");
  const size = select("Size", Object.values(SIZE_OPTIONS), "medium");
  const label = text("label", "XY");
  const price = text("price", "$12");
  const selected = boolean("selected", false);

  return (
    <Stack direction="row">
      <Seat size={size} label={label} price={price} selected={selected} dataTest={dataTest} />
      <Seat
        size={size}
        label={label}
        price={price}
        selected={selected}
        onClick={action("onClick")}
        type="legroom"
        dataTest={dataTest}
      />
      <Seat
        size={size}
        label={label}
        price={price}
        onClick={action("onClick")}
        selected={selected}
        type="unavailable"
        dataTest={dataTest}
      />
    </Stack>
  );
};

export const Legend = (): React.Node => {
  return (
    <Stack direction="column">
      <SeatLegend label="Extra legroom ($ 5.99 – $ 12.98)" />
      <SeatLegend type="legroom" label="Standard ($ 5.99 – $ 12.98)" />
      <SeatLegend type="unavailable" label="Unavailable" />
    </Stack>
  );
};

export default {
  title: "Seat",
  component: Seat,
  includeStories: ["Default", "Selected", "Mixed", "Legend", "Playground"],
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};
