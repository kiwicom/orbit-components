import * as React from "react";

export declare const mergeRefs: <T>(
  refs: (React.MutableRefObject<T> | React.LegacyRef<T>)[],
) => React.RefCallback<T>;
