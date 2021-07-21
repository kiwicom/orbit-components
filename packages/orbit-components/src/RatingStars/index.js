// @flow
import * as React from "react";
import styled from "styled-components";

import StarEmpty from "../icons/StarEmpty";
import StarFull from "../icons/StarFull";
import defaultTheme from "../defaultTheme";
import MAX_STARS from "./consts";
import { ICON_COLORS, ICON_SIZES } from "../Icon/consts";
import useTranslate from "../hooks/useTranslate";

import type { Props } from ".";

const StyledRatingStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledRatingStars.defaultProps = {
  theme: defaultTheme,
};

const RatingStars = ({
  rating,
  size = ICON_SIZES.SMALL,
  dataTest,
  color = ICON_COLORS.PRIMARY,
  showEmpty = false,
}: Props): React.Node => {
  const translate = useTranslate();
  const ratingRounded = Math.round(rating);
  const starsCount = showEmpty ? MAX_STARS : ratingRounded;
  return (
    <StyledRatingStars
      data-test={dataTest}
      size={size}
      aria-label={translate("ratingstar_description", {
        number: ratingRounded,
        total: starsCount,
      })}
    >
      {Array(...Array(starsCount)).map((_, index) => {
        const key = `star-${index}`;
        return index <= ratingRounded - 1 ? (
          <StarFull key={key} size={size} color={color} />
        ) : (
          <StarEmpty key={key} size={size} color={color} />
        );
      })}
    </StyledRatingStars>
  );
};

export default RatingStars;
