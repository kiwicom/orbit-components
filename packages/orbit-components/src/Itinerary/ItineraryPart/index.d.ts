/*
  DOCUMENTATION: https://orbit.kiwi/components/itinerary/itinerarypart
*/

import * as React from "react";

import * as Common from "../../common/common";

export type Statuses = "warning" | "critical";

/** DOCS:
  ItineraryPart component serves as a wrapper of atomic units `ItineraryPartPlace` and `ItineraryPartDetail,
  has status prop for showing important information about the connection between two segments of journey.
*/

export interface Props extends Common.Global, Common.SpaceAfter {
  /** The status of ItineraryPart */
  readonly status?: Statuses;
  /** Status message of ItineraryPart */
  readonly label?: React.ReactNode;
  /** The content of ItineraryPart */
  readonly children: React.ReactNode;
}

declare const ItineraryPart: React.FunctionComponent<Props>;
export default ItineraryPart;
