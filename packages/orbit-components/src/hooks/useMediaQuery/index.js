// @flow
import * as React from "react";

import QueryContext from "../../ThemeProvider/QueryContext";
import useMediaQueryContext from "../../ThemeProvider/QueryContext/useMediaQueryContext";

import type { UseMediaQuery } from ".";

const useMediaQuery: UseMediaQuery = () => {
  const media = React.useContext(QueryContext);
  const value = useMediaQueryContext();
  if (media != null && Object.values(media).some(v => v != null)) {
    return media;
  }
  return value;
};

export default useMediaQuery;
