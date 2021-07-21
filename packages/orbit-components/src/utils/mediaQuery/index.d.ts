// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { Interpolation } from "styled-components";

import { Theme } from "../../defaultTheme";
import { Devices } from "./consts";

declare module "@kiwicom/orbit-components/lib/utils/mediaQuery";

type QueryFunction = (style: Interpolation<any>) => Interpolation<any>;

declare const MediaQuery: { [key in Devices]: QueryFunction };
declare const getBreakpointWidth: (name: string, theme: Theme, pure?: boolean) => string;

export { MediaQuery, MediaQuery as default, getBreakpointWidth };
