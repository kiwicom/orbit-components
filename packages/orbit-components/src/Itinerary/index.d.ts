import * as React from "react";

import ItineraryPart from "./ItineraryPart";
import { Global } from "../common/common";

export interface Props extends Global {
  readonly children: React.ReactNode;
}

export { ItineraryPart };

declare const Itinerary: React.FunctionComponent<Props>;
export default Itinerary;
