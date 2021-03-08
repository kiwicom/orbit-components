// @flow
import * as React from "react";

import type { Context, ProviderProps } from "./context";

export const ItineraryContext: React.Context<Context> = React.createContext({
  setWidths: () => {},
  calculatedWidth: 0,
});

export const ItineraryProvider = ({ children }: ProviderProps) => {
  const [widths, setWidths] = React.useState([]);
  const [calculatedWidth, setCalculatedWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    setCalculatedWidth(Math.max(...widths));
  }, [widths, setCalculatedWidth]);

  return (
    <ItineraryContext.Provider
      value={{
        calculatedWidth,
        setWidths,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};
export const useWidth = () => React.useContext(ItineraryContext);
