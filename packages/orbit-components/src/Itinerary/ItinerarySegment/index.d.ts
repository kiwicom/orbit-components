/*
  DOCUMENTATION: https://orbit.kiwi/components/itinerary/itinerarysegment
*/

import * as React from "react";

import * as Common from "../../common/common";

export type Statuses = "warning" | "critical" | "info" | "success";

/** DOCS:
  ItinerarySegment component serves as a wrapper of atomic units `ItinerarySegmentPlace` and `ItinerarySegmentDetail,
  has status prop for showing important information about the connection between two segments of journey.
*/

export interface Props extends Common.Global, Common.SpaceAfter {
  /** The status of ItinerarySegment */
  readonly status?: Statuses;
  /** Status message of ItinerarySegment */
  readonly label?: React.ReactNode;
  /** The content of ItinerarySegment */
  readonly children: React.ReactNode;
}

declare const ItinerarySegment: React.FunctionComponent<Props>;
export default ItinerarySegment;
