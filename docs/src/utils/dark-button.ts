import { ThemeProvider } from "@kiwicom/orbit-components";
import { hex2hsl } from "@csstools/convert-colors";

type ThemeShape = React.ComponentProps<typeof ThemeProvider>["theme"];

interface Params {
  dark?: boolean;
  type?: "primary" | "secondary";
  color?: string;
}

export function getBgColor({
  theme,
  type,
  color,
}: { theme: ThemeShape } & Pick<Params, "type" | "color">): string {
  switch (type) {
    case "primary":
      return theme.orbit.buttonPrimaryBackground;
    case "secondary":
      return theme.orbit.paletteProductLight;
    default:
      return typeof color !== "undefined" ? color : "";
  }
}

export function getBgColorHover({
  theme,
  type,
  color,
}: { theme: ThemeShape } & Pick<Params, "type" | "color" | "dark">): string {
  const [h, s, l] = hex2hsl(getBgColor({ theme, type, color })).map(num => Math.round(num));
  return `hsl(${h}, ${s}%, ${l + 6.5}%)`;
}

export function getBgColorActive({
  theme,
  type,
  color,
}: { theme: ThemeShape } & Pick<Params, "type" | "color" | "dark">): string {
  const [h, s, l] = hex2hsl(getBgColor({ theme, type, color })).map(num => Math.round(num));
  return `hsl(${h}, ${s}%, ${l + 8.5}%)`;
}
