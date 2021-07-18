import React from "react";
import { Link } from "gatsby";
import { Heading, Stack, Hide, mediaQueries as mq, TextLink } from "@kiwicom/orbit-components";
import styled, { css } from "styled-components";

import ArrowRight from "./ArrowRight";
import useIsUrlExternal from "../hooks/useIsUrlExternal";

export const ICON_SIZE = "2rem";

interface Props {
  icon?: React.ReactNode;
  title: string;
  fullWidth?: boolean;
  linkContent?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
}

function TileTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        h3 {
          line-height: ${ICON_SIZE};
        }
      `}
    >
      <Heading type="title2" as="h3">
        {children}
      </Heading>
    </div>
  );
}

interface StyledContainerProps extends Pick<Props, "fullWidth"> {
  href?: string;
  to?: string;
  hasContent: boolean;
}

const StyledWrapper = styled.div<StyledContainerProps>`
  ${({ theme, fullWidth, href, to, hasContent }) => `
    padding: 2rem;
    border-radius: 1rem;
    background: ${theme.orbit.paletteWhiteNormal};
    box-shadow: ${theme.orbit.boxShadowRaisedSubtle};
    transition: box-shadow ${theme.orbit.durationFast};
    display: flex;
    ${
      fullWidth &&
      `
        width: 100%;
      `
    };
    ${
      hasContent
        ? css`
            flex-direction: column;
          `
        : css`
            align-items: center;
            justify-content: space-between;
          `
    }
    ${
      (href || to) &&
      `
        &:hover {
          box-shadow: ${theme.orbit.elevationRaisedBoxShadow};
        }
      `
    };
  `}
`;

interface TileWrapperProps {
  href?: string;
  fullWidth: boolean;
  hasContent: boolean;
  children: React.ReactNode;
}

function TileWrapper({ href, ...props }: TileWrapperProps) {
  const isExternal = useIsUrlExternal(href);

  if (href) {
    return isExternal ? (
      <StyledWrapper as="a" href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ) : (
      <StyledWrapper as={Link} to={href} {...props} />
    );
  }

  return <StyledWrapper {...props} />;
}

const StyledIcon = styled.div`
  ${({ theme }) => `
    align-self: start;
    flex-shrink: 0;
    display: grid;
    justify-content: center;
    align-content: center;
    width: ${ICON_SIZE};
    height: ${ICON_SIZE};
    background: ${theme.orbit.paletteProductLight};
    border-radius: ${theme.orbit.borderRadiusCircle};
    color: ${theme.orbit.paletteProductDark};

    svg {
      width: 20px;
      height: 20px;
    }

    [stroke] {
      stroke: currentColor;
    }
  `}
`;

const StyledEndLinkWrapper = styled.span`
  pointer-events: none;
`;
const StyledTextLink = styled.span`
  ${({ theme }) => `
    font-weight: ${theme.orbit.textLinkFontWeight};
    color: ${theme.orbit.textLinkPrimaryForeground};
    text-decoration: underline;
    ${StyledWrapper}:hover & {
      color: ${theme.orbit.paletteProductNormalSecondary};
      text-decoration: none;
    }
  `};
`;
const StyledLinkTextWrapper = styled.div`
  text-align: right;
`;
const StyledLinkText = styled(StyledTextLink)`
  display: inline-flex;
  align-items: center;
  > * + * {
    margin-left: 0.25rem;
  }
`;
const StyledLinkNode = styled.span`
  ${({ theme }) => `
    color: ${theme.orbit.textLinkPrimaryForeground};
    ${StyledWrapper}:hover & {
      color: ${theme.orbit.textLinkForegroundHover};
    }
  `};
`;

interface EndLinkProps {
  href: string;
  children?: React.ReactNode;
}

function EndLink({ href, children }: EndLinkProps) {
  const isExternal = useIsUrlExternal(href);

  if (isExternal) {
    return <StyledTextLink>{children}</StyledTextLink>;
  }

  if (typeof children === "string") {
    return (
      <StyledLinkTextWrapper>
        <StyledLinkText>
          <span>{children}</span>
          <ArrowRight />
        </StyledLinkText>
      </StyledLinkTextWrapper>
    );
  }

  return <StyledLinkNode>{children}</StyledLinkNode>;
}

export default function Tile({
  href,
  icon,
  linkContent,
  title,
  children,
  fullWidth = true,
}: Props) {
  return (
    <TileWrapper href={href} fullWidth={fullWidth} hasContent={Boolean(children)}>
      <div
        css={css`
          flex: 1;
          display: flex;
          ${mq.largeMobile(`
            > * + * {
              margin-left: 0.75rem;
            };
          `)};
        `}
      >
        {icon && (
          <Hide on={["smallMobile", "mediumMobile"]}>
            <StyledIcon>{icon}</StyledIcon>
          </Hide>
        )}
        {children ? (
          <div>
            <TileTitle>{title}</TileTitle>
            <div
              css={css`
                margin: 0.5rem 0 ${href ? "1.5rem" : "0"};
              `}
            >
              {/* wrap plain strings in a p tag and otherwise render children */}
              {typeof children !== "string" ? <Stack>{children}</Stack> : <p>{children}</p>}
            </div>
          </div>
        ) : (
          <TileTitle>{title}</TileTitle>
        )}
      </div>
      {href && (
        <StyledEndLinkWrapper>
          <EndLink href={href}>{linkContent}</EndLink>
        </StyledEndLinkWrapper>
      )}
    </TileWrapper>
  );
}
