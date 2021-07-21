// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/deprecated/Tile";

interface Props extends Common.Global {
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly children?: React.ReactNode;
  readonly external?: boolean;
  readonly href?: string;
  readonly onClick?: Common.Event<
    React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>
  >;
  readonly expanded?: boolean;
}

export const Tile: React.FunctionComponent<Props>;
export * from "./TileExpandable";
export * from "./TileHeader";
