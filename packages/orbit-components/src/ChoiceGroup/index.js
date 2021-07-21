// @flow
import * as React from "react";
import styled from "styled-components";

import Heading from "../Heading";
import Stack from "../Stack";
import { LABEL_SIZES, LABEL_ELEMENTS } from "./consts";
import FormFeedback, { StyledFormFeedback } from "../FormFeedback";
import defaultTheme from "../defaultTheme";
import FilterWrapper from "./components/FilterWrapper";
import randomID from "../utils/randomID";
import useTheme from "../hooks/useTheme";

import type { Props } from ".";

const getHeadingSize = size => {
  const SIZES = {
    [LABEL_SIZES.NORMAL]: "title3",
    [LABEL_SIZES.LARGE]: "title2",
  };
  return SIZES[size];
};

const StyledChoiceGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${StyledFormFeedback} {
    position: relative;
    margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
    top: initial;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledChoiceGroup.defaultProps = {
  theme: defaultTheme,
};

const ChoiceGroup = ({
  dataTest,
  label,
  labelSize = LABEL_SIZES.NORMAL,
  labelAs = LABEL_ELEMENTS.H4,
  error,
  children,
  filter,
  onOnlySelection,
  onlySelectionText,
  onChange,
}: Props): React.Node => {
  const groupID = React.useMemo(() => randomID("choiceGroupID"), []);
  const theme = useTheme();

  const handleChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    ev.persist();
    if (onChange) {
      onChange(ev);
    }
  };

  const itemProps = {
    onChange: handleChange,
    hasError: Boolean(error),
  };

  return (
    <StyledChoiceGroup data-test={dataTest} role="group" aria-labelledby={groupID}>
      {label && (
        <Heading id={groupID} type={getHeadingSize(labelSize)} as={labelAs} spaceAfter="medium">
          {label}
        </Heading>
      )}
      {typeof children === "function" ? (
        children({
          // for now a plain <div> is all we need, but we're reserving this space in the API
          // in case we'll need something more in the future
          Container: "div",
          Item: ({ children: itemChildren }) => {
            return !filter ? (
              React.cloneElement(React.Children.only(itemChildren), itemProps)
            ) : (
              <FilterWrapper
                child={React.Children.only(itemChildren)}
                onOnlySelection={onOnlySelection}
                onlySelectionText={onlySelectionText}
              >
                {React.cloneElement(React.Children.only(itemChildren), itemProps)}
              </FilterWrapper>
            );
          },
          spacing: filter ? "0px" : theme.orbit.spaceXSmall,
        })
      ) : (
        <Stack direction="column" spacing={filter ? "none" : "XSmall"}>
          {React.Children.map(children, child => {
            return !filter ? (
              React.cloneElement(child, itemProps)
            ) : (
              <FilterWrapper
                child={child}
                onOnlySelection={onOnlySelection}
                onlySelectionText={onlySelectionText}
              >
                {React.cloneElement(child, itemProps)}
              </FilterWrapper>
            );
          })}
        </Stack>
      )}
      <FormFeedback error={error} />
    </StyledChoiceGroup>
  );
};

export default ChoiceGroup;
