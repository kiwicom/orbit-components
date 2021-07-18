import React from "react";
import {
  Alert,
  Heading,
  Separator,
  Text,
  TextLink,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components";
import { NewWindow } from "@kiwicom/orbit-components/icons";
import { Link } from "gatsby";
import { css } from "styled-components";

import BlockQuote from "./components/BlockQuote";
import HeadingWithLink from "./components/HeadingWithLink";
import { InlineCode, CodeBlock } from "./components/Code";
import useIsUrlExternal from "./hooks/useIsUrlExternal";

export const p = ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Text>{children}</Text>
);

export const h1 = () => null;

export const h2 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <HeadingWithLink spaceAfter="normal">
    <Heading as="h2" type="title2">
      {children}
    </Heading>
  </HeadingWithLink>
);

export const h3 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <HeadingWithLink spaceAfter="small">
    <Heading as="h3" type="title3">
      {children}
    </Heading>
  </HeadingWithLink>
);

export const h4 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <HeadingWithLink spaceAfter="smallest">
    <Heading as="h4" type="title4">
      {children}
    </Heading>
  </HeadingWithLink>
);

export const h5 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <HeadingWithLink>
    <Heading as="h5" type="title5">
      {children}
    </Heading>
  </HeadingWithLink>
);

export const h6 = ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <HeadingWithLink>
    <Heading as="h6" type="title5">
      {children}
    </Heading>
  </HeadingWithLink>
);

export const hr = () => <Separator spaceAfter="largest" />;

export const ol = ({ children }: React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol
    css={css`
      list-style: outside none decimal;
      margin-left: ${({ theme }) => theme.orbit.spaceFourX};
      ol,
      ul {
        margin: ${({ theme }) => theme.orbit.spaceThreeX};
      }
    `}
  >
    {children}
  </ol>
);

export const blockquote = BlockQuote;

export const table = ({ children }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <Table>{children}</Table>
);

export const thead = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <TableHead>{children}</TableHead>
);

export const tbody = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <TableBody>{children}</TableBody>
);

export const tr = ({ children }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <TableRow>{children}</TableRow>
);

export const td = ({
  children,
  align,
  valign,
}: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
  <TableCell
    as="td"
    align={align === "left" || align === "center" || align === "right" ? align : undefined}
    whiteSpace="normal"
    verticalAlign={valign}
  >
    {children}
  </TableCell>
);

export const th = ({ children, align }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
  <TableCell
    as="th"
    align={align === "left" || align === "center" || align === "right" ? align : undefined}
  >
    {children}
  </TableCell>
);

export const ul = ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    css={css`
      list-style: outside none disc;
      margin-left: ${({ theme }) => theme.orbit.spaceFourX};
      ol,
      ul {
        margin: ${({ theme }) => theme.orbit.spaceThreeX};
      }
    `}
  >
    {children}
  </ul>
);

export const figcaption = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <figcaption>
    <Text align="center" italic>
      {children}
    </Text>
  </figcaption>
);

export const code = CodeBlock;

export const dd = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <dd
    css={css`
      margin-left: 2em;
    `}
  >
    <Text>{children}</Text>
  </dd>
);

export const dt = ({ children }: React.HTMLAttributes<HTMLElement>) => (
  <dt>
    <Heading as="h3" type="title2">
      {children}
    </Heading>
  </dt>
);

export const inlineCode = InlineCode;

const LinkForOrbitTextLink = ({ href, ...props }: { href: string }) => (
  <Link to={href} {...props} />
);

export const a = function Anchor({
  children,
  href,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = useIsUrlExternal(href);
  const useExternalIcon = isExternal && typeof children === "string";
  return (
    <span
      css={css`
        a {
          /* TextLink's line-height affects nested elements like <code> */
          line-height: normal;
          /* TextLink's display as inline-flex cause long links to break paragraphs */
          display: inherit;
          /* Ensure the icon stays inline */
          span {
            display: inline;
            svg {
              display: inline;
            }
          }
        }
      `}
    >
      <TextLink
        // @ts-expect-error type declaration is not permissive enough
        asComponent={isExternal ? "a" : LinkForOrbitTextLink}
        href={href}
        external={isExternal}
        iconRight={useExternalIcon && <NewWindow ariaLabel="Opens in new window" />}
      >
        {children}
      </TextLink>
    </span>
  );
};

export const Callout = ({ icon = true, ...props }) => (
  <Alert icon={icon} spaceAfter="large" {...props} />
);
