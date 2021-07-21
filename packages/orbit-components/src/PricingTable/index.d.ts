// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/PricingTable";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly activeElement?: number | undefined | null;
  readonly hasError?: boolean;
  readonly desktopRadio?: boolean;
}

declare const PricingTable: React.FunctionComponent<Props>;

export default PricingTable;
export { PricingTableItem } from "./PricingTableItem";
