/*
  DOCUMENTATION: https://orbit.kiwi/components/itinerary/itinerarypart
*/

import * as React from "react";

import ItineraryPartDetail from "./components/ItineraryPartDetail";
import ItineraryPartPlace from "./components/ItineraryPartPlace";
import * as Common from "../../common/common";

export type Statuses = "warning" | "critical";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly status?: Statuses;
  readonly label?: React.ReactNode;
  readonly children: React.ReactNode;
}

export { ItineraryPartPlace, ItineraryPartDetail };

declare const ItineraryPart: React.FunctionComponent<Props>;
export default ItineraryPart;
