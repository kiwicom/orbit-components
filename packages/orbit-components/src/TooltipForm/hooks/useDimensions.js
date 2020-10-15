// @flow
import { useEffect, useState } from "react";

import boundingClientRect from "../../utils/boundingClientRect";
import type { UseDimensions } from "./useDimensions.js.flow";

const defaultPositions = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  pureTop: 0,
  pureLeft: 0,
  pureRight: 0,
  pureBottom: 0,
};

const useDimensions: UseDimensions = (
  { boundingRef, contentRef, iconBoundingRef },
  children,
  inlineLabel,
) => {
  const [dimensions, setDimensions] = useState({
    set: false,
    bounding: defaultPositions,
    contentBounding: defaultPositions,
    iconBounding: defaultPositions,
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const bounding = boundingClientRect(boundingRef);
      const contentBounding = boundingClientRect(contentRef);
      const iconBounding = boundingClientRect(iconBoundingRef);
      if (bounding && contentBounding) {
        setDimensions({
          set: true,
          bounding,
          contentBounding,
          iconBounding,
        });
      }
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [boundingRef, contentRef, iconBoundingRef, children, inlineLabel]);

  return dimensions;
};

export default useDimensions;
