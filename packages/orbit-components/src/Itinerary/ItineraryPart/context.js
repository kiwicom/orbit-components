// @flow
import * as React from "react";

import type { Context, ProviderProps } from "./context";

export const ItineraryPartContext: React.Context<Context> = React.createContext({
  setExpanded: () => {},
  expanded: false,
  isNextHidden: false,
  isHidden: false,
  hasStatus: false,
  index: 0,
  count: 0,
  calculatedWidth: 0,
  last: false,
});

export const ItineraryPartProvider = ({
  children,
  index,
  last,
  count,
  calculatedWidth,
  isNextHidden,
  isHidden,
  hasStatus,
}: ProviderProps) => {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <ItineraryPartContext.Provider
      value={{
        setExpanded,
        expanded: isExpanded,
        calculatedWidth,
        index,
        last,
        isNextHidden,
        isHidden,
        count,
        hasStatus,
      }}
    >
      {children}
    </ItineraryPartContext.Provider>
  );
};

export const usePart = () => React.useContext(ItineraryPartContext);
