// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Modal";

type Size = "extraSmall" | "small" | "normal" | "large" | "extraLarge";

export interface Props extends Common.Global {
  readonly size?: Size;
  readonly children: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly scrollingElementRef?: React.Ref<HTMLElement>;
  readonly autoFocus?: boolean;
  readonly onClose?: Common.Event<
    React.KeyboardEvent<HTMLDivElement> | React.SyntheticEvent<HTMLButtonElement> | React.MouseEvent
  >;
  readonly fixedFooter?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly preventOverlayClose?: boolean;
  readonly hasCloseButton?: boolean;
  readonly disableAnimation?: boolean;
}

type Instance = {
  getScrollPosition: () => number | null;
  setScrollPosition: (value: number) => void;
  modalBody: React.RefObject<HTMLElement>;
  modalContent: React.RefObject<HTMLElement>;
};

declare const Modal: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<Instance>
>;

export { Modal, Modal as default };
export { ModalHeader } from "./ModalHeader/index";
export { ModalSection } from "./ModalSection/index";
export { ModalFooter } from "./ModalFooter/index";
