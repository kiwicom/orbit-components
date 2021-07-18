import React from "react";
import { Link } from "gatsby";
import { TableCell, TableRow } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/lib/hooks/useTheme";
import { css } from "styled-components";

import ComponentStatusBadge from "./ComponentStatusBadge";

import { Groups, Statuses } from ".";

interface ComponentStatusesProps {
  component: string;
  figma: Statuses;
  react: Statuses;
  ios: Statuses;
  android: Statuses;
  docs: Statuses;
}

interface StatusTableRowProps {
  component: ComponentStatusesProps;
  group?: Groups;
}

const StatusTableRow = ({ component, group }: StatusTableRowProps) => {
  const theme = useTheme();
  const isDocs = component.docs === "Released";
  return (
    <TableRow>
      {group && (
        <TableCell>
          {isDocs && (
            <Link
              to={`/components/${group
                .toLowerCase()
                .replace(" ", "-")}/${component.component.toLowerCase()}/`}
              css={css`
                color: ${theme.orbit.textLinkPrimaryForeground};
                text-decoration: underline;
                &:hover {
                  color: ${theme.orbit.textLinkForegroundHover};
                  text-decoration: none;
                }
              `}
            >
              {component.component}
            </Link>
          )}
          {!isDocs && component.component}
        </TableCell>
      )}
      <TableCell align="center">
        <ComponentStatusBadge status={component.figma} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.react} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.ios} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.android} />
      </TableCell>
      <TableCell align="center">
        <ComponentStatusBadge status={component.docs} />
      </TableCell>
    </TableRow>
  );
};
export default StatusTableRow;
