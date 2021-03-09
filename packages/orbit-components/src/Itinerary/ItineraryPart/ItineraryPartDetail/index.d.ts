import * as React from "react";

/** DOCS:
  ItineraryPartDetail serves as connection between two ItineraryPartPlace components (segments)
*/

export interface Props {
  /** The content of ItineraryDetail component, when it's not expanded */
  readonly summary: React.ReactNode;
  /** The duration between two Itinerary parts  */
  readonly duration: string;
  /** The content of ItineraryDetail component, shown when it's expanded */
  readonly children: React.ReactNode;
  /** The icon of ItineraryDetail component */
  /** default: <Airplane /> */
  readonly icon?: React.ReactNode;
}

declare const ItineraryPartDetail: React.FunctionComponent<Props>;
export default ItineraryPartDetail;
