// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Layout";

type Type = "Search" | "Booking" | "MMB";

export interface Props extends Common.Global {
  readonly type: Type;
  readonly children: React.ReactNode;
}

declare const Layout: React.FunctionComponent<Props>;
export { Layout, Layout as default };
export { LayoutColumn } from "./LayoutColumn";
