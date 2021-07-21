import type { MutableRefObject } from "react";

export default function useLockScrolling(
  ref: MutableRefObject<HTMLElement | null>,
  lock?: boolean,
): void;
