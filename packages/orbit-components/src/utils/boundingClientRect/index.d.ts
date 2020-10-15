export interface Dimensions {
  top: number;
  right: number;
  bottom: number;
  left: number;
  height: number;
  width: number;
  pureTop: number;
  pureLeft: number;
  pureRight: number;
  pureBottom: number;
}

declare const BoundingClientRect: (
  ref: { current: HTMLElement } | null | undefined,
) => Dimensions | null | undefined;

export { BoundingClientRect, BoundingClientRect as default };
