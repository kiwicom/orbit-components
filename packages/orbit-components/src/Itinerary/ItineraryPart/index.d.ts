/*
  DOCUMENTATION: https://orbit.kiwi/components/itinerary/itinerarypart
*/

import * as React from "react";

import * as Common from "../../common/common";

export type Statuses = "warning" | "critical";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly status?: Statuses;
  readonly label?: React.ReactNode;
  readonly children: React.ReactNode;
}

declare const ItineraryPart: React.FunctionComponent<Props>;
export default ItineraryPart;
