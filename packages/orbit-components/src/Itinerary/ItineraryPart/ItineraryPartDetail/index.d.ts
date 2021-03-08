import * as React from "react";

export interface Props {
  readonly summary: React.ReactNode;
  readonly duration: string;
  readonly children: React.ReactNode;
  readonly icon?: React.ReactNode;
}

declare const ItineraryPartDetail: React.FunctionComponent<Props>;
export default ItineraryPartDetail;
