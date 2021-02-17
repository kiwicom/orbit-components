import { ThemeProps } from "../../defaultTheme";

export type TransitionDuration = "slow" | "normal" | "fast";

export declare const Transition: (
  properties: string[],
  duration: TransitionDuration,
  timingFunction: string,
) => (theme: ThemeProps) => string | null;

export default Transition;
