// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/InputGroup";

type Size = "small" | "normal";
type Event = Common.Event<React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>>;

interface Props extends Common.Global, Common.SpaceAfter {
  readonly label?: Common.Translation;
  readonly flex?: string | string[];
  readonly size?: Size;
  readonly help?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly onBlurGroup?: Event;
  readonly error?: React.ReactNode;
  readonly onChange?: Event;
  readonly onFocus?: Event;
  readonly onBlur?: Event;
}

declare const InputGroup: React.FC<Props>;
export { InputGroup, InputGroup as default };
