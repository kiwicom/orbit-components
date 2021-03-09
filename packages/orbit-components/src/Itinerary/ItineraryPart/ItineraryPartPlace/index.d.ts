import * as React from "react";

/** DOCS:
  ItineraryPartPlace is an atomic unit of the Itinerary component, shows two locations, date and time,
  has warning property which changes the icon to `<AlertCircle color="warning" />`
  to attract user attention about some important information about journey.
*/

export interface Props {
  /** The date of ItineraryPartPlace */
  readonly date: string;
  /** The time of ItineraryPartPlace */
  readonly time: string;
  /** The city of ItineraryPartPlace */
  readonly city: string;
  /** The place of ItineraryPartPlace */
  readonly place: string;
  /** ItineraryPartPlace which status is HiddenCity */
  readonly hidden?: boolean;
  /** Changes the icon of current ItineraryPartPlace, if there is some important information for user */
  readonly warning?: boolean;
  /** sets min-width for first column with date and time */
  readonly minWidth?: number;
}

declare const ItineraryPartPlace: React.FunctionComponent<Props>;
export default ItineraryPartPlace;
