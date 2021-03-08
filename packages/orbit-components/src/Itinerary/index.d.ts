import * as React from "react";

import ItineraryPart from "./ItineraryPart";
import ItineraryPartPlace from "./ItineraryPart/ItineraryPartPlace";
import ItineraryPartDetail from "./ItineraryPart/ItineraryPartDetail";
import { Global } from "../common/common";

export interface Props extends Global {
  readonly children: React.ReactNode;
}

export { ItineraryPart, ItineraryPartPlace, ItineraryPartDetail };

declare const Itinerary: React.FunctionComponent<Props>;
export default Itinerary;
