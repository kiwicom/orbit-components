// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Tooltip";

type Size = "small" | "medium";
type Position = "right" | "left" | "top" | "bottom";
type Align = "center" | "start" | "end";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly content: React.ReactNode;
  readonly size?: Size;
  readonly renderInPortal?: boolean;
  readonly stopPropagation?: boolean;
  readonly preferredPosition?: Position;
  readonly preferredAlign?: Align;
  readonly enabled?: boolean;
  readonly tabIndex?: string | number;
  readonly removeUnderlinedText?: boolean;
  readonly block?: boolean;
  readonly lockScrolling?: boolean;
}

declare const Tooltip: React.FunctionComponent<Props>;
export { Tooltip, Tooltip as default };
