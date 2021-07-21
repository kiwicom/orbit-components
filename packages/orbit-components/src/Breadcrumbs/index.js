// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import Button from "../Button";
import ChevronLeft from "../icons/ChevronLeft";
import getSpacingToken from "../common/getSpacingToken";
import useTranslate from "../hooks/useTranslate";
import { right } from "../utils/rtl";
import TextLink from "../TextLink";
import Hide from "../Hide";

import type { Props } from ".";

const StyledBreadcrumbs = styled.nav`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
  margin-bottom: ${getSpacingToken};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBreadcrumbs.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledBackButtonWrapper = styled.span`
  margin-${right}: ${({ theme }) => theme.orbit.spaceSmall};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBackButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const GoBackButton = ({ onClick, backHref }) => {
  const translate = useTranslate();
  return (
    <StyledBackButtonWrapper>
      <Button
        iconLeft={<ChevronLeft reverseOnRtl />}
        circled
        type="secondary"
        size="small"
        onClick={onClick}
        href={backHref}
        title={translate("breadcrumbs_back")}
      />
    </StyledBackButtonWrapper>
  );
};

const Breadcrumbs = (props: Props): React.Node => {
  const translate = useTranslate();
  const {
    children,
    dataTest,
    onGoBack,
    goBackTitle = translate("breadcrumbs_back"),
    spaceAfter,
    backHref,
  } = props;
  return (
    <>
      <Hide on={["smallMobile", "mediumMobile"]}>
        <StyledBreadcrumbs aria-label="Breadcrumb" data-test={dataTest} spaceAfter={spaceAfter}>
          <StyledBreadcrumbsList itemScope itemType="http://schema.org/BreadcrumbList">
            {onGoBack || backHref ? <GoBackButton backHref={backHref} onClick={onGoBack} /> : null}
            {React.Children.map(children, (item, key) => {
              if (React.isValidElement(item)) {
                return React.cloneElement(item, {
                  active: key === React.Children.count(children) - 1,
                  contentKey: key + 1,
                });
              }
              return null;
            })}
          </StyledBreadcrumbsList>
        </StyledBreadcrumbs>
      </Hide>
      <Hide on={["largeMobile", "tablet", "desktop", "largeDesktop"]}>
        {onGoBack || backHref ? (
          <TextLink
            standAlone
            iconLeft={<ChevronLeft reverseOnRtl />}
            dataTest="BreadcrumbsBack"
            onClick={onGoBack}
            href={backHref}
          >
            {goBackTitle}
          </TextLink>
        ) : null}
      </Hide>
    </>
  );
};

export default Breadcrumbs;

export { default as BreadcrumbsItem } from "./BreadcrumbsItem";
