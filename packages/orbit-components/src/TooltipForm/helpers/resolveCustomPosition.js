// @flow
const resolveCustomPositions = (
  align?: string,
  isIcon?: boolean,
  isInline?: boolean,
  inputHeight?: number,
  rtl?: boolean,
): {| customContainerPos: number, customContainerOffset: number, customArrowAlign: number |} => {
  if (rtl) {
    return {
      customContainerPos: 0,
      customContainerOffset: isInline ? 0 : -20,
      customArrowAlign: isInline ? 11 : 12.5,
    };
  }

  if (align === "start") {
    const arrowInlineOffset = inputHeight === 44 ? 12 : 11;
    const containerOffset = isIcon ? 0 : 10;
    const arrowAlign = isIcon ? 12 : 0;

    return {
      customContainerPos: 1,
      customContainerOffset: containerOffset,
      customArrowAlign: isInline ? arrowInlineOffset : arrowAlign,
    };
  }

  return { customContainerPos: 0, customContainerOffset: 0, customArrowAlign: 0 };
};

export default resolveCustomPositions;
