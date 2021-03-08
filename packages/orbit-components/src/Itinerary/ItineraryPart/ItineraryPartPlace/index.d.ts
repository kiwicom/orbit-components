import * as React from "react";

export interface Props {
  readonly date: string;
  readonly time: string;
  readonly city: string;
  readonly place: string;
  readonly hidden?: boolean;
  readonly warning?: boolean;
  readonly minWidth?: number;
}

declare const ItineraryPartPlace: React.FunctionComponent<Props>;
export default ItineraryPartPlace;
