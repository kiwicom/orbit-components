// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import { Props as IllustrationProps } from "../../Illustration";
import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/Modal/ModalHeader";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly illustration?: React.ReactNode;
  readonly title?: React.ReactNode;
  readonly description?: React.ReactNode;
  readonly suppressed?: boolean;
}
declare class ModalHeader extends React.Component<Props> {}
export { ModalHeader, ModalHeader as default };
