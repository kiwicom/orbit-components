// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Text";

type Align = "left" | "center" | "right";
type As = "p" | "span" | "div";
type Type =
  | "primary"
  | "secondary"
  | "attention"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "white";
type Weight = "normal" | "bold";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly type?: Type;
  readonly size?: Common.Size;
  readonly weight?: Weight;
  readonly align?: Align;
  readonly italic?: boolean;
  readonly uppercase?: boolean;
  readonly strikeThrough?: boolean;
  readonly as?: As;
  readonly children: React.ReactNode;
  readonly id?: string;
}

declare const Text: React.FunctionComponent<Props>;
export { Text, Text as default };
