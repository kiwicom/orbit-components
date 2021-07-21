// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";
import { SharedProps, Event } from "..";

declare module "@kiwicom/orbit-components/lib/StepperStateless";

type InputEvent = Common.Event<React.KeyboardEvent<HTMLInputElement>>;

export interface Props extends SharedProps {
  readonly value?: number | string | (() => string);
  readonly disabledIncrement?: boolean;
  readonly disabledDecrement?: boolean;
  readonly onKeyDown?: InputEvent;
  readonly onDecrement?: Event;
  readonly onIncrement?: Event;
  readonly onChange?: InputEvent;
}

declare const StepperStateless: React.FunctionComponent<Props>;
export { StepperStateless, StepperStateless as default };
