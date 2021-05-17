// @flow
import * as React from "react";

import type { Context, ProviderProps } from "./context";

export const ItinerarySegmentContext: React.Context<Context> = React.createContext({
  setExpanded: () => {},
  expanded: false,
  isNextHidden: false,
  isHidden: false,
  hasStatus: false,
  index: 0,
  count: 0,
  last: false,
});

export const ItinerarySegmentProvider = ({
  children,
  index,
  last,
  count,
  isNextHidden,
  isHidden,
  hasStatus,
}: ProviderProps): React.Node => {
  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <ItinerarySegmentContext.Provider
      value={{
        setExpanded,
        expanded: isExpanded,
        index,
        last,
        isNextHidden,
        isHidden,
        count,
        hasStatus,
      }}
    >
      {children}
    </ItinerarySegmentContext.Provider>
  );
};

export const usePart = (): Context => React.useContext(ItinerarySegmentContext);
