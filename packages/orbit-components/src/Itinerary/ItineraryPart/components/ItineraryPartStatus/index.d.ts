import * as React from "react";

import { Statuses } from "../..";

export interface Props {
  readonly interface: Statuses;
  readonly label?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly offset?: number;
}

declare const ItineraryPartStatuses: React.FunctionComponent<Props>;
export default ItineraryPartStatuses;
