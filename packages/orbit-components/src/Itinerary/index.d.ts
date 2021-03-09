import * as React from "react";

import ItineraryPart from "./ItineraryPart";
import ItineraryPartPlace from "./ItineraryPart/ItineraryPartPlace";
import ItineraryPartDetail from "./ItineraryPart/ItineraryPartDetail";
import { Global, SpaceAfter } from "../common/common";

/** DOCS:
  To implement the Itinerary component into your project you'll need to add the import:

  ```jsx
  import Itinerary, {
    ItineraryPart,
    ItineraryPartPlace,
    ItineraryPartDetail,
  } from "@kiwicom/orbit-components";
  ```

  After adding import into your project you can use it simply like:
  ```jsx
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
  </Itinerary>
  ```
*/

export interface Props extends Global, SpaceAfter {
  /** The content of Itinerary component */
  readonly children: React.ReactNode;
}

export { ItineraryPart, ItineraryPartPlace, ItineraryPartDetail };

declare const Itinerary: React.FunctionComponent<Props>;
export default Itinerary;
