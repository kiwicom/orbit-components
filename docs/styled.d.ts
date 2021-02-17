import "styled-components";
import { Theme } from "@kiwicom/orbit-components";

// https://styled-components.com/docs/api#typescript

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    boxShadowRaisedSubtle: string;
  }
}
