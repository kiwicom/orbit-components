// @flow
import type { PositionsCore } from "..";
import { POSITIONS } from "../consts";
import type { CalculateVerticalPosition } from "./calculateVerticalPosition";

const isInside = (p: PositionsCore, canBe) => {
  if (p === POSITIONS.TOP && canBe[p]) {
    return POSITIONS.TOP;
  }
  if (p === POSITIONS.BOTTOM && canBe[p]) {
    return POSITIONS.BOTTOM;
  }
  return false;
};

const calculateVerticalPosition: CalculateVerticalPosition = (desiredPositions, pos) => {
  const canBeInWindow = {
    [POSITIONS.TOP]: pos.containerTop - pos.popoverHeight > pos.windowScrollTop,
    [POSITIONS.BOTTOM]:
      pos.containerTop - pos.windowScrollTop + pos.containerHeight + pos.popoverHeight <
      pos.windowHeight,
  };

  const canBeInDocument = {
    [POSITIONS.TOP]: pos.containerTop - pos.popoverHeight >= 0,
    [POSITIONS.BOTTOM]:
      pos.containerTop + pos.containerHeight + pos.popoverHeight < pos.documentHeight,
  };

  const possibleWindowPositions = desiredPositions
    .map(p => isInside(p, canBeInWindow))
    .filter(p => typeof p === "string");

  const possibleDocumentPositions = desiredPositions
    .map(p => isInside(p, canBeInDocument))
    .filter(p => typeof p === "string");

  // ordering in POSITIONS const is important
  const posPosition = possibleWindowPositions[0] || possibleDocumentPositions[0];

  if (posPosition) {
    return posPosition;
  }
  return POSITIONS.BOTTOM;
};

export default calculateVerticalPosition;
